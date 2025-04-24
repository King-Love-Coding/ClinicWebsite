import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>Dr. Henry Rich</h1>

        <div className="doctor-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
            alt="Dr. Henry Rich"
          />
        </div>

        <p className='about-para'>
          Dr. Henry Rich is a highly qualified medical professional with over 15 years of experience in the healthcare field.
          He is dedicated to providing exceptional care and strives to offer a personalized approach to every patient.
        </p>

        <div className="doctor-details">
          <ul>
            <li><strong>Specialization:</strong> ORTHOPEDIC</li>
            <li><strong>Years of Experience:</strong> 15 years</li>
            <li><strong>Degree:</strong> MD, PhD (Master of Surgery (MS) in Orthopedics)</li>
            <li><strong>Education:</strong> Kasturba Medical College, Mangalore</li>
            <li><strong>Certifications:</strong>
              <ul>
                <li>Master of Surgery (MS Ortho)</li>
                <li>Diplomate of National Board (DNB) in Orthopaedics</li>
                <li>Bachelor of Ayurvedic Medicine and Surgery (BAMS)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
