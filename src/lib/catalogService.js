import { adminClient, backendRequest } from './adminClient'
import { validateProduct } from './catalog'
export async function fetchCatalog() {
  if (!adminClient) return []
  return await backendRequest('/rest/v1/rpc/public_catalog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' }) || []
}
export async function saveProduct(product, deleted = false) {
  validateProduct(product)
  const data = await backendRequest('/rest/v1/catalog_products?on_conflict=id&select=id', { method: 'POST', headers: { 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates,return=representation' }, body: JSON.stringify({ id: String(product.id), slug: product.slug, payload: product, deleted, updated_at: new Date().toISOString() }) }, true)
  if (!data?.length) throw new Error('The product was not saved. Check your admin access.')
}
export async function uploadMedia(file) {
  if (!['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'video/mp4', 'video/webm'].includes(file.type)) throw new Error('Use JPG, PNG, WebP, AVIF, MP4 or WebM files.')
  if (file.size > 50 * 1024 * 1024) throw new Error('Each file must be smaller than 50 MB.')
  const extension = file.name.split('.').pop().toLowerCase().replace(/[^a-z0-9]/g, '')
  const path = `products/${crypto.randomUUID()}.${extension}`
  await backendRequest(`/storage/v1/object/product-media/${path}`, { method: 'POST', headers: { 'Content-Type': file.type, 'Cache-Control': 'max-age=31536000', 'x-upsert': 'false' }, body: file }, true)
  return { type: file.type.startsWith('video/') ? 'video' : 'image', src: `${import.meta.env.VITE_SUPABASE_URL.replace(/\/$/, '')}/storage/v1/object/public/product-media/${path}` }
}
