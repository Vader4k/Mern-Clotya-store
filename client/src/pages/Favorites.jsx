import { useContext } from "react"
import { ShopContext } from '../context/ShopContext'
import { Headtags } from '../components'
import { Link } from "react-router-dom"
import { ImCart } from "react-icons/im";


const Favorites = () => {

  const { allProducts, addToCart, wishList, removeFromWishlist } = useContext(ShopContext)

  return (
    <section className="w-full max-w-[1300px] mx-auto px-3">
      <Headtags pageTitle="Wishlist" />
      <div className="py-10 md:py-20">
        <h1 className="text-[1.5rem] md:text-[2rem]">Default Wishlist</h1>
        <div className="hidden md:block">
          { wishList.length > 0 ? (
            <div className="mt-5">
              <table className="w-full">
                <thead>
                  <tr className="border">
                    <th className="px-5 py-3 text-center text-[0.8rem] font-medium border">x</th>
                    <th className="px-5 py-3 text-left text-[0.8rem] font-medium border">Image</th>
                    <th className="px-5 py-3 text-left text-[0.8rem] font-medium border">Product Name</th>
                    <th className="px-5 py-3 text-left text-[0.8rem] font-medium border">Unit Price</th>
                    <th className="px-5 py-3 text-left text-[0.8rem] font-medium border">Date Added</th>
                    <th className="px-5 py-3 text-left text-[0.8rem] font-medium border">Stock Status</th>
                    <th className="px-5 py-3 text-left text-[0.8rem] font-medium border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/** Display favorite products here */}
                  {wishList.map((item, i) => {
                    const product = allProducts.find((p) => p.id.toString() === item)
                    if(!product){
                      return null
                    }
                    return (
                      <tr key={i} className="border">
                        <td className="px-5 py-3 text-center text-[0.8rem] border">
                          <button
                            className="border border-gray-300 text-gray-600 px-2 py-1 rounded-md"
                            onClick={() => removeFromWishlist(item)}
                          >
                            x
                          </button>
                        </td>
                        <td className="px-5 py-3 text-center border">
                          <img
                            className="object-cover w-24 h-24"
                            src={product.img1}
                            alt={product.name}
                          />
                        </td>
                        <td className="px-5 py-3 text-left border">{product.name}</td>
                        <td className="px-5 py-3 text-left border text-[0.9rem]">
                          {product.old_price && (
                              <span className="line-through text-gray-500 mr-3">${product.old_price}</span>
                            )}<span>${product.new_price}</span>
                        </td>
                        <td className="px-5 py-3 text-left border text-[0.9rem]">july 5, 2024</td>
                        <td className="px-5 py-3 text-left border text-[0.9rem] font-medium text-green-500">In Stock</td>
                        <td className="px-5 py-3 text-left border text-[0.9rem] font-medium">
                          <button
                            onClick={()=> addToCart(item, 'L', 'black', '1')} 
                            className="p-2 bg-red-500 text-white text-center flex items-center justify-center w-full">
                            <ImCart/>
                          </button>
                        </td>
                      </tr>
                      )
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="my-5">
              <h2 className="">Your wishlist is currently empty.</h2>
              <Link to='/shop'>
                <button className="p-2 rounded-sm bg-red-500 text-white">Return To Shop</button>
              </Link>
            </div>
            )}
        </div>
        <div className="flex items-center justify-center flex-col md:hidden w-full my-10">
          <div className="p-3 border w-full text-center">
            product
          </div>
          <div className="w-full">
            {wishList.length > 0 ? (
                  <div className="w-full flex flex-col items-center justify-center">
                    {wishList.map((item, i) => {
                      const product = allProducts.find((p) => p.id.toString() === item)
                      if(!product){
                        return null
                      }
                      return (
                        <div key={i} className="border w-full flex flex-col items-center">
                          <button
                            className="border border-gray-300 text-gray-600 p-3  w-full"
                            onClick={() => removeFromWishlist(item)}
                          >
                            x
                          </button>
                          <img
                            className="object-cover w-[100px] h-[200px] p-2"
                            src={product.img1}
                            alt={product.name}
                          />
                          <p className="px-5 p-3 border w-full text-center">{product.name}</p>
                          <div className="p-3 w-full text-center border text-[0.9rem]">
                          {product.old_price && (
                              <span className="line-through text-gray-500 mr-3">${product.old_price}</span>
                            )}<span>${product.new_price}</span>
                          </div>
                          <p className="w-full text-center p-3 border text-[0.9rem]">july 5, 2024</p>
                          <p className="px-5 py-3 text-center w-full border text-[0.9rem] font-medium text-green-500">In Stock</p>
                          <button
                            onClick={()=> addToCart(item, 'L', 'black', '1')} 
                            className="p-2 bg-red-500 text-white text-center flex items-center justify-center w-full">
                            <ImCart/>
                          </button>
                        </div>
                      )
                    })}
                  </div>
                ) 
              : (<div className="my-5">
                    <h2 className="">Your wishlist is currently empty.</h2>
                    <Link to='/shop'>
                      <button className="p-2 rounded-sm bg-red-500 text-white">Return To Shop</button>
                    </Link>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Favorites