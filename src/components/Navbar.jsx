import SiteImage from './SiteImage'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, Search, ShoppingBag, X } from 'lucide-react'
import Logo from './Logo'
import { useStore } from '../context/StoreContext'
import { watchAssets } from '../data/assets'

const ease = [0.22, 1, 0.36, 1]
const MotionLink = motion.create(Link)
const shopItems = [
  { label: 'NEW IN', path: '/new-in', note: 'THE LATEST EDIT' },
  { label: 'WOMEN', path: '/women', note: 'MAKE AN ENTRANCE' },
  { label: 'LUXURY MEN SILK', path: '/men', note: 'A SHARPER POINT OF VIEW' },
  { label: 'WATCHES', path: '/watches' },
  { label: 'SHOES', path: '/shoes' },
  { label: 'SNEAKERS', path: '/sneakers' },
  { label: 'LUXURY EYE WEARS', path: '/eye-wears' },
  { label: 'LUXURY RINGS', path: '/luxury-rings' },
  { label: 'LUXURY FRAGRANCE', path: '/fragrance' },
  { label: 'LUXURY WOMEN SILK', path: '/luxury-women-silk' },
]

export default function Navbar({ overlay = false }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileShopOpen, setMobileShopOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const location = useLocation()
  const reduced = useReducedMotion()
  const closeTimer = useRef(null)
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const menuToggleRef = useRef(null)
  const shopToggleRef = useRef(null)
  const closeRef = useRef(null)
  const restoreFocusRef = useRef(false)
  const firstCategoryRef = useRef(null)
  const focusShopRef = useRef(false)
  const { cartCount, setDrawer } = useStore()
  const shopActive = location.pathname === '/shop' || shopItems.some((item) => item.path === location.pathname)
  const duration = reduced ? 0 : 0.52

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileShopOpen(false)
  }
  const openShop = () => {
    window.clearTimeout(closeTimer.current)
    setShopOpen(true)
  }
  const closeShop = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setShopOpen(false), 160)
  }

  useLayoutEffect(() => {
    closeMobile()
    setShopOpen(false)
    window.clearTimeout(closeTimer.current)
  }, [location.key])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  useLayoutEffect(() => {
    if (shopOpen && focusShopRef.current) {
      focusShopRef.current = false
      firstCategoryRef.current?.focus({ preventScroll: true })
    }
  }, [shopOpen])

  useEffect(() => {
    if (!shopOpen) return
    const dismiss = (event) => {
      if (!headerRef.current?.contains(event.target)) setShopOpen(false)
    }
    const escape = (event) => {
      if (event.key === 'Escape') {
        setShopOpen(false)
        shopToggleRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', dismiss)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', dismiss)
      document.removeEventListener('keydown', escape)
    }
  }, [shopOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)')
    const onResize = () => {
      if (desktop.matches) closeMobile()
      else setShopOpen(false)
    }
    desktop.addEventListener('change', onResize)
    return () => desktop.removeEventListener('change', onResize)
  }, [])

  useLayoutEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    const previousPadding = document.body.style.paddingRight
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    const background = [...document.querySelectorAll('main, footer, .navbar')]
    const previousInert = background.map((node) => node.inert)
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
    background.forEach((node) => { node.inert = true })
    closeRef.current?.focus({ preventScroll: true })

    const trapFocus = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        restoreFocusRef.current = true
        closeMobile()
      }
      if (event.key !== 'Tab') return
      const focusable = [...menuRef.current.querySelectorAll('a[href], button')]
        .filter((node) => node.tabIndex >= 0 && node.getClientRects().length)
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && (document.activeElement === first || !menuRef.current.contains(document.activeElement))) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener('keydown', trapFocus)
    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPadding
      background.forEach((node, index) => { node.inert = previousInert[index] })
      document.removeEventListener('keydown', trapFocus)
    }
  }, [mobileOpen])

  useLayoutEffect(() => {
    if (!mobileOpen && restoreFocusRef.current) {
      restoreFocusRef.current = false
      menuToggleRef.current?.focus({ preventScroll: true })
    }
  }, [mobileOpen])

  const menuItem = {
    closed: { opacity: 0, x: reduced ? 0 : 28 },
    open: { opacity: 1, x: 0, transition: { duration: reduced ? 0 : 0.6, ease } },
  }

  return (
    <>
      <header ref={headerRef} className={`navbar ${overlay ? 'overlay' : ''}`} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setShopOpen(false) }}>
        <Logo light={overlay} />
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/" end>HOME</NavLink>
          <div className="shop-nav-item" onMouseEnter={openShop} onMouseLeave={closeShop}>
            <NavLink to="/shop" end className={shopActive ? 'active' : ''}>SHOP</NavLink>
            <button
              ref={shopToggleRef}
              type="button"
              className={`shop-toggle ${shopOpen ? 'is-open' : ''}`}
              onClick={(event) => { window.clearTimeout(closeTimer.current); focusShopRef.current = !shopOpen && event.detail === 0; setShopOpen((open) => !open) }}
              onKeyDown={(event) => { if (event.key === 'ArrowDown') { event.preventDefault(); focusShopRef.current = true; openShop(); if (shopOpen) firstCategoryRef.current?.focus({ preventScroll: true }) } }}
              aria-label="Browse shop categories"
              aria-expanded={shopOpen}
              aria-haspopup="true"
              aria-controls="desktop-shop-menu"
            >
              <ChevronDown size={14} />
            </button>
          </div>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>
        <div className="nav-actions">
          <button type="button" onClick={() => setDrawer(true)} aria-label="Open shopping bag">
            <ShoppingBag size={20} /><i>{cartCount || ''}</i>
          </button>
          <Link to="/contact" className="nav-search" aria-label="Contact us"><Search size={19} /></Link>
          <button ref={menuToggleRef} type="button" className="mobile-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation">
            <Menu size={23} />
          </button>
        </div>
        <AnimatePresence>
          {shopOpen && (
            <motion.div
              id="desktop-shop-menu"
              className="mega"
              initial={{ opacity: 0, y: reduced ? 0 : -12, clipPath: reduced ? 'none' : 'inset(0 0 100% 0)' }}
              animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
              exit={{ opacity: 0, y: reduced ? 0 : -8, transition: { duration: reduced ? 0 : 0.2 } }}
              transition={{ duration, ease }}
              onMouseEnter={openShop}
              onMouseLeave={closeShop}
              onBlur={(event) => { if (!headerRef.current.contains(event.relatedTarget)) setShopOpen(false) }}
            >
              <div className="mega-intro">
                <span className="eyebrow">THE SHOP / YOUR NEXT MOVE</span>
                <h2>SHOP<br /><em>WITH INTENT.</em></h2>
                <Link to="/shop" className="mega-all" onClick={() => setShopOpen(false)}>EXPLORE ALL PIECES <ArrowUpRight size={16} /></Link>
              </div>
              <div className="mega-links" aria-label="Shop categories">
                {shopItems.map((item, index) => (
                  <MotionLink ref={index === 0 ? firstCategoryRef : undefined} key={item.path} to={item.path} onClick={() => setShopOpen(false)} initial={{ opacity: 0, y: reduced ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : 0.05 + index * 0.035, ease }}>
                    <span className="mega-link-label">{item.label}{item.note && <small>{item.note}</small>}</span><ArrowUpRight size={18} />
                  </MotionLink>
                ))}
              </div>
              <div className="mega-image"><SiteImage src={watchAssets[18]} alt="BUYYMEE.com watch editorial" /><span>A CONSIDERED EDIT. ALWAYS.</span></div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div className="mobile-menu-backdrop" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration }} />
            <motion.div
              ref={menuRef}
              id="mobile-navigation"
              className="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={reduced ? { opacity: 0 } : { x: '100%' }}
              animate={reduced ? { opacity: 1 } : { x: 0 }}
              exit={reduced ? { opacity: 0 } : { x: '100%', transition: { duration: 0.38, ease } }}
              transition={{ duration, ease }}
            >
              <div className="mobile-menu-top">
                <Logo light onClick={closeMobile} />
                <button ref={closeRef} type="button" className="close" onClick={() => { restoreFocusRef.current = true; closeMobile() }} aria-label="Close menu"><X size={25} /></button>
              </div>
              <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduced ? 0 : 0.15 }}>THE WORLD OF BUYYMEE.COM</motion.span>
              <motion.nav className="mobile-menu-nav" aria-label="Mobile main navigation" initial="closed" animate="open" variants={{ open: { transition: { staggerChildren: reduced ? 0 : 0.055, delayChildren: reduced ? 0 : 0.1 } } }}>
                <motion.div variants={menuItem}><NavLink to="/" end onClick={closeMobile}><small>01</small><span>HOME</span><b>↗</b></NavLink></motion.div>
                <motion.div variants={menuItem} className="mobile-shop-group">
                  <button type="button" className={`mobile-shop-toggle ${mobileShopOpen ? 'is-open' : ''} ${shopActive ? 'active' : ''}`} onClick={() => setMobileShopOpen((open) => !open)} aria-expanded={mobileShopOpen} aria-controls="mobile-shop-categories">
                    <small>02</small><span>SHOP</span><ChevronDown size={22} />
                  </button>
                  <div id="mobile-shop-categories" className={`mobile-shop-submenu ${mobileShopOpen ? 'is-open' : ''}`} aria-hidden={!mobileShopOpen}>
                    <div className="mobile-shop-clip">
                      <div className="mobile-shop-links">
                        <Link className="mobile-shop-all" to="/shop" onClick={closeMobile} tabIndex={mobileShopOpen ? 0 : -1}>EXPLORE ALL PIECES <ArrowUpRight size={16} /></Link>
                        {shopItems.map((item, index) => <NavLink key={item.path} to={item.path} onClick={closeMobile} tabIndex={mobileShopOpen ? 0 : -1} style={{ '--item-delay': `${index * 24}ms` }}><span>{item.label}</span><ArrowUpRight size={14} /></NavLink>)}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={menuItem}><NavLink to="/about" onClick={closeMobile}><small>03</small><span>ABOUT</span><b>↗</b></NavLink></motion.div>
                <motion.div variants={menuItem}><NavLink to="/contact" onClick={closeMobile}><small>04</small><span>CONTACT</span><b>↗</b></NavLink></motion.div>
              </motion.nav>
              <div className="mobile-foot"><span>USA / UK / WORLDWIDE</span><span>YOUR STYLE. YOUR SIGNAL.</span></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

