import axios from '../utils_project/axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';
import { ProductContext } from '../utils_project/Context';

function Details() {
    const navigate = useNavigate();
    const[products, setProducts] = useContext(ProductContext);

    const[product, setproduct] = useState(null);
    const {id} = useParams();

    const getSingleProduct = async() => {
        try {
            const {data} = await axios.get(`/products/${id}`);
            setproduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(!product){
            setproduct(products.filter((p) => p.id == id)[0]);
        }
        getSingleProduct();
    }, []);

    const productDeleteHandler = (id) => {
        const filteredProducts = products.filter((p) => p.id !== id);
        setProducts(filteredProducts);
        localStorage.setItem('products', JSON.stringify(filteredProducts));
        navigate('/');
    }

  return product ?(
    <div className='w-[70%] h-full flex justify-between items-center m-auto p-[10%]'>
        <img className="w-[40%] h-[80%] object-contain" src={product.image} alt="" />
        <div className='content w-[55%]'>
            <h1 className='text-3xl'>{product.title}</h1>
            <h3 className='text-zinc-400 my-5"'>{product.category}</h3>
            <h2 className='text-red-300 mb-3'>${product.price}</h2>
            <p className='mb-[5%]'>{product.description}</p>
            <Link to={`/edit/${product.id}`} className='mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300'>Edit</Link>
            <button onClick={() => productDeleteHandler(product.id)} className='py-2 px-5 border rounded border-red-200 text-red-300'>Delete</button>
        </div>
    </div>
  ) : (
    <Loading />
  )
}

export default Details
