export function optimizeImageUrl(src, width = 1200) {
  if (typeof src !== 'string' || !src.includes('res.cloudinary.com/') || !src.includes('/image/upload/')) return src
  if (src.includes('/f_auto') || src.includes('/q_auto')) return src
  return src.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`)
}

export function optimizeVideoUrl(src) {
  if (typeof src !== 'string' || !src.includes('res.cloudinary.com/') || !src.includes('/video/upload/')) return src
  if (src.includes('/f_auto') || src.includes('/vc_auto') || src.includes('/q_auto')) return src
  return src.replace('/video/upload/', '/video/upload/f_mp4,q_auto,vc_h264,w_1280/')
}
