import React from 'react';
import { Github, Linkedin, X, Download } from 'lucide-react';
import '../styles/hero.css';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-tag">
          <span>Software Developer</span>
        </div>
        <h1 className="hero-title">
          Hello I'm <br />
          <span className="hero-name">PURNENDU</span>
        </h1>
        <p className="hero-description">
          I turn complex ideas into seamless, high-impact web experiences building modern, scalable, and lightning-fast applications that make a difference.
        </p>
        <div className="hero-buttons">
          <button 
            onClick={() => scrollToSection('projects')}
            className="hero-btn primary"
          >
            View My Work
          </button>
          <a
            href="/Resume.pdf"
            download="Purnendu_Resume.pdf"
            className="hero-btn secondary"
          >
            <Download size={18} />
            My Resume
          </a>
        </div>
        <div className="hero-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <X size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="">
          <img 
            src="https://arkinfosoft.com/media/vxylqtub/group-1321316476.png" 
            alt="MERN Stack" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;