import { beginModalHistory } from '../lib/modalHistory'
import SiteImage from './SiteImage'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import { Reveal } from './Primitives'
import { useCallback, useEffect, useRef, useState } from 'react'
import ProductModal from './ProductModal'

export default function ProductCard({ product, index = 0 }) {
  const { currency, formatPrice, addToCart } = useStore()
  const savedPrice = product.price == null || String(product.price).trim() === '' ? NaN : Number(product.price)
  const hasPrice = Number.isFinite(savedPrice) && savedPrice >= 0
  const productCode = product.productCode || product.sku || product.id || 'ON REQUEST'
  const sizeSystems = Object.entries(product.sizeAvailability || {})
    .filter(([, value]) => value != null && String(value).trim() !== '')
  const sizeValues = (Array.isArray(product.sizes) ? product.sizes : [product.sizes])
    .filter(value => value != null && String(value).trim() !== '')
    .map(value => /^(OS|O\/S|ONE SIZE)$/i.test(String(value)) ? 'ONE SIZE' : String(value))
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
            <SiteImage src={product.image || product.gallery?.[0]} alt={product.name} imageWidth={640} sizes="(max-width: 600px) 48vw, (max-width: 1000px) 30vw, 23vw" loading={index > 3 ? 'lazy' : 'eager'} fetchPriority={index === 0 ? 'high' : 'auto'} />
          </Link>
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
          <div className="sneaker-size-badge" aria-label={`Sizes for ${product.name}`}>
            {sizeSystems.length ? sizeSystems.map(([system, value]) => (
              <span key={system}>{system.toUpperCase()} {String(value)}</span>
            )) : <span>{sizeValues.length ? `SIZE / ${sizeValues.join(' / ')}` : 'SIZE / ON REQUEST'}</span>}
          </div>
          <strong className="product-price-box"><span>PRICE</span>{hasPrice ? formatPrice(savedPrice, currency) : 'PRICE ON REQUEST'}</strong>
          <Link className="product-view" to={`/product/${product.slug}`} onClick={openProduct}>VIEW DETAILS <span>↗</span></Link>
        </div>
      </Reveal>
      {open && <ProductModal product={product} onClose={closeProduct} />}
    </>
  )
}
