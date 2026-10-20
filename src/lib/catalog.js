export const productCategories = ['Women', 'Men', 'Watches', 'Sneakers', 'Shoes', 'Eye Wears', 'Fragrance', 'Accessories']
export function mergeCatalog(base, rows) {
  const products = new Map(base.map(product => [String(product.id), product]))
  for (const row of rows) {
    if (row.deleted) products.delete(String(row.id))
    else products.set(String(row.id), { ...row.payload, id: products.get(String(row.id))?.id ?? row.id })
  }
  return [...products.values()].map(normalizeReviewedEyewear)
}
// These reviewed photographs were previously mislabeled as a single Blue variant.
// Apply after saved overrides too, so an older admin record cannot mix them again.
export function normalizeReviewedEyewear(product) {
  if (product.category !== 'Eye Wears' || String(product.id) !== '26033') return product
  const redPhotos = ['IMG_4117_y7jezj', 'IMG_4115_kzryg8']
  const sources = product.media?.length ? product.media : product.variants?.flatMap(v => v.media || [])?.length ? product.variants.flatMap(v => v.media || []) : (product.gallery || [product.image]).map(src => ({ type: 'image', src }))
  const media = sources.filter(item => !redPhotos.some(name => item.src?.includes(name)))
    .filter((item, index, all) => all.findIndex(other => other.src === item.src) === index)
    .map(item => ({ ...item, color: 'Blue' }))
  const front = media.findIndex(item => item.src?.includes('IMG_4118_n6r0yl'))
  if (front > 0) media.unshift(...media.splice(front, 1))
  const images = media.filter(item => item.type === 'image').map(item => item.src)
  if (!images.length) return product
  return { ...product, image: images[0], secondaryImage: images[1] || images[0],
    images, gallery: images, media, colors: ['Blue'],
    variants: [{ color: 'Blue', image: images[0], media }] }
}

export function validateEyewearColors(product) {
  if (product.category !== 'Eye Wears') return
  const meaningful = values => new Set(values.map(value => String(value || '').trim().toLowerCase()).filter(value => value && !['as shown', 'standard'].includes(value)))
  const colors = meaningful(product.colors || [])
  const variantColors = meaningful((product.variants || []).map(variant => variant.color))
  const mediaColors = meaningful((product.media || []).map(item => item.color))
  if (colors.size > 1 || variantColors.size > 1 || mediaColors.size > 1) {
    throw new Error('Use one eyewear color per product. Create a separate product card for each different frame or lens color.')
  }
}

export function validateProduct(product) {
  validateEyewearColors(product)
  if (!product.name?.trim()) throw new Error('Enter a product name.')
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.slug || '')) throw new Error('Use lowercase letters, numbers and hyphens for the product link.')
  if (!productCategories.includes(product.category)) throw new Error('Choose a category.')
  if (!Number.isFinite(product.price) || product.price < 0) throw new Error('Enter a valid price of zero or more.')
  if (!product.image || !(/^(https:\/\/|\/images\/)/.test(product.image))) throw new Error('Add at least one HTTPS product image.')
  for (const item of product.media || []) if (!/^(https:\/\/|\/images\/)/.test(item.src)) throw new Error('Media links must start with https://.')
  return product
}
