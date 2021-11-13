import React from 'react';
import Footer from '../../Footer/Footer';
import Rivew from '../../Rivew/Rivew';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Cars from '../Cars/Cars';
import Navigation from '../Navigation/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Brand></Brand>
            <Cars></Cars>
            <Rivew></Rivew>
            <Footer></Footer>

        </div>
    );
};

export default Home;