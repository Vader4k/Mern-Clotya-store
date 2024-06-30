import logo from '../assets/logo.png'
import { mainMenu } from '../constants/products' 
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'

const HomeModal = ({ onClose }) => {
  return (
    <div className="scrollable relative bg-white z-99 p-4 h-full lg:w-[21%] w-[60%] overflow-y-scroll">
      <div className="px-4">
        <div className='flex items-center justify-between pb-10'>
          <img className='w-[100px]' src={logo} alt="logo" />
          <button onClick={onClose} className="p-2 bg-gray-300 cursor-pointer text-[1.2rem]">
              <IoMdClose/>
          </button>
        </div>

        <div>
          <h3 className='text-[0.85rem] font-medium text-gray-600'>Main Menu</h3>
          <div className='flex flex-col gap-4 text-[1rem] text-gray-500 py-6 border-b w-full'>
            {mainMenu.map((item) => (
              <div key={item.id}>
                <Link to={item.url}>
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeModal