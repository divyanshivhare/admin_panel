import React from 'react'

function PropsCard({values, handleClick, index}) {     //{.....} are the props
    const {name, image, profession, friends} = values;
    return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-40 bg-sky-200'>
            <img className='w-full h-full object-cover object-[center_top]' src={image} alt="" />
        </div>
        <div className='w-full p-3'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <h5 className='text-s'>{profession}</h5>
            <button onClick={()=>handleClick(index)} className={`mt-4 px-3 py-1 text-xs text-white ${friends? "bg-red-500" : "bg-blue-500"} rounded-md font-semibold`}>
                {friends===true ? "Remove Friend" : "Add Friend"}
            </button>
        </div>
    </div>
  )
}

export default PropsCard;
