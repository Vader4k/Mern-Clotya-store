import { 
  Categories, 
  Headtags, 
  Hero,
  FeaturedProducts 
} from '../components'

const Home = () => {
  return (
    <main>
      <Headtags pageTitle="Home"/>
      <Hero />
      <section className='max-w-[1300px] mx-auto flex flex-col gap-10 lg:gap-20'>
        <Categories />
        <FeaturedProducts />
      </section>
    </main>
  )
}

export default Home