  // import React from 'react'
  // import { useDispatch, useSelector } from 'react-redux'
  // import { addToCart } from './stores/cart'
  // import { getdata } from './stores/cart'


  // const productCard = (props) => {
   
  //   const {id,title, price , description , image} = props.data
  //   const dispatch = useDispatch()
  //   const handleAddToCart = () => {
  //     dispatch(addToCart({
  //       productId : id,
  //       quantity:1,
        
  //     }))
  //   }
  //   dispatch(getdata())

  //   return (

  // <div>
        

        
        
  //       <div className='bg-white p-5 rounded-xl shadow-sm'>
  //             <img src={image} alt='' className='w-full h-80 object-cover object-top ' />
          
  //         <h3 className='text-2xl py-3 text-center font-medium'>{title}</h3>
  //         <div className='flex justify-between items-center'>
  //             <p>
  //                 $<span className='text-2xl font-medium'>{price}</span>
  //             </p>
  //             <button onClick={handleAddToCart} className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' >
  //                 Add To Cart
  //             </button>
  //         </div>
  //         </div>      
  //       </div>
  //   )
  // }

  // export default productCard