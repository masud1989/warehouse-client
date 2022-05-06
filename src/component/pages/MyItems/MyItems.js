import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const MyItems = () => {

        const [user] = useAuthState(auth);
        const email = user.email;
        const [myItems, setMyItems] = useState([]);
        useEffect( () => {
            const url = `http://localhost:5000/my-items?email=${email}`;

            fetch( url)
                .then( res => res.json())
                .then (data => setMyItems(data))
        })


    return (
        <div>
            <Header></Header>
            <div className='container mb-5  w-75'>
               <h3 className='text-info mt-3 mb-3 bg-info text-white p-2'>My Items-Total: {myItems.length} </h3>
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
                            myItems.map(myItem=>
                             <tr key={myItem._id}>
                                <td>{myItem.name}</td>
                                <td><img style={{height: "70px", width: "90px"}} src={myItem.img} alt='' /></td>
                                <td>{myItem.supplier}</td>
                                <td>{myItem.price}</td>
                                <td>{myItem.quantity}</td>
                                <td>
                                    <Link to="/" className='btn btn-info mx-1'>Edit</Link>
                                    <a className='btn btn-danger mx-1'>Delete</a>
                                </td>
                             </tr>
                             )
                        }
    
                    </tbody>
                </table>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MyItems;