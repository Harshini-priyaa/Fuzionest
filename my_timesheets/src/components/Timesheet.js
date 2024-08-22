import React from 'react';
import './Timesheet.css';
import tickMark from './tick-mark.png'; // Import the image properly

const formatDate = (date) => {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date).replace(',', '-').replace(' ', '-');
  return formattedDate;
};

const Timesheet = ({ image, title, dateRange, submittedHours, approvedHours, count }) => {
  const startDate = formatDate(new Date(dateRange.split(' - ')[0]));
  const endDate = formatDate(new Date(dateRange.split(' - ')[1]));

  return (
    <div className="timesheet-wrapper">
      <div className="timesheet-count">
        <span>{count}</span>
      </div>
      <div className="timesheet">
        <div className="timesheet-status">
          <span className="status-icon">
            <img src={tickMark} alt='tick-mark' /> {/* Use the imported image */}
          </span>
        </div>
        <div className="timesheet-image">
          <img src={image} alt="User" />
        </div>
        <div className="timesheet-details">
          <div className="timesheet-title">{title}</div>
        </div>
        <div className="timesheet-column">
          <div>{`${startDate} - ${endDate}`}</div>
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
    </div>
  );
};

export default Timesheet;
