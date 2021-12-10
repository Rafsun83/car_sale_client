import React from 'react';
import Footer from '../../Footer/Footer';
import Rivew from '../../Rivew/Rivew';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Cars from '../Cars/Cars';
import Offercar from '../../OfferCar/Offercar'
import Navigation from '../Navigation/Navigation';


const Home = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navigation></Navigation>
            <Banner></Banner>
            <Brand></Brand>
            <Cars></Cars>
            <Rivew></Rivew>
            <Offercar></Offercar>
            <Footer></Footer>

        </div>
    );
};

export default Home;