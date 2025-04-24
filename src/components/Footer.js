import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Life Line Clinic</p>
      <p>Privacy Policy | Terms & Conditions</p>
    </footer>
  );
}

export default Footer;