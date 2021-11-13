import React from 'react';


const Myorder = ({ order }) => {
    const { productId, name, email, phone, Adress } = order

    return (
        <div>
            <h3>This is my order{email} </h3>
        </div>
    );
};

export default Myorder;