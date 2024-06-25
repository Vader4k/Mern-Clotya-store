import ShopButton from "./ShopButton"

const Seasons = () => {
  return (
    <section className="px-3 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-8 w-full">
        <div className="bg-jewellery px-8 py-16 md:p-14 bg-center md:bg-cover w-full flex flex-col gap-2 bg-no-repeat">
          <h3 className="text-[0.8rem] font-medium">NEW SEASON</h3>
          <div className="text-[1.5rem] md:text-[2rem] leading-10 font-medium">
            <h1>Show your best</h1>
            <h1>jewellery of your life</h1>
          </div>
          <span className="my-5 text-gray-500">Don{"'"}t miss the opportunity.</span>
          <ShopButton style={'black'} text="Shop Now"/>
        </div>
        <div className="bg-fashion px-10 py-16 md:p-14 bg-center md:bg-cover w-full flex flex-col gap-2 bg-no-repeat">
          <h3 className="text-[0.8rem] font-medium">NEW SEASON</h3>
          <div className="text-[1.5rem] md:text-[2rem] leading-10 font-medium">
            <h1>How well do you</h1>
            <h1>Know street fashion ?</h1>
          </div>
          <span className="my-5 text-gray-500">Don{"'"}t miss the opportunity.</span>
          <ShopButton style={'black'} text="Shop Now"/>
        </div>
      </div>
    </section>
  )
}

export default Seasons