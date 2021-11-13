import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [Adminsuccess, setAdminsuccess] = useState(false)
    const handleonBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
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
            <h3>This is make admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleonBlur}
                    variant="standard" />
                <Button variant="contained" type="submit">Add make admin</Button>
            </form>
            {
                Adminsuccess && <Alert severity="success">Made admin successfully !</Alert>
            }
        </div>
    );
};

export default MakeAdmin;