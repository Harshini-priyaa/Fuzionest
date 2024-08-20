import React from 'react';
import './Timesheet.css';

const Timesheet = ({ image, title, dateRange, submittedHours, approvedHours }) => {
  return (
    <div className="timesheet">
      <div className="timesheet-status">
        <span className="status-icon">✅</span>
      </div>
      <div className="timesheet-image">
        <img src={image} alt="User" />
      </div>
      <div className="timesheet-details">
        <div className="timesheet-title">{title}</div>
      </div>
      <div className="timesheet-column">
        <div>{dateRange}</div>
        
      </div>
      <div className="timesheet-column">
        <div>{submittedHours}</div>
        <div>Submitted Hours</div>
      </div>
      <div className="timesheet-column">
        <div>{approvedHours}</div>
        <div>Approved Hours</div>
      </div>
    </div>
  );
};

export default Timesheet;
