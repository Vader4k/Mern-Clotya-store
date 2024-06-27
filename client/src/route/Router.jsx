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
    Shop,
    NotFound
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
            <Route path="/product" element={<ProductDetail />}>
              <Route path=":id" element={<ProductDetail/>}/>
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </section>
  )
}

export default Router