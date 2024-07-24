// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here

    // Redirect based on user type
    if (userType === 'admin') {
      navigate('/admin/dashboard');
    } else if (userType === 'contractor') {
      navigate('/contractor/dashboard');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* Add your login form fields here */}
        <div>
          <label>
            <input 
              type="radio" 
              value="admin" 
              checked={userType === 'admin'}
              onChange={(e) => setUserType(e.target.value)}
            /> Admin
          </label>
          <label>
            <input 
              type="radio" 
              value="contractor" 
              checked={userType === 'contractor'}
              onChange={(e) => setUserType(e.target.value)}
            /> Contractor
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;