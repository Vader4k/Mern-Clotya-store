import React, { useState } from 'react'
import { FiLoader } from "react-icons/fi";
import { makePostRequest, errorMsg, successMsg } from '../hooks';

const Reset = () => {

    const [tab, setTab] = useState('initializeReset')
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleResetRequest = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await makePostRequest('/requestReset', {email})
            console.log(response)
            if(response.data.success === false){
                errorMsg(response.data.message)
            }
            setLoading(false)
            successMsg(response.data.message)
            setTab('success')
            setEmail('')
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

  return (
    <section className='w-full px-3 max-w-[1300px] md:my-20 my-10 mx-auto'>
        {tab === 'initializeReset' && 
            <div>
                <h1>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</h1>
                <form
                onSubmit={handleResetRequest}
                >
                    <div className='my-6 text-[0.9rem]'>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={(e)=> setEmail(e.target.value)} 
                            type='email' 
                            id='email' 
                            className='w-full px-3 py-2 text-gray-700 border border-gray-300 outline-none focus:outline-none focus:border-blue-600' 
                        />
                    </div>
                    <button
                    type='submit'
                    className='bg-red-500 px-3 py-2 text-center flex items-center justify-center text-white'>{loading ? <FiLoader/> : 'Reset password'}</button>
                </form>
            </div>
        }
        {tab === 'success' && 
            <div className='flex flex-col gap-5 w-full'>
                <div className='border p-3 text-[0.9rem]'>password reset email has been sent</div>
                <p>A password reset email has been sent to the email address on file for your account, but may take several minutes to show up in your inbox. Please wait at least 10 minutes before attempting another reset.</p>
            </div>
        }
    </section>
  )
}

export default Reset