import { beginModalHistory } from '../lib/modalHistory'
import SiteImage from './SiteImage'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import { Reveal } from './Primitives'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ProductModal from './ProductModal'

export default function ProductCard({ product, index = 0 }) {
  const { currency, formatPrice, addToCart } = useStore()
  const savedPrice = product.price == null || String(product.price).trim() === '' ? NaN : Number(product.price)
  const hasPrice = Number.isFinite(savedPrice) && savedPrice >= 0
  const productCode = product.productCode || product.sku || product.id
  const cardImages = useMemo(() => [...new Set([
    product.image,
    ...(product.gallery || []),
    ...(product.media || []).filter(item => item.type === 'image').map(item => item.src),
    ...(product.variants || []).flatMap(variant => [
      variant.image,
      ...(variant.media || []).filter(item => item.type === 'image').map(item => item.src)
    ]),
    product.secondaryImage
  ].filter(Boolean))], [product])
  const [cardImageIndex, setCardImageIndex] = useState(0)
  const [previousCardImage, setPreviousCardImage] = useState(null)
  const [cardImageReady, setCardImageReady] = useState(true)
  const [cardDirection, setCardDirection] = useState(1)
  useEffect(() => { setCardImageIndex(0); setPreviousCardImage(null); setCardImageReady(true) }, [product.id, product.image])
  const activeCardImage = cardImages[cardImageIndex] || cardImages[0]
  const moveCardImage = (event, direction) => {
    event.preventDefault()
    event.stopPropagation()
    if (cardImages.length < 2 || !cardImageReady) return
    setPreviousCardImage(activeCardImage)
    setCardImageReady(false)
    setCardDirection(direction)
    setCardImageIndex(current => (current + direction + cardImages.length) % cardImages.length)
  }
  const [open, setOpen] = useState(false)
  const modalHistory = useRef(null)
  useEffect(() => () => modalHistory.current?.dispose(), [])
  const closeProduct = useCallback(() => modalHistory.current?.close(), [])
  const openProduct = (event) => {
    event.preventDefault()
    if (modalHistory.current) return
    modalHistory.current = beginModalHistory(() => {
      modalHistory.current = null
      setOpen(false)
    })
    setOpen(true)
  }

  return (
    <>
      <Reveal className="product-card" variant="card" index={index} delay={(index % 4) * 0.065}>
        <div className="product-image">
          <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`} onClick={openProduct}>
            {previousCardImage && <SiteImage className="product-card-image-previous" src={previousCardImage} alt="" aria-hidden="true" imageWidth={640} sizes="(max-width: 600px) 48vw, (max-width: 1000px) 30vw, 23vw" loading="eager" />}
            <SiteImage className={`product-card-image-current${cardImageReady ? ' is-ready' : ''}`} style={{ '--card-image-offset': `${cardDirection * 16}px` }} onLoad={() => setCardImageReady(true)} key={activeCardImage} src={activeCardImage} alt={product.name} imageWidth={640} sizes="(max-width: 600px) 48vw, (max-width: 1000px) 30vw, 23vw" loading={cardImageIndex > 0 ? 'eager' : index > 3 ? 'lazy' : 'eager'} fetchPriority={index === 0 ? 'high' : 'auto'} />
          </Link>
          <button className="product-card-image-arrow product-card-image-prev" type="button" aria-label={`Previous image of ${product.name}`} disabled={cardImages.length < 2} onClick={event => moveCardImage(event, -1)}><ChevronLeft size={18} /></button>
          <button className="product-card-image-arrow product-card-image-next" type="button" aria-label={`Next image of ${product.name}`} disabled={cardImages.length < 2} onClick={event => moveCardImage(event, 1)}><ChevronRight size={18} /></button>
          {product.sale && <span className="sale-tag">EDIT</span>}
          <button className="quick-add" type="button" disabled={product.inStock === false} onClick={() => addToCart(product)}>
            <Plus size={16} /> {product.inStock === false ? 'SOLD OUT' : 'ADD TO CART'}
          </button>
        </div>
        <div className="product-meta">
          <span>{product.category} / {product.subcategory}</span>
          {productCode != null && (
            <small className="watch-product-code">PRODUCT CODE / {productCode}</small>
          )}
          <Link to={`/product/${product.slug}`} onClick={openProduct}>{product.name}</Link>
          {product.category === 'Sneakers' && product.sizeAvailability && (
            <div className="sneaker-size-badge" aria-label={`Sizes for ${product.name}`}>
              <span>UK {product.sizeAvailability.uk}</span>
              <span>USA {product.sizeAvailability.us}</span>
              <span>EU {product.sizeAvailability.eu}</span>
            </div>
          )}
          <strong className="product-price-box"><span>PRICE</span>{hasPrice ? formatPrice(savedPrice, currency) : 'PRICE ON REQUEST'}</strong>
          <Link className="product-view" to={`/product/${product.slug}`} onClick={openProduct}>VIEW DETAILS <span>↗</span></Link>
        </div>
      </Reveal>
      {open && <ProductModal product={product} onClose={closeProduct} />}
    </>
  )
}
