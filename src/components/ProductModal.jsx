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

function mediaSrc(item, width = 1500) {
  return item?.type === 'video' ? optimizeVideoUrl(item.src) : optimizeImageUrl(item.src, width)
}

function videoPosterSrc(src) {
  if (typeof src !== 'string' || !src.includes('res.cloudinary.com/') || !src.includes('/video/upload/')) return undefined
  return src.replace('/video/upload/', '/video/upload/so_0,f_jpg,q_auto,w_900/')
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
  const media = useMemo(() => mediaFor(product, variant), [product, variant])
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
    setSnapWithoutAnimation(true)
  }, [product])

  useLayoutEffect(() => {
    setMediaIndex(0)
    setCarouselIndex(media.length ? centerCycle * media.length : 0)
    setSnapWithoutAnimation(true)
    const frame = requestAnimationFrame(() => setSnapWithoutAnimation(false))
    return () => cancelAnimationFrame(frame)
  }, [product, variantIndex, media.length])

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
      const poster = videoPosterSrc(activeMedia.src)
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
        const poster = videoPosterSrc(next.src)
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
    setMediaIndex(0)
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
                  return (
                    <div className="product-modal-media-slide" key={`${item.src}-${renderIndex}`}>
                      {item.type === 'video' ? (
                        isActiveSlide ? (
                          <video
                            src={mediaSrc(item)}
                            poster={videoPosterSrc(item.src)}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                            preload="auto"
                            onLoadedMetadata={(event) => {
                              event.currentTarget.play().catch(() => {})
                            }}
                            onLoadedData={() => setMediaLoading(false)}
                            onCanPlay={() => setMediaLoading(false)}
                            onError={() => setMediaLoading(false)}
                          />
                        ) : (
                          <img
                            src={videoPosterSrc(item.src)}
                            alt={`${product.name} video preview`}
                            loading="eager"
                            decoding="async"
                          />
                        )
                      ) : (
                        <img
                          src={mediaSrc(item) || product.image}
                          alt={`${product.name} ${variant.color} ${logicalIndex + 1}`}
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
                      <span className="product-modal-video-thumb"><video src={mediaSrc(item)} poster={videoPosterSrc(item.src)} muted playsInline preload="metadata" /></span>
                    ) : (
                      <img src={mediaSrc(item, 300)} alt="" loading="lazy" decoding="async" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-modal-info">
            <div className="product-modal-kicker">{product.category} / {product.subcategory}</div>
            {product.category === 'Watches' && product.productCode && (
              <div className="product-modal-identity" aria-label={`Product identity ${product.productCode}`}>
                <span className="product-modal-identity-label">IDENTITY</span>
                <span className="product-modal-identity-code">{product.productCode}</span>
                <span className="product-modal-identity-dot" aria-hidden="true" />
              </div>
            )}
            <h2>{product.name}</h2>
            <div className="product-modal-price">
              {product.priceOnRequest ? 'PRICE ON REQUEST' : formatPrice(product.price, currency)}
            </div>

            <p className="product-modal-description">{product.description}</p>

            <div className="product-modal-option">
              <div><span>COLOR</span><b>{variant.color}</b></div>
              {variants.length > 1 && (
                <div className="product-modal-color-map" aria-label="All available colors">
                  {variants.map((item, index) => (
                    <button
                      key={`${item.color}-${index}`}
                      type="button"
                      className={variantIndex === index ? 'active' : ''}
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
