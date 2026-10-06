import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, X, Play } from 'lucide-react'
import SiteImage from './SiteImage'
import { useStore } from '../context/StoreContext'

function mediaFor(product, variant) {
  if (variant?.media?.length) return variant.media
  const sources = [product.image, product.secondaryImage, ...(product.gallery || [])].filter(Boolean)
  return [...new Set(sources)].map((src) => ({ type: 'image', src }))
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
  const variant = variants[variantIndex]
  const media = useMemo(() => mediaFor(product, variant), [product, variant])
  const activeMedia = media[mediaIndex] || media[0]

  useEffect(() => {
    setVariantIndex(0)
    setMediaIndex(0)
  }, [product])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  const selectVariant = (index) => {
    setVariantIndex(index)
    setMediaIndex(0)
  }

  const selectMedia = (index) => setMediaIndex(index)

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
          <div className="product-modal-media">
            <div className="product-modal-main">
              {activeMedia?.type === 'video' ? (
                <video src={activeMedia.src} autoPlay muted loop playsInline controls={false} />
              ) : (
                <img src={activeMedia?.src || product.image} alt={`${product.name} ${variant.color}`} />
              )}
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
                      <span className="product-modal-video-thumb"><video src={item.src} muted playsInline preload="metadata" /><i><Play size={12} fill="currentColor" /></i></span>
                    ) : (
                      <img src={item.src} alt="" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-modal-info">
            <div className="product-modal-kicker">{product.category} / {product.subcategory}</div>
            <h2>{product.name}</h2>
            <div className="product-modal-price">
              {product.priceOnRequest ? 'PRICE ON REQUEST' : formatPrice(product.price, currency)}
            </div>

            <p className="product-modal-description">{product.description}</p>

            <div className="product-modal-option">
              <div><span>COLOR</span><b>{variant.color}</b></div>
              <div className="product-modal-swatches">
                {variants.map((item, index) => (
                  <button
                    key={`${item.color}-${index}`}
                    type="button"
                    className={variantIndex === index ? 'active' : ''}
                    onClick={() => selectVariant(index)}
                    aria-label={`Select ${item.color}`}
                    title={item.color}
                  >
                    <img src={item.image} alt="" />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-modal-rule" />

            <div className="product-modal-details">
              <span>THE EDIT</span>
              <div><Check size={15} /> Carefully selected for the BUYYMEE.com watch edit.</div>
              <div><Check size={15} /> Worldwide delivery available.</div>
              <div><Check size={15} /> USA / 5–10 days · UK / 5–10 days · Worldwide / 7–14 days.</div>
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
