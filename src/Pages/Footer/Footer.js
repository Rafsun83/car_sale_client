import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Footer = () => {
    return (
        <div style={{ mt: 5, backgroundColor: 'rgb(9, 9, 16)', color: 'white' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} mb={6}>
                        <Typography variant="h5">
                            Our Service
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                            New car provide
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                            Use car
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                            Recondition
                        </Typography>


                    </Grid>
                    <Grid item xs={6} sm={6} mb={6}>
                        <Typography variant="subtitle2">
                            About
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                            Policy
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                            Help line
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                            Office
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default Footer;