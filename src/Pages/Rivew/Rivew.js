import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import UseAuth from '../../Hooks/UseAuth';




const Rivew = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://nameless-chamber-77947.herokuapp.com/productreview`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const { user } = UseAuth();

    return (
        <Container sx={{ mt: 5, mb: 5, backgroundColor: 'whitesmoke', borderRadius: 3 }}>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} mb={8} style={{ display: 'flex', alignItems: 'center' }} >
                    <Typography>
                        <img style={{ width: '500px' }} src="https://i.ibb.co/JRFjhYS/images-8.jpg" alt="" />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} mb={4}>
                    <Typography variant="h4" style={{ fontFamily: '-moz-initial', fontWeight: 'bold', marginBottom: '10px', padding: '10PX' }}>
                        Customer Feedback

                    </Typography>

                    <ImageList sx={{ width: 500, height: 450, textAlign: 'left' }}>
                        {reviews.map((item) => (

                            <ImageListItem style={{ padding: 10, borderRadius: 3, }} key={item.img}>
                                <Paper elevation={3}>
                                    <Box style={{ padding: 20 }}>
                                        <Typography
                                            style={{ fontFamily: 'initial' }}
                                            variant="subtitle1" >
                                            {item.description}

                                        </Typography>
                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar alt="Remy Sharp" src={user.photoURL} />
                                            <ImageListItemBar
                                                style={{ fontFamily: 'initial', color: 'crimson', fontWeight: 'bold' }}
                                                title={item.name}
                                                subtitle={<span>{item.designation}</span>}
                                                position="below"
                                            />

                                        </Stack>
                                    </Box>
                                </Paper>

                            </ImageListItem>
                        ))}
                    </ImageList>


                </Grid>

            </Grid>
        </Container>
    );
};

export default Rivew;