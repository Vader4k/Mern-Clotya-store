import { useContext, useState, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Card from "./Card"
import CategoryButton from './CategoryButton'


const TopBrands = () => {

  const {allProducts} = useContext(ShopContext)
  const [active, setActive] = useState("men")
  //filters the products array to get the product whose active name exists in its category array
  const [brands, setBrands] = useState([])

  useEffect(() => {
    setBrands(allProducts.filter(item => item.category.some(cat => cat.name.toLowerCase() === active)))
  }, [active, allProducts])

  const filterProducts = (categoryName) => {
    setBrands(allProducts.filter(item => item.category.some(cat => cat.name.toLowerCase() === categoryName)));
  };


  const products = brands.slice(0,8)

  const data = [
    {id:1, name: 'men'}, {id:2, name: 'women'}, {id:3, name: 'blouses & shirts'}, {id:4, name: 'outerwear'}
  ]

  return (
    <section className="px-3 w-full">
      <div className="flex flex-col items-center gap-3 md:flex-row items-end justify-between w-full">
        <h1 className="flex-1 text-[1.3rem] md:text-[2rem] font-medium">
          Our Top Seller Brands
        </h1>
        <div className="flex gap-6 md:text-[1.1rem]">
          {data.map((items) => (
            <ul key={items.id}>
              <li>
                <CategoryButton
                  name={items.name}
                  active={active}
                  setActive={setActive}
                  filterProducts={filterProducts} 
                />
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* carousel to handle each filtered items */}
      <div className='lg:block hidden relative'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {products.slice(0, 4).map((item) => (
                  <Card key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {products.slice(4, 8).map((item) => (
                  <Card key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
      {/* medium screen */}
      <div className='hidden md:block lg:hidden relative'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {products.slice(0, 3).map((item) => (
                  <Card key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {products.slice(3, 6).map((item) => (
                  <Card key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {products.slice(5, 8).map((item) => (
                  <Card key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
      {/* {small screens} */}
      <div className='block md:hidden relative'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {products.slice(0, 2).map((item) => (
                  <Card key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {products.slice(2, 4).map((item) => (
                  <Card key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {products.slice(4, 6).map((item) => (
                  <Card key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {products.slice(6, 8).map((item) => (
                  <Card key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
    </section>
  )
}

export default TopBrands