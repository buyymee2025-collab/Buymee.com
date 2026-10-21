export function getProductPricing(product) {
  const number = value => value == null || String(value).trim() === '' ? NaN : Number(value)
  const current = number(product.price)
  const original = number(product.compareAt)
  const hasPrice = !product.priceOnRequest && Number.isFinite(current) && current >= 0
  return { current, original, hasPrice, discounted: hasPrice && Number.isFinite(original) && original > current }
}
