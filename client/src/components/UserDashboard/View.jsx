import { useContext } from "react"
import { ShopContext } from '../../context/ShopContext'
import Address from './Address'

const View = ({ userData, id, order }) => {
  const { allProducts } = useContext(ShopContext)
  // Ensure the id is a string for comparison
  const productId = String(id);
  const product = allProducts.find((product) => String(product.id) === productId);

  return (
    <div>
      <p>Order # <span className="bg-orange-200">{order?.orderNumber}</span> is currently <span className="bg-orange-200">{order?.orderStatus}.</span></p>
      <h1 className="font-medium py-4">Order details</h1>
      <table className="border w-full">
        <thead className="border">
          <tr className="border">
            <th className="py-2 border">Product</th>
            <th className="border">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-black"><span className="text-red-500">{product.name} * </span>{order?.totalQuantity}</td>
            <td className="border p-2">${product?.new_price}</td>
          </tr>
          <tr>
            <td className="border font-medium p-2">Subtotal: </td>
            <td className="p-2 border">${order?.totalPrice}</td>
          </tr>
          <tr>
            <td className="p-2 font-medium border">Shipping:</td>
            <td className="border p-2">$15.00 via Flat rate</td>
          </tr>
          <tr>
            <td className="font-medium p-2 border">Total:</td>
            <td className="border p-2">${order?.totalPrice + 15}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default View