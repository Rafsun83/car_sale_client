import { Container, Grid, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Car from '../Car/Car'

const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    return (
        <Container>
            <Typography sx={{ mt: 5 }} variant="h4" >
                Buy Your Dream Car
            </Typography>
            <Typography>
                We have a full range of cars Across the most popular brands. Thumb Certified used cars We inspect before we sell
            </Typography>
            <Grid container spacing={2} sx={{ mt: 5 }}>

                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                    ></Car>)
                }
            </Grid>

        </Container>
    );
};

export default Cars;