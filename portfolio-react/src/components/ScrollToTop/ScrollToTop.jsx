import React from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className="scroll-to-top" 
      onClick={scrollToTop}
      aria-label="Volver al inicio de la página"
    >
      <span className="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" fill="currentColor"/>
        </svg>
      </span>
    </button>
  );
};

export default ScrollToTop;