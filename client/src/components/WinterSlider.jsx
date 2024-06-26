import { useState } from "react";
import slide3 from '../assets/slider-13.jpg'
import slider14 from '../assets/slider-14.jpg'
import { GoDotFill } from "react-icons/go";
import ShopButton from "./ShopButton";

const WinterSlider = () => {
  // carousell images
  const data = [ slide3, slider14 ]

  // carousel states with direction button
  const [ currentSlide, setCurrentSlide ] = useState(0)

  const prev = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : (prev) => (prev -1))
  }

  const next = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : (prev) => (prev + 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='h-[60vh] w-full max-w-[1300px] overflow-hidden relative hero'>
      {/* collections banner */}
      <div className="carousel flex px-3 gap-5 w-[200%] h-full transition-transform duration-500" style={{transform:`translateX(-${currentSlide * 50}%)`}}>
        {data.map((slide, index) => (
          <div key={index} className="h-full flex items-center justify-center text-white w-full bg-no-repeat bg-center" style={{ backgroundImage: `url(${slide})` }}>
            <div className="flex flex-col gap-4 items-center p-4">
              <h3 className="text-[0.8rem] font-medium">WINTER 2022 COLLECTION</h3>
              <div className="text-[2rem] md:text-[4rem] font-medium text-center leading-[3rem] md:leading-[4rem]">
                <h1>VALENTIN PAUL ESSENTIAL</h1>
                <h1>COLLECTION</h1>
              </div>
              <p className="text-gray-300 pb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <ShopButton />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex md:bottom-[2%] xs:bottom-[3%] bottom-[5%] left-[50%] transform -translate-x-1/2 text-[1rem] md:text-gray-500 text-gray-400">
        {data.map((_, index) => (
          <GoDotFill
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer ${currentSlide === index ? 'text-white' : 'text-gray-300'} hover:text-white`}
          />
        ))}
      </div>
    </div>
  )
}

export default WinterSlider;
