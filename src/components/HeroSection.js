import React from 'react';
import { Box, Typography } from '@mui/material';
import ContentGrid from '../components/ContentGrid'; // Import ContentGrid
import { red } from '@mui/material/colors';

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section with Banner */}
      <Box
        sx={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '250px', sm: '300px', md: '400px' },
          width: '100%',
          color: 'white',
          textAlign: 'center',
          paddingTop: { xs: '90px', md: '150px' },
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
        }}
      >
        <Typography
          variant='h3'
          sx={{
            fontWeight: 'bold',
          }}
        >
          El TacoYaki
        </Typography>
      </Box>
      {/* Content Grid */}
      <ContentGrid /> {/* Display Content Grid below the banner */}
    </div>
  );
};

export default HeroSection;
