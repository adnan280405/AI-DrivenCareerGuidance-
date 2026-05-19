import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar-modern.css';

function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' && !location.search;

  const navLinks = [
    { label: 'Home', href: '/', hash: '#home' },
    { label: 'Features', href: '/?feature=chat', hash: '#features' },
    { label: 'About', href: '/?feature=about', hash: '#about' },
  ];

  const socialLinks = [
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/adnan-khan-b556b62a1', label: 'LinkedIn' },
    { icon: 'github', href: 'https://github.com/adnan280405', label: 'GitHub' },
    { icon: 'twitter', href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">✨</div>
          <span>AICareer</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`nav-link ${isHome && link.label === 'Home' ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="nav-actions">
          <a href="mailto:addyyyiiii@gmail.com" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-social">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="mobile-social-link"
                aria-label={social.label}
              >
                {social.icon === 'linkedin' && '𝐋'}
                {social.icon === 'github' && '〉'}
                {social.icon === 'twitter' && '𝕏'}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default ModernNavbar;

