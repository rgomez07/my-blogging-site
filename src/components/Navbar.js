import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '10px 0',
        color: '#fff',
      }}
    >
      <Typography>
        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
      </Typography>
      <Typography>
        <Link to='/blogs' style={{ color: 'white', textDecoration: 'none' }}>
          Blogs
        </Link>
      </Typography>
      <Typography>
        <Link to='/news' style={{ color: 'white', textDecoration: 'none' }}>
          News
        </Link>
      </Typography>
    </Box>
  );
};

export default Navbar;
