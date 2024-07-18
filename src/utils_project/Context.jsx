import React, { createContext, useEffect, useState } from 'react'
import axios from './axios';

export const ProductContext = createContext();
function Context(props) {
    const[products, setProducts] = useState(
        JSON.parse(localStorage.getItem('products')) || null
    );

    const getproducts = async() => {
        try {
            const {data} = await axios("/products");
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(products);

    useEffect(() => {
        getproducts();    
    }, []);

    return( 
    <ProductContext.Provider value={[products, setProducts]}>
        {props.children}
    </ProductContext.Provider>
    );
}

export default Context
