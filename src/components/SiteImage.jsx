import { imageUrl } from '../lib/images'

export default function SiteImage({ src, alt, className = '', onError, ...props }) {
  const isUnsplash = typeof src === 'string' && (src.includes('images.unsplash.com') || src.includes('/images/stock-') || src.includes('/images/accessory-gold-chain'))
  return (
    <img
      {...props}
      src={imageUrl(src)}
      alt={alt}
      data-image-source={src}
      className={`${className}${isUnsplash ? ' image-unsplash' : ''}`.trim()}
      decoding="async"
      onError={(event) => {
        if (imageUrl(src) !== src && event.currentTarget.dataset.triedOriginal !== 'true') {
          event.currentTarget.dataset.triedOriginal = 'true'
          event.currentTarget.src = src
        }
        onError?.(event)
      }}
    />
  )
}
