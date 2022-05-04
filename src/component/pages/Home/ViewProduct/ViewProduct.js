import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import img from './../../../../images/slider/slider-1.jpg';

const ViewProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    return (
        <div className='container mb-5  w-75'>
            <h4 className='text-info mb-3 bg-info text-white p-2'>Product List:{products.length}</h4>
            <table className="table table-sm mb-10">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr>
                                <td scope="row">Name{product.name}</td>
                                <td><img style={{height: "70px", width: "90px"}} src={product.img} alt='' /></td>
                                <td>{product.supplier}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <a className='btn btn-info mx-1'>Edit</a>
                                    <a className='btn btn-danger mx-1'>Delete</a>
                                </td>                                
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ViewProduct;