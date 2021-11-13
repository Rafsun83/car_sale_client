import { Grid, Typography } from '@mui/material';
import React from 'react';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography>
                    This is dashboard
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>
                    This is dashboard
                </Typography>
            </Grid>

        </Grid>
    );
};

export default DashboardHome;