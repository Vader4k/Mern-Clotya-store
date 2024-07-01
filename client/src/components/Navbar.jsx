import logo from '../assets/logo.png'
import { navLinks } from '../constants/products'
import { BsBag, BsSearch } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { TfiHeart } from "react-icons/tfi";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import HomeModal from './HomeModal'
import Search from './Search';
import { getCookie } from '../hooks';
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {

  const token = getCookie("auth_token");

  const [ isSideBarOpen, setIsSideBarOpen ] = useState(false)
  const [ isSearchOpen, setIsSearchOpen ] = useState(false)

  return (
    <>
    <nav className='bg-white font-jost border border-b'>
      <div className='w-full flex items-center justify-between py-6 px-8 lg:px-32 lg:py-8'>
        <div className='flex items-center gap-8'>
          <CiMenuBurger onClick={()=> setIsSideBarOpen(true)} className='cursor-pointer text-[1.2rem]'/>
          {navLinks.map((item) => (
            <Link className='hidden lg:block text-[0.95rem] font-medium uppercase' to={item.link} key={item.id}>
              {item.name}
            </Link>
          ))}
        </div>
        <figure>
          <Link to='/'>
            <img className='w-[120px]' src={logo} alt="clotya logo" />
          </Link>
        </figure>
        <div className='flex items-center gap-4 text-[1.2rem] text-gray-700'>
          <Link to={token ? '/dashboard' : '/login'}>
            <IoPersonOutline className='hidden lg:block text-[1.3rem]'/>
          </Link>

          {isSearchOpen 
            ? <IoMdClose onClick={()=> setIsSearchOpen(false)} className='hidden lg:block cursor-pointer'/> 
            :  <BsSearch onClick={()=> setIsSearchOpen(true)} className='hidden lg:block cursor-pointer'/> 
          }
          
          <Link to='/favorites'>
            <div className='relative hidden lg:block'>
              <TfiHeart />
              <div className='absolute top-[-8px] right-[-10px] p-1 bg-red-600 h-[15px] w-[15px] text-white flex items-center justify-center rounded-full text-[0.7rem]'>0</div>
            </div>
          </Link>
          <span className='text-[0.85rem]'>$0.00</span>
          <Link to='/cart'>
            <div className='relative'>
              <BsBag />
              <div className='absolute top-[-8px] right-[-10px] p-1 bg-red-600 h-[15px] w-[15px] text-white flex items-center justify-center rounded-full text-[0.7rem]'>0</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
    <AnimatePresence>
        {isSideBarOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              closed: { x: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
              open: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }
            }}
            className='fixed top-0 left-0 w-full h-full z-50'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Adjust opacity here
          >
            <HomeModal onClose={() => setIsSideBarOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Search onClose={() => setIsSearchOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>

  )
}

export default Navbar