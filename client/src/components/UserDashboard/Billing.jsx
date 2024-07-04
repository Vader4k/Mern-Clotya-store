import React from 'react'

const Billing = ({ userData }) => {
  return (
    <div>
      <h1 className='font-medium'>Billing address</h1>
      <form className='flex flex-col gap-3 my-3 text-[0.9rem] items-start'>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">First name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            required
            className='outline-none border p-2' 
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">last name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName"
            required
            className='outline-none border p-2' 
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">Street address</label>
          <input 
            type="text" 
            id="street" 
            name="street"
            className='outline-none border p-2' 
            required
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">Town / City</label>
          <input 
            type="text" 
            id="city" 
            name="city"
            className='outline-none border p-2'
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">State</label>
          <input 
            type="text" 
            id="state" 
            name="state"
            className='outline-none border p-2' 
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">Zip Code</label>
          <input 
            type="text" 
            id="zip" 
            name="zip"
            className='outline-none border p-2' 
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">last name</label>
          <input 
            type="number" 
            id="phone" 
            name="phone"
            className='outline-none border p-2' 
          />
        </div>
        <button className='p-3 my-3 bg-red-500 text-white'>Save address</button>
      </form>
    </div>
  )
}

export default Billing