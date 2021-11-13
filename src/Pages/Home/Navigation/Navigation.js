import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import UseAuth from './../../../Hooks/UseAuth';



const Navigation = () => {
    const { user, Logout } = UseAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <IconButton

                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        < MenuIcon />
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Dream Car
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button color="inherit" >Home</Button>
                    </Link>

                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/allproducts">
                        <Button color="inherit">All products</Button>
                    </Link>


                    {
                        user?.email ?
                            <Box>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </Link>
                                <Button onClick={Logout} variant="contained" color="success">{user.displayName} Logout</Button>
                            </Box>

                            :
                            <Box>

                                <Link to="/login" style={{ textDecoration: "none" }} >
                                    <Button variant="contained" color="success"> {user.email} Login</Button>
                                </Link>
                            </Box>
                    }


                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;