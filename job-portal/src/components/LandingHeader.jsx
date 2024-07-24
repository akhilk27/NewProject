// src/components/LandingPage/LandingHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingHeader.css'; // Ensure this file exists

const LandingHeader = () => {
  return (
    <header className="landing-header">
      <div className="company-name">Your Company Name</div>
      <nav className="landing-nav">
        <a href="#how-it-works">How it works</a>
        <a href="#pricing">Pricing</a>
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="get-started-btn">Get Started</Link>
      </nav>
    </header>
  );
};

export default LandingHeader;
