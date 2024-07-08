import React from 'react'

const Orders = ({ userData, setTab, setId, setOrder }) => {

  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getUTCDate();
    const month = date.toLocaleString('default', { month: 'long' }); // 'long' for full month name
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
}


  return (
    <div>
      <table className='w-full border'>
        <thead>
          <tr className='font-bold border'>
            <th className='border py-2'>Order</th>
            <th className='border'>Date</th>
            <th className='border'>status</th>
            <th className='border'>Total</th>
            <th className='border'>Actions</th>
          </tr>
        </thead>
        <tbody className='text-[0.9rem] w-full'>
          {userData?.orderHistory?.map((order, i) => (
            <tr key={i}>
              <td className='text-red-500 text-center p-2 border uppercase'>#{order?.orderNumber}</td>
              <td className='text-center border p-2'>{formatDate(order?.orderDate)}</td>
              <td className='text-center border p-2'>{order?.orderStatus}</td>
              <td className='text-center border p-2'>${order?.totalPrice} for {order?.totalQuantity}</td>
              <td className='text-center border p-2'>
                <button
                  onClick={()=>{
                    setId(order?.items[0]?.itemId)
                    setTab('view')
                    setOrder(order)
                  }} 
                  className='text-white bg-red-500 py-1 px-2 w-full'
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orders