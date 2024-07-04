import React from 'react'

const Billing = ({ userData }) => {
  return (
    <div>
      <h1 className='font-medium'>Billing address</h1>
      <form className='flex flex-col gap-3 my-3 text-[0.9rem]'>
        <div>
          <label htmlFor="name">First name ..*..</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            className='outline-none border p-3' 
            placeholder={`${userData?.firstName}`}
          />
        </div>

      </form>
    </div>
  )
}

export default Billing