import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Slider from '../../Slider/Slider';
import Products from './Products/Products';
import Slick from './Slick/Slick';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider/>
            <Products></Products>
            <Slick></Slick>
            <Footer></Footer>
        </div>
    );
};

export default Home;