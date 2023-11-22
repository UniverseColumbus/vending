import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* You can add more routes for additional pages if needed */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;