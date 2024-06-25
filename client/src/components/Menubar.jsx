import { menuLinks } from '../constants/products'
import { Link } from 'react-router-dom'

const Menubar = () => {
  return (
    <section>
      <ul className='w-full flex h-full items-center justify-between px-10 sm:px-28 bg-white z-1'>
        {menuLinks.map((items) =>(
          <Link to={items.url} key={items.id}>
            <div className='flex text-gray-400 justify-center items-center flex-col gap-2'>
              <items.img className='text-[1.2rem]'/>
              <p className='text-[0.65rem] font-medium uppercase'>{items.name}</p>
            </div>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default Menubar