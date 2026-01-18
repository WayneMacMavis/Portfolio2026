import React from "react";


const Projects = () => {
  const projects = [
    { title: "Gym Tracker App", desc: "PWA with offline support & smart exercise suggestions." },
    { title: "Portfolio Website", desc: "Responsive design system with SCSS tokens." },
    { title: "Automation Dashboard", desc: "Data-driven utilities for seamless workflows." }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
