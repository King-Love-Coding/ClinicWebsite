import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate(); 

  const HandleOnClick = () => {
    navigate('/Appointment');  
  };

  return (
    <div className="home-page">
      <h1>WELCOME TO LIFE LINE CLINIC</h1>
      <p className="para">
        "At Our Clinic, we combine years of medical expertise with compassionate, personalized care. We believe every patient deserves individual attention and tailored treatment plans to ensure the best possible outcomes. Your health is our priority, and we're here to support you every step of the way."
      </p>
      <button className="book-appointment-btn" onClick={HandleOnClick}>BOOK APPOINTMENT</button>
    </div>
  );
}

export default Home;
