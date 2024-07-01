import { Routes, Route } from 'react-router-dom'
import { 
    Home,
    Auth,
    BlogDetail,
    Cart,
    Favorites,
    ProductDetail,
    Shop,
    NotFound,
    About,
    Privacy,
    Returns,
    Reset,
    UserDashboard
} from '../pages'
import ProtectedRoutes from './ProtectedRoutes'

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
            <Route path="/login" element={<Auth />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/returns" element={<Returns />} /> 
            <Route path="/reset" element={<Reset />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<UserDashboard />} />
            </Route>
        </Routes>
    </>
  )
}

export default Router