import payment from '../assets/cards.png'
import { footerItems } from '../constants/products'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-full max-w-[1300px] mx-auto px-3'>
        <div className='flex flex-col lg:flex-row gap-4 items-start w-full justify-between border-b pb-10 lg:pb-16'>
          {footerItems.map((item) => (
            <div className='flex flex-col gap-4' key={item.id}>
              {item.img ? <img className='w-[130px]' src={item.img} /> : <h1 className='text-[1rem] font-medium'>{item.title}</h1>}
              <div className='w-full'>
                <div className='max-w-[300px]'>
                  {item.text && <span className='text-[0.9rem]'>{item.text}</span>}
                </div>
                {item.links && 
                  <div className='flex flex-col gap-1'>
                    {item.links.map((link) => (
                      <Link to={link.url} key={link.id}>
                        <span className='text-[0.95rem]'>{link.text}</span>
                      </Link>
                    ))}
                  </div>
                }
              </div>
              {item.number && <span className='text-[0.9rem]'>{item.number}</span>}
            </div>
          ))}
        </div>
        <div className='w-full flex gap-3  flex-col-reverse lg:flex-row items-center justify-between mt-4'>
          <div className='flex flex-col md:flex-row items-center gap-3 lg:gap-8'>
            <span className='text-[0.85rem]'>Copyright 2024 © Clotya. All right reserved.</span>
            <img src={payment} alt="payment" />
          </div>
          <div className='flex gap-3'>
            <span className='text-[0.85rem]'>Privacy Policy</span>
            <span className='text-[0.85rem]'>Terms & Conditions</span>
            <span className='text-[0.85rem]'>Return Policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer