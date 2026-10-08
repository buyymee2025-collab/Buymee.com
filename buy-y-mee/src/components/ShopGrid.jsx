import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { useStore } from '../context/StoreContext'

const categories = [
  'all',
  'new in',
  'women',
  'men',
  'dresses',
  'watches',
  'sneakers',
  'shoes',
  'bags',
  'fragrance',
  'accessories',
]

export default function ShopGrid({ initial = 'all', limit, categoryOnly = false }) {
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
            product.subcategory.toLowerCase() === category)

      const matchesSearch =
        !query || product.name.toLowerCase().includes(query.toLowerCase())

      return matchesCategory && matchesSearch
    })

    if (sort === 'low') filtered.sort((a, b) => a.price - b.price)
    if (sort === 'high') filtered.sort((a, b) => b.price - a.price)
    if (sort === 'new') {
      filtered.sort((a, b) => Number(b.newArrival) - Number(a.newArrival))
    }

    return limit ? filtered.slice(0, limit) : filtered
  }, [category, initial, limit, products, query, sort])

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
              {item}
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
