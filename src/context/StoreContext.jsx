import { VACANT_EYEWEAR_CODES } from '../data/oct22Eyewear.js'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { adminClient } from '../lib/adminClient'
import { fetchCatalog } from '../lib/catalogService'
import { mergeCatalog } from '../lib/catalog'
import baseProducts from '../data/products'
import { categoryProducts } from '../data/categoryProducts'
import { currencies, formatPrice } from '../data/currency'
export const originalProducts = [...baseProducts, ...Object.values(categoryProducts).flat().filter(product => !baseProducts.some(base => base.category === product.category && ['Sneakers', 'Eye Wears', 'Women', 'Men', 'Watches'].includes(base.category)))]
const StoreContext=createContext(null)
export function StoreProvider({children}){
 const [catalogRows,setCatalogRows]=useState([])
 const products=useMemo(()=>{
  const merged = mergeCatalog(originalProducts,catalogRows)
  // Product-only catalogue codes are permanent identifiers.
  // Reserve every saved code before assigning codes to new admin products.
  const baseCodes = new Map(originalProducts
    .filter(product => product.category === 'Eye Wears' && /^GL\d{3,}$/.test(product.productCode || ''))
    .map(product => [String(product.id), product.productCode]))
  const reserved = new Set([...VACANT_EYEWEAR_CODES, ...baseCodes.values(), ...merged
    .filter(product => product.category === 'Eye Wears' && /^GL\d{3,}$/.test(product.productCode || ''))
    .map(product => product.productCode)])
  const used = new Set()
  let next = Math.max(57, ...[...reserved].map(code => Number(code.slice(2)))) + 1
  return merged.map(product => {
    if (product.category !== 'Eye Wears') return product
    const existing = baseCodes.get(String(product.id)) || String(product.productCode || '').toUpperCase()
    let code = existing
    if (!/^GL\d{3,}$/.test(code) || used.has(code)) {
      while (reserved.has(`GL${String(next).padStart(3, '0')}`)) next += 1
      code = `GL${String(next++).padStart(3, '0')}`
      reserved.add(code)
    }
    used.add(code)
    return product.productCode === code ? product : { ...product, productCode: code }
  })
 },[catalogRows])
 const refreshCatalog=async()=>{const rows=await fetchCatalog();setCatalogRows(rows)}
 useEffect(()=>{
  if(!adminClient)return
  const refresh=()=>refreshCatalog().catch(()=>{})
  refresh()
  const timer=setInterval(refresh,60000)
  window.addEventListener('focus',refresh)
  return ()=>{clearInterval(timer);window.removeEventListener('focus',refresh)}
 },[])
 const [currency,setCurrency]=useState(()=>localStorage.getItem('bym-currency')||'USD')
 const [wishlist,setWishlist]=useState(()=>JSON.parse(localStorage.getItem('bym-wishlist')||'[]'))
 const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem('bym-cart')||'[]'))
 useEffect(()=>{
  setCart(previous=>{
   let changed=false
   const next=previous.map(item=>{
    const current=products.find(product=>String(product.id)===String(item.id))
    if(!current)return item
    const keys=['price','compareAt','priceOnRequest','discountPricingVersion']
    if(keys.every(key=>item[key]===current[key]))return item
    changed=true
    return {...item,...Object.fromEntries(keys.map(key=>[key,current[key]]))}
   })
   return changed?next:previous
  })
 },[products])
 const [drawer,setDrawer]=useState(false)
 useEffect(()=>localStorage.setItem('bym-currency',currency),[currency]); useEffect(()=>localStorage.setItem('bym-wishlist',JSON.stringify(wishlist)),[wishlist]); useEffect(()=>localStorage.setItem('bym-cart',JSON.stringify(cart)),[cart])
 const toggleWish=(id)=>setWishlist(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id])
 const addToCart=(product, size=product.sizes?.[0]||'OS')=>{if(product.inStock === false)return;setCart(c=>{const found=c.find(i=>i.id===product.id&&i.size===size);return found?c.map(i=>i===found?{...i,qty:i.qty+1}:i):[...c,{...product,size,qty:1}]});setDrawer(true)}
 const updateQty=(id,size,qty)=>setCart(c=>qty<1?c.filter(i=>!(i.id===id&&i.size===size)):c.map(i=>i.id===id&&i.size===size?{...i,qty}:i))
 const removeFromCart=(id,size)=>setCart(c=>c.filter(i=>!(i.id===id&&i.size===size)))
 const cartCount=cart.reduce((s,i)=>s+i.qty,0), subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0)
 const value=useMemo(()=>({products,refreshCatalog,currency,setCurrency,currencies,formatPrice,wishlist,toggleWish,cart,addToCart,updateQty,removeFromCart,cartCount,subtotal,drawer,setDrawer}),[products,currency,wishlist,cart,cartCount,subtotal,drawer])
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore=()=>useContext(StoreContext)
