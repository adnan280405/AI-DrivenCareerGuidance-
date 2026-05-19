import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HeroSection,
  FeatureCard,
  SectionHeader,
  Card,
  Button,
} from '../components/UIComponents';
import '../styles/home-modern.css';

function ModernHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFeature, setActiveFeature] = useState('chat');

  const features = [
    {
      id: 'chat',
      icon: '💬',
      title: 'AI Chat Assistant',
      description:
        'Talk to our AI career mentor. Get personalized advice, resume tips, and interview guidance instantly.',
    },
    {
      id: 'resume',
      icon: '📄',
      title: 'Resume Analyzer',
      description:
        'Upload your resume and get AI-powered insights on ATS compatibility, keywords, and improvements.',
    },
    {
      id: 'interview',
      icon: '🎯',
      title: 'Interview Prep',
      description:
        'Practice with AI-generated role-specific interview questions and expert answer suggestions.',
    },
    {
      id: 'skill-gap',
      icon: '📈',
      title: 'Skill Gap Analyzer',
      description:
        'Get a personalized roadmap to bridge your skills with your target role requirements.',
    },
  ];

  const stats = [
    { label: 'Features', value: '4' },
    { label: 'AI Analysis', value: '100%' },
    { label: 'Career Path', value: 'Personalized' },
  ];

  const handleFeatureClick = (featureId) => {
    setActiveFeature(featureId);
    navigate(`/?feature=${featureId}`);
  };

  return (
    <main className="modern-home">
      {/* Hero Section */}
      <HeroSection
        title="Your Personal AI Career Navigator"
        subtitle="Transform your career with intelligent, personalized guidance"
        description="Get AI-powered insights on your resume, practice interviews, identify skill gaps, and accelerate your career journey. All powered by advanced AI analysis."
        actions={
          <div className="hero-actions">
            <Button variant="primary" onClick={() => navigate('/?feature=chat')}>
              Get Started
            </Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        }
      >
        <div className="hero-visual-placeholder">
          <div className="visual-element animate-float">✨</div>
        </div>
      </HeroSection>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <SectionHeader
            subtitle="Features"
            title="Everything You Need to Advance"
            description="Our AI platform provides comprehensive tools for career development and advancement."
          />

          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => handleFeatureClick(feature.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Transform Your Career?</h2>
            <p>Start with our AI chat assistant or dive into any feature below.</p>
            <div className="cta-actions">
              <Button variant="primary" onClick={() => navigate('/?feature=chat')}>
                Start Chat Session
              </Button>
              <Button variant="secondary">Analyze My Resume</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>AICareer</h3>
              <p>Your personal AI career advisor.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/?feature=chat">Chat</a></li>
                  <li><a href="/?feature=interview">Interview</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <ul>
                  <li>
                    <a href="https://github.com/adnank015" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/adnan-khan-b556b62a1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="mailto:addyyyiiii@gmail.com">Email</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 AICareer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default ModernHome;


