import SiteImage from './SiteImage'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import { Reveal } from './Primitives'

export default function ProductCard({ product, index = 0 }) {
  const { currency, formatPrice, addToCart } = useStore()
  return (
    <Reveal className="product-card" variant="card" index={index} delay={(index % 4) * 0.065}>
      <div className="product-image">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}><SiteImage src={product.image} alt={product.name} loading={index > 3 ? 'lazy' : 'eager'} /></Link>
        {product.sale && <span className="sale-tag">EDIT</span>}
        <button type="button" className="quick-add" onClick={() => addToCart(product)}><Plus size={16} /> ADD TO BAG</button>
      </div>
      <div className="product-meta">
        <span>{product.category} / {product.subcategory}</span>
        <Link to={`/product/${product.slug}`}>{product.name}</Link>
        <strong>{formatPrice(product.price, currency)}</strong>
        <Link className="product-view" to={`/product/${product.slug}`}>VIEW DETAILS <span>↗</span></Link>
      </div>
    </Reveal>
  )
}
