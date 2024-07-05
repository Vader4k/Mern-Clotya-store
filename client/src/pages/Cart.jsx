import { useContext } from "react"
import {ShopContext} from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { ImBin2 } from "react-icons/im";
import { Headtags } from '../components'


const Cart = () => {

  const { cartItems, allProducts, removeFromCart, user, subtotal } = useContext(ShopContext); // handles cart items fetching

    const total = parseFloat(subtotal) + 15
    console.log(user)
  return (
    <div className="w-full max-w-[1300px] px-3 mx-auto my-10">
      <Headtags pageTitle="Cart" />
      <div>
      {cartItems?.length > 0 ? (
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
          <div className="flex-[2.5] flex flex-col w-full mt-5">
            <div className="w-full text-gray-400 font-medium text-[0.9rem] mb-2 flex items-center gap-16">
              <h1 className="w-full">Product</h1>
              <h1 className="hidden md:block">Price</h1>
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
            </div>
            {cartItems.map((item, index) => {
              const product = allProducts.find(product => product.id.toString() === item.itemId)
              if(product){
                const totalCost = parseFloat(product.new_price) * item.quantity;
                return (
                  <div 
                    key={index}
                    className="w-full"
                  >
                    <div className="w-full">
                      <div className="w-full flex justify-between items-center border-t border-b py-3 px-6 lg:px-0">
                        <div className="flex items-start gap-6 w-full max-w-[40%] lg:max-w-[55%]">
                          <div className="relative h-[1px] w-[1px]  md:h-[45px] md:w-[45px]">
                            <ImBin2 
                              className="absolute left-[-10px] top-[-8px] text-red-500 cursor-pointer"
                              onClick={() => removeFromCart(item.itemId, item.size, item.color)}
                            />
                            <img className="w-full h-full object-cover" src={product?.img1} alt={product.name} />
                          </div>
                          <div className="">
                            <Link to={`/product/${item.itemId}`}>
                              <h1 className="md:font-medium">{product?.name} - {item.color}</h1>
                              <p className="text-[0.8rem] text-gray-600">Size: {item?.size}</p>
                            </Link>
                          </div>
                        </div>
                        <div>

                        </div>
                        <p className="text-[0.89rem] hidden md:block">${product?.new_price}</p>
                        <p className="text-[0.89rem]">{item.quantity}</p>
                        <p className="text-[0.89rem]">${totalCost.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
          <div className="w-full flex-1 max-w-[300px] p-6 border shadow-lg">
            <div className="flex flex-col items-start gap-4">
              <h1 className="pb-2 border-b w-full py-2">Cart totals</h1>
              <div className="w-full flex py-2 items-center justify-between text-[0.9rem] pb-2 border-b">
                <p>Subtotal</p>
                <span>${subtotal}</span>
              </div>
              {user && 
                <div className="flex flex-col gap-5 pb-2 border-b w-full py-2">
                  <p className="text-[0.8rem]">Flat rate <span className="text-[1rem]">$15.00</span></p>
                  <p className="text-[0.9rem]">Shipping to {user.address.street},{user.address.state}</p>
                </div>
              }
              <div className="flex items-center justify-between w-full pb-3 py-2">
                <span>Total</span>
                <span className="font-medium text-[1.5rem]">${total}</span>
              </div>
              <button className="w-full bg-red-500 text-white p-2 my-5">
                Proceede to checkout
              </button>
            </div>
          </div>
      </div>
      ) : (
        <div>
          <p>Your cart is empty</p>
          <Link to="/shop">
            <button className="bg-red-500 text-white p-2 mt-3">Continue shopping</button>
          </Link>
        </div>
      )}
      </div>
    </div>
  )
}

export default Cart