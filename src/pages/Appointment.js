import React, { useState } from 'react';
import '../styles/Appointment.css'; 

function Appointment() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment Booked for ${name} on ${date} at ${time}`);

    setName('');
    setDate('');
    setTime('');

  };

  return (
    <div className="appointment-container">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h1>Book an Appointment</h1>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Book Appointment</button>

        <p className="schedule">Appointment Timings:</p>
        <p className="schedule">Monday to Friday, 9:00am to 1:00pm and 2:00pm to 5:00pm</p>
        <p className="schedule">Saturdat & Sunday, 9:00am to 2:00pm</p>

      </form>
    </div>
  );
}

export default Appointment;
