// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import Time from './Time/Time';

const Header = ({ profile }) => {
  const [activeSection, setActiveSection] = useState('Time');

  const renderContent = () => {
    switch(activeSection) {
      case 'Time':
        return <Time />;
      case 'Projects':
        return <div>Projects Content</div>;
      case 'Team':
        return <div>Team Content</div>;
      case 'Expenses':
        return <div>Expenses Content</div>;
      default:
        return <Time />;
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <span>Company Logo</span>
        </div>
        <div className="nav-profile-container">
          <nav className="nav">
            <ul>
              <li onClick={() => setActiveSection('Time')} className={activeSection === 'Time' ? 'active' : ''}>Time</li>
              <li onClick={() => setActiveSection('Projects')} className={activeSection === 'Projects' ? 'active' : ''}>Projects</li>
              <li onClick={() => setActiveSection('Team')} className={activeSection === 'Team' ? 'active' : ''}>Team</li>
              <li onClick={() => setActiveSection('Expenses')} className={activeSection === 'Expenses' ? 'active' : ''}>Expenses</li>
            </ul>
          </nav>
          <div className="profile-div">
            <img src={profile.picture} alt="Profile" className="profile-picture" />
            <span className="profile-name">{profile.name}</span>
          </div>
        </div>
      </header>
      <div className="section-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Header;