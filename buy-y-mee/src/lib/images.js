import imageMap from '../data/imageMap.json'

export function imageUrl(source) {
  return imageMap[source] || source
}
