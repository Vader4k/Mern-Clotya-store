import { useState, useEffect } from "react"
import axios from "axios";
import { makePutRequest, getCookie, errorMsg, successMsg } from "../../hooks";

const Billing = ({ userData }) => {

  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  })

  useEffect(() => {
    if (userData) {
      setBillingInfo({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        street: userData.address?.street || "",
        city: userData.address?.city || "",
        state: userData.address?.state || "",
        zip: userData.address?.zip || "",
        phone: userData.phone || "",
      });
    }
  }, [userData]);

  const handleInputChange = (e) => {
    setBillingInfo({...billingInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await makePutRequest('/billingInfo', billingInfo, getCookie("auth_token"))
        if(response.error){
          errorMsg(response.error.message)
        }
        successMsg(response.data.message)
        console.log(response.data)
    } catch (error) {
      console.error(error)
      errorMsg("Failed to update billing info")
    }
  }

  return (
    <div>
      <h1 className='font-medium'>Billing address</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 my-3 text-[0.9rem] items-start'>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">First name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            required
            className='outline-none border p-2'
            value={billingInfo.firstName}
            onChange={handleInputChange} 
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
            value={billingInfo.lastName}
            onChange={handleInputChange} 
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
            value={billingInfo.street}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">Town / City</label>
          <input 
            type="text" 
            id="city" 
            name="city"
            className='outline-none border p-2'
            value={billingInfo.city}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">State</label>
          <input 
            type="text" 
            id="state" 
            name="state"
            className='outline-none border p-2'
            value={billingInfo.state} 
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">Zip Code</label>
          <input 
            type="text" 
            id="zip" 
            name="zip"
            className='outline-none border p-2' 
            value={billingInfo.zip}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label htmlFor="name">phone</label>
          <input 
            type="text" 
            id="phone" 
            name="phone"
            className='outline-none border p-2' 
            value={billingInfo.phone}
            onChange={handleInputChange}
          />
        </div>
        <button 
          type="submit"
          onClick={handleSubmit} 
          className='p-3 my-3 bg-red-500 text-white'>Save address</button>
      </form>
    </div>
  )
}

export default Billing