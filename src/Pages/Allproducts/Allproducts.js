import React from 'react';
import Footer from '../Footer/Footer';
import Cars from '../Home/Cars/Cars';
import Navigation from '../Home/Navigation/Navigation';

const Allproducts = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Cars></Cars>
            <div style={{ marginTop: '30px' }}>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Allproducts;