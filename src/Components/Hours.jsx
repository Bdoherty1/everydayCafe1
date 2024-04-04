// Hours.jsx
import React from 'react';
import Css from './Locations.css'

const Hours = () => {
  return (
    <div className="hours-column">
      <h1 className="primary-heading">HOURS:</h1>
      <p className="primary-text">Monday to Friday: 5am-5pm</p>
      <p className="primary-text">Saturday: 5am-3pm</p>
      <p className="primary-text">Sunday: 6am-3pm</p>
      <p><span className="primary-text-bold">Holiday Hours May Vary</span></p>
    </div>
  );
};

export default Hours;
