import { IoMdClose } from "react-icons/io";
import { BsSearch, BsShop } from "react-icons/bs";
import { TfiHeart } from "react-icons/tfi";
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoFilterOutline, IoHeartOutline, IoPersonOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import Search from './Search';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const Menubar = () => {

  const [ isSearchOpen, setIsSearchOpen ] = useState(false)
  const location = useLocation()

  return (
    <>
      <section>
        <ul className={`${location.pathname === '/shop' ? 'hidden' : 'flex'} w-full h-full items-center justify-between px-10 sm:px-28 bg-white`}>
            <Link to='/shop'
            >
              <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
                <BsShop className='text-[1.2rem]'/>
                <p className='text-[0.65rem] font-medium uppercase'>shop</p>
              </div>
            </Link>
              
            <div className='flex cursor-pointer text-gray-400 justify-center items-center flex-col gap-2'>
              { isSearchOpen 
                ? <IoMdClose onClick={()=> setIsSearchOpen(false)} className='text-[1.2rem]'/> 
                :  <BsSearch onClick={()=> setIsSearchOpen(true)} className='text-[1.2rem]'/>}
              <p className='text-[0.65rem] font-medium uppercase'>search</p>
            </div>

            <Link to='/favorites'
            >
              <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
                <TfiHeart className='text-[1.2rem]'/>
                <p className='text-[0.65rem] font-medium uppercase'>wishlist</p>
              </div>
            </Link>

            <Link to='/profile'
            >
              <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
                <IoPersonOutline className='text-[1.2rem]'/>
                <p className='text-[0.65rem] font-medium uppercase'>profile</p>
              </div>
            </Link>
        </ul>

        <ul className={`${location.pathname != '/shop' ? 'hidden' : 'flex'} w-full h-full items-center justify-between px-10 sm:px-28 bg-white`}>
          <Link to='/'>
            <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
              <IoHomeOutline className='text-[1.2rem]' />
              <p className='text-[0.65rem] font-medium uppercase'>HOME</p>
            </div> 
          </Link>
          <div className='flex cursor-pointer text-gray-400 justify-center items-center flex-col gap-2'>
              { isSearchOpen 
                ? <IoMdClose onClick={()=> setIsSearchOpen(false)} className='text-[1.2rem]'/> 
                :  <BsSearch onClick={()=> setIsSearchOpen(true)} className='text-[1.2rem]'/>}
              <p className='text-[0.65rem] font-medium uppercase'>search</p>
            </div>
          <Link to='/favorites'>
            <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
              <IoHeartOutline className='text-[1.2rem]' />
              <p className='text-[0.65rem] font-medium uppercase'>WISHLIST</p>
            </div>
          </Link>
          <Link to='/profile'>
            <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
              <IoPersonOutline className='text-[1.2rem]' />
              <p className='text-[0.65rem] font-medium uppercase'>ACCOUNT</p>
            </div>
          </Link>
        </ul>
      </section>
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute w-screen z-1 top-[-700px] h-[85vh] overflow-hidden bg-white"
          >
            <Search onClose={() => setIsSearchOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menubar