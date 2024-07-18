import React from 'react'

function Card2() {
    const data = [
        {name: "Mahiya Ve", description: "The name of the card that will be displayed"},
        {name: "Junoon", description: "The name of the card that will be displayed"}
    ]

    const handleClickDownload = () => {alert ("chal rha hai!!!")}

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 align items-center justify-center'>
      {data.map((elem, index) =>(
        <div className='w-90 px-3 py-2 bg-zinc-100 rounded'>
        <h3 className='font-semibold text-xl'>{elem.name}</h3>
        <p className='text-sm mt-2'>{elem.description}</p>
        <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
      </div>
      ))}
    </div>
  )
}

export default Card2
