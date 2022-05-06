import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Header from '../../../shared/Header/Header';


const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [productQuantity, setProductQuantity] = useState();
    
    useEffect( () => {
        const url = `http://localhost:5000/product/${productId}`;
       
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    })

    const handleDelivered = () =>{
    
            // console.log('ok');
            const newQuantity = parseInt(product.quantity)-1;
            const productQuantity = newQuantity;
            console.log(parseInt(newQuantity));
            const url = `http://localhost:5000/product/${productId}`;
            fetch(url,{
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify({productQuantity})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setProductQuantity(data);
                    toast('Delivered Successfull');
                })
        }    
    
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
                    <div className='d-flex justify-content-around '>
                        <Button onClick={handleDelivered} className='btn btn-info'>Deliver</Button>
                        <form>
                            <input type='text' name='stock' placeholder='Quantity'/> 
                            <Button  className='btn btn-info'>Stock Update</Button>
                        </form>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;