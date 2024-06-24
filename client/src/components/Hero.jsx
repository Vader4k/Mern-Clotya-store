import HeroSlider from "./HeroSlider"
import { heroItems } from "../constants/products"

const Hero = () => {
  return (
    <section>
      <HeroSlider />
      <div className="w-full flex items-center justify-between max-w-[1300px] mx-auto">
        <div className="flex items-center justify-between w-full py-10 px-6 flex-wrap gap-8">
          {heroItems.map((item) => (
            <div key={item.id} className="flex items-center gap-6">
              <item.img className="md:text-[2.5rem] text-[2rem] font-jost"/>
              <div className="flex flex-col gap-3">
                <h1 className="text-[1.1rem] font-medium capitalize">{item.title}</h1>
                <p className="font-light text-[0.9rem] max-w-[200px] capitalize">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero