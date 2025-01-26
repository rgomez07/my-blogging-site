import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentGrid from './components/ContentGrid';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <HeroSection />
      <ContentGrid />
    </div>
  );
}

export default App;
