import assert from 'node:assert/strict'
import fs from 'node:fs'

const data = fs.readFileSync(new URL('../src/data/refreshedCatalog.js', import.meta.url), 'utf8')
const source = fs.readFileSync(new URL('../src/data/products.js', import.meta.url), 'utf8')
  .replaceAll("'./refreshedCatalog'", JSON.stringify('data:text/javascript,' + encodeURIComponent(data)))
const { default: products } = await import('data:text/javascript,' + encodeURIComponent(source))
const audit = JSON.parse(fs.readFileSync(new URL('../catalog-audit/cloudinary-first-755.json', import.meta.url)))

assert.equal(audit.images.length, 755)
assert.deepEqual(audit.images.map(image => image.number), Array.from({ length: 755 }, (_, i) => i + 1))
assert.equal(new Set(products.map(product => product.id)).size, products.length)
assert.equal(new Set(products.map(product => product.slug)).size, products.length)
for (const image of audit.images) {
  const product = products.find(product => product.id === image.productId)
  assert.ok(product, `Image ${image.number} has a product or documented replacement`)
  if (image.status === 'included') assert.ok(product.gallery.includes(image.url))
  if (image.status === 'black-mannequin-replaced') assert.ok(!product.gallery.includes(image.url))
}
for (const product of products) {
  assert.ok(product.gallery.includes(product.image), product.name)
  assert.ok(product.variants.every(variant => variant.media.length > 0), product.name)
}
const watches = products.filter(product => product.category === 'Watches')
assert.equal(watches.reduce((count, product) => count + product.variants.length, 0), 50)
assert.equal(new Set(watches.map(product => `${product.parentProductId}:${product.familyName}`)).size, watches.length)
assert.ok(watches.every(product => product.media.every(item => !item.src.includes('1006_4'))))
assert.equal(products.filter(product => product.category === 'Sneakers').length, 81)
console.log('Catalog checks passed: 755 images accounted for, unique listings, 50 watch colors retained, 81 footwear listings preserved.')
