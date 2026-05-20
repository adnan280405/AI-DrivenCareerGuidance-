import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/home-new.css';
import logo from '../../src/assets/images/logo.png';

export default function HomePageNew() {
  const location = useLocation();
  const chipRefs = useRef([]);

  useEffect(() => {
    if (location.hash === '#about') {
      const section = document.getElementById('about');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  const handleMouseMove = (e, index) => {
    const chip = chipRefs.current[index];
    if (!chip) return;
    const rect = chip.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    chip.style.setProperty('--mouse-x', `${x}px`);
    chip.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (index) => {
    const chip = chipRefs.current[index];
    if (!chip) return;
    chip.style.setProperty('--mouse-x', '50%');
    chip.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div className="feature-page">
      <section id="home-top" className="home-hero">
        <div className="home-hero-content">
          {/* Logo */}
          <div className="hero-logo-wrapper">
            <img src={logo} alt="PathIQ Logo" className="hero-logo" />
          </div>

          <h1>
            Your AI-Powered Career
            <br />
            <span className="gradient">Growth Platform</span>
          </h1>
          <p>
            Analyze skill gaps, prepare for interviews, and accelerate your career growth with PathIQ's AI-driven insights and personalized learning roadmaps.
          </p>
          <div className="home-hero-cta">
            <Link className="btn btn-primary btn-lg" to="/chat">
              Start Chat
            </Link>
          </div>
        </div>
      </section>

      <section className="home-features">
        <h2 className="section-title">AI-Powered Career Solutions</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Skill Gap Analysis</h3>
            <p>Get a comprehensive analysis of your current skills versus target role requirements. Identify gaps and receive personalized recommendations.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Interview Preparation</h3>
            <p>Prepare with AI-generated interview questions tailored to your target role. Build confidence with instant AI feedback and guidance.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Resume Analysis</h3>
            <p>Optimize your resume with AI insights. Get suggestions to highlight key achievements and align with job requirements.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>AI Career Chat</h3>
            <p>Chat with our AI career advisor. Get instant answers to career questions and personalized guidance 24/7.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Learning Roadmaps</h3>
            <p>Receive personalized learning paths with curated resources and milestone tracking to reach your career goals.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your career development with detailed analytics. Track progress and celebrate milestones along the way.</p>
          </div>
        </div>
      </section>

      <section id="about" className="home-about-section">
        <div className="about-header">
          <h2>About PathIQ</h2>
          <p>
            PathIQ is building the future of AI-powered career intelligence — where every learner receives personalized guidance, adaptive learning paths, and actionable insights tailored to their career goals.
          </p>
          <p>
            Contact: addyyyiiii@gmail.com
          </p>
          <div className="about-content">
            <div className="about-card">
              <h3>Skill Gap Analysis</h3>
              <p>Identify missing skills for your target role, see priority gaps, and get a focused action plan.</p>
            </div>
            <div className="about-card">
              <h3>Learning Roadmaps</h3>
              <p>Personalized roadmaps with milestone-based progression to keep learning structured and measurable.</p>
            </div>
            <div className="about-card">
              <h3>Interview Preparation</h3>
              <p>Role-specific questions with clear answers so you can practice and refine responses faster.</p>
            </div>
            <div className="about-card">
              <h3>AI Career Guidance</h3>
              <p>Get instant guidance on career moves, skills to learn next, and how to plan your growth.</p>
            </div>
          </div>

          <div className="about-actions">
            <Link className="btn btn-outline btn-lg" to="/chat">
              Talk to AI Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <footer className="developers-section">
        <div className="developers-inner">
          <p className="developers-label">Developed by:</p>
          <div className="developers-list">
            {['Adnan Khan', 'Ankit Verma', 'Anmol Soni', 'Arnav Shakrawar'].map((name, i) => (
              <div
                key={name}
                className="developer-chip"
                ref={(el) => (chipRefs.current[i] = el)}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <span className="chip-spotlight" />
                <span className="chip-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}