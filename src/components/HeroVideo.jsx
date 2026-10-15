import { useEffect, useRef, useState } from 'react'
import { optimizeVideoUrl } from '../lib/media'

// Video-only hero. No poster image or fallback image is rendered.
export default function HeroVideo({ src, alt }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const videoSrc = optimizeVideoUrl(src)

  useEffect(() => {
    setPlaying(false)
    const video = videoRef.current
    if (!video) return
    video.load()
    video.play().catch(() => {})
  }, [videoSrc])

  return <video
    ref={videoRef}
    className="category-new-hero-video"
    src={videoSrc}
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    aria-label={alt}
    tabIndex={-1}
    data-playing={playing}
    onPlaying={() => setPlaying(true)}
  />
}
