import React from 'react';
import { Code, Zap, Award } from 'lucide-react';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <div className="profile-border">
                <div className="profile-inner">
                  <img 
                    src="https://scontent.fccu13-4.fna.fbcdn.net/v/t39.30808-6/529351836_1445260606626198_7802492316823049784_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WLNyEIlFID8Q7kNvwEnxfHH&_nc_oc=AdlKYv7vS3gdiYJodvrPj2zG5JZrvGdMJcn_-nLBP9h30Uue7TO9Aj_Hd1s5Cq-5qwM9wXK9DDF2MuUsorbhd9GM&_nc_zt=23&_nc_ht=scontent.fccu13-4.fna&_nc_gid=uouTCpNIdDfpIYfzTvEmjw&oh=00_AfmJ9G6G9rXeNR5IcoUXP7wR-Xmdj1UfNgpZ-LqMsUt5MA&oe=6941C5C4"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="award-badge">
                <Award size={40} />
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <div className="about-card">
              <h3 className="card-title">
                <Code size={20} /> Who I Am
              </h3>
              <p className="card-text">
                I'm a passionate web developer with 1+ years of experience building scalable web applications. 
                I love turning complex problems into simple, beautiful, and intuitive interfaces.
              </p>
            </div>

            <div className="about-card">
              <h3 className="card-title">
                <Zap size={20} /> What I Do
              </h3>
              <p className="card-text">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge through technical blog posts. I believe in writing clean, maintainable code.
              </p>
            </div>

            <div className="stats-container">
              <div className="stat-box">
                <span className="stat-number">1+</span>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-box">
                <span className="stat-number">4+</span>
                <p className="stat-label">Projects Done</p>
              </div>
              <div className="stat-box">
                <span className="stat-number">30+</span>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;