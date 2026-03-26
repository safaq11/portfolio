import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <p>&copy; {new Date().getFullYear()} Safaq jamal | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;