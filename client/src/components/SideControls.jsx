import React from 'react'
import { useState } from 'react'

const SideControls = () => {

  const [ selectedCategory, setSelectedCategory ] = useState(null)
  const [ range, setRange ] = useState(0)
  console.log(range)

  const categories = [
    {id:1, name: 'Men'},
    {id:2, name: 'Women'},
    {id:3, name: 'Bags'},
    {id:4, name: 'Belts'},
    {id:5, name: 'Shoes'},
    {id:6, name: 'Outerwear'},
    {id:7, name: 'Cargo Trousers'},
    {id:8, name: 'Accessories'},
    {id:9, name: 'Baby'},
    {id:10, name: 'Kids'},
    {id:11, name: 'Wallets'},
    {id:12, name: 'Watches'},
  ]

  const handleRangeChange = (e) => {
    setRange(e.target.value)
  }

  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div>
          <h1 className='font-medium'>Product Categories</h1>
          <div className='flex flex-col text-[0.89rem]'>
            <div className='flex flex-col gap-3 my-5'>
              {categories.map((items) => (
                <div className='flex items-center gap-3'>
                  <input value={items.name} type='checkbox' name={items.name} />
                  <label htmlFor={items.id}>{items.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className='font-medium'>Filter by price</h1>
          <div className='flex items-center justify-between'>
            <div className='text-[0.9rem]'>
              <span className='text-gray-500'>price :</span> $0 -- ${range}
            </div>
            <button className='uppercase p-2 bg-gray-200 text-[0.8rem]'>filter</button>
          </div>
          <div className='my-3 w-full max-w-[200px]'>
              <input className='h-[2px] w-full appearance-none bg-red-500 outline-none' onChange={handleRangeChange} value={range} type='range' min='0' max='1200' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SideControls