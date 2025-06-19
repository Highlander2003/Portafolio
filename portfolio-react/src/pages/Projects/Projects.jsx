import React from 'react';
import './Projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            image: 'ruta/a/la/imagen1.jpg',
            link: 'https://enlace-al-proyecto1.com'
        },
        {
            id: 2,
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: 'ruta/a/la/imagen2.jpg',
            link: 'https://enlace-al-proyecto2.com'
        },
        {
            id: 3,
            title: 'Proyecto 3',
            description: 'Descripción del proyecto 3',
            image: 'ruta/a/la/imagen3.jpg',
            link: 'https://enlace-al-proyecto3.com'
        }
    ];

    return (
        <div className="projects-container">
            <h1>Mis Proyectos</h1>
            <div className="projects-list">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        image={project.image} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;