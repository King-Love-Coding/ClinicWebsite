import React from 'react';
import '../styles/Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate(); 

  const HandleOnClick = () => {
    navigate('/contact');  
  };

  return (
    <div className="service">
      <header className="service-head">
        <h1 className="head">Orthopedic Services</h1>
        <p className="head-para">Expert Care For Your Joints and Muscles</p>
      </header>

      <section className="service-intro">
        <h2>Welcome to Our Orthopedic Clinic</h2>
        <p className='para'>Our clinic provides specialized orthopedic care for a variety of musculoskeletal issues. Whether you're dealing with joint pain, fractures, sports injuries, or chronic conditions, we have the expertise to help you live a pain-free life.</p>
      </section>
      
      <section className="service-list">
        <h3>Our Orthopedic Services</h3>
        <ul>
          <li>
            <h4>Joint Replacement Surgery</h4>
            <p className='li-para'>We specialize in joint replacement surgeries, such as hip and knee replacements, to help restore mobility and relieve pain.</p>
          </li>
          <li>
            <h4>Sports Injury Treatment</h4>
            <p className='li-para'>From sprains to fractures, our team treats sports-related injuries to help you get back to your active lifestyle as soon as possible.</p>
          </li>
          <li>
            <h4>Arthroscopic Surgery</h4>
            <p className='li-para'>Minimally invasive surgery options for treating joint issues such as torn ligaments, cartilage damage, and more.</p>
          </li>
          <li>
            <h4>Spinal Care</h4>
            <p className='li-para'>Comprehensive treatment for back and neck pain, including surgical and non-surgical options.</p>
          </li>
          <li>
            <h4>Pediatric Orthopedics</h4>
            <p className='li-para'>Specialized care for children dealing with bone, joint, and musculoskeletal issues.</p>
          </li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h3>Why Choose Us</h3>
        <ul>
          <li className='choose-li'>1. Experienced and skilled orthopedic surgeons</li>
          <li className='choose-li'>2. Comprehensive range of treatments</li>
          <li className='choose-li'>3. State-of-the-art medical equipment</li>
          <li className='choose-li'>4. Personalized treatment plans</li>
          <li className='choose-li'>5. Patient-focused care</li>
        </ul>
      </section>

      <section className="contact-us">
        <h3>Get in Touch</h3>
        <p>If you are experiencing orthopedic issues, contact us to schedule a consultation.</p>
        <button className="contact-button" onClick={HandleOnClick}>Contact Us</button>
      </section>
    </div>
  );
};

export default Services;
