import { Routes, Route } from 'react-router-dom'
import { 
    Home,
    Auth,
    BlogDetail,
    Cart,
    Favorites,
    ProductDetail,
    Profile,
    Search,
    Shop
} from '../pages'

const Router = () => {
  return (
    <section>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
    </section>
  )
}

export default Router