import React, { useState, useEffect } from 'react';
import Timesheet from './components/Timesheet';
import './App.css';

function App() {
  // State to store timesheet data
  const [timesheets, setTimesheets] = useState([]);

  // State to store form input
  const [formInput, setFormInput] = useState({
    startDate: '',
    endDate: '',
    submittedHours: '',
  });

  // Load timesheets from local storage when the component mounts
  useEffect(() => {
    const storedTimesheets = localStorage.getItem('timesheets');
    if (storedTimesheets) {
      setTimesheets(JSON.parse(storedTimesheets));
    }
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  // Format the date in a more readable way (e.g., DD-MMM-YYYY)
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format start and end dates
    const formattedStartDate = formatDate(formInput.startDate);
    const formattedEndDate = formatDate(formInput.endDate);

    // Create new timesheet entry
    const newTimesheet = {
      image: 'https://via.placeholder.com/40',
      title: 'Weekly Timesheet',
      dateRange: `${formattedStartDate} - ${formattedEndDate}`,
      submittedHours: formInput.submittedHours,
      approvedHours: formInput.submittedHours, // Approved hours match submitted hours
    };

    // Update timesheets state
    const updatedTimesheets = [newTimesheet, ...timesheets];
    setTimesheets(updatedTimesheets);

    // Store the updated timesheets in local storage
    localStorage.setItem('timesheets', JSON.stringify(updatedTimesheets));

    // Reset form input
    setFormInput({
      startDate: '',
      endDate: '',
      submittedHours: '',
    });
  };

  return (
    <div className="App">
      <div className="timesheet-container">
        {/* Form Section */}
        <div className="timesheet-form">
          <h2>Add Timesheet</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={formInput.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>End Date:</label>
              <input
                type="date"
                name="endDate"
                value={formInput.endDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Submitted Hours:</label>
              <input
                type="text"
                name="submittedHours"
                value={formInput.submittedHours}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Add Timesheet</button>
          </form>
        </div>

        {/* Timesheet List Section */}
        <div className="timesheet-list">
          <h2>My Timesheets</h2>
          {timesheets.map((timesheet, index) => (
            <Timesheet
              key={index}
              image={timesheet.image}
              title={timesheet.title}
              dateRange={timesheet.dateRange}
              submittedHours={timesheet.submittedHours}
              approvedHours={timesheet.approvedHours}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
