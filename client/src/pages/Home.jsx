import { 
  Categories, 
  Headtags, 
  Hero,
  FeaturedProducts, 
  Seasons,
  TopBrands
} from '../components'

const Home = () => {
  return (
    <main>
      <Headtags pageTitle="Home"/>
      <Hero />
      <section className='max-w-[1300px] mx-auto flex flex-col gap-10 lg:gap-20'>
        <Categories />
        <FeaturedProducts />
        <Seasons />
        <TopBrands />
      </section>
    </main>
  )
}

export default Home