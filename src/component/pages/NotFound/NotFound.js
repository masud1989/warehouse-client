import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className='bg-light w-75 mx-auto '>
                 <h3 className='text-danger mt-5'>Sorry! Page not found. Wrong URL</h3>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;