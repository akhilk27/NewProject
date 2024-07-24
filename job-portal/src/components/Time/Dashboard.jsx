// src/components/Time/Dashboard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFileExport } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      <section className="overview">
        <h2>Overview</h2>
        <div className="overview-cards">
          <div className="card">
            <h3>Pending Timesheets</h3>
            <p>5</p>
          </div>
          <div className="card">
            <h3>Recent Approvals</h3>
            <p>12</p>
          </div>
          <div className="card">
            <h3>Recent Rejections</h3>
            <p>2</p>
          </div>
        </div>
      </section>

      <section className="requests">
        <div className="requests-header">
          <h2>Requests</h2>
          <button className="export-btn">
            <FontAwesomeIcon icon={faFileExport} /> Export
          </button>
        </div>
        <table className="requests-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Date</th>
              <th>Hours</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* We'll add table rows here later */}
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;