// src/components/Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import LandingHeader from '../LandingHeader';
import './LandingPage.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <LandingHeader />

      <section id="how-it-works" className="how-it-works">
          <div className="how-it-works-content">
            <div className="grid-hitw">
              <div className="grid-item c1">
                <img src="large-image.jpg" alt="How it works" className="how-it-works-image" />
              </div>
              <div className="grid-item c2 how-it-works-text">
                <h2>Time Tracking that's easy, powerful, and frictionless</h2>
                <p>Time Tracking software to boost performance and get paid for every billable minute. An intuitive tool that makes time tracking painless for the entire team.</p>
                <Link to="/" className="start-tracking-btn lbt1">Start Tracking for Free</Link>
                <Link to="/" className="explore-tt-btn lbt1">Or Explore Toggle Track</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <div className="pricing-plan">
            <div className="pricing-circle"></div>
            <h4>Basic Plan</h4>
            <Link to="/" className="start-tracking-btn p1">Start Tracking</Link>
            <Link to="/" className="explore-tt-btn p2">Learn More</Link>
          </div>
        </section>
    </div>
  );
};

export default Landing;
