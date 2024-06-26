import apple from '../assets/app-store.png'
import google from '../assets/google-play.png'

const Newsletter = () => {
  return (
    <section className="h-full min-h-[400px] my-10 w-full gap-10 lg:gap-20 bg-black flex flex-col lg:flex-row items-center justify-evenly px-3 py-6">
      <div>
        <h1 className="text-[1.5rem] md:text-[2rem] font-medium max-w-[500px] leading-10 text-white">Get our emails for info on new items, sales and more.</h1>
        <p className="text-gray-400 mt-3 mb-5">We'll email you a voucher worth $10 off your first order over $50.</p>
       <div className="w-full flex items-center">
        <input 
          type="text" 
          placeholder="Enter Your Email Address"
          className="w-full max-w-[500px] h-[50px] px-4 text-gray-500 outline-none border-none bg-white"
        />
        <button 
          type="button"
          className="h-[50px] px-5 border border-gray-400 bg-black text-white hover:bg-gray-400"
        >
          Subscribe
        </button>
       </div>
       <p className="text-[0.75rem] text-gray-500 mt-4">By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy </p>
      </div>

      <div className='flex flex-col items-start'>
        <div className='text-[1.5rem] lg:text-[2rem] text-white font-medium'>
          <h1>Need help?</h1>
          <h1>(+800) 1234 4556 90 </h1>
        </div>
        <p className='text-gray-400 mb-5'>We are available 8:00am - 7:00pm</p>
        <div className='flex items-center justify-center gap-1'>
          <img src={apple} alt="apple-store" />
          <img src={google} alt="google-play-store" />
        </div>
        <p className="text-[0.75rem] text-gray-500 mt-4">Shopping Ap: Try our View in your Room feature, manage registries and save payment info</p>
      </div>
    </section>
  )
}

export default Newsletter