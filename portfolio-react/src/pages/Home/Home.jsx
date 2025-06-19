import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <SkillsSection />
            <div className="projects">
                <h2>Mis Proyectos</h2>
                <div className="project-cards">
                    {/* Aquí puedes mapear tus proyectos y renderizar ProjectCard */}
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;