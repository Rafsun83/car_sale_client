import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Company/Company.css'

const Company = () => {
    return (
        <Container style={{ marginBottom: 50 }}>
            <Container style={{ marginBottom: 50, width: 600, fontFamily: '-moz-initial' }}>
                <h2 style={{ padding: 20, fontWeight: 'bold' }}>Why purchase your dream car from our company</h2>
                <Typography style={{ color: 'gray' }}>
                    Ridiculus sodales metus varius dictum fermentum ante dictumst eleifend quam. Taciti tortor aenean nisl dapibus. Elementum, condimentum, est consequat adipiscing accumsan.
                </Typography>
            </Container>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={6} style={{ padding: 20 }}>
                    <Typography className='About__company' variant='h5' style={{ fontFamily: '-moz-initial', fontWeight: 'bold', padding: 20 }}>
                        New & Used Car
                    </Typography>
                    <Typography style={{ color: 'gray' }}>
                        Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent. <br />
                        <Link>View Details</Link>
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{ padding: 20 }}>
                    <Typography className='About__company' variant='h5' style={{ fontFamily: '-moz-initial', fontWeight: 'bold', padding: 20 }}>
                        Maintanence Pakages
                    </Typography>
                    <Typography style={{ color: 'gray' }}>
                        Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent. <br />
                        <Link>View Details</Link>
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{ padding: 20 }}>
                    <Typography className='About__company' variant='h5' style={{ fontFamily: '-moz-initial', fontWeight: 'bold', padding: 20 }}>
                        Vehicles History Pakages
                    </Typography>
                    <Typography style={{ color: 'gray' }}>
                        Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent. <br />
                        <Link>View Details</Link>
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{ padding: 20 }}>
                    <Typography className='About__company' variant='h5' style={{ fontFamily: '-moz-initial', fontWeight: 'bold', padding: 20 }}>
                        Free Test Drives
                    </Typography>
                    <Typography style={{ color: 'gray' }}>
                        Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent. <br />
                        <Link>View Details</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>


    );
};

export default Company;