import {Headtags} from '../components'
import SIdeControls from '../components/SideControls'
import { IoGridOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";

const Shop = () => {
  return (
    <section className="py-10 px-3 w-full max-w-[1300px] mx-auto">
      <Headtags pageTitle="Shop"/>
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
              <IoGridOutline className='cursor-pointer'/> 
              <CiBoxList className='cursor-pointer'/>
              <span className='ml-5 text-[0.85rem]'>showing {} of {} results</span>
            </div>
            <div>
              <div className='flex items-center'>
                <span className='text-gray-400 text-[0.85rem]'>Show:</span>
                <select className='outline-none' defaultValue={16}>
                  <option className='flex items-end gap-1' value="16">16 items <MdKeyboardArrowDown /></option>
                  <option className='flex items-end gap-1' value="32">32 items <MdKeyboardArrowDown /></option>
                  <option className='flex items-end gap-1' value="48">48 items <MdKeyboardArrowDown /></option>
                  <option className='flex items-end gap-1' value="64">64 items <MdKeyboardArrowDown /></option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop