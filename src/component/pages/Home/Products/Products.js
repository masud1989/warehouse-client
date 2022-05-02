import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {

    const [products, setProducts] = useState([]);
    const firstSixProducts = products.slice(0,6);

    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    return (
        <div id='trainings' className='container my-2'>
        <h1 className="product-title mt-5">Products: {products.length}</h1>
        <div className="product-container mb-5">
            {
                firstSixProducts.map(product=> 
                <Product 
                    key={product._id}
                    product = {product}
                ></Product>
                )
            }
        </div>
    </div>
    );
};

export default Products;