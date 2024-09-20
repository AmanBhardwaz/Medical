// src/App.js
import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Box className="app-container">
      <Header />
      <Box className="main-section">
        <LeftPane />
        <RightPane />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
