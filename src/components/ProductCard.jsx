import ProductPrice from './ProductPrice'
import { beginModalHistory } from '../lib/modalHistory'
import SiteImage from './SiteImage'
import { Link } from 'react-router-dom'
import { Heart, Plus } from 'lucide-react'
import { getProductPricing } from '../lib/pricing'
import { useStore } from '../context/StoreContext'
import { Reveal } from './Primitives'
import { useCallback, useEffect, useRef, useState } from 'react'
import ProductModal from './ProductModal'

export default function ProductCard({ product, index = 0 }) {
  const { currency, formatPrice, addToCart, wishlist, toggleWish } = useStore()
  const saved = wishlist.includes(product.id)
  const { current, original, discounted } = getProductPricing(product)
  const discountPercent = discounted ? Math.round((1 - current / original) * 100) : 0
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
      <Reveal className="product-card product-card--editorial" variant="card" index={index} delay={(index % 4) * 0.065}>
        <div className="product-image">
          <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`} onClick={openProduct}>
            <SiteImage src={product.image || product.gallery?.[0]} alt={product.name} imageWidth={640} sizes="(max-width: 600px) 48vw, (max-width: 1000px) 30vw, 23vw" loading={index > 3 ? 'lazy' : 'eager'} fetchPriority={index === 0 ? 'high' : 'auto'} />
          </Link>
          {discounted && <span className="product-card-discount">{discountPercent}% OFF</span>}
          <button className="product-card-wishlist" type="button" aria-label={`${saved ? 'Remove' : 'Save'} ${product.name} ${saved ? 'from' : 'to'} wishlist`} aria-pressed={saved} onClick={() => toggleWish(product.id)}>
            <Heart size={19} strokeWidth={1.5} fill={saved ? 'currentColor' : 'none'} />
          </button>
          <button className="quick-add" type="button" disabled={product.inStock === false} onClick={() => addToCart(product)}>
            <Plus size={16} /> {product.inStock === false ? 'SOLD OUT' : 'ADD TO CART'}
          </button>
        </div>
        <div className="product-meta">
          <Link className="product-card-title" to={`/product/${product.slug}`} onClick={openProduct}>{product.name}</Link>
          <div className="product-card-details">
            <small className="product-card-code">CODE / {productCode}</small>
            <span className="product-card-sizes" aria-label={`Sizes for ${product.name}`}>
              {sizeSystems.length ? sizeSystems.map(([system, value]) => `${system.toUpperCase()} ${String(value)}`).join(' · ')
                : sizeValues.length ? `SIZE / ${sizeValues.join(' / ')}` : 'SIZE / ON REQUEST'}
            </span>
          </div>
          <ProductPrice product={product} currency={currency} formatPrice={formatPrice} className="product-price-box" compact showLabel={false} />
          <Link className="product-view" to={`/product/${product.slug}`} onClick={openProduct}>VIEW DETAILS <span>↗</span></Link>
        </div>
      </Reveal>
      {open && <ProductModal product={product} onClose={closeProduct} />}
    </>
  )
}
