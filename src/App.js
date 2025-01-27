import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Box, Typography } from '@mui/material';
import HeroSection from './components/HeroSection';
import BlogSection from './components/BlogSection';
import NewsSection from './components/NewsSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/blogs' element={<BlogSection />} />
        <Route path='/news' element={<NewsSection />} />
      </Routes>
    </Router>
  );
};

export default App;
