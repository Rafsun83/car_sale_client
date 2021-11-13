import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import UseAuth from '../../../Hooks/UseAuth';
const Review = () => {
    const { user } = UseAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/productreview', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added sucessfully')
                    reset();
                }
            })
        console.log(data);

    }
    return (
        <div>
            <h3>This is review</h3>
            <div className="Shipping-info">
                <form className="Shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                    <textarea placeholder="Your Opinion" {...register("description")} />


                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;