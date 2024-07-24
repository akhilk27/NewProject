// src/components/Contractor/Dashboard.jsx
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import TimeSheet from './TimeSheet';
import Profile from './Profile';

const ContractorDashboard = () => {
  return (
    <div className="contractor-dashboard">
      <nav>
        <ul>
          <li><Link to="/contractor/timesheet">TimeSheet</Link></li>
          <li><Link to="/contractor/profile">Profile</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/timesheet" element={<TimeSheet />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default ContractorDashboard;