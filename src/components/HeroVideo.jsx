import { useState } from 'react'
import SiteImage from './SiteImage'

// Keep the poster underneath so blocked media or autoplay still leaves a full hero.
export default function HeroVideo({ src, poster, alt }) {
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)
  return <>
    <SiteImage src={poster} alt={alt} loading="eager" fetchPriority="high" />
    {!failed && <video
      className="category-new-hero-video"
      src={src}
      poster={poster}
      autoPlay muted loop playsInline preload="metadata"
      aria-hidden="true" tabIndex={-1}
      style={{ opacity: playing ? 1 : 0 }}
      onPlaying={() => setPlaying(true)}
      onError={() => setFailed(true)}
    />}
  </>
}
