import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Card3() {
    const [val, setVal] = useState(false);
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden'>
            <img className={`shrink-0 transition-transform duration-300 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1715645942867-4c8649966352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
            <img className={`shrink-0 transition-transform duration-300 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1714987524876-f5f3cc746013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 absolute bg-[#dadada8b] flex items-center justify-center rounded-full left-1/2 bottom-[0%] -translate-x-[50%] -translate-y-[50%]'>
                <FaArrowRight size={".7em"}/>
            </span>
      </div>
    </div>
  )
}

export default Card3
