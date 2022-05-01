import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    // console.log(product);
    const {id, name, img, description, price } = product;
    const navigate = useNavigate();
    return (
        <div className='product'>
            <img src={img} alt=''/>
            <h3>{name}</h3>
            <p>Price: {price} Tk.</p>
            <p>{description}</p>  
            <Button className='btn btn-info'>Deliver</Button>          
        </div>
    );
};

export default Product;