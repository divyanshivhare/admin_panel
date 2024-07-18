import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils_project/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Create() {
    const[products, setProducts] = useContext(ProductContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const AddProductHandler = (e) => {
        e.preventDefault();

        if(title.trim().length < 5 || image.trim().length < 5 || category.trim().length < 5 || price.trim().length < 1 || description.trim().length < 5){
            alert("Each and every field must have atleast 4 characters");
            return;
        }

        const product = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            description
        }
        setProducts([...products, product]);
        localStorage.setItem(
            "products",
            JSON.stringify([...products, product])
        )
        toast.success("Product Added Successfully")
        navigate('/');
    }

  return (
    <form onSubmit={AddProductHandler} className='flex flex-col p-[5%] items-center h-screen w-screen'>
        <h1 className='text-3xl w-1/2 mb-4'>Add New Product</h1>
        <input 
            type="url" 
            placeholder='Image link' 
            className='text-xl bg-zinc-100 rounded-md p-2 w-1/2 mb-3' 
            onChange={(e) => setImage(e.target.value)}
            value={image}
        />
        <input 
            type="text" 
            placeholder='Title' 
            className='text-xl bg-zinc-100 rounded-md p-2 w-1/2 mb-3' 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />
        <div className='w-1/2 flex justify-between'>
            <input 
                type="text" 
                placeholder='Category' 
                className='text-xl bg-zinc-100 rounded-md p-2 w-[48%] mb-3' 
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            <input 
                type="number" 
                placeholder='Price' 
                className='text-xl bg-zinc-100 rounded-md p-2 w-[48%] mb-3' 
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
        </div>
        <textarea
            className='text-xl bg-zinc-100 rounded-md p-2 w-1/2 mb-3' 
            placeholder='Enter product description here'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows="10">
        </textarea>
        <div className='w-1/2'>
            <button className='py-2 px-5 border rounded border-blue-200 text-blue-300'>
                Add New Product
            </button>
        </div>
    </form>
  )
}

export default Create
