import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    return (
        <div id='trainings' className='container my-2'>
        <h1 className="product-title mt-5">Products: {products.length}</h1>
        <div className="product-container mb-5">
            {
                products.map(product=> 
                <Product 
                    key={product.id}
                    product = {product}
                ></Product>
                )
            }
        </div>
    </div>
    );
};

export default Products;