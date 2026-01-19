import React, { useState, useEffect } from 'react';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Scroll-spy logic
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  // Scroll-hide + shadow reveal
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="/" className="logo">
          <span className="logo-port">PORT</span>
          <span className="logo-folio">FOLIO</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
