export const productCategories = ['Women', 'Men', 'Watches', 'Sneakers', 'Shoes', 'Eye Wears', 'Fragrance', 'Accessories']
export function mergeCatalog(base, rows) {
  const products = new Map(base.map(product => [String(product.id), product]))
  for (const row of rows) {
    if (row.deleted) products.delete(String(row.id))
    else products.set(String(row.id), { ...row.payload, id: products.get(String(row.id))?.id ?? row.id })
  }
  return [...products.values()]
}
export function validateProduct(product) {
  if (!product.name?.trim()) throw new Error('Enter a product name.')
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.slug || '')) throw new Error('Use lowercase letters, numbers and hyphens for the product link.')
  if (!productCategories.includes(product.category)) throw new Error('Choose a category.')
  if (!Number.isFinite(product.price) || product.price < 0) throw new Error('Enter a valid price of zero or more.')
  if (!product.image || !(/^(https:\/\/|\/images\/)/.test(product.image))) throw new Error('Add at least one HTTPS product image.')
  for (const item of product.media || []) if (!/^(https:\/\/|\/images\/)/.test(item.src)) throw new Error('Media links must start with https://.')
  return product
}
