import React, { useEffect } from 'react';
import heroVisual from '../assets/hero-visual.png';
import '../styles/Hero.scss';

const Hero: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-offset', `${scrollY * 0.2}px`);
    };

    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const updateMouseVars = () => {
      const { innerWidth, innerHeight } = window;
      const x = (mouseX / innerWidth - 0.5) * 40;
      const y = (mouseY / innerHeight - 0.5) * 40;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (rafId === null) {
        rafId = requestAnimationFrame(updateMouseVars);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Open for 2026 Collaborations</div>
          <h1>
            Building Digital <br />
            <span className="gradient-text">Experiences with Purpose</span>
          </h1>
          <p>
            Trusted by startups and enterprises to deliver polished, scalable web apps 
            and accessible user interfaces.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Explore My Work</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroVisual} alt="Code-inspired abstract illustration" />
        </div>
      </div>

      <div className="scroll-cue">
        <span className="chevron">⌄</span>
      </div>
    </section>
  );
};

export default Hero;
