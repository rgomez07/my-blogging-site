import React from 'react';
import { Box, Typography } from '@mui/material';

const BlogSection = () => {
  return (
    <Box p={4}>
      <Typography variant='h4' gutterBottom>
        Blog Section
      </Typography>
      <Typography>
        This is where your blog posts will go. Add content here!
      </Typography>
    </Box>
  );
};

export default BlogSection;
