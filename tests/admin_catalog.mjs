import assert from 'node:assert/strict'
import { mergeCatalog, validateProduct } from '../src/lib/catalog.js'
const base = [{ id: 7, name: 'Old name', slug: 'existing', price: 25 }, { id: 'kept', name: 'Kept' }]
const edited = { id: '7', name: 'Updated', slug: 'existing', category: 'Men', price: 40, image: 'https://example.com/photo.webp', media: [] }
const merged = mergeCatalog(base, [{ id: '7', payload: edited, deleted: false }])
assert.equal(merged.length, 2)
assert.equal(merged[0].id, 7)
assert.equal(merged[0].price, 40)
assert.deepEqual(base[0], { id: 7, name: 'Old name', slug: 'existing', price: 25 })
assert.equal(mergeCatalog(base, [{ id: '7', payload: null, deleted: true }]).length, 1)
assert.equal(mergeCatalog(base, [{ id: 'new', payload: { ...edited, id: 'new' }, deleted: false }]).length, 3)
assert.equal(validateProduct(edited), edited)
assert.throws(() => validateProduct({ ...edited, price: -1 }), /price/)
assert.throws(() => validateProduct({ ...edited, price: NaN }), /price/)
assert.throws(() => validateProduct({ ...edited, slug: 'Bad link' }), /lowercase/)
assert.throws(() => validateProduct({ ...edited, image: 'javascript:alert(1)' }), /HTTPS/)
assert.throws(() => validateProduct({ ...edited, media: [{ src: 'http://example.com/video.mp4' }] }), /https/)
console.log('Admin catalogue checks passed: edits, new products, tombstones, stable IDs and validation.')
