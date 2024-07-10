import React, { useState } from 'react'
import { FiLoader } from "react-icons/fi";
import { makePostRequest, errorMsg, successMsg } from '../hooks';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
    const navigate = useNavigate()
    const [tab, setTab] = useState('initializeReset')
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleResetRequest = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await makePostRequest('/requestReset', {email})
            if(response?.data?.success === true){
                setLoading(false)
                successMsg(response?.data?.message)
                setTab('success')
                setEmail('')
            }
            errorMsg(response?.errorMsg)
            errorMsg(response.message)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const handleChangePassword = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await makePostRequest('/resetPassword', {token, newPassword})
            if(response?.data?.success === true){
                setLoading(false)
                successMsg(response?.data?.message)
                navigate('/login')
            }
            errorMsg(response?.errorMsg)
            errorMsg(response.message)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
  return (
    <section className='w-full px-3 max-w-[1300px] md:my-20 my-10 mx-auto'>
        {tab === 'initializeReset' && 
            <div>
                <h1>Lost your password? Please enter your email address. You will receive a token to create a new password via email.</h1>
                <form
                onSubmit={handleResetRequest}
                >
                    <div className='my-6 text-[0.9rem]'>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={(e)=> setEmail(e.target.value)} 
                            type='email' 
                            id='email' 
                            disabled={loading}
                            className='w-full px-3 py-2 text-gray-700 border border-gray-300 outline-none focus:outline-none focus:border-blue-600' 
                        />
                    </div>
                    <button
                    type='submit'
                    className='bg-red-500 px-3 py-2 text-center flex items-center justify-center text-white'
                    >
                        {loading ? <FiLoader/> : 'Reset password'}
                    </button>
                </form>
            </div>
        }
        {tab === 'success' && 
            <div className='flex flex-col gap-5 w-full'>
                <div className='border p-3 text-[0.9rem]'>password reset token email has been sent</div>
                <form
                    onSubmit={handleChangePassword}
                >
                    <div>
                        <label className='text-[0.85rem]' htmlFor="token">Enter Token</label>
                        <input 
                            type="text" 
                            onChange={(e)=> setToken(e.target.value)}
                            className='w-full px-3 py-2 text-gray-700 border outline-none'
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label className='text-[0.85rem]' htmlFor="password">Enter New Password</label>
                        <input 
                            type="password" 
                            onChange={(e)=> setNewPassword(e.target.value)}
                            className='w-full px-3 py-2 text-gray-700 border outline-none'
                            disabled={loading}
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-red-500 px-3 py-2 text-center flex items-center justify-center text-white'
                    >
                        {loading ? <FiLoader/> : 'Change'}
                    </button>
                </form>
            </div>
        }
    </section>
  )
}

export default Reset