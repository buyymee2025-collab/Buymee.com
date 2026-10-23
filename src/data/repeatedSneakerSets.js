// The owner explicitly requested these repeated Cloudinary sets as separate cards.
// Reuse the matching source listing's details; each gallery starts with a side view.
const cloud = 'https://res.cloudinary.com/hobndbjx/image/upload/'
const img = number => `IMG_${number}_edited`
export const REPEATED_SNEAKER_SETS = [
  [60004, [4368, 4367, 4369, 4370].map(img)],
  [60006, [4376, 4375, 4377, 4378].map(img)],
  [60018, [4438, 4437, 4439, 4440].map(img)],
  [60020, [4471, 4470, 4473, 4474].map(img)],
  [60020, [4496, 4495, 4497, 4498].map(img)],
  [60020, [4520, 4519, 4521, 4522].map(img)],
  [60026, [4501, 4500, 4502, 4503].map(img)],
  [60028, [4446, 4445, 4447, 4448].map(img)],
  [60028, [4530, 4529, 4531, 4532].map(img)],
  [60036, [4334, 4335, '4357_4'].map(img)],
  [60044, ['e253be8d-385d-4d5c-a387-59924eaeb2c2', 'e822b9a8-4fe3-4f41-9d2c-9b4daf2aa7a3', '0b92e274-19cb-4cf5-afc6-7b325caa4bde']],
  [60045, ['915b1faf-aaf4-4780-86f0-c4a09430321b', 'a5309200-e625-41b2-8396-40495fd11cc6', 'a5473b60-2334-4a17-b18c-c442c7fac6ce', 'cb99a898-5c0c-4b53-91fe-691a1a843037']],
  [60045, ['9fb7df29-2781-4f3a-9086-6e7374d36f53', 'fdc309ff-5100-4f03-bc82-5b260513d28c', '9a6391c7-04fd-42c4-8984-08015afe61e1']]
]
export function appendRepeatedSneakerSets(catalog) {
  const repeated = REPEATED_SNEAKER_SETS.map(([sourceId, images], index) => {
    const source = catalog.find(product => product.category === 'Sneakers' && product.id === sourceId)
    if (!source) throw new Error(`Missing source sneaker ${sourceId}`)
    const productCode = `SN-${String(index + 61).padStart(3, '0')}`
    const gallery = images.map(publicId => cloud + publicId)
    const color = source.colors?.[0] || 'As shown'
    const media = gallery.map(src => ({ type: 'image', src, color }))
    return { ...source, id: 61001 + index, parentProductId: 61001 + index,
      productCode, slug: `sneakers-cloudinary-${productCode.toLowerCase()}`,
      image: gallery[0], secondaryImage: gallery[1], gallery, images: gallery, media,
      variants: [{ ...source.variants?.[0], color, image: gallery[0], media }],
      mediaRevision: 'sneakers-repeats-owner-request-2026-10-23',
      sourceProductId: sourceId }
  })
  return [...catalog, ...repeated]
}

// Preserve the selected first eight cards, then distribute the separate photo sets.
// A stable order keeps each product's SN code and gallery attached to its identity.
export function scatterSneakerSets(catalog) {
  const sneakers = catalog.filter(product => product.category === 'Sneakers')
  const extras = sneakers.filter(product => product.sourceProductId != null)
  if (!extras.length) return catalog
  const original = sneakers.filter(product => product.sourceProductId == null)
  const layout = []
  for (let index = 0; index < original.length; index++) {
    layout.push(original[index])
    if (index >= 11 && (index - 11) % 4 === 0 && layout.filter(item => item === null).length < extras.length) layout.push(null)
  }
  while (layout.filter(item => item === null).length < extras.length) layout.push(null)
  const slots = layout.flatMap((item, index) => item === null ? [index] : [])
  const sourcePositions = new Map(layout.flatMap((item, index) => item ? [[String(item.id), index]] : []))
  const assigned = []
  const place = (slotIndex, remaining) => {
    if (slotIndex === slots.length) return true
    const position = slots[slotIndex]
    for (let index = 0; index < remaining.length; index++) {
      const product = remaining[index]
      const source = String(product.sourceProductId)
      if (Math.abs(position - sourcePositions.get(source)) < 8) continue
      if (assigned.some(item => String(item.product.sourceProductId) === source && Math.abs(position - item.position) < 8)) continue
      assigned.push({ position, product })
      if (place(slotIndex + 1, remaining.filter((_, candidate) => candidate !== index))) return true
      assigned.pop()
    }
    return false
  }
  if (!place(0, extras)) throw new Error('Unable to distribute sneaker sets with sufficient spacing')
  for (const { position, product } of assigned) layout[position] = product
  let next = 0
  return catalog.map(product => product.category === 'Sneakers' ? layout[next++] : product)
}
