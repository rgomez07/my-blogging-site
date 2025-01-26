import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const ContentGrid = () => {
  const content = [
    { title: 'Blog Content', description: 'Explore interesting blogs here.' },
    { title: 'Latest News', description: 'Catch up on the latest news.' },
    { title: 'Travel Stories', description: 'Read about my adventures.' },
    { title: 'Tips & Tricks', description: 'Discover travel tips and guides.' },
    { title: 'Photography', description: 'Browse stunning photo galleries.' },
  ];

  return (
    <Grid
      container
      spacing={4}
      sx={{ padding: '20px', backgroundColor: '#121212' }}
    >
      {content.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
            }}
          >
            <CardContent>
              <Typography
                variant='h5'
                sx={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                {item.title}
              </Typography>
              <Typography variant='body2'>{item.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContentGrid;
