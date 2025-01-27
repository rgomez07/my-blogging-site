import React from 'react';
import { Box, Typography } from '@mui/material';

const NewsSection = () => {
  return (
    <Box p={4}>
      <Typography variant='h4' gutterBottom>
        News Section
      </Typography>
      <Typography>
        This is where your news content will go. Add news articles here!
      </Typography>
    </Box>
  );
};

export default NewsSection;
