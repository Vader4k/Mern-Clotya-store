import Router from '../route/Router'
import { Navbar, Footer, Menubar, Newsletter } from '../components'

const Layout = () => {
  return (
    <section className='relative w-full'>
        <Navbar />
        <Router />
        <Newsletter />
        <div className='mb-[80px]'>
        <Footer />
        </div>
        <div className='bg-white w-full block lg:hidden fixed bottom-0 max-h-[60px] h-full border-t border-gray-200 py-3 z-[99]'>
          <Menubar />
        </div>
    </section>
  )
}

export default Layout