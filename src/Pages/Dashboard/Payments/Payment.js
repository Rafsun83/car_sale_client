import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';


const stripePromise = loadStripe('pk_test_51KU2qwJ2Uni8zXsNgrtTgkN2OzGsjIgqWGqIdGt2GZPB4FWJS1jFcGLRuHOPKSY7zgDFNsh9Mm5OcXd3kj3HFIqf00YVnwEgWH');

const Payment = () => {

    const { bookedorderID } = useParams()
    const [bookedorder, setBookedorder] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/bookedorders/${bookedorderID}`)
            .then(res => res.json())
            .then(data => setBookedorder(data))

    }, [bookedorderID])
    return (
        <div>
            <h2>hello payment {bookedorderID}  and price {bookedorder.price}</h2>
            <h1>Pay {bookedorder.price}</h1>

            {bookedorder?.price && <Elements stripe={stripePromise}>
                <Checkout
                    bookedorder={bookedorder}
                ></Checkout>
            </Elements>}

        </div>
    );
};

export default Payment; 