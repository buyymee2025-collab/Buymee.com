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
  // Assign a unique GL code to every eyewear card, including admin-added products.
  // Preserve the existing codes for the original eyewear catalogue.
  const used = new Set()
  let next = 1
  return merged.map(product => {
    if (product.category !== 'Eye Wears') return product
    const existing = String(product.productCode || '').toUpperCase()
    const valid = /^GL\\d{3,}$/.test(existing) && !used.has(existing)
    let code = existing
    if (!valid) {
      while (used.has(`GL${String(next).padStart(3, '0')}`)) next += 1
      code = `GL${String(next++).padStart(3, '0')}`
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
