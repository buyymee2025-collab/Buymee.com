import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, X } from 'lucide-react'
import SiteImage from './SiteImage'
import Logo from './Logo'
import { useStore } from '../context/StoreContext'
import { optimizeImageUrl, optimizeVideoUrl } from '../lib/media'

function mediaFor(product, variant) {
  if (variant?.media?.length) return variant.media
  const sources = [product.image, product.secondaryImage, ...(product.gallery || [])].filter(Boolean)
  return [...new Set(sources)].map((src) => ({ type: 'image', src }))
}

function mediaSrc(item, width = 1000) {
  return item?.type === 'video' ? optimizeVideoUrl(item.src) : optimizeImageUrl(item.src, width)
}

const EXPLICIT_VIDEO_POSTERS = {
  '1006_1_1.mp4': 'https://res.cloudinary.com/mdbhqnv7/video/upload/so_0,f_jpg,q_auto/v1791302424/1006_1_1.jpg',
}

const videoPosterKey = (src = '') => src.split('/').pop()?.split('?')[0] || ''

function videoPosterSrc(src, width = 1200) {
  if (typeof src !== 'string' || !src.includes('/video/upload/')) return undefined
  const filename = src.split('/').pop()?.split('?')[0] || ''
  const explicit = EXPLICIT_VIDEO_POSTERS[filename]
  if (explicit) return explicit.replace('w_1200', `w_${width}`)
  const clean = src.split('?')[0].replace(/\.mp4$/i, '')
  const marker = '/video/upload/'
  const index = clean.indexOf(marker)
  if (index === -1) return undefined
  const tail = clean.slice(index + marker.length)
  return `${clean.slice(0, index + marker.length)}so_0,f_jpg,q_auto,w_${width}/${tail}.jpg`
}

export default function ProductModal({ product, onClose }) {
  const { currency, formatPrice, addToCart } = useStore()
  const variants = product.variants?.length ? product.variants : [{
    color: product.colors?.[0] || 'As shown',
    image: product.image,
    media: mediaFor(product)
  }]
  const [variantIndex, setVariantIndex] = useState(0)
  const [mediaIndex, setMediaIndex] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [mediaLoading, setMediaLoading] = useState(true)
  const [snapWithoutAnimation, setSnapWithoutAnimation] = useState(false)
  const variant = variants[variantIndex]
  // Keep every variant's media in one continuous gallery. A product with
  // multiple colours therefore exposes every colour's images/videos in the
  // same modal without requiring a colour click first.
  const media = useMemo(() => variants.flatMap((item, colorIndex) => (
    mediaFor(product, item).map((entry) => ({ ...entry, color: item.color, colorIndex }))
  )), [product, variants])
  const activeMedia = media[mediaIndex] || media[0]
  const cycleCount = 9
  const centerCycle = 4
  const loopedMedia = useMemo(() => {
    if (!media.length) return []
    return Array.from({ length: cycleCount }, () => media).flat()
  }, [media])

  // Establish the first slide at the center of the repeated track before the
  // browser paints the modal. Keep variant selection independent so choosing
  // another color never gets reset when that color has a different media count.
  useLayoutEffect(() => {
    setVariantIndex(0)
    setMediaIndex(0)
    setCarouselIndex(0)
    setSnapWithoutAnimation(true)
  }, [product])

  useLayoutEffect(() => {
    setCarouselIndex(media.length ? centerCycle * media.length : 0)
    setSnapWithoutAnimation(true)
    const frame = requestAnimationFrame(() => setSnapWithoutAnimation(false))
    return () => cancelAnimationFrame(frame)
  }, [product, media.length])

  useEffect(() => {
    setMediaLoading(Boolean(activeMedia))
    if (!activeMedia) return

    if (activeMedia.type === 'image') {
      const image = new Image()
      image.onload = () => setMediaLoading(false)
      image.onerror = () => setMediaLoading(false)
      image.src = mediaSrc(activeMedia)
      if (image.complete) setMediaLoading(false)
    } else {
      // The Cloudinary poster is immediately visible while the video buffers.
      // Do not cover that poster with a loading state.
      setMediaLoading(false)
      const poster = videoPosterSrc(activeMedia.src, 1200)
      if (poster) {
        const image = new Image()
        image.src = poster
      }
    }

    const preloadTargets = [
      media[(mediaIndex + 1) % media.length],
      media[(mediaIndex - 1 + media.length) % media.length],
    ].filter(Boolean)
    preloadTargets.forEach((next) => {
      if (next.type === 'image') {
        const image = new Image()
        image.src = mediaSrc(next)
      } else {
        const poster = videoPosterSrc(next.src, 900)
        if (poster) {
          const image = new Image()
          image.src = poster
        }
      }
    })
  }, [activeMedia, media, mediaIndex])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight' && media.length > 1) moveMedia(1)
      if (event.key === 'ArrowLeft' && media.length > 1) moveMedia(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, media.length])

  const selectVariant = (index) => {
    setVariantIndex(index)
    const firstIndex = media.findIndex((item) => item.colorIndex === index)
    const targetIndex = firstIndex >= 0 ? firstIndex : 0
    setMediaIndex(targetIndex)
    setCarouselIndex(centerCycle * media.length + targetIndex)
    setSnapWithoutAnimation(true)
    requestAnimationFrame(() => requestAnimationFrame(() => setSnapWithoutAnimation(false)))
  }

  const selectMedia = (index) => {
    setMediaIndex(index)
    setCarouselIndex(centerCycle * media.length + index)
    setSnapWithoutAnimation(true)
    requestAnimationFrame(() => setSnapWithoutAnimation(false))
  }

  const moveMedia = (direction) => {
    if (media.length < 2) return
    setMediaIndex((index) => (index + direction + media.length) % media.length)
    setCarouselIndex((index) => index + direction)
  }

  const handleCarouselComplete = () => {
    if (media.length < 2) return
    const lower = centerCycle * media.length + 1
    const upper = centerCycle * media.length + media.length * 2 - 1
    if (carouselIndex <= lower || carouselIndex >= upper) {
      const normalized = centerCycle * media.length + mediaIndex
      setSnapWithoutAnimation(true)
      setCarouselIndex(normalized)
      requestAnimationFrame(() => requestAnimationFrame(() => setSnapWithoutAnimation(false)))
    }
  }

  const touchStartX = useRef(null)
  const handleTouchStart = (event) => { touchStartX.current = event.changedTouches[0]?.clientX ?? null }
  const handleTouchEnd = (event) => {
    if (touchStartX.current == null) return
    const delta = event.changedTouches[0]?.clientX - touchStartX.current
    if (Math.abs(delta) > 45) moveMedia(delta < 0 ? 1 : -1)
    touchStartX.current = null
  }
  const handleWheel = (event) => {
    if (Math.abs(event.deltaY) < 8 && Math.abs(event.deltaX) < 8) return
    event.preventDefault()
    moveMedia((event.deltaX || event.deltaY) > 0 ? 1 : -1)
  }

  const content = (
    <AnimatePresence>
      <motion.div
        className="product-modal-shell"
        role="dialog"
        aria-modal="true"
        aria-label={`Product details for ${product.name}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.button
          className="product-modal-backdrop"
          aria-label="Close product details"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <button className="product-modal-close" type="button" onClick={onClose} aria-label="Close product details">
          <X size={20} />
        </button>
        <motion.div
          className="product-modal"
          initial={{ opacity: 0, y: 28, scale: .985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: .99 }}
          transition={{ duration: .34, ease: [.22, 1, .36, 1] }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="product-modal-header"><Logo /></div>
          <div className="product-modal-media">
            <div
              className="product-modal-main"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
            >
              <AnimatePresence>
                {mediaLoading && (
                  <motion.span
                    className="product-modal-loader"
                    aria-label="Loading media"
                    initial={{ opacity: 0, scale: .92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: .22, ease: 'easeOut' }}
                  >
                    <span />
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.div
                className="product-modal-media-track"
                animate={{ x: `-${carouselIndex * 100}%` }}
                transition={snapWithoutAnimation ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 32, mass: .7 }}
                onAnimationComplete={handleCarouselComplete}
              >
                {loopedMedia.map((item, renderIndex) => {
                  const logicalIndex = renderIndex % media.length
                  const isActiveSlide = renderIndex === carouselIndex
                  const shouldLoadSlide = Math.abs(renderIndex - carouselIndex) <= 1
                  return (
                    <div className="product-modal-media-slide" key={`${item.src}-${renderIndex}`}>
                      {item.type === 'video' ? (
                        isActiveSlide ? (
                          <video
                            src={mediaSrc(item)}
                            poster={videoPosterSrc(item.src, 1200)}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                            preload="metadata"
                            onLoadedMetadata={(event) => {
                              event.currentTarget.play().catch(() => {})
                            }}
                            onLoadedData={() => setMediaLoading(false)}
                            onCanPlay={() => setMediaLoading(false)}
                            onError={() => setMediaLoading(false)}
                          />
                        ) : (
                          <img
                            src={shouldLoadSlide ? videoPosterSrc(item.src, 360) : undefined}
                            alt={`${product.name} video preview`}
                            loading="lazy"
                            decoding="async"
                          />
                        )
                      ) : (
                        <img
                          src={shouldLoadSlide ? mediaSrc(item) || product.image : undefined}
                          alt={`${product.name} ${item.color || variant.color} ${logicalIndex + 1}`}
                          fetchPriority={isActiveSlide ? 'high' : 'auto'}
                          loading={isActiveSlide ? 'eager' : 'lazy'}
                          decoding="async"
                          onLoad={() => isActiveSlide && setMediaLoading(false)}
                          onError={() => isActiveSlide && setMediaLoading(false)}
                        />
                      )}
                    </div>
                  )
                })}
              </motion.div>
              <span className="product-modal-counter">{String(mediaIndex + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}</span>
            </div>
            {media.length > 1 && (
              <div className="product-modal-thumbs" aria-label="Product media">
                {media.map((item, index) => (
                  <button
                    key={`${item.src}-${index}`}
                    type="button"
                    className={mediaIndex === index ? 'active' : ''}
                    onClick={() => selectMedia(index)}
                    aria-label={`View media ${index + 1}`}
                  >
                    {item.type === 'video' ? (
                      <span className="product-modal-video-thumb">
                        <img
                          src={videoPosterSrc(item.src, 360)}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          onError={(event) => {
                            if (videoPosterKey(item.src) === '1006_1_1.mp4') {
                              event.currentTarget.style.display = 'none'
                              const video = event.currentTarget.parentElement?.querySelector('video')
                              if (video) video.style.display = 'block'
                            }
                          }}
                        />
                        {videoPosterKey(item.src) === '1006_1_1.mp4' && (
                          <video
                            className="product-modal-video-thumb-fallback"
                            src={mediaSrc(item)}
                            muted
                            playsInline
                            preload="metadata"
                            aria-hidden="true"
                          />
                        )}
                        <i aria-hidden="true"><span>▶</span></i>
                      </span>
                    ) : (
                      <img src={mediaSrc(item, 160)} alt="" loading="lazy" decoding="async" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-modal-info" tabIndex={0} role="region" aria-label="Product information">
            <div className="product-modal-kicker">{product.category} / {product.subcategory}</div>
            {product.category === 'Watches' && product.productCode && (
              <div className="product-modal-identity" aria-label={`Product identity ${product.productCode}`}>
                <span className="product-modal-identity-label">IDENTITY</span>
                <span className="product-modal-identity-code">{product.productCode}</span>
                <span className="product-modal-identity-dot" aria-hidden="true" />
              </div>
            )}
            <h2>{product.name}</h2>
            <div className="product-modal-price"><span>PRICE</span>{product.priceOnRequest ? 'PRICE ON REQUEST' : formatPrice(product.price, currency)}</div>

            <p className="product-modal-description">{product.description}</p>

            <div className="product-modal-option">
              <div><span>COLORS</span><b>{variants.length > 1 ? 'ALL COLORS IN THIS EDIT' : variant.color}</b></div>
              {variants.length > 1 && (
                <div className="product-modal-color-map" aria-label="All available colors">
                  {variants.map((item, index) => (
                    <button
                      key={`${item.color}-${index}`}
                      type="button"
                      className={media[mediaIndex]?.colorIndex === index ? 'active' : ''}
                      onClick={() => selectVariant(index)}
                      aria-label={`Select ${item.color}`}
                      title={item.color}
                    >
                      <span className="product-modal-color-map-image">
                        <img src={optimizeImageUrl(item.image, 420)} alt={`${item.color} ${product.name}`} loading="eager" decoding="async" />
                      </span>
                      <span className="product-modal-color-map-meta">
                        <small>COLOR {String(index + 1).padStart(2, '0')}</small>
                        <b>{item.color}</b>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {product.category === 'Sneakers' && product.sizeAvailability && (
              <div className="product-modal-size-highlight" aria-label={`Sizes for ${product.name}`}>
                <div className="product-modal-size-highlight-title">AVAILABLE SIZES</div>
                <div className="product-modal-size-highlight-grid">
                  <div><span>UK</span><b>{product.sizeAvailability.uk}</b></div>
                  <div><span>USA</span><b>{product.sizeAvailability.us}</b></div>
                  <div><span>EUROPE</span><b>{product.sizeAvailability.eu}</b></div>
                </div>
              </div>
            )}

            <div className="product-modal-rule" />

            <div className="product-modal-details">
              <span>THE EDIT</span>
              <div><Check size={15} /> Carefully selected for the BUYYMEE.com watch edit.</div>
              <div><Check size={15} /> Worldwide delivery available.</div>
              <div><Check size={15} /> USA / 7–14 days · UK / 7–14 days · Worldwide / 7–20 days.</div>
            </div>

            <div className="product-modal-actions">
              {product.priceOnRequest && product.category !== 'Watches' ? (
                <a href="/contact" className="button orange" onClick={onClose}>ENQUIRE ABOUT THIS PIECE <ArrowUpRight size={17} /></a>
              ) : (
                <button className="button orange" type="button" onClick={() => { addToCart(product); onClose() }}>ADD TO CART <ArrowUpRight size={17} /></button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  return createPortal(content, document.body)
}
