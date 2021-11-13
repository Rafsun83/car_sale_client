import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert, Box } from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [Adminsuccess, setAdminsuccess] = useState(false)
    const handleonBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://nameless-chamber-77947.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)

                    setAdminsuccess(true)
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <div style={{ textAlign: 'left', marginBottom: 5 }}>
                <h3 style={{ textAlign: 'left', padding: '10px', backgroundColor: 'tomato' }}>You want to make valuable person? please enter here emali and made Admin. <br /> <span>Thank You !</span> </h3>

            </div>
            <Box sx={{ border: '1px solid whitesmoke', width: '40%', padding: 5 }}>
                <form onSubmit={handleAdminSubmit}>
                    <TextField id="standard-basic"
                        sx={{ width: ' 100% ', mb: 3 }}
                        label="Email"
                        type="email"
                        onBlur={handleonBlur}
                        variant="standard" /> <br />
                    <Button sx={{ width: ' 100% ' }} variant="contained" type="submit">Add make admin</Button>
                </form>
            </Box>
            {
                Adminsuccess && <Alert severity="success">Made admin successfully !</Alert>
            }
        </div>
    );
};

export default MakeAdmin;