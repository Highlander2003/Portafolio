import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    setAnimated(true);
    
    // Inicializar la barra de progreso
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    const updateProgressBar = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };
    
    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  return (
    <header className="header">
      <div className="header-nav">
        <div className="site-title">
          <Link to="/">Luis<span>FCS</span></Link>
        </div>
        <div className="mini-nav">
          <Link to="/projects">Proyectos</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </div>
      
      <div className={`header-content ${animated ? 'animated' : ''}`}>
        <h1>
          <span className="name-highlight">Luis Fernando Caicedo Sánchez</span>
          <span className="title-text">Estudiante de Ingeniería de Sistemas | 8vo Semestre</span>
        </h1>
        <div className="header-tagline">
          <span className="tag">React</span>
          <span className="tag">JavaScript</span>
          <span className="tag">HTML/CSS</span>
          <span className="tag">Java</span>
          <span className="tag">Python</span>
        </div>
        <p className="university">Institución Universitaria Antonio José Camacho</p>
        <div className="cta-container">
          <a href="#proyectos" className="cta-button primary">Ver Proyectos</a>
          <a href="#contacto" className="cta-button secondary">Contactar</a>
        </div>
      </div>
    </header>
  );
};

export default Header;