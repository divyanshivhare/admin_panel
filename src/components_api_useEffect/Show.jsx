import React, {useEffect, useState} from 'react'
import axios from '../utils/axios'
function Show() {

    const [products, setProducts] = useState([]);

  const getProducts = () => {
    // const api = "https://fakestoreapi.com/products";

    axios.get("/products")
    .then(products => {
    //   console.log(products);
      setProducts(products.data);
    })
    .catch((err) => {console.log(err);})
  }

  useEffect(() => {
    getProducts()
  }, [])

  
  // const addProducts = () => {
  //   const api = "https://fakestoreapi.com/products";

  //   axios.post(api, {
  //     title: 'test product',
  //     price: 13.5,
  //     description: 'lorem ipsum set',
  //     image: 'https://i.pravatar.cc',
  //     category: 'electronic'
  //   })
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch((err) => {console.log(err);})
  // }


  return (
    <>
    {/* <button onClick={getProducts} className='mb-10 bg-red-200 p-2 rounded-md'>Call product API</button>
    <hr /> */}
    {/* <br /> <br />
      <button onClick={addProducts}>Save new product in API</button>
      <hr className='my-10'/> */}
    
    <ul className='pt-5'>
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className='mb-1 bg-red-100 p-2 rounded-md'>{p.title}</li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  )
}

export default Show
