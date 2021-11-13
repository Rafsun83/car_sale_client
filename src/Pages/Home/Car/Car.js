import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
    const { _id, name, img, description, price } = car

    return (



        <Grid item xs={12} sm={6} md={4}>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }}>
                        {price}
                    </Typography >
                    <Typography sx={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography sx={{ textAlign: 'left', mt: 2 }}>
                        <Link to={`/productdetails/${_id}/${name}`}>
                            <Button variant="contained">Purches</Button>
                        </Link>

                    </Typography>

                </CardContent>


            </Card>

        </Grid>





    );
};

export default Car;