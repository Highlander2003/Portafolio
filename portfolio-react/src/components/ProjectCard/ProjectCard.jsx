import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl, technologies, demoLink, codeLink }) => {
  return (
    <div className="project-card">
      <div className="project-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">Ver Demo</a>}
          {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer">Ver Código</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;