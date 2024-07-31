import React , {useState} from 'react'
import  Navbar  from './Navbar'
import {  Route   , Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Cart from './Cart'
const App = () => {

  return (
    <div>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>


    </div>
  )
}

export default App