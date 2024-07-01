import React from 'react'

const Address = ({ userData }) => {
  return (
    <div>
      <h1>The following addresses will be used on the checkout page by default.</h1>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-medium'>Billing address</h1>
          <button>Add</button>
          <div>{userData.address}</div>
        </div>


        <div>
          <h1 className='text-xl font-medium'>Shipping address</h1>
        </div>
      </div>
    </div>
  )
}

export default Address