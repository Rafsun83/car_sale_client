import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import './ProductDetails.css';
const ProductDetails = (props) => {

    const { bookingId } = useParams()
    const [productsdetails, setProductsdetails] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products/${bookingId}`)
            .then(res => res.json())
            .then(data => setProductsdetails(data))
    }, [bookingId])





    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {


        axios.post('https://nameless-chamber-77947.herokuapp.com/bookedorders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added sucessfully')
                    reset();
                }
            })
    }

    const { user } = UseAuth()
    return (
        <div>
            {/* <Navigation></Navigation> */}
            {/* <h3>This is product details {bookingId} </h3>
            <h3>This is name {bookingName}</h3> */}

            <div className="Shipping-info">
                <h3>Please purchase your dream product {productsdetails.name}</h3>
                <form className="Shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={bookingId} {...register("Carname")} />
                    <input defaultValue={productsdetails.price} {...register("price")} />
                    <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                    <input defaultValue={user.email} {...register("email")} />
                    {errors.email && <span>This field is required</span>}
                    <input placeholder="Adress" {...register("Adress",)} />
                    <input placeholder="City" {...register("City",)} />
                    <input placeholder="Phone number" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;