import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import baseProducts from '../data/products'
import { categoryProducts } from '../data/categoryProducts'
import { currencies, formatPrice } from '../data/currency'
const products = [...baseProducts, ...Object.values(categoryProducts).flat().filter(product => !baseProducts.some(base => base.category === product.category && (base.category === 'Sneakers' || base.category === 'Eye Wears')))]
const StoreContext=createContext(null)
export function StoreProvider({children}){
 const [currency,setCurrency]=useState(()=>localStorage.getItem('bym-currency')||'USD')
 const [wishlist,setWishlist]=useState(()=>JSON.parse(localStorage.getItem('bym-wishlist')||'[]'))
 const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem('bym-cart')||'[]'))
 const [drawer,setDrawer]=useState(false)
 useEffect(()=>localStorage.setItem('bym-currency',currency),[currency]); useEffect(()=>localStorage.setItem('bym-wishlist',JSON.stringify(wishlist)),[wishlist]); useEffect(()=>localStorage.setItem('bym-cart',JSON.stringify(cart)),[cart])
 const toggleWish=(id)=>setWishlist(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id])
 const addToCart=(product, size=product.sizes?.[0]||'OS')=>{setCart(c=>{const found=c.find(i=>i.id===product.id&&i.size===size);return found?c.map(i=>i===found?{...i,qty:i.qty+1}:i):[...c,{...product,size,qty:1}]});setDrawer(true)}
 const updateQty=(id,size,qty)=>setCart(c=>qty<1?c.filter(i=>!(i.id===id&&i.size===size)):c.map(i=>i.id===id&&i.size===size?{...i,qty}:i))
 const removeFromCart=(id,size)=>setCart(c=>c.filter(i=>!(i.id===id&&i.size===size)))
 const cartCount=cart.reduce((s,i)=>s+i.qty,0), subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0)
 const value=useMemo(()=>({products,currency,setCurrency,currencies,formatPrice,wishlist,toggleWish,cart,addToCart,updateQty,removeFromCart,cartCount,subtotal,drawer,setDrawer}),[currency,wishlist,cart,cartCount,subtotal,drawer])
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore=()=>useContext(StoreContext)
