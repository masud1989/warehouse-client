import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../shared/Header/Header';

const ProductDetails = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/product/${productId}`;
       
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    
    return (
        <div>
            <Header></Header>
            <h1>This is product details of :{product._id} </h1>
        </div>
    );
};

export default ProductDetails;