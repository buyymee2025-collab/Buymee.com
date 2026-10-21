export function getProductPricing(product) {
  const number = value => value == null || String(value).trim() === '' ? NaN : Number(value)
  const current = number(product.price)
  const original = number(product.compareAt)
  const hasPrice = !product.priceOnRequest && Number.isFinite(current) && current >= 0
  return { current, original, hasPrice, discounted: hasPrice && Number.isFinite(original) && original > current }
}

/* Stable varied launch discounts; explicit Admin saves are never recalculated. */
export function applyInitialDiscount(product) {
  if (product.discountPricingVersion === 1) return product
  const original = Number(product.price)
  if (product.price == null || String(product.price).trim() === '' || !Number.isFinite(original) || original <= 0) return product
  if (Number(product.compareAt) > original) return { ...product, discountPricingVersion: 1 }
  const key = String(product.id ?? product.slug ?? product.name)
  let hash = 0
  for (const character of key) hash = (Math.imul(hash, 31) + character.charCodeAt(0)) >>> 0
  const rate = [0.10, 0.15, 0.20, 0.25][hash % 4]
  const scale = original >= 10 ? 1 : 100
  const price = Math.max(0.01, Math.round(original * (1 - rate) * scale) / scale)
  if (price >= original) return product
  return { ...product, compareAt: original, price, priceOnRequest: false, discountPricingVersion: 1 }
}
