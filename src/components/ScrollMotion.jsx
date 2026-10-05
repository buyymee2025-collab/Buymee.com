import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'

const targets = [
  'h1', 'h2', 'h3', '.section-label', '.eyebrow', 'section p',
  '.editorial-number', '.stage-note', '.location-list > div', '.about-city',
  '.principle-grid > div', '.value-grid > div', '.contact-details > div',
  '.hero-index', '.hero-new-caption', '.hero-new-actions',
  '.about-new-hero > img', '.category-new-hero > img',
  '.about-world-image', '.world-story-img', '.detail-gallery',
]

export default function ScrollMotion() {
  const { key } = useLocation()
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !('IntersectionObserver' in window)) return
    const selectors = targets.map((selector) => `main ${selector}`).join(', ')
    const nodes = [...document.querySelectorAll(`${selectors}, footer h2, footer .eyebrow, footer .footer-new-grid > div, footer .footer-new-word`)]
      .filter((node) => !node.closest('[data-motion]'))
    const selected = new Set(nodes)
    const active = nodes.filter((node) => {
      for (let parent = node.parentElement; parent && !parent.matches('main, footer'); parent = parent.parentElement) {
        if (selected.has(parent)) return false
      }
      return true
    })
    const animations = []
    const groupCounts = new Map()
    active.forEach((node) => {
      const position = groupCounts.get(node.parentElement) || 0
      groupCounts.set(node.parentElement, position + 1)
      node.dataset.motionDelay = String(Math.min(position * 55, 165))
      node.classList.add('scroll-reveal')
    })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        target.classList.add('is-revealed')
        observer.unobserve(target)
        if (!target.animate) return
        const visual = target.tagName === 'IMG' || target.matches('.about-world-image, .world-story-img, .detail-gallery')
        const outline = target.matches('.editorial-number, .footer-new-word')
        const heading = /^H[123]$/.test(target.tagName)
        const from = visual ? 'translateY(16px) scale(1.025)' : outline ? 'translateX(-18px)' : heading ? 'translateY(22px)' : 'translateY(18px)'
        // No persistent hidden state, clip mask or forwards fill. If observation,
        // animation support or navigation interrupts this, content stays visible.
        animations.push(target.animate([
          { opacity: 0.78, transform: from },
          { opacity: 1, transform: 'none' },
        ], { duration: visual ? 1000 : 850, delay: Number(target.dataset.motionDelay), easing: 'cubic-bezier(.22,1,.36,1)', fill: 'none' }))
      })
    }, { threshold: 0.04, rootMargin: '0px 0px -12px 0px' })
    active.forEach((node) => observer.observe(node))
    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
      active.forEach((node) => {
        node.classList.remove('scroll-reveal', 'is-revealed')
        delete node.dataset.motionDelay
      })
    }
  }, [key, reduced])

  return null
}
