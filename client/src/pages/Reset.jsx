import React, { useState } from 'react'

const Reset = () => {

    const [tab, setTab] = useState('initializeReset')

  return (
    <section className='w-full px-3 max-w-[1300px] md:my-20 my-10 mx-auto'>
        {tab === 'initializeReset' && 
            <div>
                <h1>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</h1>
                <form>
                    <div className='my-6 text-[0.9rem]'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' className='w-full px-3 py-2 text-gray-700 border border-gray-300 outline-none focus:outline-none focus:border-blue-600' />
                    </div>
                    <button onClick={(e)=> {
                        e.preventDefault();
                        setTab('success');
                    }} className='bg-red-500 px-3 py-2 text-white'>Reset password</button>
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