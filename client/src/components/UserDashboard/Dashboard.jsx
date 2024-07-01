import React from 'react'

const Dashboard = ({ setTab, userData, logout }) => {
  return (
    <div>
      <h1>Hello <span className='font-medium'>{userData.username}</span> ( not <span className='font-medium'>{userData.username}? <span onClick={logout} className='text-red-500'>Logout</span></span> )</h1>

      <p className='mt-4 text-[0.95rem]'>From you account dashboard, you can view your <span className='text-red-500' onClick={()=>setTab("orders")}>recent orders,</span> manage your <span className='text-red-500' onClick={()=>setTab("address")}>shipping and billing addresses,</span> and <span className='text-red-500' onClick={()=>setTab("details")}>edit your password and account details</span></p>
    </div>
  )
}

export default Dashboard