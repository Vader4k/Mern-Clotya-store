

const Cart = () => {
  return (
    <div className="w-full max-w-[1300px] px-3 mx-auto py-10">
      <div>
        {
          <div>
            <h1>Yur cart is currently empty</h1>
            <button className="bg-red-500 my-3 p-3 text-white">Return to Shop</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart