import React, { useEffect, useState } from 'react';
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
            <h4 className='text-info mb-3 bg-info text-white p-2'>Product List</h4>
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
                
                <tr>
                    <th scope="row">Name</th>
                    <td><img style={{height: "70px", width: "90px"}} src={img} alt='' /></td>
                    <td>MS Enterprise</td>
                    <td>250000</td>
                    <td>4</td>
                    <td>
                        <a className='btn btn-info mx-1'>Edit</a>
                        <a className='btn btn-danger mx-1'>Delete</a>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default ViewProduct;