import React from 'react';
import { Button } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <div className='container mt-5 w-75'>
            <div className='mx-auto mb-5 border-2 border-info'>
            <h3 className='text-info mb-3 bg-info text-white p-2'>Add Product Here</h3>
                    <form>
                        {/* <div className="form-group mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div> */}
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="name" placeholder="Product Name" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="name" placeholder="Product Price" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="name" placeholder="Product Supplier" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="number" className="form-control" id="name" placeholder="Product Quantity" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" id="name" placeholder="User Email" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="name" placeholder="Product Photo URL" required/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control mb-4" id="exampleFormControlTextarea1" rows="3" placeholder='Description'></textarea>
                        </div>
                        <Button className='btn btn-info text-white p-2'>Add Product</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;