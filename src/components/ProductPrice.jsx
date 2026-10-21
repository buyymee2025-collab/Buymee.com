import { getProductPricing } from '../lib/pricing'

export default function ProductPrice({ product, currency, formatPrice, className = '', quantity = 1, showLabel = true }) {
  const { current, original, hasPrice, discounted } = getProductPricing(product)
  return <div className={`product-pricing ${className}`}>
    {showLabel && <span className="price-label">{discounted ? 'SALE PRICE' : 'PRICE'}</span>}
    <div className="price-values">
      <strong className="price-current">{hasPrice ? formatPrice(current * quantity, currency) : 'PRICE ON REQUEST'}</strong>
      {discounted
        ? <del className="price-original" aria-label={`Original price ${formatPrice(original * quantity, currency)}`}>{formatPrice(original * quantity, currency)}</del>
        : <span className="price-original price-original-placeholder" aria-hidden="true">&nbsp;</span>}
    </div>
  </div>
}
