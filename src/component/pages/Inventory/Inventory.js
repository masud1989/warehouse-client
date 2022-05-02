import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import AddProduct from '../Home/AddProduct/AddProduct';
import ViewProduct from '../Home/ViewProduct/ViewProduct';

const Inventory = () => {
    return (
        <div>
            <Header></Header>
            {/* <h3>This is Inventory Page</h3> */}
            <AddProduct></AddProduct>
            <ViewProduct></ViewProduct>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;