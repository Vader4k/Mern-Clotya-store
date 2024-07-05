import { useContext, useState } from "react"
import {ShopContext} from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { ImBin2 } from "react-icons/im";

const Cart = () => {

  const { cartItems, allProducts, removeFromCart } = useContext(ShopContext); // handles cart items fetching

  return (
    <div className="w-full max-w-[1300px] px-3 mx-auto py-10">
      <div>
      {cartItems?.length > 0 ? (
        <div className="w-full flex items-start gap-10 my-10">
          <div className="flex-[2.5] flex flex-col w-full">
            <div className="w-full text-gray-400 font-medium text-[0.9rem] mb-2 flex items-center gap-16 px-20">
              <h1 className="w-full">Product</h1>
              <h1>Price</h1>
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
                    className="w-full flex items-start gap-10 justify-between"
                  >
                    <div className="w-full">
                      <div className="w-full flex gap-16 px-20 justify-between items-center border-t py-5">
                        <div className="relative h-[40px] w-[40px]">
                          <ImBin2 
                            className="absolute left-[-10px] top-[-8px] text-red-500 cursor-pointer"
                            onClick={() => removeFromCart(item.itemId, item.size, item.color)}
                          />
                          <img src={product?.img1} alt={product.name} />
                        </div>
                        <div className="flex-[0.7]">
                          <h1>{product?.name} - {item.color}</h1>
                          <p>Size: {item?.size}</p>
                        </div>
                        <p>${product?.new_price}</p>
                        <p>{item.quantity}</p>
                        <p>${totalCost.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
          <div className="w-full flex-1 p-6 border shadow-lg">

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