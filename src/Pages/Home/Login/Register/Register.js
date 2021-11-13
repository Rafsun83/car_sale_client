import React, { useState } from 'react';
import Container from '@mui/material/Container';

import { TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import UseAuth from './../../../../Hooks/UseAuth';

const Register = () => {

    const [loginData, setLogindata] = useState({})
    const { registerUser, Signingoogle, isLoading, user, authError } = UseAuth();
    const history = useHistory()

    console.log(loginData)
    const handleonBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newloginData = { ...loginData }

        newloginData[field] = value
        setLogindata(newloginData)


    }
    const handleloginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password dose not match')
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <Container sx={{ mt: 5 }}>
            <h5>Please Register</h5>
            {
                !isLoading && <form onSubmit={handleloginSubmit}>
                    <TextField sx={{ width: '40%' }}
                        onBlur={handleonBlur}
                        name="name"
                        type="name"
                        label="your name"
                        variant="standard" /> <br />
                    <TextField sx={{ width: '40%' }}
                        onBlur={handleonBlur}
                        id="standard-basic"
                        name="email"
                        type="email"
                        label="your email"
                        variant="standard" /> <br />
                    <TextField sx={{ width: '40%' }}
                        onBlur={handleonBlur}
                        name="password"
                        type="password"
                        label="password"
                        variant="standard" /><br />
                    <TextField sx={{ width: '40%' }}
                        onBlur={handleonBlur}
                        name="password2"
                        type="password"
                        label="confirm password"
                        variant="standard" /> <br />
                    <Button sx={{ width: '40%', mt: 3 }}
                        variant="contained" type="submit" >Register</Button>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">You Registered successfully !</Alert>
                    }
                    {
                        authError && <Alert variant="outlined" severity="error">
                            {authError}
                        </Alert>
                    }
                    <Typography sx={{ mt: 2 }}>
                        Are you Register? <Link to="/login"> Please Login</Link>
                    </Typography>
                    <Button variant="contained" onClick={Signingoogle} >Signin With Google</Button>
                </form>
            }
            {
                isLoading && <CircularProgress />

            }
        </Container>

    );
};

export default Register;