import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
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

        const handleDeleteMyItem = id => {
            console.log('deleting', id);
            const proceed = window.confirm('Are You sure to Delete');
                if(proceed){
                    console.log('Deleting Product');
                    const url = `http://localhost:5000/my-items/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res=> res.json())
                        .then(data =>{
                            if(data.deletedCount > 0){
                                window.alert('Delete Successfull');
                                toast('Delete Successfull');
                                const remaining = myItems.filter(item => (item._id !== id));
                                setMyItems(remaining);
                            }
                        })
                }
            
        }

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
                                <td><img style={{height: "70px", wmyIdth: "90px"}} src={myItem.img} alt='' /></td>
                                <td>{myItem.supplier}</td>
                                <td>{myItem.price}</td>
                                <td>{myItem.quantity}</td>
                                <td>
                                    <a onClick={()=>handleDeleteMyItem(myItem.id)} className='btn btn-danger mx-1'>Delete</a>
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