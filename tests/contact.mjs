import assert from 'node:assert/strict'
import { purchaseUrl, cartPurchaseUrl, contactEmailUrl } from '../src/lib/contact.js'
const product = { name: 'Blue & Gold / Limited', productCode: 'HL006', slug: 'blue-watch' }
const purchase = new URL(purchaseUrl(product, { color: 'Blue', size: '42', origin: 'https://buyymee.com' }))
assert.equal(purchase.origin + purchase.pathname, 'https://wa.me/2348035575665')
const text = purchase.searchParams.get('text')
for (const expected of [product.name, 'HL006', 'Colour: Blue', 'Size: 42', 'https://buyymee.com/product/blue-watch']) assert.ok(text.includes(expected))
const order = new URL(cartPurchaseUrl([{ ...product, qty: 2, size: 'UK 9' }], 'https://buyymee.com')).searchParams.get('text')
assert.ok(order.includes('2 × Blue & Gold / Limited — Size: UK 9'))
const form = {name: 'Sir & Co', email: 'customer@example.com', reason: 'Delivery', message: 'Hello!\nUK & USA? #1 + 2'}
const email = new URL(contactEmailUrl(form))
assert.equal(email.pathname, 'buyymee2025@gmail.com')
assert.ok(email.searchParams.get('body').includes(form.message))
assert.ok(email.searchParams.get('body').includes(form.name))
assert.ok(email.searchParams.get('body').includes(form.email))
assert.ok(email.searchParams.get('subject').includes(form.reason))
console.log('Contact and purchase links passed: correct recipients, product identity, colour, quantities, and complete encoded form content.')
const fullCart = new URL(cartPurchaseUrl([
  {...product, qty:2, size:'UK 9'},
  {name:'Crystal glasses',slug:'crystal-glasses',qty:3,size:'OS'},
], 'https://buyymee.com')).searchParams.get('text')
assert.ok(fullCart.includes('2 × Blue & Gold / Limited'))
assert.ok(fullCart.includes('3 × Crystal glasses'))
assert.ok(fullCart.includes('https://buyymee.com/product/crystal-glasses'))
