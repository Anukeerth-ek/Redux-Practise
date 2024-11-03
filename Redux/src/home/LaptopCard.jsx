import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "../redux/cart";

const LaptopCard = ({ item }) => {

    const {cartCount} = useSelector((state)=> (state.cart))
    const dispatch = useDispatch()



     const [showAddBtn, setShowAddBtn] = useState(false);
     const[count, setCount] = useState(0)
     return (
          <div>
               <li
                    className="border py-1 px-2 m-2 w-52 h-[310px] duration-500 group cursor-pointer"
                    onMouseEnter={() => setShowAddBtn(true)}
                    onMouseLeave={() => setShowAddBtn(false)}
               >
                    <img
                         src={item.image}
                         className="min-w-full h-1/2 object-cover group-hover:scale-105 duration-150 rounded-md " alt="laptop-images"
                    />
                    <h3 className="text-xl font-bold">
                         {item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title}
                    </h3>
                    <p className="mt-3 flex justify-between group-hover:-translate-y-3 duration-300">
                         <span>{item.rating}</span> <span className="font-semibold">${item.price}</span>
                    </p>
                    <button className="bg-blue-500 text-white w-full rounded-md py-3 px-8 mt-6 hover:bg-blue-700 group-hover:-translate-y-5 duration-300"
                    onClick={()=> dispatch(addToCart())}
                    >
                         Add to cart
                    </button>
                    {showAddBtn && (
                         <p className="flex justify-center items-center duration-300 -translate-y-4 mb-2">
                              <button  disabled={cartCount <= 0} ><AiOutlineMinus className={`bg-pink-500 text-2xl text-white mr-3 ${cartCount <= 0 ? "bg-gray-300" : 'bg-pink-500'}`} onClick={()=> dispatch(decrement())}/></button>
                              <span className="text-lg">{cartCount}</span>
                              <FaPlus className="bg-pink-500 text-2xl text-white ml-3" onClick={()=> dispatch(increment())}/>
                         </p>
                    )}
               </li>
          </div>
     );
};

export default LaptopCard;
