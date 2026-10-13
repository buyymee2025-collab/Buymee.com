import { imageUrl } from '../lib/images'
import { optimizeImageUrl } from '../lib/media'

export default function SiteImage({ src, alt, className = '', onError, imageWidth = 1200, sizes = '100vw', loading = 'lazy', ...props }) {
  const resolved = imageUrl(src)
  const isUnsplash = typeof resolved === 'string' && (resolved.includes('images.unsplash.com') || resolved.includes('/images/stock-') || resolved.includes('/images/accessory-gold-chain'))
  const optimized = optimizeImageUrl(resolved, imageWidth)
  const widths = [320, 480, 640, 960, 1200].filter(width => width <= imageWidth)
  if (!widths.includes(imageWidth)) widths.push(imageWidth)
  const srcSet = optimized !== resolved ? widths.map(width => `${optimizeImageUrl(resolved, width)} ${width}w`).join(', ') : undefined
  return (
    <img
      {...props}
      src={optimized}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      loading={loading}
      alt={alt}
      data-image-source={resolved}
      className={`${className}${isUnsplash ? ' image-unsplash' : ''}`.trim()}
      decoding="async"
      onError={(event) => {
        if (event.currentTarget.dataset.triedOptimized !== 'true' && optimized !== resolved) {
          event.currentTarget.dataset.triedOptimized = 'true'
          event.currentTarget.removeAttribute('srcset')
          event.currentTarget.src = resolved
        } else if (imageUrl(src) !== src && event.currentTarget.dataset.triedOriginal !== 'true') {
          event.currentTarget.dataset.triedOriginal = 'true'
          event.currentTarget.src = src
        }
        onError?.(event)
      }}
    />
  )
}
