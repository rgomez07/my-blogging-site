import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{ backgroundColor: '#1a1a1a' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Title/Logo */}
        <Typography
          variant='h6'
          sx={{ fontWeight: 'bold', color: '#ffffff', flexGrow: 0 }}
        >
          BLOG
        </Typography>

        {/* Links distributed evenly */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexGrow: 1,
          }}
        >
          <Button color='inherit' sx={{ flexGrow: 1, textAlign: 'center' }}>
            Home
          </Button>
          <Button color='inherit' sx={{ flexGrow: 1, textAlign: 'center' }}>
            Blog
          </Button>
          <Button color='inherit' sx={{ flexGrow: 1, textAlign: 'center' }}>
            News
          </Button>
          <Button color='inherit' sx={{ flexGrow: 1, textAlign: 'center' }}>
            About
          </Button>
          <Button color='inherit' sx={{ flexGrow: 1, textAlign: 'center' }}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
