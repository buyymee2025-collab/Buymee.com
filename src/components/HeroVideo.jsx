import { useEffect, useRef, useState } from 'react'
import { optimizeVideoUrl } from '../lib/media'

// Keep the last video frame visible until the next clip is ready; no images.
export default function HeroVideo({ src, clips, alt }) {
  const videos = useRef([])
  const [active, setActive] = useState(0)
  const [slots, setSlots] = useState([0, null])
  const sequence = clips?.length ? clips : [{ src }]
  const connection = typeof navigator !== 'undefined' ? navigator.connection : null
  const low = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '') || (typeof window !== 'undefined' && window.innerWidth < 768)
  const url = (clip) => optimizeVideoUrl(low && clip.lowSrc ? clip.lowSrc : clip.src, low ? 640 : 1280)

  useEffect(() => {
    const resume = () => {
      const video = videos.current[active]
      if (!video) return
      if (document.hidden) video.pause()
      else video.play().catch(() => {})
    }
    resume()
    document.addEventListener('visibilitychange', resume)
    window.addEventListener('online', resume)
    window.addEventListener('pointerdown', resume, { once: true })
    return () => {
      document.removeEventListener('visibilitychange', resume)
      window.removeEventListener('online', resume)
      window.removeEventListener('pointerdown', resume)
    }
  }, [active, src])

  const advance = () => {
    if (sequence.length < 2) return
    const next = 1 - active
    const video = videos.current[next]
    if (!video) return
    video.currentTime = 0
    video.play().catch(() => {})
    // onPlaying switches the visible layer only when frames are available.
  }

  return <>{slots.map((index, slot) => index === null ? null : <video
    key={`${slot}-${index}`}
    ref={video => { videos.current[slot] = video }}
    className="category-new-hero-video"
    style={{ opacity: active === slot ? 1 : 0 }}
    src={url(sequence[index])}
    autoPlay={slot === active}
    muted
    loop={sequence.length === 1}
    playsInline
    preload="auto"
    aria-label={slot === active ? alt : undefined}
    aria-hidden={slot !== active}
    tabIndex={-1}
    onTimeUpdate={event => {
      if (slot !== active || sequence.length < 2) return
      const video = event.currentTarget
      if (video.duration - video.currentTime < 5) {
        const nextIndex = (index + 1) % sequence.length
        setSlots(previous => previous[1 - slot] === nextIndex ? previous : previous.map((value, position) => position === 1 - slot ? nextIndex : value))
      }
    }}
    onPlaying={() => {
      if (slot !== active) {
        videos.current[active]?.pause()
        setActive(slot)
      }
    }}
    onCanPlay={event => {
      if (slot !== active && videos.current[active]?.ended) event.currentTarget.play().catch(() => {})
    }}
    onEnded={advance}
    onError={event => {
      const video = event.currentTarget
      const fallback = sequence[index].lowSrc
      if (fallback && video.dataset.retried !== 'true') {
        video.dataset.retried = 'true'
        video.src = fallback
        video.load()
        if (slot === active) video.play().catch(() => {})
      }
    }}
  />)}</>
}
