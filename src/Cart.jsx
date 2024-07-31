import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './stores/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">
        Cart - Items: {totalQuantity}, Total Amount: ${totalAmount}
      </h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
        {items.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <img src={p.image} alt={p.title} className="w-24 h-24 object-cover rounded-md mb-4 md:mb-0 md:mr-4" />
            <div className="flex-grow">
              <h2 className="text-xl font-medium text-gray-800">{p.title}</h2>
              <p className="text-gray-600 mt-2">Quantity: {p.quantity}</p>
              <p className="text-gray-600">Price: ${p.price.toFixed(2)}</p>
            </div>
            <button
             onClick={() => dispatch(removeFromCart(p.id))}
              className="mt-4 md:mt-0 md:ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
