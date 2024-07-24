// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <h3>Your Company Name</h3>
          <div className="email-subscription">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">➔</button>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h4>Company</h4>
            <a href="/">Our Mission</a>
            <a href="/">About Us</a>
          </div>
          <div className="footer-column">
            <h4>Help and Solution</h4>
            <a href="/">Talk to Support</a>
            <a href="/">Support Docs</a>
            <a href="/">System Status</a>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <a href="/">Help Centre</a>
            <a href="/">Account Information</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="/">Terms and Conditions</a>
        <span>.</span>
        <a href="/">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;

