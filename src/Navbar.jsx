import React, { useEffect, useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
const Navbar = () => {
  const noOfProducts = useSelector(store=> store.cart.totalQuantity )
  const dispatch = useDispatch()
  
  return (
    <div className="flex   justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-2xl font-bold">My Store</Link  >
      <div  className="flex items-center cursor-pointer">
        <Link to="/cart">
        <FaCartArrowDown  className="text-xl mr-2" />
        <button >Cart {noOfProducts}</button>
         </Link>
      </div>
    </div>
  );
}

export default Navbar;
