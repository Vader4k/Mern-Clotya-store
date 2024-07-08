import React from 'react'

const Address = ({ userData, setBilling }) => {
  return (
    <div>
      <h1>The following addresses will be used on the checkout page by default.</h1>
      <div className='mt-5'>
        <div>
          <h1 className='font-medium'>Billing address</h1>
          <button 
            className='text-red-500 mt-3' 
            onClick={setBilling}
          >
            {userData?.address ? 'Edit' : 'Add'}
          </button>
          <div>
            <p>{userData?.firstName} {userData?.lastName}</p>
            <p>{userData?.address?.street}</p>
            <p>{userData?.address?.state}, {userData?.address?.zip}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address