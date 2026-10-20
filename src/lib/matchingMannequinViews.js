// Visually compared front, side, lens tint, frame and temple hardware.
export const MATCHING_MANNEQUIN_VIEWS = {
  "26210": {
    "code": "GL099",
    "existingPair": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3940-front-view",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3941-angle-view"
    ],
    "addedViews": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4203",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4202"
    ]
  },
  "26211": {
    "code": "GL100",
    "existingPair": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3942-front-view",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3943-angle-view"
    ],
    "addedViews": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4200",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4201"
    ]
  },
  "26212": {
    "code": "GL101",
    "existingPair": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3944-front-view",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3945-angle-view"
    ],
    "addedViews": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4198",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4199"
    ]
  },
  "26213": {
    "code": "GL102",
    "existingPair": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3946-front-view",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3947-angle-view"
    ],
    "addedViews": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4196",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4197"
    ]
  },
  "26214": {
    "code": "GL103",
    "existingPair": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3948-front-view",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_3949-angle-view"
    ],
    "addedViews": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4194",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4195"
    ]
  }
}

export function appendMatchingMannequinViews(product) {
  const match = product.category === 'Eye Wears' && MATCHING_MANNEQUIN_VIEWS[String(product.id)]
  if (!match) return product
  const media = product.media?.length ? product.media : (product.gallery || []).map(src => ({ type: 'image', src }))
  if (!match.existingPair.every(src => media.some(item => item.src === src))) return product
  const missing = match.addedViews.filter(src => !media.some(item => item.src === src))
  if (!missing.length) return product
  const added = missing.map(src => ({ type: 'image', src }))
  const combined = [...media, ...added]
  const gallery = combined.filter(item => item.type === 'image').map(item => item.src)
  const variants = product.variants?.length === 1 ? product.variants.map(variant => ({ ...variant, media: [...(variant.media || media), ...added.filter(item => !(variant.media || media).some(old => old.src === item.src))] })) : product.variants
  return { ...product, media: combined, gallery, images: gallery, variants }
}
