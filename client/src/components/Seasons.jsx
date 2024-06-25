import ShopButton from "./ShopButton"

const Seasons = () => {
  return (
    <section className="w-full px-3">
      <div className="flex flex-col md:flex-row justify-center justify-between gap-6">
        <div className="flex-1 bg-jewellery w-full min-h-[300px] bg-no-repeat bg-center sm:bg-cover">
          <div className="flex flex-col gap-2 p-8">
            <h3 className="text-[0.8rem] font-medium">NEW SEASON</h3>
            <div className="text-[1.5rem] md:text-[2rem] leading-10 font-medium">
              <h1>Show your best</h1>
              <h1>jewellery of your life</h1>
            </div>
            <span className="my-5 text-gray-500"> Don{"'"}t miss this opportunity</span>
            <ShopButton style={'black'} text="Shop Now"/>
          </div>
        </div>

        <div className="flex-1 bg-fashion w-full min-h-[300px] bg-no-repeat bg-center sm:bg-cover">
        <div className="flex flex-col gap-2 p-8">
            <h3 className="text-[0.8rem] font-medium">NEW SEASON</h3>
            <div className="text-[1.5rem] md:text-[2rem] leading-10 font-medium">
              <h1>How well do you</h1>
              <h1>Know street fashion?</h1>
            </div>
            <span className="my-5 text-gray-500"> Don{"'"}t miss this opportunity</span>
            <ShopButton style={'black'} text="Shop Now"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Seasons