import React, { useState } from 'react';
import Container from '@mui/material/Container';

import { TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../../../Hooks/UseAuth';

const Login = () => {

    const [loginData, setLogindata] = useState({})
    const { user, Signingoogle, LoginUser, authError, isLoading } = UseAuth();

    const location = useLocation()
    const history = useHistory()


    const handleonChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newloginData = { ...loginData }
        newloginData[field] = value
        setLogindata(newloginData)


    }
    const handleloginSubmit = e => {
        LoginUser(loginData.email, loginData.password, location, history)

        e.preventDefault()
    }

    const handlGoogleSignin = () => {
        Signingoogle(location, history)

    }

    return (


        <Container sx={{ mt: 5 }}>
            <h5>Please Login</h5>
            <form onSubmit={handleloginSubmit}>
                <TextField
                    sx={{ width: '40%' }}
                    name="email"
                    onChange={handleonChange}
                    type="email"
                    label="your email"
                    variant="standard" /> <br />
                <TextField
                    sx={{ width: '40%' }}
                    type="password"
                    name="password"
                    onChange={handleonChange}
                    label="password"
                    variant="standard" /> <br />
                <Button sx={{ width: '40%', mt: 5 }} variant="contained" type="submit">Login</Button>
                {
                    isLoading && <CircularProgress />
                }
                {
                    user?.email && <Alert severity="success">You Login successfully !</Alert>
                }
                {
                    authError && <Alert variant="outlined" severity="error">
                        {authError}
                    </Alert>
                }
                <Typography sx={{ mt: 3 }}>
                    Are you new? <Link to="/register"> Please Regester</Link>
                </Typography>
            </form>
            <Button variant="contained" onClick={handlGoogleSignin} >Signin With Google</Button>
        </Container>


    );
};

export default Login;