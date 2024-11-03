import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
  
  const {cartCount} = useSelector((state)=> (state.cart))


  return (
   <nav>
    <div className=" bg-orange-600 flex justify-around py-4 text-white">
      <h3>Redux store</h3>
      <div className='relative'>
        <FaCartPlus className='text-3xl'/>
        <span className='min-w-5 h-5 bg-red-900 px-[2px] py-[2px]  absolute -top-1 rounded-3xl text-center -right-5 text-sm'>{cartCount}</span>

      </div>
    </div>
   </nav>
  )
}

export default Navbar