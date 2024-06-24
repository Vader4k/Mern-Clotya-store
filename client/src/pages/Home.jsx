import { 
  Categories, 
  Headtags, 
  Hero, 
} from '../components'

const Home = () => {
  return (
    <main>
      <Headtags pageTitle="Home"/>
      <Hero />
      <section className='max-w-[1300px] mx-auto'>
        <Categories />
      </section>
    </main>
  )
}

export default Home