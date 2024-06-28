import React, { useState, useEffect } from 'react';

const SideControls = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [range, setRange] = useState(0);

  const categories = [
    { id: 1, name: 'Men' },
    { id: 2, name: 'Women' },
    { id: 3, name: 'Bags' },
    { id: 4, name: 'Belts' },
    { id: 5, name: 'Shoes' },
    { id: 6, name: 'Outerwear' },
    { id: 7, name: 'Cargo Trousers' },
    { id: 8, name: 'Accessories' },
    { id: 9, name: 'Baby' },
    { id: 10, name: 'Kids' },
    { id: 11, name: 'Wallets' },
    { id: 12, name: 'Watches' },
  ];

  const Size = [
    { id: 1, name: 'XXS' },
    { id: 2, name: 'XS' },
    { id: 3, name: 'S' },
    { id: 4, name: 'M' },
    { id: 5, name: 'L' },
    { id: 6, name: 'XL' },
    { id: 7, name: 'XXL' },
  ];


  const handleRangeChange = (e) => {
    setRange(e.target.value);
  };

  const handleColorChange = (e) => {
    const value = e.target.value;
    setSelectedColor((prevColors) =>
      prevColors.includes(value) ? prevColors.filter((color) => color !== value) : [...prevColors, value]
    );
  };

  const handleCategory = (e) => {
    const value = e.target.value;
    setSelectedCategory((prevCategories) =>
      prevCategories.includes(value) ? prevCategories.filter((category) => category !== value) : [...prevCategories, value]
    );
  }
  const handleSize = (e) => {
    const value = e.target.value;
    setSelectedSize((prevSizes) =>
      prevSizes.includes(value) ? prevSizes.filter((size) => size !== value) : [...prevSizes, value]
    );
  }

  useEffect(() => {
    onFilterChange({ selectedCategory, selectedColor, selectedSize, range });
  }, [selectedCategory, selectedColor, selectedSize, range]);


  const colorOptions = [
    { id: 1, name: 'Red', color: 'red' },
    { id: 2, name: 'Blue', color: 'blue' },
    { id: 3, name: 'Green', color: 'green' },
    { id: 4, name: 'Yellow', color: 'yellow' },
    { id: 5, name: 'Black', color: 'black' },
    { id: 6, name: 'White', color: 'gray' },
    { id: 7, name: 'Pink', color: 'pink' },
    { id: 8, name: 'Orange', color: 'orange' },
  ];

  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div>
          <h1 className='font-medium'>Product Categories</h1>
          <div className='flex flex-col text-[0.89rem]'>
            <div className='flex flex-col gap-3 my-5'>
              {categories.map((items) => (
                <div key={items.id} className='flex items-center gap-3'>
                  <input 
                    onChange={handleCategory} 
                    value={items.name} 
                    type='checkbox' name={items.name} 
                  />
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
            <input
              className='h-[2px] w-full appearance-none bg-red-500 outline-none'
              onChange={handleRangeChange}
              value={range}
              type='range'
              min='0'
              max='1200'
            />
          </div>
        </div>
        <div>
          <h1 className='font-medium'>Filter by Color</h1>
          <div className='flex flex-col text-[0.89rem]'>
            <div className='flex flex-col gap-3 my-5 w-full'>
              <div className='flex flex-col gap-3 text-[0.9rem]'>
                {colorOptions.map((items) => (
                  <div key={items.id} className='flex items-center w-full justify-between capitalize'>
                    <div className='flex items-center gap-2 relative'>
                      <input
                        id={`color-${items.id}`}
                        type='checkbox'
                        value={items.name}
                        className='hidden'
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor={`color-${items.id}`}
                        className='w-5 h-5 rounded-full cursor-pointer'
                        style={{ backgroundColor: items.color }}
                      ></label>
                      <p>{items.name}</p>
                    </div>
                    <span className='text-gray-500 text-[0.85rem]'>(10)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className='font-medium'>Filter by Size</h1>
          <div className='flex flex-col text-[0.89rem]'>
            <div className='flex flex-col gap-3 my-5 w-full'>
              <div className='flex flex-col gap-3 text-[0.9rem]'>
                {Size.map((items) => (
                  <div key={items.id} className='flex items-center w-full justify-between capitalize'>
                    <div className='flex items-center gap-2 relative'>
                      <input
                        type='checkbox'
                        value={items.name}
                        onChange={handleSize}
                      />
                      <p>{items.name}</p>
                    </div>
                    <span className='text-gray-500 text-[0.85rem]'>(10)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideControls;
