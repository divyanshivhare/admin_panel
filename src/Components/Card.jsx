import React from 'react'

function Code() {

  const data = [
    {image: 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:'Amazon Basics', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit!', instock: true},
    {image: 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Daily Objects', description: 'Lorem ipsum dolor sit amet consectetur!', instock: true},
    {image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Apple', description: 'Lorem ipsum dolor sit amet geytsure paryn', instock: false}
  ]

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
        {data.map((elem, index) => (
          <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
          <div className='w-full h-32 bg-zinc-300'>
          <img className='w-full h-full object-cover' src={elem.image} alt="" srcset="" />
          </div>
          <div className='w-full px-3 py-4'>
              <h2 className='font-semibold'>{elem.name}</h2>
              <p className='text-xs mt-3'>{elem.description}</p>
              <button className={`px-4 py-1 ${elem.instock ? "bg-blue-600" : "bg-red-600"} text-xs rounded text-zinc-100 mt-3`}>
                {elem.instock ? "In Stock" : "Out of Stock"}
              </button>
          </div>
      </div>
        ))}
    </div>
  )
}

export default Code
