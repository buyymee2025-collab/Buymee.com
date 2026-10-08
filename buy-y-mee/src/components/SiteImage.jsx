import { imageUrl } from '../lib/images'
import { optimizeImageUrl } from '../lib/media'

export default function SiteImage({ src, alt, className = '', onError, ...props }) {
  const resolved = imageUrl(src)
  const isUnsplash = typeof resolved === 'string' && (resolved.includes('images.unsplash.com') || resolved.includes('/images/stock-') || resolved.includes('/images/accessory-gold-chain'))
  const optimized = optimizeImageUrl(resolved)
  return (
    <img
      {...props}
      src={optimized}
      alt={alt}
      data-image-source={resolved}
      className={`${className}${isUnsplash ? ' image-unsplash' : ''}`.trim()}
      decoding="async"
      onError={(event) => {
        if (event.currentTarget.dataset.triedOptimized !== 'true' && optimized !== resolved) {
          event.currentTarget.dataset.triedOptimized = 'true'
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
