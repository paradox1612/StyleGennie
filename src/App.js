import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import LandingPage from './pages/LandingPage'; // Importing the LandingPage component
import HomePage from './pages/HomePage';
export default function App() {
  return (
    <Router>
      <div>
        {/* Define your routes */}
        <Routes>
          {/* Landing page route */}
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}
