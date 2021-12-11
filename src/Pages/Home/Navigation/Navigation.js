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
import { Avatar, Divider } from '@mui/material';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../Navigation/Navigation.css';
import logouticon from '@mui/icons-material/Logout';



const Navigation = () => {
    const { user, Logout } = UseAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
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
                    <Typography style={{ display: 'flex' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Dream Car
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button color="inherit" >Home</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home" >
                        <Button color="inherit" >About</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home" >
                        <Button color="inherit" >Inventory</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button color="inherit" >Blog</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button color="inherit" >Contacts</Button>
                    </Link>

                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/allproducts">
                        <Button color="inherit">All products</Button>
                    </Link>


                    {
                        user?.email ?
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </Link> */}

                                {/* <Button onClick={Logout} color="success">  <Avatar alt="Remy Sharp" src={user.photoURL} /></Button> */}

                                <DropdownButton className='View__profile' id="dropdown-basic-button" title={<Avatar alt="Remy Sharp" src={user.photoURL} />}>
                                    <Box className='Profile__img'>
                                        <Avatar style={{ height: 80, width: 80 }} alt="Remy Sharp" src={user.photoURL} />

                                    </Box>
                                    <Typography style={{ textAlign: 'center', padding: 10, fontWeight: 'bold' }}>
                                        {user.displayName}
                                    </Typography>

                                    <Dropdown.Item href="#/action-1" className='Profile__button'>View Profile</Dropdown.Item>
                                    <Divider></Divider>
                                    <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Bookmark</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Client Analytics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Announcement</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" onClick={Logout} > Log Out</Dropdown.Item>

                                </DropdownButton>


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