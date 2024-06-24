import Router from '../route/Router'
import { Navbar, Footer, Menubar } from '../components'

const Layout = () => {
  return (
    <section>
        <Navbar />
        <Router />
        <Footer />
        <Menubar />
    </section>
  )
}

export default Layout