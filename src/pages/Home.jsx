import SiteImage from '../components/SiteImage'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { categories } from '../data/categories'
import { categoryProducts } from '../data/categoryProducts'
import products from '../data/products'
import { uploadedVideo, dressAssets, watchAssets } from '../data/assets'
import ProductCard from '../components/ProductCard'
import { AnimatedHeading, EditorialNumber, Reveal, ScrollAccent, ScrollImage, SectionLabel } from '../components/Primitives'

const editorialProducts = products.slice(0, 6)

const shopAngleCards = [
  { label: 'New In', path: '/new-in', image: products[0]?.image || watchAssets[8], number: '01' },
  { label: 'Women', path: '/women', image: dressAssets[1], number: '02' },
  { label: 'Men', path: '/men', image: categoryProducts.men[0]?.image || dressAssets[5], number: '03' },
  { label: 'Watches', path: '/watches', image: watchAssets[2], number: '04' },
  { label: 'Shoes', path: '/shoes', image: categoryProducts.shoes[0]?.image || dressAssets[9], number: '05' },
  { label: 'Sneakers', path: '/sneakers', image: categoryProducts.sneakers[0]?.image || watchAssets[14], number: '06' },
  { label: 'Bags', path: '/bags', image: categoryProducts.bags[0]?.image || dressAssets[9], number: '07' },
  { label: 'Fragrance', path: '/fragrance', image: categoryProducts.fragrance[0]?.image || watchAssets[8], number: '08' },
  { label: 'Accessories', path: '/accessories', image: categoryProducts.accessories[0]?.image || watchAssets[18], number: '09' },
]

export default function Home() {
  const reduced = useReducedMotion()
  const videoRef = useRef(null)
  const carouselRef = useRef(null)
  const trackRef = useRef(null)
  useEffect(() => {
    const carousel = carouselRef.current
    const track = trackRef.current
    if (!carousel || !track) return
    let offset = 0
    let cycle = 0
    let frame
    let previous = null
    let gesture = null
    let suppressClick = false
    let clickTimer
    const measure = () => {
      const first = track.children[0]
      const duplicate = track.children[shopAngleCards.length]
      cycle = duplicate.offsetLeft - first.offsetLeft
      paint()
    }
    const paint = () => {
      if (!cycle) return
      offset = ((offset % cycle) + cycle) % cycle
      track.style.transform = `translate3d(${-offset}px, 0, 0)`
    }
    const tick = (now) => {
      if (previous !== null && !gesture) {
        offset += cycle * Math.min(now - previous, 64) / 25000
        paint()
      }
      previous = now
      frame = requestAnimationFrame(tick)
    }
    const down = (event) => {
      if (!event.isPrimary || event.button !== 0 || gesture) return
      clearTimeout(clickTimer)
      suppressClick = false
      gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, offset, dragging: false }
    }
    const move = (event) => {
      if (!gesture || gesture.id !== event.pointerId) return
      const dx = event.clientX - gesture.x
      const dy = event.clientY - gesture.y
      if (!gesture.dragging) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) < 8) return
        if (Math.abs(dy) > Math.abs(dx)) { gesture = null; return }
        gesture.dragging = true
        suppressClick = true
        carousel.setPointerCapture(event.pointerId)
        carousel.classList.add('is-dragging')
      }
      event.preventDefault()
      offset = gesture.offset - dx
      paint()
    }
    const end = (event) => {
      if (!gesture || gesture.id !== event.pointerId) return
      const dragged = gesture.dragging
      gesture = null
      previous = null
      carousel.classList.remove('is-dragging')
      if (carousel.hasPointerCapture(event.pointerId)) carousel.releasePointerCapture(event.pointerId)
      if (dragged) clickTimer = setTimeout(() => { suppressClick = false }, 0)
    }
    const click = (event) => {
      if (suppressClick) { event.preventDefault(); event.stopPropagation() }
    }
    const preventDrag = (event) => event.preventDefault()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    measure()
    frame = requestAnimationFrame(tick)
    carousel.addEventListener('pointerdown', down)
    carousel.addEventListener('pointermove', move, { passive: false })
    carousel.addEventListener('click', click, true)
    carousel.addEventListener('dragstart', preventDrag)
    window.addEventListener('pointerup', end)
    window.addEventListener('pointercancel', end)
    carousel.addEventListener('lostpointercapture', end)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(clickTimer)
      observer.disconnect()
      carousel.removeEventListener('pointerdown', down)
      carousel.removeEventListener('pointermove', move)
      carousel.removeEventListener('click', click, true)
      carousel.removeEventListener('dragstart', preventDrag)
      carousel.removeEventListener('lostpointercapture', end)
      window.removeEventListener('pointerup', end)
      window.removeEventListener('pointercancel', end)
    }
  }, [])
  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [reduced])
  return (
    <div className="home-redesign">
      <section className="hero-new">
        <video ref={videoRef} autoPlay muted loop playsInline><source src={uploadedVideo} type="video/mp4" /></video>
        <div className="hero-new-overlay" />
        <div className="hero-new-grid" />
        <div className="hero-new-copy">
          <span className="hero-index">/ 001 — THE FIRST EDIT</span>
          <AnimatedHeading className="hero-heading" as="h1" delay={0.12} lines={['Find', <i key="your">your</i>, <>signal<span>.</span></>]} />
          <p>Watches and dresses chosen for people with somewhere to go.</p>
          <div className="hero-new-actions">
            <Link to="/shop" className="button orange">ENTER THE EDIT <ArrowUpRight size={17} /></Link>
            <Link to="/about" className="hero-text-link">The story / 02</Link>
          </div>
        </div>
        <div className="hero-new-rail"><span>BUYYMEE.com</span><span>GLOBAL FASHION / LIFESTYLE</span><span>TO THE WORLD</span></div>
        <div className="hero-new-caption"><b>01</b><span>PLAYING NOW</span><small>THE BUYYMEE.com WORLD</small></div>
      </section>

      <section className="manifesto-strip">
        <ScrollAccent className="manifesto-mark" rotation={8} distance={22}>
          <svg className="manifesto-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M4 4L20 20M11 20H20V11" vectorEffect="non-scaling-stroke" />
          </svg>
        </ScrollAccent>
        <div><span className="eyebrow">A SHARP POINT OF VIEW</span><AnimatedHeading lines={['Good style', <em key="travels">travels.</em>]} /></div>
        <p>One tight edit of real watches and dresses. No noise, no filler — just pieces with enough presence to become yours.</p>
        <Link to="/about" className="circle-link">OUR<br />STORY <ArrowUpRight size={17} /></Link>
      </section>

      <section className="category-constellation section-pad">
        <div className="asym-heading">
          <div><SectionLabel number="01">THE CURRENT WORLD</SectionLabel><AnimatedHeading lines={['Choose', <em key="angle">your angle.</em>]} /></div>
          <EditorialNumber>01</EditorialNumber>
          <p>Every side of the BUYYMEE edit, moving continuously.</p>
        </div>
        <div ref={carouselRef} className="angle-carousel" aria-label="BUYYMEE shop categories">
          <div ref={trackRef} className="angle-carousel-track" role="presentation">
            {[...shopAngleCards, ...shopAngleCards].map((cat, index) => (
              <Link className="angle-carousel-card" to={cat.path} key={`${cat.label}-${index}`}>
                <SiteImage src={cat.image} alt={cat.label} loading="lazy" />
                <div className="angle-carousel-overlay"><span>{cat.number} /</span><h3>{cat.label}</h3><b>Open the edit <ArrowUpRight size={15} /></b></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="new-in-new section-pad">
        <div className="asym-heading">
          <div><SectionLabel number="02">THE DROP</SectionLabel><AnimatedHeading lines={['Right', <em key="now">now.</em>]} /></div>
          <p>Small quantities, strong point of view.<br />Prices from $73 to $250.</p>
          <Link to="/new-in" className="arrow-link">See all new in <span>↗</span></Link>
        </div>
        <div className="new-in-stage">
          <div className="stage-note"><span>THE CURRENT EDIT</span><strong>04 / 06</strong><i>↘</i></div>
          <div className="product-stage-grid">{editorialProducts.slice(0, 4).map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div>
        </div>
      </section>

      <section className="feature-split-new">
        <Reveal className="feature-visual" variant="image">
          <ScrollImage src={watchAssets[13]} alt="Tissot-inspired watch from the uploaded edit" distance={30} rotate={3} loading="lazy" />
          <span className="feature-vertical">WATCH EDIT / A.M. TO P.M.</span>
        </Reveal>
        <div className="feature-copy">
          <SectionLabel number="03">TIME, RECONSIDERED</SectionLabel>
          <AnimatedHeading lines={['Wear', <em key="moment">the moment.</em>]} />
          <p>Clean faces. Exact lines. The quiet confidence of a watch that does not need to announce itself.</p>
          <Reveal variant="right" delay={0.1}><Link to="/watches" className="button dark">SHOP WATCHES <ArrowUpRight size={17} /></Link></Reveal>
          <div className="feature-foot"><span>01</span><span>08</span><div /></div>
        </div>
      </section>

      <section className="dress-story-new">
        <div className="dress-story-copy">
          <SectionLabel number="04">THE DRESS EDIT</SectionLabel>
          <AnimatedHeading lines={['Make an', <em key="entrance">entrance.</em>]} />
          <p>Silhouettes for the version of you that has already decided.</p>
          <Reveal variant="left"><Link to="/women" className="arrow-link">Open the women's edit <span>↗</span></Link></Reveal>
        </div>
        <Reveal className="dress-story-image" variant="image" delay={0.05}>
          <ScrollImage src={dressAssets[5]} alt="Uploaded dress editorial" distance={28} loading="lazy" />
          <span>02 / 17</span>
        </Reveal>
        <Reveal className="dress-story-small" variant="image" delay={0.2}>
          <ScrollImage src={dressAssets[8]} alt="Uploaded dress detail" distance={18} loading="lazy" />
          <span>THE AFTER HOURS SET</span>
        </Reveal>
      </section>

      <section className="locations-new section-pad">
        <div className="location-copy">
          <SectionLabel number="05">WHERE WE MOVE</SectionLabel>
          <div className="locations-logo-heading"><img src="https://res.cloudinary.com/mdbhqnv7/image/upload/v1791228199/65efa3b8-253a-4101-949d-a5357341efc9.png" alt="buyymee.com"/><em>to the world.</em></div>
          <p>Made with a local pulse and a global eye. Worldwide delivery, easy returns, and a little more room for discovery.</p>
          <Link to="/contact" className="arrow-link">Say hello <span>↗</span></Link>
        </div>
        <div className="location-list">{[['USA','7–14 days'],['UK','7–14 days'],['WORLDWIDE','7–20 days']].map(([region, days], index) => <div key={region}><span>0{index + 1}</span><b>{region}</b><small>{days}</small><Check size={18} /></div>)}</div>
      </section>

      <section className="closing-new">
        <ScrollAccent className="closing-ghost" rotation={-12} distance={60}>Y</ScrollAccent>
        <span className="eyebrow">THE LAST WORD</span>
        <AnimatedHeading lines={['Keep', <em key="looking">looking.</em>]} />
        <Reveal delay={0.12}><Link to="/shop" className="button orange">SHOP BUYYMEE.com <ArrowUpRight size={17} /></Link></Reveal>
      </section>
    </div>
  )
}
