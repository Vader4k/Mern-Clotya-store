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
    NotFound,
    About,
    Privacy,
    Returns,
    Reset
} from '../pages'

import { ScrollToTop } from '../components'


const Router = () => {
  return (
    <>
      <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/product" element={<ProductDetail />}>
              <Route path=":id" element={<ProductDetail/>}/>
            </Route>
            <Route path="/profile" element={<Auth />} />
            <Route path="/search" element={<Search />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/returns" element={<Returns />} /> 
            <Route path="/reset" element={<Reset />} />
        </Routes>
    </>
  )
}

export default Router