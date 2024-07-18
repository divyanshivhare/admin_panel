import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils_project/Context';
import { nanoid } from 'nanoid';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const[products, setProducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState({
        title: "",
        image: "",
        category: "",
        price: "",
        description: ""
    });
    
    const changeHandler = (e) => {
        // console.log(e.target.name, e.target.value);
        setProduct({...product, [e.target.name] : e.target.value});
    }

    useEffect(() => {
        setProduct(products.filter((p) => p.id == id)[0]);
    }, [id])

    const AddProductHandler = (e) => {
        e.preventDefault();

        if(
            product.title.trim().length < 5 || 
            product.image.trim().length < 5 || 
            product.category.trim().length < 5 || 
            product.price.trim().length < 1 || 
            product.description.trim().length < 5
        ){
            alert("Each and every field must have atleast 4 characters");
            return;
        }

        const pi = products.findIndex((p) => p.id == id);
        const copyData = [...products];
        copyData[pi] = {...products[pi], ...product};
        console.log(copyData)
        
        setProducts(copyData);
        localStorage.setItem(
            "products",
            JSON.stringify(copyData)
        )
        navigate(-1);
    }

  return (
    <form onSubmit={AddProductHandler} className='flex flex-col p-[5%] items-center h-screen w-screen'>
        <h1 className='text-3xl w-1/2 mb-4'>Edit Product</h1>
        <input 
            type="url" 
            placeholder='Image link' 
            className='text-xl bg-zinc-100 rounded-md p-2 w-1/2 mb-3' 
            name="image"
            onChange={changeHandler}
            value={product && product.image}
        />
        <input 
            type="text" 
            placeholder='Title' 
            className='text-xl bg-zinc-100 rounded-md p-2 w-1/2 mb-3' 
            name="title"
            onChange={changeHandler}
            value={product && product.title}
        />
        <div className='w-1/2 flex justify-between'>
            <input 
                type="text" 
                placeholder='Category' 
                className='text-xl bg-zinc-100 rounded-md p-2 w-[48%] mb-3' 
                name="category"
                onChange={changeHandler}
                value={product && product.category}
            />
            <input 
                type="number" 
                placeholder='Price' 
                className='text-xl bg-zinc-100 rounded-md p-2 w-[48%] mb-3' 
                name="price"
                onChange={changeHandler}
                value={product && product.price}
            />
        </div>
        <textarea
            className='text-xl bg-zinc-100 rounded-md p-2 w-1/2 mb-3' 
            placeholder='Enter product description here'
            name="description"
            onChange={changeHandler}
            value={product && product.description}
            rows="10">
        </textarea>
        <div className='w-1/2'>
            <button className='py-2 px-5 border rounded border-blue-200 text-blue-300'>
                Update
            </button>
        </div>
    </form>
  )
}

export default Edit
