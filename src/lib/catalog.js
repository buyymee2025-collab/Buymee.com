import { isFragranceDemo } from '../data/fragranceProducts.js'
import { normalizeResearchedSneaker } from '../data/sneakerDetails.js'
import { isRetiredSneaker, RETAINED_SNEAKER_IDS } from '../data/sneakerCatalogRefresh.js'
import { appendOct22Eyewear } from '../data/oct22Eyewear.js'
import { applyInitialDiscount } from './pricing.js'
import { appendMatchingMannequinViews } from './matchingMannequinViews.js'
import { normalizeResearchedEyewear } from './eyewearNames.js'
export const productCategories = ['Women', 'Luxury Women Silk', 'Men', 'Watches', 'Sneakers', 'Shoes', 'Eye Wears', 'Fragrance', "Men's Luxury Rings", 'Accessories']
export function mergeCatalog(base, rows) {
  const products = new Map(base.map(product => [String(product.id), product]))
  for (const row of rows) {
    if (row.deleted) {
      const original = products.get(String(row.id))
      // Restore the eight owner-selected cards from deletions saved before this rebuild.
      // New admin deletions carry the current media revision and continue to work.
      const restoreSelected = RETAINED_SNEAKER_IDS.some(id => String(id) === String(row.id)) &&
        original?.mediaRevision === 'sneakers-rebuild-2026-10-23' &&
        row.payload?.mediaRevision !== original.mediaRevision
      if (!restoreSelected) products.delete(String(row.id))
    }
    else {
      const original = products.get(String(row.id))
      const saved = { ...row.payload, id: original?.id ?? row.id }
      // Upgrade stale saved photos without replacing owner-edited names or prices.
      // A later admin save carries the revision and can intentionally change photos.
      if (original?.mediaRevision && original.mediaRevision !== saved.mediaRevision) {
        for (const key of ['image', 'secondaryImage', 'gallery', 'images', 'media', 'variants', 'colors', 'mediaRevision']) {
          saved[key] = original[key]
        }
      }
      // Apply the owner's latest price list to older saved records once.
      // Future Admin saves retain the revision and can change the price normally.
      if (original?.priceRevision && original.priceRevision !== saved.priceRevision) {
        for (const key of ['price', 'priceOnRequest', 'compareAt', 'sale', 'discountPricingVersion', 'priceRevision']) {
          saved[key] = original[key]
        }
      }
      products.set(String(row.id), saved)
    }
  }
  return appendOct22Eyewear([...products.values()].filter(product => !isRetiredSneaker(product) && !isFragranceDemo(product)), rows).map(normalizeEyewearCategory).map(normalizeSilkCategory).map(normalizeReviewedEyewear).map(normalizeResearchedEyewear).map(appendMatchingMannequinViews).map(normalizeResearchedSneaker).map(applyInitialDiscount).map(product => ({ ...product, quantity: product.quantity ?? 1 }))
}
// These reviewed photographs were previously mislabeled as a single Blue variant.
// Apply after saved overrides too, so an older admin record cannot mix them again.
export function normalizeReviewedEyewear(product) {
  if (product.category !== 'Eye Wears' || String(product.id) !== '26033') return product
  const redPhotos = ['IMG_4116_fthzid', 'IMG_4115_kzryg8']
  const sources = product.media?.length ? product.media : product.variants?.flatMap(v => v.media || [])?.length ? product.variants.flatMap(v => v.media || []) : (product.gallery || [product.image]).map(src => ({ type: 'image', src }))
  const media = sources.filter(item => !redPhotos.some(name => item.src?.includes(name)))
    .filter((item, index, all) => all.findIndex(other => other.src === item.src) === index)
    .map(item => ({ ...item, color: 'Blue' }))
  const reviewedFront = media.findIndex(item => item.src?.includes('IMG_3950-front-view'))
  const front = reviewedFront >= 0 ? reviewedFront : media.findIndex(item => item.src?.includes('IMG_4118_n6r0yl'))
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
  if (product.quantity != null && (!Number.isSafeInteger(product.quantity) || product.quantity < 0)) throw new Error('Enter a whole-number quantity of zero or more.')
  if (!product.name?.trim()) throw new Error('Enter a product name.')
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.slug || '')) throw new Error('Use lowercase letters, numbers and hyphens for the product link.')
  if (!productCategories.includes(product.category)) throw new Error('Choose a category.')
  if (!Number.isFinite(product.price) || product.price < 0) throw new Error('Enter a valid price of zero or more.')
  if (product.compareAt != null && String(product.compareAt).trim() !== '' &&
    (!Number.isFinite(Number(product.compareAt)) || Number(product.compareAt) <= Number(product.price))) {
    throw new Error('The original price must be higher than the current price. Leave it blank when there is no discount.')
  }
  if (!product.image || !(/^(https:\/\/|\/images\/)/.test(product.image))) throw new Error('Add at least one HTTPS product image.')
  for (const item of product.media || []) if (!/^(https:\/\/|\/images\/)/.test(item.src)) throw new Error('Media links must start with https://.')
  return product
}

/* Move legacy women's nightwear into its dedicated storefront/admin category. */
export function normalizeSilkCategory(product) {
  return product.category === 'Women' && product.subcategory?.trim().toLowerCase() === 'nightwear'
    ? { ...product, category: 'Luxury Women Silk' }
    : product
}

// GL codes identify eyewear even when an older Admin record selected another category.
export function normalizeEyewearCategory(product) {
  return /^GL\d{3,}$/.test(product.productCode || '') && product.category !== 'Eye Wears'
    ? { ...product, category: 'Eye Wears', subcategory: /optical/i.test(product.name || '') ? 'Optical Frames' : 'Sunglasses' }
    : product
}
