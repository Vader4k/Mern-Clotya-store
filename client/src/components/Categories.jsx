
const Categories = () => {
  return (
    <section className='w-full lg:h-[84vh] px-6 flex flex-col gap-6 lg:flex-row items-center justify-between lg:gap-8'>
      <div className='w-full h-[400px] md:h-full lg:h-[84vh] bg-women bg-cover cursor-pointer'>
        <div className="p-6 md:p-10 flex flex-col">
          <h3 className="text-[0.85rem]">54 products</h3>
          <h1 className="text-[2rem]">Women</h1>
          <p className="text-[0.9rem] text-gray-400 max-w-[350px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut doloribus? Quas, voluptas.</p>
          <ul className="text-[0.9rem] my-6 md:my-10 flex flex-col gap-2">
            <li>Blazers</li>
            <li>Blouses & shirts</li>
            <li>Dresses</li>
            <li>Jackets & coats</li>
            <li>Jeans</li>
            <li>Knit</li>
            <li>Pants</li>
          </ul>
        </div>
      </div>
      <div className='w-full flex flex-col gap-8 h-full'>
        <div className='w-full h-full bg-men bg-center bg-no-repeat sm:bg-cover cursor-pointer'>
          <div className="p-10 flex flex-col">
            <h3 className="text-[0.85rem]">23 products</h3>
            <h1 className="text-[2rem]">Men</h1>
            <ul className="text-[0.9rem] my-10 flex flex-col gap-2">
              <li>Pants</li>
              <li>Shirts</li>
              <li>Shorts</li>
              <li>Sweatshirts & Hoodies</li>
            </ul>
          </div>
        </div>
        <div className='w-full h-full flex flex-col sm:flex-row  items-center justify-between gap-8'>
          <div className='w-full min-h-[300px] max-h-full bg-shoes bg-cover cursor-pointer'>
          <div className="p-10 flex flex-col">
            <h3 className="text-[0.85rem]">1 product</h3>
            <h1 className="text-[2rem]">Shoes</h1>
          </div>
          </div>
          <div className='w-full min-h-[300px] max-h-full bg-accessories bg-cover cursor-pointer'>
            <div className="p-10 flex flex-col">
              <h3 className="text-[0.85rem]">3 products</h3>
              <h1 className="text-[2rem]">Accessories</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
