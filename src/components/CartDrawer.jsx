import { useEffect } from 'react'
import SiteImage from './SiteImage'
import { X, ArrowUpRight, Minus, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'

export default function CartDrawer() {
  const {
    drawer,
    setDrawer,
    cart,
    subtotal,
    currency,
    formatPrice,
    updateQty,
    removeFromCart,
  } = useStore()

  useEffect(() => {
    if (!drawer) return undefined

    window.history.pushState(
      { ...(window.history.state || {}), buyymeeOverlay: 'cart-drawer' },
      '',
      window.location.href,
    )
    return undefined
  }, [drawer])

  useEffect(() => {
    const closeFromBack = () => setDrawer(false)
    window.addEventListener('buyymee:back-close-drawer', closeFromBack)
    return () => window.removeEventListener('buyymee:back-close-drawer', closeFromBack)
  }, [setDrawer])

  const closeDrawer = () => {
    if (window.history.state?.buyymeeOverlay === 'cart-drawer') {
      window.history.replaceState(
        { ...(window.history.state || {}), buyymeeOverlay: undefined },
        '',
        window.location.href,
      )
    }
    setDrawer(false)
  }

  if (!drawer) return null

  return (
    <div className="drawer-backdrop" onClick={closeDrawer}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
        <div className="drawer-head">
          <span>YOUR BAG / {cart.length}</span>
          <button onClick={closeDrawer} aria-label="Close bag"><X /></button>
        </div>
        {cart.length ? (
          <>
            <div className="drawer-items">
              {cart.map((item) => (
                <div className="drawer-item" key={item.id + item.size}>
                  <SiteImage src={item.image} alt="" />
                  <div>
                    <span>{item.category}</span>
                    <b>{item.name}</b>
                    <small>{item.size} / {formatPrice(item.price, currency)}</small>
                    <div className="qty">
                      <button onClick={() => updateQty(item.id, item.size, item.qty - 1)}><Minus size={12} /></button>
                      {item.qty}
                      <button onClick={() => updateQty(item.id, item.size, item.qty + 1)}><Plus size={12} /></button>
                    </div>
                  </div>
                  <button className="remove" onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="drawer-summary">
              <div><span>SUBTOTAL</span><strong>{formatPrice(subtotal, currency)}</strong></div>
              <p>Free worldwide delivery over $200.</p>
              <Link to="/cart" onClick={closeDrawer} className="button dark">VIEW CART <ArrowUpRight size={16} /></Link>
            </div>
          </>
        ) : (
          <div className="empty-drawer">
            <span className="eyebrow">A LITTLE SPACE</span>
            <h2>Your bag is<br /><em>waiting.</em></h2>
            <Link to="/shop" onClick={closeDrawer} className="arrow-link">Explore the edit ↗</Link>
          </div>
        )}
      </aside>
    </div>
  )
}
