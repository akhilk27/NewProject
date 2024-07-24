// src/components/Auth/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import LandingHeader from '../LandingHeader';
import Footer from '../Footer';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeID: '',
    firstName: '',
    lastName: '',
    ssn: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    navigate('/'); // Redirect to another page after form submission
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <LandingHeader />
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="employeeID"
            placeholder="EmployeeID"
            value={formData.employeeID}
            onChange={handleChange}
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="ssn"
            placeholder="SSN"
            value={formData.ssn}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="terms-container">
            <input type="checkbox" required />
            <span>
              I agree to the <a href="/terms">Terms of Use and Privacy Policy</a>
            </span>
          </div>
          <button type="submit" className="signup-btn">Create Account</button>
        </form>
        <div className="login-link">
          <span>Already have an account?</span>
          <button className="signx-login-btn" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
