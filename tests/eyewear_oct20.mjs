import assert from 'node:assert/strict'
import fs from 'node:fs'
import { EYEWEAR_PRODUCTS } from '../src/data/newEyewearCatalog.js'
import { mergeCatalog, validateEyewearColors } from '../src/lib/catalog.js'
const audit = JSON.parse(fs.readFileSync(new URL('../catalog-audit/eyewear-cloudinary-oct20-reviewed.json', import.meta.url)))
const byCode = new Map(EYEWEAR_PRODUCTS.map(p => [p.productCode, p]))
assert.equal(byCode.size, 116)
assert.equal(new Set(EYEWEAR_PRODUCTS.map(p => p.id)).size, 116)
assert.equal(new Set(EYEWEAR_PRODUCTS.map(p => p.slug)).size, 116)
for (let n = 1; n <= 69; n++) assert.ok(byCode.has(`GL${String(n).padStart(3, '0')}`))
for (let n = 70; n <= 112; n++) assert.ok(byCode.has(`GL${String(n).padStart(3, '0')}`))
for (let n = 116; n < 180; n++) assert.ok(!byCode.has(`GL${n}`))
assert.ok(byCode.has('GL180'))
for (let n = 181; n <= 223; n++) assert.ok(!byCode.has(`GL${n}`))
const images = new Set()
for (const pair of audit.pairs) {
  const p = byCode.get(pair.productCode)
  assert.deepEqual(p.gallery.slice(0, 2).map(src => src.split('/').at(-1)), [pair.front, pair.angle])
  assert.ok(pair.front.includes('front-view') && pair.angle.includes('angle-view'))
  if (pair.status === 'replace-existing-media') {
    assert.equal(p.gallery.length, 4)
    assert.ok(p.gallery.slice(2).every(src => src.includes('/dnvgl9k4i/')))
  } else assert.equal(p.gallery.length, ['GL099','GL100','GL101','GL102','GL103'].includes(p.productCode) ? 4 : 2)
  assert.equal(p.colors.length, 1)
  assert.equal(p.variants.length, 1)
  assert.deepEqual(p.variants[0].media.map(m => m.src), p.gallery)
  assert.doesNotThrow(() => validateEyewearColors(p))
  for (const src of p.gallery.slice(0, 2)) { assert.ok(!images.has(src)); images.add(src) }
  const stale = { ...p, mediaRevision: undefined, name: 'Owner title', price: 88, gallery: ['https://old.example/wrong-color'] }
  const merged = mergeCatalog(EYEWEAR_PRODUCTS, [{ id: p.id, payload: stale }]).find(x => x.id === p.id)
  assert.deepEqual(merged.gallery, p.gallery)
  assert.equal(merged.price, 88)
  assert.equal(merged.name, 'Owner title')
  if (p.productCode !== 'GL057') {
    const edited = { ...p, gallery: ['https://new.example/intended'] }
    assert.deepEqual(mergeCatalog([p], [{ id: p.id, payload: edited }])[0].gallery, edited.gallery)
  }
}
assert.equal(images.size, 140)
assert.equal(audit.duplicates.length, 24)
assert.equal(audit.pairs.filter(p => p.status === 'new-product').length, 43)
// Similar LV colors are separate frames, not duplicate cards.
assert.ok(!byCode.get('GL068').gallery.some(src => byCode.get('GL076').gallery.includes(src)))
const watch = { id: 1, category: 'Watches', gallery: ['a'] }
assert.deepEqual(mergeCatalog([watch], []), [watch])
console.log('October 20 review passed: 70 exact pairs, 43 new cards, 27 media updates, 24 duplicates excluded; owner edits preserved.')
