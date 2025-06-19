import React, { useRef, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      }, 
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      organization: "Institución Universitaria Antonio José Camacho",
      position: "Proyecto de Investigación en Desarrollo Web",
      period: "2023 - Presente",
      description: "Desarrollo de aplicación web para gestión académica utilizando tecnologías modernas como React y Node.js.",
      technologies: ["React", "Node.js", "MongoDB", "Git"]
    },
    {
      organization: "Hackathon Universitario",
      position: "Equipo Finalista",
      period: "2022",
      description: "Desarrollo de una solución para problemas de movilidad urbana utilizando tecnologías IoT y aplicaciones móviles.",
      technologies: ["Flutter", "Firebase", "Arduino", "Figma"]
    },
    {
      organization: "Semillero de Programación",
      position: "Miembro Activo",
      period: "2021 - Presente",
      description: "Participación en competencias de algoritmos y estructuras de datos. Desarrollo de proyectos colaborativos.",
      technologies: ["Java", "Python", "Algoritmos", "Estructuras de datos"]
    }
  ];

  return (
    <section className="experience-section reveal" ref={sectionRef}>
      <h2 className="section-title">Experiencia Académica</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item" style={{animationDelay: `${index * 0.3}s`}}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.position}</h3>
                <span className="company">{exp.organization}</span>
                <span className="period">{exp.period}</span>
              </div>
              <p>{exp.description}</p>
              <div className="tech-stack">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;