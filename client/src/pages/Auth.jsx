import { Headtags } from '../components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { makePostRequest, setCookie, errorMsg, successMsg } from '../hooks'
import { useNavigate } from 'react-router-dom'
import { FiLoader } from "react-icons/fi";


const Auth = () => {
  const navigate = useNavigate()

  const [tab, setTab] = useState('login')
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value })
  }

  const handleLogin = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await makePostRequest('/login', {
        email: credentials.email, 
        password: credentials.password
      })
      console.log(response)
      if(response.status === 400){
        setLoading(false)
        errorMsg(response.errorMsg)
      }
      setLoading(false)
      console.log("setting cookie...")
      setCookie("auth_token", response.data.token)
      successMsg(response.data.message)
      navigate('/dashboard')

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await makePostRequest('/register', credentials)
      
      if(response.status === 400){
        errorMsg(response.errorMsg)
        setLoading(false)
      }
      setLoading(false)
      console.log("setting cookie...")
      setCookie("auth_token", response.data.token)
      successMsg(response.data.message)
      navigate('/dashboard')
    } catch (error) {
      setLoading(false)
      console.log(error.message)
    }
  }

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
              <form
              onSubmit={handleLogin} 
              className='flex flex-col gap-10 mb-8'>
                <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="email">Enter Your Email</label>
                  <input
                    onChange={handleInputChange} 
                    type="email" 
                    id="email" 
                    name='email'
                    disabled={loading}
                    className="w-full py-2 px-4 text-gray-500 outline-none border"
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="password">Enter Password</label>
                  <input
                    onChange={handleInputChange} 
                    type="password" 
                    id="password" 
                    disabled={loading}
                    name='password' 
                    className="w-full px-4 py-2 text-gray-500 outline-none border"
                  />
                </div>
                <button 
                  type='submit'
                  className='w-full text-center flex items-center justify-center bg-red-500 px-3 py-2 text-white'
                >
                  { loading ? <FiLoader className='text-white text-center'/> : 'Log in'}
                </button>
              </form>
              <Link to='/reset'>
                <span className='text-red-500 hover:text-blue-500'>Lost your password?</span>
              </Link>
            </div>
          }
          {tab === 'register' && (
            <div className='w-full'>
              <form
                onSubmit={handleRegister} 
                className='flex flex-col gap-6 mb-8'>
              <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="username">Enter Your Username</label>
                  <input
                    onChange={handleInputChange} 
                    type="text" 
                    id="username" 
                    name='username' 
                    className="w-full border py-2 px-4 text-gray-500 outline-none"
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="email">Enter Your Email</label>
                  <input
                    onChange={handleInputChange} 
                    type="email" 
                    id="email" 
                    name='email' 
                    className="w-full py-2 border px-4 text-gray-500 outline-none"
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[0.8rem]' htmlFor="password">Enter Password</label>
                  <input
                    onChange={handleInputChange} 
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