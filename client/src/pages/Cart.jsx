import { useContext } from "react"
import {ShopContext} from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { ImBin2 } from "react-icons/im";
import { Headtags } from '../components'
import PayButton from "../components/PayButton";


const Cart = () => {

  const { cartItems, allProducts, removeFromCart, user, subtotal } = useContext(ShopContext); // handles cart items fetching

  const total = parseFloat(subtotal) + 15

  return (
    <div className="w-full max-w-[1300px] px-3 mx-auto my-10">
      <Headtags pageTitle="Cart" />
      <div>
      {cartItems?.length > 0 ? (
        <div className="flex flex-col items-center w-full gap-10 lg:flex-row lg:items-start lg:gap-20">
          <div className="flex-[2.5] flex flex-col w-full mt-5">
            <div className="w-full text-gray-400 font-medium text-[0.9rem] mb-2 flex items-center gap-16">
              <h1 className="w-full">Product</h1>
              <h1 className="hidden md:block">Price</h1>
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
            </div>
            {cartItems?.map((item, index) => {
              const product = allProducts.find(product => product?.id.toString() === item?.itemId)
              if(product){
                const totalCost = parseFloat(product?.new_price) * item?.quantity;
                return (
                  <div 
                    key={index}
                    className="w-full"
                  >
                    <div className="w-full">
                      <div className="flex items-center justify-between w-full px-6 py-3 border-t border-b lg:px-0">
                        <div className="flex items-start gap-6 w-full max-w-[40%] lg:max-w-[55%]">
                          <div className="relative h-[1px] w-[1px]  md:h-[45px] md:w-[45px]">
                            <ImBin2 
                              className="absolute left-[-10px] top-[-8px] text-red-500 cursor-pointer"
                              onClick={() => removeFromCart(item?.itemId, item?.size, item?.color)}
                            />
                            <img className="object-cover w-full h-full" src={product?.img1} alt={product?.name} />
                          </div>
                          <div className="">
                            <Link to={`/product/${item?.itemId}`}>
                              <h1 className="md:font-medium">{product?.name} - {item?.color}</h1>
                              <p className="text-[0.8rem] text-gray-600">Size: {item?.size}</p>
                            </Link>
                          </div>
                        </div>
                        <div>

                        </div>
                        <p className="text-[0.89rem] hidden md:block">${product?.new_price}</p>
                        <p className="text-[0.89rem]">{item?.quantity}</p>
                        <p className="text-[0.89rem]">${parseFloat(item?.quantity * product?.new_price).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
          <div className="flex-1 w-full p-6 border shadow-lg">
            <div className="flex flex-col items-start gap-4">
              <h1 className="w-full py-2 pb-2 border-b">Cart totals</h1>
              <div className="w-full flex py-2 items-center justify-between text-[0.9rem] pb-2 border-b">
                <p>Subtotal</p>
                <span>${subtotal}</span>
              </div>
              {user?.address ? 
                (<div className="flex flex-col w-full gap-5 py-2 pb-2 border-b">
                  <p className="text-[0.8rem]">Flat rate <span className="text-[1rem]">$15.00</span></p>
                  <p className="text-[0.9rem]">Shipping to {user?.address?.street},{user?.address?.state}</p>
                </div>) : (
                  <p>Go to dashboard and set your shipping address before checking out</p>
                )
              }
              <div className="flex items-center justify-between w-full py-2 pb-3">
                <span>Total</span>
                <span className="font-medium text-[1.5rem]">${total?.toFixed(2)}</span>
              </div>
              <PayButton subtotal={subtotal} user={user}/>
            </div>
          </div>
      </div>
      ) : (
        <div>
          <p>Your cart is empty</p>
          <Link to="/shop">
            <button className="p-2 mt-3 text-white bg-red-500">Continue shopping</button>
          </Link>
        </div>
      )}
      </div>
    </div>
  )
}

export default Cart