// src/components/Time/Time.jsx
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faChartBar, faBell, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './Time.css';

import Dashboard from './Dashboard';
import Reports from './Reports';
import Alerts from './Alerts';
import Settings from './Settings';
import HelpSupport from './HelpSupport';

const Time = () => {
  return (
    <Router>
      <div className="time-container">
        <nav className="time-menu">
          <ul>
            <li>
              <NavLink to="/time" end className={({ isActive }) => isActive ? 'active' : ''}>
                <FontAwesomeIcon icon={faDashboard} /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/time/reports" className={({ isActive }) => isActive ? 'active' : ''}>
                <FontAwesomeIcon icon={faChartBar} /> Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/time/alerts" className={({ isActive }) => isActive ? 'active' : ''}>
                <FontAwesomeIcon icon={faBell} /> Alerts
              </NavLink>
            </li>
            <li>
              <NavLink to="/time/settings" className={({ isActive }) => isActive ? 'active' : ''}>
                <FontAwesomeIcon icon={faCog} /> Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/time/help" className={({ isActive }) => isActive ? 'active' : ''}>
                <FontAwesomeIcon icon={faQuestionCircle} /> Help and Support
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="time-content">
          <Routes>
            <Route path="/time" element={<Dashboard />} />
            <Route path="/time/reports" element={<Reports />} />
            <Route path="/time/alerts" element={<Alerts />} />
            <Route path="/time/settings" element={<Settings />} />
            <Route path="/time/help" element={<HelpSupport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Time;