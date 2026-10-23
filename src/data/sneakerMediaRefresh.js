// Cloudinary hobndbjx uploads reviewed on 23 October 2026.
// Keep product identities, codes, prices, sizes and colourways intact.
// Each set starts with the side view, followed by front, heel and sole views.
// Product 129 has only a new front view; no side view was supplied for that pair.
// Near-identical repeat uploads are intentionally omitted.
const studioMediaByProduct = {
  "134": [
    "IMG_4322_edited",
    "IMG_4321_edited",
    "IMG_4323_edited",
    "IMG_4324_edited"
  ],
  "132": [
    "IMG_4326_edited",
    "IMG_4325_edited",
    "IMG_4327_edited",
    "IMG_4328_edited"
  ],
  "69": [
    "IMG_4330_edited",
    "IMG_4329_edited",
    "IMG_4331_edited",
    "IMG_4332_edited"
  ],
  "129": [
    "IMG_4333_edited"
  ],
  "70": [
    "IMG_4334_edited",
    "IMG_4335_edited",
    "IMG_4336_edited"
  ],
  "139": [
    "IMG_4338_edited",
    "IMG_4337_edited",
    "IMG_4339_edited",
    "IMG_4340_edited"
  ],
  "133": [
    "IMG_4342_edited",
    "IMG_4341_edited",
    "IMG_4344_edited",
    "IMG_4345_edited"
  ],
  "65": [
    "IMG_4347_edited",
    "IMG_4346_edited",
    "IMG_4348_edited",
    "IMG_4349_edited"
  ],
  "57": [
    "IMG_4352_edited",
    "IMG_4351_edited",
    "IMG_4353_edited",
    "IMG_4354_edited"
  ],
  "67": [
    "IMG_4356_edited",
    "IMG_4355_edited",
    "IMG_4357_edited"
  ],
  "59": [
    "IMG_4359_edited",
    "IMG_4358_edited",
    "IMG_4360_edited",
    "IMG_4361_edited"
  ],
  "66": [
    "IMG_4364_edited",
    "IMG_4363_edited",
    "IMG_4365_edited",
    "IMG_4366_edited"
  ],
  "109": [
    "6b669de2-5b2b-4750-964b-e81ba99886fe",
    "289098b7-9c53-4298-9e19-139d72437a59",
    "43d66533-5b23-4b5c-9433-edf9400d03e0",
    "c212b375-9864-40dd-983d-acf6966584aa"
  ],
  "71": [
    "e2448b16-aeed-4e23-a7e6-ba358505bf0e",
    "b283dfd3-c4f1-427d-8219-f4935d4fbfb8",
    "fdcbc6a6-aed5-47ef-be55-b91f04905632",
    "b582a2e6-2c09-48fa-868a-ba120610e0df"
  ]
}

export function refreshSneakerMedia(product) {
  const publicIds = studioMediaByProduct[product.id]
  if (product.category !== 'Sneakers' || !publicIds) return product

  const studioGallery = publicIds.map(id => `https://res.cloudinary.com/hobndbjx/image/upload/${id}`)
  const gallery = [...new Set([...studioGallery, ...(product.gallery || [])])]
  const media = [
    ...studioGallery.map(src => ({ type: 'image', src })),
    ...(product.media || []).filter(item => !studioGallery.includes(item.src))
  ]
  const image = studioGallery[0]
  return {
    ...product,
    image,
    secondaryImage: studioGallery[1] || image,
    gallery,
    images: gallery,
    media,
    mediaRevision: 'sneakers-studio-2026-10-23',
    variants: product.variants.map(variant => ({ ...variant, image, media }))
  }
}
