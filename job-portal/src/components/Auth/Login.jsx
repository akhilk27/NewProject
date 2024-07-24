// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import LandingHeader from '../LandingHeader';
import Footer from '../Footer';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    navigate('/dashboard'); // Redirect to dashboard or another page after form submission
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <LandingHeader />
      <div className="login-container">
        <h2>Log In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
        <div className="signup-link">
          <p>Don't have an account?</p>
          <button className="signup-btn" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
