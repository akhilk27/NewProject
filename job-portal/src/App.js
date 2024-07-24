// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp';
import AdminDashboard from './components/Admin/Header';
import ContractorDashboard from './components/Contractor/Dashboard';
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/contractor/*" element={<ContractorDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
