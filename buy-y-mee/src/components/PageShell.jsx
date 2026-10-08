import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import ScrollMotion from './ScrollMotion'
import { useStore } from '../context/StoreContext'
import { editorialEase } from './Primitives'

const pageNames = {
  '/': 'Home', '/about': 'About', '/shop': 'Shop', '/new-in': 'New In',
  '/women': 'Women', '/men': 'Men', '/watches': 'Watches', '/sneakers': 'Sneakers',
  '/shoes': 'Shoes', '/bags': 'Bags', '/fragrance': 'Fragrance',
  '/accessories': 'Accessories', '/cart': 'Your Bag', '/wishlist': 'Wishlist', '/contact': 'Contact',
}

export default function PageShell({ children, darkHeader = false, overlay = false }) {
  const location = useLocation()
  const reduced = useReducedMotion()
  const mainRef = useRef(null)
  const { setDrawer } = useStore()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 34, restDelta: 0.001 })

  useEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = previous }
  }, [])

  useLayoutEffect(() => {
    // location.key also changes when a visitor selects the current page again.
    // Remount only page content, not StoreProvider: cart/currency/wishlist survive.
    setDrawer(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    mainRef.current?.focus({ preventScroll: true })
    document.title = `${pageNames[location.pathname] || (location.pathname.startsWith('/product/') ? 'The Product Edit' : 'Page Not Found')} — BUYYMEE.com`
  }, [location.key, location.pathname, setDrawer])

  return (
    <>
      <a className="skip-link" href="#page-content">Skip to content</a>
      <Navbar overlay={overlay || darkHeader} />
      <motion.div className="reading-progress" aria-hidden="true" style={{ scaleX: reduced ? scrollYProgress : progress }} />
      {!reduced && (
        <motion.div key={`refresh-${location.key}`} className="route-refresh" aria-hidden="true" initial={{ opacity: 0, y: -8 }} animate={{ opacity: [0, 1, 1, 0], y: [-8, 0, 0, -5] }} transition={{ duration: 0.95, times: [0, 0.2, 0.62, 1], ease: editorialEase }}>
          <span>BUYYMEE.com</span><i />
        </motion.div>
      )}
      <motion.main
        className="page-shell-main"
        key={location.key}
        ref={mainRef}
        id="page-content"
        tabIndex={-1}
        initial={false}
        animate={reduced ? {} : { opacity: [0.88, 1], y: [10, 0] }}
        transition={{ duration: reduced ? 0 : 0.5, ease: editorialEase }}
      >{children}</motion.main>
      <Footer />
      <CartDrawer />
      <ScrollMotion />
    </>
  )
}
