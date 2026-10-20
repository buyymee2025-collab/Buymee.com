import assert from 'node:assert/strict'
import{EYEWEAR_PRODUCTS}from'../src/data/newEyewearCatalog.js'
import{appendMatchingMannequinViews,MATCHING_MANNEQUIN_VIEWS}from'../src/lib/matchingMannequinViews.js'
import{mergeCatalog}from'../src/lib/catalog.js'
for(const[id,match]of Object.entries(MATCHING_MANNEQUIN_VIEWS)){
 const p=EYEWEAR_PRODUCTS.find(p=>String(p.id)===id)
 assert.equal(p.productCode,match.code)
 assert.deepEqual(p.gallery,[...match.existingPair,...match.addedViews])
 assert.equal(p.image,match.existingPair[0])
 const owner={...p,name:'OWNER NAME',price:73,colors:['OWNER COLOR'],media:p.media.slice(0,2),gallery:p.gallery.slice(0,2),variants:[{color:'OWNER COLOR',image:p.image,media:p.media.slice(0,2)}]}
 const fixed=mergeCatalog(EYEWEAR_PRODUCTS,[{id,payload:owner}]).find(p=>String(p.id)===id)
 for(const key of ['name','price','colors','productCode','image','secondaryImage'])assert.deepEqual(fixed[key],owner[key])
 assert.equal(fixed.variants[0].color,'OWNER COLOR')
 assert.deepEqual(fixed.gallery,p.gallery)
 assert.deepEqual(fixed.variants[0].media.map(x=>x.src),p.gallery)
 assert.equal(appendMatchingMannequinViews(fixed),fixed)
 const unrelated={...owner,media:[{src:'https://example.com/different-frame',type:'image'}]}
 assert.equal(appendMatchingMannequinViews(unrelated),unrelated)
}
assert.equal(EYEWEAR_PRODUCTS.length,116)
console.log('Five exact mannequin pairs appended; existing codes, colors, names, prices and covers preserved.')
