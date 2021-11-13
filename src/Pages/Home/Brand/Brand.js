import { Container } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear"
        };
        return (
            <Container style={{ marginTop: '30px' }}>
                <h2 style={{ marginBottom: '20px' }} >Most Popular Brand</h2>
                <Slider {...settings}>
                    <div>
                        <img style={{ width: '120px', borderRadius: '10px' }} src="https://i.ibb.co/CwBjzKC/oie-lrxeqh-Va-Aa-BY.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{ width: '200px', borderRadius: '10px' }} src="https://i.ibb.co/KjDjQK9/oie-uaqpeuu8-KYZ3.gif" alt="" />
                    </div>
                    <div>
                        <img style={{ width: '110px', borderRadius: '10px' }} src="https://i.ibb.co/FVCXxnp/oie-1193532-Knqv-CUJN.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{ width: '200px', borderRadius: '10px' }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{ width: '200px', borderRadius: '10px' }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{ width: '200px', borderRadius: '10px' }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                    </div>
                </Slider>
            </Container>
        );
    }
}