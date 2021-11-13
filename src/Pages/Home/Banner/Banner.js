import { Button } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import car from '../../../Images/car1.jpg'
import car2 from '../../../Images/car2.jpg'
import car3 from '../../../Images/car3.jpg'
import car4 from '../../../Images/car4.jpg'
import car6 from '../../../Images/car6.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Power And Beauty</h1>
                    <p>Free library's $1m auto archives are moving to philly's world-famous car museum and to a hershey attraction</p>
                    <Button variant="contained" style={{ backgroundColor: 'red', height: '50px' }} >Discover Today</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Power And Beauty</h1>
                    <p>Free library's $1m auto archives are moving to philly's world-famous car museum and to a hershey attraction</p>
                    <Button variant="contained" style={{ backgroundColor: 'red', height: '50px' }} >Discover Today</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car}
                    alt="Third slide"
                />


                <Carousel.Caption>
                    <h1>Power And Beauty</h1>
                    <p>Free library's $1m auto archives are moving to philly's world-famous car museum and to a hershey attraction</p>
                    <Button variant="contained" style={{ backgroundColor: 'red', height: '50px' }} >Discover Today</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Power And Beauty</h1>
                    <p>Free library's $1m auto archives are moving to philly's world-famous car museum and to a hershey attraction</p>
                    <Button variant="contained" style={{ backgroundColor: 'red', height: '50px' }} >Discover Today</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;