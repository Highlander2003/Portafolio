import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Experience from './components/Experience/Experience';
import FeaturedProjects from './components/Projects/FeaturedProjects';
import ContactForm from './components/Contact/ContactForm';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

const App = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    
    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Verificar elementos visibles al cargar
    
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <Router>
      <div className="app">
        {showScrollIndicator && <ScrollToTop />}
        <div className="scroll-progress-container">
          <div className="scroll-progress-bar"></div>
        </div>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Experience />
            <FeaturedProjects />
            <ContactForm />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;