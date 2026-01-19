import React, { useEffect } from 'react';
import aboutVisual from '../assets/about-visual.png';
import '../styles/About.scss';

const About: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-offset', `${scrollY * 0.15}px`);
    };

    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const updateMouseVars = () => {
      const { innerWidth, innerHeight } = window;
      const x = (mouseX / innerWidth - 0.5) * 30;
      const y = (mouseY / innerHeight - 0.5) * 30;
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
    <section className="about-section" id="about">
      <div className="about-background" />

      <div className="about-container">
        <div className="about-content">
          <div className="about-badge">Crafting with Care</div>
          <h2>
            About <span className="gradient-text">Me</span>
          </h2>
          <p>
            I’m a detail‑oriented developer passionate about building cinematic, interactive web apps. 
            My focus is on scalable architecture, polished design systems, and meaningful user experiences. 
            From startups to enterprises, I deliver solutions that balance creativity with technical rigor.
          </p>
          <p>
            Beyond code, I thrive on collaboration — clarifying goals, iterating with precision, and 
            ensuring every project feels premium and purposeful.
          </p>
        </div>

        <div className="about-visual">
          <img src={aboutVisual} alt="Abstract illustration representing collaboration and design" />
        </div>
      </div>
    </section>
  );
};

export default About;
