import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'

const FeaturedProducts = () => {

  const { allProducts } = useContext(ShopContext)
  const {id} = useParams()

  const featured = allProducts.slice(0,9)
  console.log(featured)

  return (
    <section>
      <div className="flex items-start justify-between px-6">
        <h1 className="text-[2rem] font-medium w-full">Featured Products</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint impedit a, quia assumenda unde fugit consequatur ad. Sit, esse tenetur? Harum a culpa vitae totam quaerat recusandae ratione, consequuntur temporibus.</p>
      </div>

      {featured.map((item) => (
        <Card props={item}/>
      ))}
    </section>
  )
}

export default FeaturedProducts