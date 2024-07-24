// src/components/SignUp.jsx
import React from 'react';
import './SignUp.css';
import LandingHeader from '../LandingHeader';
import Footer from '../Footer';

const SignUp = () => {
  return (
    <div className="signup-page">
      <LandingHeader />
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form className="signup-form">
          <input type="text" placeholder="EmployeeID" />
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="SSN" />
          <input type="email" placeholder="Work Email" />
          <input type="password" placeholder="Create Password" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <a href="/">Terms of Use and Privacy Policy</a>.
            </label>
          </div>
          <button type="submit" className="create-account-btn">Create Account</button>
        </form>
        <div className="login-option">
          <p>Already have an account?</p>
          <button className="login-btn">Login</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
