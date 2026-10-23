import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { useStore } from '../context/StoreContext'

const categories = [
  'all',
  'new in',
  'women',
  'luxury women silk',
  'men',
  'dresses',
  'watches',
  'sneakers',
  'shoes',
  'eye wears',
  'fragrance',
  'luxury rings',
  'accessories',
]

// Cycle through categories without changing each category's internal order.
function mixProductCategories(products) {
  const groups = new Map()
  for (const product of products) {
    const key = product.category.toLowerCase()
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(product)
  }
  const preferred = ['watches', 'men', 'women', 'shoes', 'sneakers', 'eye wears', 'fragrance', 'accessories']
  const order = [...preferred.filter(key => groups.has(key)), ...[...groups.keys()].filter(key => !preferred.includes(key))]
  const mixed = []
  for (let row = 0; mixed.length < products.length; row++) {
    for (const key of order) {
      const product = groups.get(key)[row]
      if (product) mixed.push(product)
    }
  }
  return mixed
}

export default function ShopGrid({ initial = 'all', limit, categoryOnly = false, mixCategories = false }) {
  const { products } = useStore()
  const [category, setCategory] = useState(initial)
  const [sort, setSort] = useState('featured')
  const [query, setQuery] = useState('')

  const list = useMemo(() => {
    const catalog = products

    const filtered = catalog.filter((product) => {
      const matchesCategory =
        category === 'all' ||
        (category === 'new in'
          ? product.newArrival
          : product.category.toLowerCase() === category ||
            (product.subcategory || '').toLowerCase() === category)

      const matchesSearch =
        !query || product.name.toLowerCase().includes(query.toLowerCase())

      return matchesCategory && matchesSearch
    })

    if (sort === 'low') filtered.sort((a, b) => a.price - b.price)
    if (sort === 'high') filtered.sort((a, b) => b.price - a.price)
    if (sort === 'new') {
      filtered.sort((a, b) => Number(b.newArrival) - Number(a.newArrival))
    }

    const ordered = mixCategories && category === 'all' && sort === 'featured'
      ? mixProductCategories(filtered) : filtered
    return limit ? ordered.slice(0, limit) : ordered
  }, [category, initial, limit, products, query, sort, mixCategories])

  return (
    <>
      <div className="shop-tools">
        {!categoryOnly && <div className="category-scroll">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={category === item ? 'active' : ''}
              onClick={() => setCategory(item)}
            >
              {item === 'luxury rings' ? 'Luxury Rings' : item === 'fragrance' ? 'Luxury Fragrance' : item === 'eye wears' ? 'Luxury Eye Wears' : item === 'luxury women silk' ? 'Luxury Women Silk' : item}
              {category === item && <b>✓</b>}
            </button>
          ))}
        </div>}

        <div className="tool-right">
          <label className="search-field">
            ⌕
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the edit"
              aria-label="Search the edit"
            />
          </label>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="new">Newest</option>
            <option value="low">Price — Low to High</option>
            <option value="high">Price — High to Low</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {list.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </div>

      {!list.length && (
        <div className="no-results">
          <h2>Nothing found.</h2>
          <p>Try another part of the edit.</p>
        </div>
      )}
    </>
  )
}
