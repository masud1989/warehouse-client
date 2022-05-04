import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect( ()=>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [] );



    const editProduct = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        const quantity = event.target.quantity.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const description = event.target.description.value;

        const updatedProduct = { name, img, description, price, quantity, supplier, email }
        console.log({updatedProduct});

        // sending data  =========================================
        const url = `http://localhost:5000/product/${id}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updatedProduct)
        })
            .then( res => res.json())          
            .then(data => {
                console.log('Success', data);
                alert('Product Edit Success')
                event.target.reset();
            })

    }





    return (
        <div>
            <h3>Updating Product: {product.name}</h3>

            <div className='container mt-5 w-75'>
            <div className='mx-auto mb-5 border-2 border-info'>
            <h3 className='text-info mb-3 bg-info text-white p-2'>Update Product</h3>
                    <form onSubmit={editProduct}>
                        {/* <div className="form-group mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div> */}
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group mb-3">
                                    <h6>Previous Name: {product.name}</h6>
                                    <input type="text" className="form-control" id="name" name='name' placeholder="Update Product Name" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                <h6>Previous Price: {product.price}</h6>
                                    <input type="text" className="form-control" id="price" name='price' placeholder="Update Product Price" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                <h6>Previous Supplier: {product.supplier}</h6>
                                    <input type="text" className="form-control" id="supplier" name='supplier' placeholder="Update Product Supplier" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                <h6>Previous Quantity: {product.quantity}</h6>
                                    <input type="number" className="form-control" id="quantity" name='quantity' placeholder="New Quantity" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                <h6>Previous Email: {product.email}</h6>
                                    <input type="email" className="form-control" id="email" name='email' placeholder="New Email" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                <h6>Previous URL: {product.url}</h6>
                                    <input type="text" className="form-control" id="img" name='img' placeholder="New Photo URL"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control mb-4" id="description" name='description' rows="3" value={product.description}></textarea>
                            <textarea className="form-control mb-4" id="description" name='description' rows="3" placeholder='New Description'></textarea>
                        </div>
                        <Button type='submit' className='btn btn-info text-white p-2'>Update Product</Button>
                </form>
            </div>
        </div>











        </div>
    );
};

export default Update;