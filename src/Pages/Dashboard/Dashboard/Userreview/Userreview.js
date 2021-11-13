import { Paper, Typography, Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React from 'react';

const Userreview = ({ review }) => {
    const { description, name } = review
    return (
        <div>
            <h3>This is user revie</h3>
        </div>

    );
};

export default Userreview;