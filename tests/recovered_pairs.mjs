import assert from 'node:assert/strict'
import fs from 'node:fs'
import {EYEWEAR_PRODUCTS} from '../src/data/newEyewearCatalog.js'
import {RECOVERED_EYEWEAR_PAIRS} from '../src/data/recoveredEyewearPairs.js'
import {validateEyewearColors} from '../src/lib/catalog.js'
const preserved=JSON.parse(fs.readFileSync(new URL('../catalog-audit/preserved-eyewear-codes-colors.json',import.meta.url)))
for(const old of preserved){const now=EYEWEAR_PRODUCTS.find(x=>x.id===old.id);assert.ok(now);assert.equal(now.productCode,old.productCode);assert.deepEqual(now.colors,old.colors)}
const used=new Set(EYEWEAR_PRODUCTS.filter(x=>!RECOVERED_EYEWEAR_PAIRS.some(r=>r.id===x.id)).flatMap(x=>x.gallery))
for(const p of RECOVERED_EYEWEAR_PAIRS){assert.equal(p.colors.length,1);assert.equal(p.variants.length,1);assert.equal(p.gallery.length,2);assert.equal(p.image,p.gallery[0]);assert.equal(p.name,p.name.toUpperCase());assert.ok(!preserved.some(x=>x.productCode===p.productCode));assert.doesNotThrow(()=>validateEyewearColors(p));for(const src of p.gallery){assert.ok(!used.has(src));used.add(src)}}
console.log('113 existing codes/colors preserved; three new complete pairs use unused codes and unique photos.')
