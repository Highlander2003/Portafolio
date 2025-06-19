import React, { useEffect, useRef } from 'react';
import './FeaturedProjects.css';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const projects = document.querySelectorAll('.project-card');
          projects.forEach((project, index) => {
            setTimeout(() => {
              project.classList.add('show');
            }, 200 * index);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Sistema de Gestión Empresarial",
      description: "Plataforma web completa para administración de recursos, personal y proyectos con dashboards analíticos personalizados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      tags: ["React", "Node.js", "MongoDB", "D3.js"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Aplicación móvil de finanzas personales",
      description: "App para control de gastos, presupuestos y análisis financiero con integración de IA para recomendaciones personalizadas.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      tags: ["React Native", "Firebase", "TensorFlow", "Stripe"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "E-commerce de última generación",
      description: "Tienda online con experiencia de usuario optimizada, sistema de pagos y gestión avanzada de inventario.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      tags: ["NextJS", "Stripe", "PostgreSQL", "Redis"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];
  
  return (
    <section className="projects-section reveal" ref={projectsRef} id="proyectos">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link">Código</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more">
        <Link to="/projects" className="view-more-button">
          Ver todos los proyectos
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;