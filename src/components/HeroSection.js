import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('https://source.unsplash.com/random')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px',
      }}
    >
      <Typography
        variant='h3'
        sx={{ fontWeight: 'bold', marginBottom: '20px' }}
      >
        Blog Enchant
      </Typography>
      <Typography variant='h6'>
        Explore the latest updates and insights into my adventures in Japan.
      </Typography>
    </Box>
  );
};

export default HeroSection;
