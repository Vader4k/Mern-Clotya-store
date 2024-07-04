import { useState } from "react"
import { 
  makePutRequest, 
  errorMsg, 
  successMsg, 
  getCookie 
} from "../../hooks"


const Details = ({ userData}) => {

  const [credentials, setCredentials] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(credentials.newPassword != credentials.confirmPassword){
      return errorMsg("password do not match")
    }

    try {
      const response = await makePutRequest('/changePassword',{
        password: credentials.password,
        newPassword: credentials.newPassword,
      }, getCookie("auth_token"))
      
      if(response.errorMsg){
        errorMsg(response.errorMsg)
      }
      
      successMsg(response.message)
      setCredentials({
        password: '',
        newPassword: '',
        confirmPassword: '',
      })
    } catch (error) {
      errorMsg(error.message)
    }
  }

  return (
    <div className='flex flex-col gap-3 w-full'>
      <div className='w-full flex flex-col gap-2'>
        <h3 className='text-[0.85rem]'>First name *</h3>
        <input 
          type="text" 
          disabled placeholder={userData?.firstName}
          className='tex-[0.9rem] p-2 w-full border'
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <h3 className='text-[0.85rem]'>Last name *</h3>
        <input 
          type="text" 
          disabled placeholder={userData?.lastName}
          className='tex-[0.9rem] p-2 w-full border'
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <h3 className='text-[0.85rem]'>Display name *</h3>
        <input 
          type="text" 
          disabled placeholder={userData?.username}
          className='tex-[0.9rem] p-2 w-full border'
        />
        <p className='text-[0.85rem] italic m-0'>This will be how your name will be displayed in the account section in the review</p>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <h3 className='text-[0.85rem]'>Email address *</h3>
        <input 
          type="text" 
          disabled placeholder={userData?.email}
          className='tex-[0.9rem] p-2 w-full border'
        />
      </div>
      <h1 className='font-medium mt-5'>Password Change</h1>
      <form
      onSubmit={handleSubmit}
        className='flex flex-col gap-4 items-start' 
      >
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="password">Current password (leave blank to leave unchanged)</label>
          <input 
            type="password"
            className='p-2 w-full border'
            name = 'password'
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="newpassword">New password (leave blank to leave unchanged)</label>
          <input 
            type="password"
            className='p-2 w-full border'
            name = 'newPassword'
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="password">Confirm password</label>
          <input 
            type="password"
            className='p-2 w-full border'
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <button 
          type="submit"
          className="p-2 bg-red-500 text-white text-[0.9rem]">
            Save changes
          </button>
      </form>
    </div>
  )
}

export default Details