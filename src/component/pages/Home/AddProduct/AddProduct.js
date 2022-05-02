import React from 'react';
import { Button } from 'react-bootstrap';

const AddProduct = () => {
    const addProduct = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        const quantity = event.target.quantity.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const description = event.target.description.value;

        const product = { name, img, description, price, quantity, supplier, email }
        // console.log({product});

        // sending data  =========================================
        fetch('http://localhost:5000/product',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(product)
        })
            .then( res => res.json())          
            .then(data => {
                console.log('Success', data);
                alert('Product Added Success')
                event.target.reset();
            })

    }

    return (
        <div className='container mt-5 w-75'>
            <div className='mx-auto mb-5 border-2 border-info'>
            <h3 className='text-info mb-3 bg-info text-white p-2'>Add Product Here</h3>
                    <form onSubmit={addProduct}>
                        {/* <div className="form-group mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div> */}
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="name" name='name' placeholder="Product Name" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="price" name='price' placeholder="Product Price" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="supplier" name='supplier' placeholder="Product Supplier" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="number" className="form-control" id="quantity" name='quantity' placeholder="Product Quantity" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" id="email" name='email' placeholder="User Email" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="img" name='img' placeholder="Product Photo URL" required/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control mb-4" id="description" name='description' rows="3" placeholder='Description'></textarea>
                        </div>
                        <Button type='submit' className='btn btn-info text-white p-2'>Add Product</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;