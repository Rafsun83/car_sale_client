import React from 'react';
import { Container, Grid, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import fb from '@mui/icons-material/FacebookOutlined'



const Footer = () => {
    return (
        <div style={{ mt: 10, backgroundColor: 'rgb(9, 9, 16)', color: 'white' }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ textAlign: 'left' }}>
                    <Grid item xs={3} sm={3} mb={3}>
                        <Typography variant="subtitle1">
                            PRODUCT
                        </Typography>
                        <Box style={{ color: 'gray' }}>
                            <Typography variant="subtitle2" component="div">
                                Business
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Features
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                App showcasec
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Pricing
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Download
                            </Typography>
                        </Box>


                    </Grid>
                    <Grid item xs={3} sm={3} mb={3}>
                        <Typography variant="subtitle1">
                            COMPANY
                        </Typography>
                        <Box style={{ color: 'gray' }}>
                            <Typography variant="subtitle2" component="div">
                                About us
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Blog
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                News
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Jobs
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Contact us
                            </Typography>
                        </Box>



                    </Grid>
                    <Grid item xs={3} sm={3} mb={3}>
                        <Typography variant="subtitle1">
                            LEARN MORE
                        </Typography>
                        <Box style={{ color: 'gray' }}>
                            <Typography variant="subtitle2" component="div">
                                Support
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Developers
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Referrel Program
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Affiliate Program
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Folder Sharing FAQ
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sm={3} mb={3}>
                        <Typography variant="subtitle1">
                            CONTACT WITH US
                        </Typography>
                        <Box style={{ color: 'gray' }}>
                            <Typography variant="subtitle2" component="div">


                                Facebook
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Google
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Linkdin
                            </Typography>

                        </Box>
                    </Grid>

                </Grid>
                <Divider style={{ marginBottom: '1rem' }}></Divider>
                <Grid container spacing={2} style={{ textAlign: 'left', color: 'gray' }}>
                    <Grid item xs={6} sm={6} mb={6}>
                        <Typography variant="subtitle2">
                            @ 2021 Rafsun's All Rights Reserve
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} mb={6}>
                        <Typography variant="subtitle2">
                            Terms Of Service. Privacy. Policy
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;