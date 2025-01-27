import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Banner Image */}
      <Box
        sx={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', // Set a fixed height
          width: '100%', // Optional, depending on layout
          border: '2px solid red',
        }}
      >
        {/* Optional text overlay */}
        <Typography
          variant='h3'
          sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: '120px', // Vertically center text
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
          }}
        >
          Welcome to Rigo's adventures
        </Typography>
      </Box>

      {/* Page Content */}
      <Box p={4}>
        <Typography variant='body1'>Future insight into latest blog</Typography>
      </Box>
    </div>
  );
};

export default App;
