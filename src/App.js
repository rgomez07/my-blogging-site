import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Box, Typography } from '@mui/material';
import HeroSection from './components/HeroSection';
import BlogSection from './components/BlogSection';
import NewsSection from './components/NewsSection';
import TravelSection from './components/TravelSection';
import TipsSection from './components/TipsSection';
import PhotographySection from './components/PhotographySection';
import QuoteSection from './components/QuoteSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/blogs' element={<BlogSection />} />
        <Route path='/news' element={<NewsSection />} />
        <Route path='/travel' element={<TravelSection />} />
        <Route path='/tips' element={<TipsSection />} />
        <Route path='/photography' element={<PhotographySection />} />
        <Route path='/quote' element={<QuoteSection />} />
      </Routes>
    </Router>
  );
};

export default App;
