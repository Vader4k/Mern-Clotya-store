import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import FeaturedCard from './FeaturedCard';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'



import { Pagination } from 'swiper/modules'

const FeaturedProducts = () => {
  const { allProducts } = useContext(ShopContext); // handles all products fetching
  const featured = allProducts.slice(0, 9);


  return (
    <section className="px-3 z-0">
      <div className="flex flex-col md:flex-row items-start justify-between ">
        <h1 className="text-[1.5rem] md:text-[2rem] font-medium w-full">Featured Products</h1>
        <p className="text-gray-500 font-light text-[0.9rem] md:text-[1.1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint impedit a, quia assumenda unde fugit consequatur ad. Sit, esse tenetur? Harum a culpa vitae totam quaerat recusandae ratione, consequuntur temporibus.
        </p>
      </div>
      <div className='md:block hidden relative'>
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
                {featured.slice(0, 3).map((item) => (
                  <FeaturedCard key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {featured.slice(3, 6).map((item) => (
                  <FeaturedCard key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {featured.slice(6, 9).map((item) => (
                  <FeaturedCard key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
      </div>

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
                {featured.slice(0, 2).map((item) => (
                  <FeaturedCard key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {featured.slice(2, 4).map((item) => (
                  <FeaturedCard key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {featured.slice(4, 6).map((item) => (
                  <FeaturedCard key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full flex gap-8'>
                {featured.slice(6, 8).map((item) => (
                  <FeaturedCard key={item.id} props={item} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
