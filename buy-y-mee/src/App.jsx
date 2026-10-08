import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StoreProvider } from './context/StoreContext'
import PageShell from './components/PageShell'
import Home from './pages/Home'
import { About, Shop, CategoryPage } from './pages/EditorialPages'
import { ProductDetail, Wishlist, Cart, Contact, NotFound } from './pages/CommercePages'
import './index.css'
import './motion.css'

const categoryPaths = ['/new-in', '/women', '/men', '/watches', '/sneakers', '/shoes', '/bags', '/fragrance', '/accessories']

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <PageShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            {categoryPaths.map((path) => <Route key={path} path={path} element={<CategoryPage path={path} />} />)}
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageShell>
      </BrowserRouter>
    </StoreProvider>
  )
}
