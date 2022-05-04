import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import img from './../../../../images/slider/slider-1.jpg';

const ViewProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You sure to Delete');
            if(proceed){
                console.log('Deleting Product', id);
                const url = `http://localhost:5000/product/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res=> res.json())
                    .then(data =>{
                        if(data.deletedCount > 0){
                            window.alert('Delete Successfull');
                            const remaining = products.filter(product => (product._id !== id));
                            setProducts(remaining);
                        }
                    })
            }
        
    }

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
                            <tr key={product._id}>
                                <td scope="row">{product.name}</td>
                                <td><img style={{height: "70px", width: "90px"}} src={product.img} alt='' /></td>
                                <td>{product.supplier}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <Link to={`/edit/${product._id}`} className='btn btn-info mx-1'>Edit</Link>
                                    <a onClick={()=>handleDeleteProduct(product._id)} className='btn btn-danger mx-1'>Delete</a>
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