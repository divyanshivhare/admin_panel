import React,  { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils_project/Context'

function Nav() {
    const[products] = useContext(ProductContext);

    let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
    distinct_category = [...new Set(distinct_category)];
    // console.log(distinct_category);

    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()},
        ${(Math.random() * 255).toFixed()}, 0.4)`
    };

  return (
      <nav className='w-[15%] h-full flex flex-col items-center bg-zinc-50 pt-5'>
        <Link to='/create' className='py-2 px-5 border rounded border-blue-200 text-blue-300'>Add New Product</Link>
        <hr className='my-3 w-[80%]' />
        <h1 className='text-xl w-[80%] mb-3'>Category Filter</h1>
        <div className='w-[80%]'>
          
        {distinct_category.map ((c, i) => 
            <Link key={i} to={`/?category=${c}`} className='flex items-center mb-2'>
            <span style={{backgroundColor: color()}} className='rounded-full mr-2 w-[15px] h-[15px]'></span>
            {c}
            </Link>
        )}

        </div>
      </nav>
  )
}

export default Nav
