import assert from 'node:assert/strict'
import fs from 'node:fs'
import { normalizeResearchedEyewear } from '../src/lib/eyewearNames.js'
import { EYEWEAR_PRODUCTS } from '../src/data/newEyewearCatalog.js'
import { mergeCatalog } from '../src/lib/catalog.js'
const audit = JSON.parse(fs.readFileSync(new URL('../catalog-audit/eyewear-names-oct20.json',import.meta.url)))
assert.equal(audit.products.length,78)
for(const row of audit.products){
 const original={id:row.id,name:row.previousName,category:'Eye Wears',price:79,productCode:row.code,gallery:['front','side','mannequin'],colors:['ONE COLOR']}
 const fixed=normalizeResearchedEyewear(original)
 assert.equal(fixed.name,row.name)
 assert.equal(fixed.name,fixed.name.toUpperCase())
 assert.equal(fixed.description,fixed.description.toUpperCase())
 for(const key of ['id','category','price','productCode','gallery','colors'])assert.deepEqual(fixed[key],original[key])
 const uppercase={...original,name:'OWNER COMPLETED NAME',description:'Owner details must stay'}
 assert.equal(normalizeResearchedEyewear(uppercase),uppercase)
 const renamed={...original,name:'Owner new custom title'}
 assert.equal(normalizeResearchedEyewear(renamed),renamed)
 const watch={...original,category:'Watches'}
 assert.equal(normalizeResearchedEyewear(watch),watch)
 const merged=mergeCatalog(EYEWEAR_PRODUCTS,[{id:row.id,payload:original}]).find(p=>String(p.id)===String(row.id))
 assert.equal(merged.name,row.name)
 assert.equal(merged.price,79)
}
assert.equal(EYEWEAR_PRODUCTS.length,116)
const targeted = new Set(audit.products.map(p=>String(p.id)))
assert.ok(EYEWEAR_PRODUCTS.filter(p=>targeted.has(String(p.id))).every(p=>p.name===p.name.toUpperCase()))
console.log('Name checks passed: 78 researched updates; uppercase/custom edits, prices, codes and media protected.')
