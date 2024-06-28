import { menuLinks } from '../constants/products'
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoFilterOutline, IoHeartOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

const Menubar = () => {

  const location = useLocation()

  return (
    <section>
      <ul className={`${location.pathname === '/shop' ? 'hidden' : 'flex'} w-full h-full items-center justify-between px-10 sm:px-28 bg-white`}>
        {menuLinks.map((items) =>(
          <Link to={items.url} key={items.id}>
            <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
              <items.img className='text-[1.2rem]'/>
              <p className='text-[0.65rem] font-medium uppercase'>{items.name}</p>
            </div>
          </Link>
        ))}
      </ul>

      <ul className={`${location.pathname != '/shop' ? 'hidden' : 'flex'} w-full h-full items-center justify-between px-10 sm:px-28 bg-white`}>
        <Link to='/'>
          <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
            <IoHomeOutline className='text-[1.2rem]' />
            <p className='text-[0.65rem] font-medium uppercase'>HOME</p>
          </div> 
        </Link>
        <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
          <IoFilterOutline className='text-[1.2rem]' />
          <p className='text-[0.65rem] font-medium uppercase'>FILTER</p>
        </div>
        <Link to='/search'>
          <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
            <IoSearchOutline className='text-[1.2rem]' />
            <p className='text-[0.65rem] font-medium uppercase'>SEARCH</p>
          </div>
        </Link>
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
  )
}

export default Menubar