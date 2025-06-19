import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} - Mi Portfolio</p>
      <div className="social-links">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;