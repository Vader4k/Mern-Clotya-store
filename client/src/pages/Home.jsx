import { 
  Categories, 
  Headtags, 
  Hero,
  FeaturedProducts, 
  Seasons,
  TopBrands,
  WinterSlider,
  BestSeller,
  Blog,
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
        <WinterSlider />
        <BestSeller />
        <Blog />
      </section>
    </main>
  )
}

export default Home