import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Myorder from '../Myorder/Myorder';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Allorders = () => {
    const [orders, setOrders] = useState([])
    const { user } = UseAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/bookedorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])
    return (
        <div>
            <h3 style={{ textAlign: 'left' }} >Total Orders: {orders.length}  </h3>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Adress</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Product Id</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.Adress}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.productId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Allorders;