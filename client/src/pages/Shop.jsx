import { Headtags } from '../components';
import SIdeControls from '../components/SideControls';
import { IoGridOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Card } from '../components';
import { ImSpinner2 } from "react-icons/im";
import ListView from '../components/ListView';

const Shop = () => {
  const [amount, setAmount] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { allProducts } = useContext(ShopContext); // handles all products fetching
  const [view, setView] = useState('grid');

  const handleAmountChange = (event) => {
    setAmount(parseInt(event.target.value));
    setCurrentPage(1); // reset to the first page whenever amount changes
  };

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setLoading(true);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Simulate fetching products
    const fetchProducts = () => {
      setLoading(true);
      setProducts(allProducts);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Simulate a 1 second fetch time
    };

    fetchProducts();
  }, [currentPage, amount]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / amount);

  // Get current products
  const indexOfLastProduct = currentPage * amount;
  const indexOfFirstProduct = indexOfLastProduct - amount;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <section className="py-10 px-3 w-full max-w-[1300px] mx-auto">
      <Headtags pageTitle="Shop" />
      <div className='flex items-start gap-8'>
        <div className='flex-1 flex flex-col sticky top-2 w-full'>
          <SIdeControls />
        </div>
        <div className='flex-[3] flex-col gap-6 w-full'>
          <div className='bg-shop h-[350px] w-full bg-contain bg-no-repeat'>
            <div className='p-16 w-full max-w-[500px]'>
              <h1 className='text-[2.5rem] leading-[3rem]'>Plus-Size Style for Every Season</h1>
              <p className='text-gray-500 text-[0.9rem] mt-6'>Quis ipsum suspendisse ultrice grvida. Risus commodo viverra maecenas</p>
            </div>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-3 text-gray-600'>
              <IoGridOutline onClick={() => setView('grid')} className='cursor-pointer' />
              <CiBoxList onClick={() => setView("list")} className='cursor-pointer' />
              <span className='ml-5 text-[0.85rem]'>showing {indexOfFirstProduct + 1} -- {Math.min(indexOfLastProduct, products.length)} of {products.length} results</span>
            </div>
            <div>
              <div className='flex items-center'>
                <span className='text-gray-400 text-[0.85rem]'>Show:</span>
                <div className='relative'>
                  <select
                    className='outline-none appearance-none w-full py-2 pl-3 pr-10'
                    defaultValue={amount}
                    onChange={handleAmountChange}
                  >
                    <option className='flex items-end gap-1' value="16">16 items</option>
                    <option className='flex items-end gap-1' value="32">32 items</option>
                    <option className='flex items-end gap-1' value="48">48 items</option>
                    <option className='flex items-end gap-1' value="64">64 items</option>
                  </select>
                  <MdKeyboardArrowDown className='absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none' />
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <div className='flex justify-center items-center h-64'>
              <ImSpinner2 className='animate-spin text-gray-500 text-4xl' />
            </div>
          ) : (
            <div>
              {view === 'grid' && (
                <div className='grid grid-cols-4 gap-x-8'>
                  {currentProducts.map((product) => (
                    <Card shop key={product.id} props={product} />
                  ))}
                </div>
              )}
              {view === 'list' && (
                <div className='flex flex-col gap-6'>
                  {currentProducts.map((product) => (
                    <ListView shop key={product.id} props={product} />
                  ))}
                </div>
              )}
            </div>
          )}
          <div className='flex justify-center mt-6'>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 text-[0.9rem] mx-1 ${index + 1 === currentPage ? 'bg-gray-800 text-white' : 'border border-black text-gray-800'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
