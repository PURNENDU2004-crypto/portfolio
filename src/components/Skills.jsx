import React from 'react';
import { Code, Zap, Target } from 'lucide-react';
import '../styles/skills.css';

const Skills = () => {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'], 
      icon: <Code /> 
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'], 
      icon: <Zap /> 
    },
    { 
      category: 'Tools', 
      items: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'], 
      icon: <Target /> 
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">
            Technical <span className="highlight">Skills</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-glow"></div>
              
              <div className="skill-card-content">
                <div className="skill-icon">
                  {skillGroup.icon}
                </div>
                
                <h3 className="skill-category">{skillGroup.category}</h3>
                
                <ul className="skill-list">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="skill-item">
                      <div className="skill-dot"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;