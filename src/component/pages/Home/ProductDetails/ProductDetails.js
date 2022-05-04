import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
            <div className='w-50 mx-auto'>
            <h1 className='bg-info text-white mt-5'>This is product details of ID :{product._id} </h1>

            <div className="card mb-3">
                <img src={product.img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h3 className="card-title">Name: {product.name}</h3>
                    <h4 className="card-title">Price: {product.price}</h4>
                    <h4 className="card-title">Quantity Available: {product.quantity}</h4>
                    <h4 className="card-title">Supplier Name: {product.supplier}</h4>
                    <p className="card-text"><strong>Details:</strong>  {product.description}</p>
                    <Button className='btn btn-info'>Deliver</Button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;