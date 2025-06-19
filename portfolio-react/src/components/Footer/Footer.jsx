import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p className="copyright">© {currentYear} | Luis Fernando Caicedo Sánchez | UNIAJC</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;