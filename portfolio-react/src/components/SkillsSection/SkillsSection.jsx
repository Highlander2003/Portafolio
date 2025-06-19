import React, { useEffect, useRef } from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillsRef = useRef(null);
  
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 65 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const progressBars = document.querySelectorAll('.skill-progress');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.width = `${skills[index].level}%`;
            }, 200 * index);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skills]);

  return (
    <section className="skills-section" ref={skillsRef}>
      <div className="container">
        <h2>Mis habilidades</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;