import { useContext } from "react"
import { ShopContext } from '../context/ShopContext'
import Card from "./Card";
import ShopButton from "./ShopButton";

const BestSeller = () => {

  const { allProducts } = useContext(ShopContext); // handles all products fetching
  const gowns = allProducts.filter(item => item.category.some(cat=> cat.name === 'gown'))
  const shirt = allProducts.filter(item => item.category.some(cat=> cat.name === 't-shirt'))

  return (
    <section className="px-3">
      <div className="flex flex-col gap-3 items-center text-center">
        <h1 className="text-[1.5rem] md:text-[2rem] font-medium">Best Seller Products</h1>
        <p className="font-light text-gray-500 max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat voluptatum eveniet doloremque. Delectus sint, vel, ad dignissimos reiciendis soluta incidunt sequi maxime eos distinctio culpa quis tenetur! Vero quasi quibusdam porro!</p>
      </div>

      <div className="py-5 flex flex-col lg:flex-row gap-8 items-center justify-between w-full border-b border-gray-300">
        <div className="flex flex-col sm:flex-row items-center sm:gap-8 w-full">
          {gowns.slice(0,2).map((item)=> (
            <Card key={item.id} props={item}/>
          ))}
        </div>
        <div className="bg-winter3 flex items-center justify-start h-[400px] sm:h-[500px] mb-14 bg-cover bg-no-repeat w-full text-white">
          <div className="px-6 sm:px-14 flex flex-col gap-2 sm:gap-6">
            <h3 className="text-[0.8rem] font-medium">WINTER 2022 COLLECTION</h3>
            <div className="leading-10 text-[1.5rem] md:text-[2.5rem] font-medium">
              <h1>Aenean id sapien sit</h1>
              <h1>amet urna laoreet</h1>
            </div>
            <p className="text-gray-300 max-w-[400px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            <ShopButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-8 items-center justify-between w-full">
        <div className="flex flex-col sm:flex-row items-center sm:gap-8 w-full">
          {shirt.slice(0,2).map((item)=> (
            <Card key={item.id} props={item}/>
          ))}
        </div>
        <div className="bg-winter4 flex items-center justify-start h-[400px] sm:h-[500px] mb-14 bg-cover bg-no-repeat w-full text-white">
          <div className="px-6 sm:px-14 flex flex-col gap-2 sm:gap-6">
            <h3 className="text-[0.8rem] font-medium">WINTER 2022 COLLECTION</h3>
            <div className="leading-10 text-[1.5rem] md:text-[2.5rem] font-medium">
              <h1>Aenean id sapien sit</h1>
              <h1>amet urna laoreet</h1>
            </div>
            <p className="text-gray-300 max-w-[400px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            <ShopButton />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between py-5">
        <div className="w-full h-[300px] sm:h-[500px] flex items-center justify-center bg-pink-50">
          <div className="flex items-center text-center flex-col sm:gap-2">
            <h3 className="uppercase font-medium text-[0.85rem]">summer collection</h3>
            <h1 className="text-[1.5rem] sm:text-[2.5rem] lg:text-[3rem] leading-6 md:leading-[2.5rem] lg:leading-[3.5rem] md:max-w-[300px] lg:max-w-[400px]">Riss commodo viverra maercenas accumsan.</h1>
            <p className="text-[0.9rem] sm:text-[1rem] text-gray-500 md:max-w-[250px] lg:max-w-[400px] my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sunt velit eligendi facere temporibus? Eius.</p>
            <div className="px-6 py-3 sm:px-8 sm:py-4 border border-red-500 hover:bg-red-500 transition-all">
              <ShopButton style='text-red-500 hover:text-white transition-all' />
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] sm:h-[500px] bg-summer bg-cover bg-no-repeat"/>
      </div>
    </section>
  )
}

export default BestSeller