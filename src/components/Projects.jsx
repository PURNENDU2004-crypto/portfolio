import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack online store with payment integration, admin dashboard, and real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team chat, and analytics.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather app with forecasts, maps, and location-based alerts using multiple APIs.',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      link: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for photographers and artists to showcase their work.',
      tech: ['Next.js', 'PostgreSQL', 'AWS S3'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Here are some of my recent works that showcase my skills in building modern web applications
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card-overlay"></div>
              
              <div className="project-card-content">
                <div className="project-header">
                  <div className="project-icon">
                    <Code size={24} />
                  </div>
                  <a href={project.link} className="project-link">
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;