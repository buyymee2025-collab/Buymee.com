import assert from 'node:assert/strict'
import { EYEWEAR_PRODUCTS } from '../src/data/newEyewearCatalog.js'
import { mergeCatalog, normalizeReviewedEyewear, validateEyewearColors, validateProduct } from '../src/lib/catalog.js'
const blue = EYEWEAR_PRODUCTS.find(product => product.productCode === 'GL057')
const red = EYEWEAR_PRODUCTS.find(product => product.productCode === 'GL180')
assert.ok(blue && red)
assert.equal(EYEWEAR_PRODUCTS.length, 70)
assert.equal(new Set(EYEWEAR_PRODUCTS.map(product => product.productCode)).size, 70)
assert.deepEqual(blue.gallery.map(src => src.split('/').at(-1)), ['IMG_4118_n6r0yl', 'IMG_4117_y7jezj'])
assert.deepEqual(red.gallery.map(src => src.split('/').at(-1)), ['IMG_4116_fthzid', 'IMG_4115_kzryg8'])
assert.ok(!blue.gallery.some(src => red.gallery.includes(src)))
// Reproduce the saved admin override: every photo was incorrectly tagged Blue.
const combined = [blue.image, red.image, blue.secondaryImage, red.secondaryImage]
const override = { ...blue, name: 'Owner edited title', price: 99, colors: ['Blue', 'Red'],
  gallery: combined, images: combined,
  media: combined.map(src => ({ type: 'image', src, color: 'Blue' })),
  variants: [{ color: 'Blue', image: blue.image, media: combined.map(src => ({ type: 'image', src })) }] }
const merged = mergeCatalog(EYEWEAR_PRODUCTS, [{ id: String(blue.id), payload: override }])
const fixed = merged.find(product => product.id === blue.id)
assert.deepEqual(fixed.gallery, blue.gallery)
assert.deepEqual(fixed.images, blue.gallery)
assert.deepEqual(fixed.variants[0].media.map(item => item.src), blue.gallery)
assert.deepEqual(fixed.colors, ['Blue'])
assert.equal(fixed.price, 99)
assert.equal(fixed.name, 'Owner edited title')
assert.equal(fixed.productCode, 'GL057')
assert.deepEqual(normalizeReviewedEyewear(fixed), fixed)
assert.deepEqual(merged.find(product => product.productCode === 'GL180'), red)
assert.throws(() => validateEyewearColors(override), /one eyewear color/)
assert.throws(() => validateProduct({ ...override, colors: ['Blue'], variants: [{ color: 'Blue' }, { color: 'Red' }] }), /one eyewear color/)
assert.throws(() => validateEyewearColors({ ...blue, media: [{ color: 'Blue' }, { color: 'Red' }] }), /one eyewear color/)
assert.doesNotThrow(() => validateEyewearColors({ ...blue, colors: ['Blue / Gold'] }))
assert.doesNotThrow(() => validateEyewearColors({ ...override, category: 'Watches' }))
assert.equal(mergeCatalog(EYEWEAR_PRODUCTS, [{ id: String(red.id), deleted: true }]).find(product => product.productCode === 'GL180'), undefined)
console.log('Eyewear color checks passed: separate matching pairs, saved override repair, preserved codes/prices and rejection of mixed-color admin saves.')
