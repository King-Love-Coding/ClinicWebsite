import React, { useState } from "react";
import '../styles/Contact.css'


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <form onSubmit={handleSubmit} className="contact-form">
      <h1>Contact Us</h1>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email ID:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Send Message</button>

        <div className="contact-info">
        <h3>Our Office</h3>
        <p>123 Health St, Wellness City, HC 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email Address: info@clinic.com</p>
      </div>

      </form>
    </div>
  );
};

export default ContactPage;
