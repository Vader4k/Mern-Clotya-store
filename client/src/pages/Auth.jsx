import { Headtags } from '../components'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {

  const [tab, setTab] = useState('login')

  return (
    <section className="w-full my-20 max-w-[550px] h-full min-h-[600px] mx-auto p-8 border rounded-sm">
      <Headtags pageTitle="My Account"/>
      <div className='w-full p-8'>
        <div className='flex justify-center items-center w-full gap-5 text-[1.2rem] font-medium'>
          <button
            onClick={()=> setTab("login")}
            className={`${tab === "login" ? 'text-black' : 'text-gray-400'}`}
          >
            LOGIN
          </button>
          <button
            onClick={()=> setTab("register")}
            className={`${tab === "register" ? 'text-black' : 'text-gray-400'}`}
          >
            REGISTER
          </button>
        </div>

        <div className='mt-8'>
          {tab === 'login' && 
            <div className='w-full'>
              <form className='flex flex-col gap-10 mb-8'>
                <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="email">Enter Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name='email' 
                    className="w-full py-2 px-4 text-gray-500 outline-none border"
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="password">Enter Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    name='password' 
                    className="w-full px-4 py-2 text-gray-500 outline-none border"
                  />
                </div>
                <button 
                  type='submit'
                  className='w-full bg-red-500 px-3 py-2 text-white'
                >
                  Log in
                </button>
              </form>
              <Link to='/reset'>
                <span className='text-red-500 hover:text-blue-500'>Lost your password?</span>
              </Link>
            </div>
          }
          {tab === 'register' && (
            <div className='w-full'>
              <form className='flex flex-col gap-6 mb-8'>
              <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="username">Enter Your Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    name='username' 
                    className="w-full border py-2 px-4 text-gray-500 outline-none"
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="email">Enter Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name='email' 
                    className="w-full py-2 border px-4 text-gray-500 outline-none"
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="password">Enter Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    name='password' 
                    className="w-full px-4 py-2 text-gray-500 outline-none border"
                  />
                </div>
                <p className='text-[0.85rem]'>
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-red-500'>privacy policy</span>.
                </p>
                <button 
                  type='submit'
                  className='w-full bg-red-500 px-3 py-2 text-white'
                >
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Auth