import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">
            Get <span className="highlight">Contact</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="contact-title">Email</h3>
                  <p className="contact-detail">purnendujana5367@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <div className="contact-icon">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="contact-title">GitHub</h3>
                  <p className="contact-detail">@alexrivera</p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <div className="contact-icon">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="contact-title">LinkedIn</h3>
                  <p className="contact-detail">Purnendu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta-wrapper">
            <div className="contact-cta">
              <h3 className="cta-title">Ready to start a project?</h3>
              <p className="cta-description">
                I'm currently available for freelance work and new opportunities
              </p>
              <button className="cta-button">Let's Talk</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;