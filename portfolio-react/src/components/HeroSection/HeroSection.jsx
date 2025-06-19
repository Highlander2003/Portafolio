import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>¡Hola, soy Desarrollador!</h1>
        <p>Especialista en desarrollo web y aplicaciones</p>
        <button className="cta-button">Ver Proyectos</button>
      </div>
    </section>
  );
};

export default HeroSection;