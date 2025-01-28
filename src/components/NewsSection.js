import React, { useState, useEffect } from 'react';
import { fetchTopHeadlines } from '../newsService';
import {
  Box,
  Typography,
  Link,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchTopHeadlines();
      setArticles(news);
    };
    getNews();
  }, []);

  return (
    <Box p={4}>
      <Typography variant='h4' gutterBottom>
        Latest News
      </Typography>
      <Grid container spacing={4} justifyContent='center'>
        {articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: 4,
                height: 500, // Bigger card height
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
            >
              {article.urlToImage && (
                <CardMedia
                  component='img'
                  sx={{
                    height: 300, // Adjust image height for bigger image
                    objectFit: 'cover',
                    width: '100%',
                    borderRadius: 2,
                  }}
                  image={article.urlToImage}
                  alt={article.title}
                />
              )}
              <CardContent
                sx={{
                  flexGrow: 1,
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <Typography variant='h6' component='div' sx={{ flex: 1 }}>
                  <Link
                    href={article.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{
                      color: 'blue',
                      textDecoration: 'none',
                      display: 'block', // Make the link fill the available space
                      textAlign: 'center', // Center the text horizontally
                      padding: '10px 0', // Add padding for better spacing
                    }}
                  >
                    {article.title}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsSection;
