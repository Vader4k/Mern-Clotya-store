import { useState } from "react"
import Buttons from './ShopButton';
import image1 from '../assets/slider-1.jpg'
import image2 from '../assets/slider-2.jpg'
import image3 from '../assets/slider-3.jpg'

const HeroSlider = () => {

  const [index, setIndex] = useState(0)
  const data = [{ id: 1, img: image1 },{ id: 2, img: image2 },{ id: 3, img: image3 }]

  const prev = () => {
    setIndex(index === 0 ? 2 : (prev) => (prev -1))
  }

  const next = () => {
    setIndex(index === 2 ? 0 : (prev) => (prev + 1))
  }

  const goToSlide = (i) => {
    setIndex(i)
  }

 

  return (
    <section className='w-[100vw] overflow-hidden relative slider'>
      <div 
        className='carousel w-[300vw] h-[50vh] lg:h-[70vh] flex cursor-pointer'
        style={{transform: `translateX(-${index * 100}vw)`}}
      >
        <div className='relative h-full flex text-white font-jost'>
          {data.map((item) => (
            <div className="" key={item.id}>
              <img src={item.img} alt='carousel images' className='w-[100vw] h-full object-cover' />
              <div className="absolute top-0 flex flex-col items-center justify-center gap-6 py-28 w-[100vw] h-[50vh] lg:h-[70vh]">
                <p className="uppercase text-white font-semibold text-[0.8rem]">winter 2022 collection</p>
                <div className="text-center leading-[2.5rem] sm:leading-[3.5rem] md:leading-[4.5rem] lg:leading-[5.5rem] xl:leading-[6.5rem]">
                  <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-semibold uppercase">Valentin paul</h1>
                  <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-semibold uppercase">Essential collection</h1>
                </div>
                <p className="text-gray-400 max-w-[300px] text-center sm:max-w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <Buttons />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* left/ prev arrow control */}
      <div className="absolute direction left-0 top-[50%] bg-gray-200 cursor-pointer py-3 px-1">
        <img width="25" height="30" src="https://img.icons8.com/ios/100/back--v1.png" alt="back--v1" onClick={prev}/>
      </div>
      {/* right/ next arrow control */}
      <div className="absolute direction right-0 top-[50%] bg-gray-200 cursor-pointer py-3 px-1">
        <img width="25" height="30" src="https://img.icons8.com/ios/50/forward--v1.png" alt="forward--v1" onClick={next}/>
      </div>
      
      <div className="flex items-center justify-center gap-2 py-4 lg:hidden">
       {Array(3).fill(1).map((_,i) => (
          <div 
            key={i} 
            className={`w-[8px] h-[8px] rounded-full cursor-pointer ${index === i ? 'bg-gray-600' : 'bg-gray-300'}`}
            onClick={() => goToSlide(i)}
            />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider