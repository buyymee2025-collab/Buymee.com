import SiteImage from './SiteImage'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import { Reveal } from './Primitives'
import { useState } from 'react'
import ProductModal from './ProductModal'

export default function ProductCard({ product, index = 0 }) {
  const { currency, formatPrice, addToCart } = useStore()
  const [open, setOpen] = useState(false)
  const openProduct = (event) => {
    event.preventDefault()
    setOpen(true)
  }

  return (
    <>
      <Reveal className="product-card" variant="card" index={index} delay={(index % 4) * 0.065}>
        <div className="product-image">
          <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`} onClick={openProduct}>
            <SiteImage src={product.image} alt={product.name} loading={index > 3 ? 'lazy' : 'eager'} />
          </Link>
          {product.sale && <span className="sale-tag">EDIT</span>}
          <button
            type="button"
            className="quick-add"
            onClick={() => product.priceOnRequest ? setOpen(true) : addToCart(product)}
          >
            <Plus size={16} /> {product.priceOnRequest ? 'VIEW PIECE' : 'ADD TO BAG'}
          </button>
        </div>
        <div className="product-meta">
          <span>{product.category} / {product.subcategory}</span>
          {product.category === 'Watches' && product.productCode && (
            <small className="watch-product-code">PRODUCT CODE / {product.productCode}</small>
          )}
          <Link to={`/product/${product.slug}`} onClick={openProduct}>{product.name}</Link>
          {product.category === 'Sneakers' && product.sizeAvailability && (
            <div className="sneaker-size-badge" aria-label={`Sizes for ${product.name}`}>
              <span>UK {product.sizeAvailability.uk}</span>
              <span>USA {product.sizeAvailability.us}</span>
              <span>EU {product.sizeAvailability.eu}</span>
            </div>
          )}
          <strong className="product-price-box"><span>PRICE</span>{product.priceOnRequest ? 'PRICE ON REQUEST' : formatPrice(product.price, currency)}</strong>
          <Link className="product-view" to={`/product/${product.slug}`} onClick={openProduct}>VIEW DETAILS <span>↗</span></Link>
        </div>
      </Reveal>
      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </>
  )
}
