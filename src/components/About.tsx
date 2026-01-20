import React from 'react';
import '../styles/About.scss';
import headshot from '../assets/about-visual.png';

const About: React.FC = () => {
  const skills: string[] = ['React 19', 'TypeScript', 'SCSS', 'Node.js', 'Framer Motion', 'AWS'];

  // Generate 30 stars
  const stars = Array.from({ length: 30 });

  return (
    <section className="about-section">
      {/* Glow background */}
      <div className="about-background" />

      {/* Stars layer */}
      <div className="starfield">
        {stars.map((_, i) => (
          <div key={i} className="star" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>

      <div className="about-container">
        <div className="about-visual">
          <div className="image-wrapper">
            <img src={headshot} alt="Professional Portrait" />
            <div className="image-overlay" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-badge">Full-Stack Engineer</div>
          <h2>
            Building <span className="gradient-text">Digital</span> Experiences Since 2020.
          </h2>
          <p className="bio">
            I'm a Full-Stack Engineer focused on crafting high-performance, accessible 
            web applications. My philosophy is rooted in "clean code, creative solutions"—
            bridging the gap between aesthetic design and robust backend architecture.
          </p>

          <div className="tech-stack">
            {skills.map((skill, i) => (
              <div key={skill} className="tech-pill" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <span className="chevron">⌄</span>
      </div>
    </section>
  );
};

export default About;
