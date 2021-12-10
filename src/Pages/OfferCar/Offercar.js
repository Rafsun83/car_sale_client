import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import '../OfferCar/Offercar.css'

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            speed: 500
        };
        return (

            <div style={{ marginBottom: 50, color: 'black', margin: 50 }}>

                <Box>
                    <Typography variant="h4" style={{ fontFamily: '-moz-initial', marginBottom: 30 }} >Featured Rental Vehicles</Typography>

                    <Typography style={{ marginBottom: 30 }}>
                        Ridiculus sodales metus varius dictum fermentum ante dictumst eleifend quam. Taciti tortor aenean nisl dapibus. Elementum, condimentum, est consequat adipiscing accumsan sagittis ante metus gravida.
                    </Typography>
                </Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Slider {...settings}>
                            <div>
                                <img style={{ width: 350, height: 400 }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                            </div>
                            <div>
                                <img style={{ width: 350, height: 400 }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                            </div>
                            <div>
                                <img style={{ width: 350, height: 400 }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                            </div>
                            <div>
                                <img style={{ width: 350, height: 400 }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                            </div>
                            <div>
                                <img style={{ width: 350, height: 400 }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                            </div>
                            <div>
                                <img style={{ width: 350, height: 400 }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                            </div>
                        </Slider>
                    </Grid>


                </Grid>


            </div>
        );
    }
}