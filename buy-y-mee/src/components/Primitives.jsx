import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { imageUrl } from '../lib/images'

export const editorialEase = [0.22, 1, 0.36, 1]

export function Reveal({ children, className = '', variant = 'rise', delay = 0, index = 0 }) {
  const reduced = useReducedMotion()
  // Fail-open: never leave content transparent or fully clipped awaiting an observer.
  const movement = {
    rise: { y: [28, 0] },
    left: { x: [-28, 0], y: [8, 0] },
    right: { x: [28, 0], y: [8, 0] },
    image: { y: [18, 0], scale: [1.025, 1] },
    card: { y: [32, 0], rotate: [index % 2 ? 1.1 : -1.1, 0] },
  }
  return (
    <motion.div
      data-motion="reveal"
      className={className}
      initial={false}
      whileInView={reduced ? {} : { opacity: [0.78, 1], ...(movement[variant] || movement.rise) }}
      viewport={{ once: true, amount: 0.04, margin: '0px 0px -12px 0px' }}
      transition={{ duration: reduced ? 0 : variant === 'image' ? 1.05 : 0.8, delay: reduced ? 0 : Math.min(delay, 0.24), ease: editorialEase }}
    >{children}</motion.div>
  )
}

export function AnimatedHeading({ as = 'h2', lines, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  const Heading = as
  return (
    <Heading className={`motion-heading ${className}`} data-motion="heading">
      {lines.map((line, index) => (
        <span className="heading-mask" key={index}>
          <motion.span
            className="heading-line"
            initial={false}
            whileInView={reduced ? {} : { y: [18, 0], rotate: [0.75, 0], opacity: [0.85, 1] }}
            viewport={{ once: true, amount: 0.04 }}
            transition={{ duration: reduced ? 0 : 1, delay: reduced ? 0 : delay + index * 0.09, ease: editorialEase }}
          >{line}</motion.span>
        </span>
      ))}
    </Heading>
  )
}

export function ScrollImage({ src, alt, className = '', distance = 30, rotate = 0, ...props }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance])
  const rotation = useTransform(scrollYProgress, [0, 1], [-rotate, rotate])
  return <motion.img ref={ref} src={imageUrl(src)} data-image-source={src} alt={alt} className={className} style={reduced ? {} : { y, rotate: rotation, scale: rotate ? 1 : 1.08 }} {...props} />
}

export function ScrollAccent({ children, className = '', rotation = 0, distance = 50 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  const rotate = useTransform(scrollYProgress, [0, 1], [rotation - 9, rotation + 9])
  return <motion.div ref={ref} className={className} aria-hidden="true" style={reduced ? { rotate: rotation } : { y, rotate }}>{children}</motion.div>
}

export const SectionLabel = ({ children, number }) => <div className="section-label"><span className="accent-line" />{number && <span className="label-number">{number} /</span>}<span>{children}</span></div>
export const ArrowLink = ({ children, to = '#', className = '' }) => <a className={`arrow-link ${className}`} href={to}>{children}<span>↗</span></a>
export const BagFrame = ({ children, className = '' }) => <div className={`bag-frame ${className}`}>{children}</div>
export const Marquee = () => <div className="marquee"><div className="marquee-track">WATCHES <b>✓</b> DRESSES <b>✓</b> SNEAKERS <b>✓</b> FRAGRANCE <b>✓</b> SHOES <b>✓</b> BAGS <b>✓</b> WATCHES <b>✓</b> DRESSES <b>✓</b></div></div>
export const EditorialNumber = ({ children }) => <div className="editorial-number" aria-hidden="true">{children}</div>
