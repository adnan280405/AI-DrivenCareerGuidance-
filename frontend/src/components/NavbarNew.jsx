import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';
import '../styles/navbar-new.css';

const CONTACT_ITEMS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adnan-khan-b556b62a1',
    type: 'linkedin'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/adnan280405',
    type: 'github'
  },
  {
    label: 'Email',
    href: 'mailto:addyyyiiii@gmail.com',
    type: 'email'
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/the.wnwn',
    type: 'instagram'
  }
];

function SocialIcon({ type }) {
  switch (type) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M0 1.146C0 0.513 0.526 0 1.175 0h13.65C15.474 0 16 0.513 16 1.146v13.708c0 0.633-0.526 1.146-1.175 1.146H1.175C0.526 16 0 15.487 0 14.854V1.146zM4.943 13.5V6.169H2.542V13.5h2.401zM3.743 5.17c0.837 0 1.358-0.554 1.358-1.248-0.015-0.709-0.521-1.248-1.342-1.248S2.4 3.213 2.4 3.922c0 0.694 0.521 1.248 1.327 1.248h0.016zM13.5 13.5V9.359c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845 0.7-2.165 1.193v-1.023H6.17c0.03 0.678 0 7.223 0 7.223h2.401V9.466c0-0.216 0.016-0.431 0.08-0.586 0.173-0.431 0.568-0.878 1.232-0.878 0.869 0 1.216 0.662 1.216 1.634V13.5H13.5z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 1.44c2.14 0 2.39 0.01 3.23 0.05 0.78 0.04 1.2 0.17 1.48 0.28 0.38 0.15 0.64 0.32 0.92 0.6 0.28 0.28 0.45 0.54 0.6 0.92 0.11 0.28 0.24 0.7 0.28 1.48 0.04 0.84 0.05 1.1 0.05 3.23 0 2.14-0.01 2.39-0.05 3.23-0.04 0.78-0.17 1.2-0.28 1.48-0.15 0.38-0.32 0.64-0.6 0.92-0.28 0.28-0.54 0.45-0.92 0.6-0.28 0.11-0.7 0.24-1.48 0.28-0.84 0.04-1.1 0.05-3.23 0.05-2.14 0-2.39-0.01-3.23-0.05-0.78-0.04-1.2-0.17-1.48-0.28-0.38-0.15-0.64-0.32-0.92-0.6-0.28-0.28-0.45-0.54-0.6-0.92-0.11-0.28-0.24-0.7-0.28-1.48C1.45 10.39 1.44 10.14 1.44 8c0-2.14 0.01-2.39 0.05-3.23 0.04-0.78 0.17-1.2 0.28-1.48 0.15-0.38 0.32-0.64 0.6-0.92 0.28-0.28 0.54-0.45 0.92-0.6 0.28-0.11 0.7-0.24 1.48-0.28 0.84-0.04 1.1-0.05 3.23-0.05zm0 1.3c-2.11 0-2.36 0.01-3.18 0.05-0.76 0.03-1.17 0.16-1.44 0.26-0.35 0.14-0.6 0.3-0.86 0.56-0.26 0.26-0.42 0.51-0.56 0.86-0.1 0.27-0.23 0.68-0.26 1.44-0.04 0.82-0.05 1.07-0.05 3.18 0 2.11 0.01 2.36 0.05 3.18 0.03 0.76 0.16 1.17 0.26 1.44 0.14 0.35 0.3 0.6 0.56 0.86 0.26 0.26 0.51 0.42 0.86 0.56 0.27 0.1 0.68 0.23 1.44 0.26 0.82 0.04 1.07 0.05 3.18 0.05 2.11 0 2.36-0.01 3.18-0.05 0.76-0.03 1.17-0.16 1.44-0.26 0.35-0.14 0.6-0.3 0.86-0.56 0.26-0.26 0.42-0.51 0.56-0.86 0.1-0.27 0.23-0.68 0.26-1.44 0.04-0.82 0.05-1.07 0.05-3.18 0-2.11-0.01-2.36-0.05-3.18-0.03-0.76-0.16-1.17-0.26-1.44-0.14-0.35-0.3-0.6-0.56-0.86-0.26-0.26-0.51-0.42-0.86-0.56-0.27-0.1-0.68-0.23-1.44-0.26-0.82-0.04-1.07-0.05-3.18-0.05z" />
          <path d="M8 4.4A3.6 3.6 0 1 0 8 11.6 3.6 3.6 0 1 0 8 4.4zm0 5.94A2.34 2.34 0 1 1 8 5.66a2.34 2.34 0 0 1 0 4.68z" />
          <circle cx="11.7" cy="4.3" r="0.84" />
        </svg>
      );
    case 'email':
    default:
      return (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0.22L8 8.8 0 4.22V4z" />
          <path d="M0 5.4 5.55 9.1a1.5 1.5 0 0 0 1.9 0L16 5.4V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4z" />
        </svg>
      );
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    // close mobile menu on route change
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  function handleHomeClick(event) {
    if (location.pathname === '/home') {
      event.preventDefault();
      const topSection = document.getElementById('home-top');
      if (topSection) {
        topSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (window.location.hash !== '#home-top') {
        window.history.replaceState(null, '', '/home#home-top');
      }
    } else {
      event.preventDefault();
      navigate('/home#home-top');
    }
  }

  function handleAboutClick(event) {
    event.preventDefault();
    // Close mobile menu
    setMobileOpen(false);
    
    // If already on home page, just scroll to about
    if (location.pathname === '/home') {
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (window.location.hash !== '#about') {
          window.history.replaceState(null, '', '/home#about');
        }
      }, 100);
    } else {
      // Navigate to home first, then scroll to about
      navigate('/home');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (window.location.hash !== '#about') {
          window.history.replaceState(null, '', '/home#about');
        }
      }, 500);
    }
  }

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Chat', path: '/chat' },
    { label: 'Skill Gap', path: '/skill-gap' },
    { label: 'Interview Prep', path: '/interview-prep' },
    { label: 'Resume', path: '/resume' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/home" className="navbar-brand">
          <img className="navbar-logo" src={logo} alt="PathIQ" />
          <span className="navbar-brand-text">PathIQ</span>
        </Link>

        <div className="navbar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={item.path === '/home' ? handleHomeClick : undefined}
              className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <Link className="btn btn-secondary btn-sm" to="/home#about" onClick={handleAboutClick}>
            About
          </Link>
          <div className="contact-dropdown" aria-label="Contact options">
            <button type="button" className="btn btn-primary btn-sm contact-trigger">
              Contact Us
            </button>
            <div className="contact-menu" role="menu" aria-label="Social platforms">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  className={`contact-icon ${item.type}`}
                  href={item.href}
                  target={item.label === 'Email' ? undefined : '_blank'}
                  rel={item.label === 'Email' ? undefined : 'noreferrer'}
                  aria-label={item.label}
                  title={item.label}
                >
                  <SocialIcon type={item.type} />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* hamburger for mobile */}
        <button
          className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((s) => !s)}
        >
          <span className="hamburger"></span>
        </button>
      </div>

      {/* mobile menu overlay */}
      <div
        className={`mobile-menu ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-hidden={!mobileOpen}
        onClick={(e) => {
          // close when clicking backdrop
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={item.path === '/home' ? handleHomeClick : undefined}
                className={`mobile-nav-link ${currentPath === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mobile-actions">
            <Link className="btn btn-secondary btn-sm" to="/home#about" onClick={handleAboutClick}>
              About
            </Link>
            <div className="mobile-contacts">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  className={`contact-icon ${item.type}`}
                  href={item.href}
                  target={item.label === 'Email' ? undefined : '_blank'}
                  rel={item.label === 'Email' ? undefined : 'noreferrer'}
                  aria-label={item.label}
                  title={item.label}
                >
                  <SocialIcon type={item.type} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
