import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const Addproduct = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
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
            <h3>This is add product</h3>
            <div className="Shipping-info">
                <form className="Shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Product name" {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder="Price" {...register("price")} />
                    <textarea placeholder="Description" {...register("description")} />
                    <input placeholder="Image Url" {...register("img",)} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Addproduct;