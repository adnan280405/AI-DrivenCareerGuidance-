import React from 'react';
import '../styles/components.css';


export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div className={`card ${hover ? 'card-hover' : ''} ${className}`} {...props}>
      {children}
    </div>
  );
}


export function Badge({ children, variant = 'primary', className = '' }) {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
}


export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  ...props
}) {
  const buttonClass = `btn btn-${variant} btn-${size} ${
    loading ? 'btn-loading' : ''
  } ${disabled ? 'btn-disabled' : ''} ${className}`;

  return (
    <button className={buttonClass} disabled={disabled || loading} {...props}>
      {children}
    </button>
  );
}


export function InputGroup({ label, error, children, className = '' }) {
  return (
    <div className={`input-group ${className}`}>
      {label && <label className="input-label">{label}</label>}
      {children}
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}


export function Spinner({ size = 'md', className = '' }) {
  return <div className={`spinner spinner-${size} ${className}`}></div>;
}


export function EmptyState({ icon, title, description, action }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icon}</div>
      <h3 className="empty-state-title">{title}</h3>
      {description && <p className="empty-state-description">{description}</p>}
      {action && <div className="empty-state-action">{action}</div>}
    </div>
  );
}


export function HeroSection({ title, subtitle, description, actions, children }) {
  return (
    <section className="hero">
      <div className="hero-content">
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {description && <p className="hero-description">{description}</p>}
        {actions && <div className="hero-actions">{actions}</div>}
      </div>
      {children && <div className="hero-visual">{children}</div>}
    </section>
  );
}


export function FeatureCard({ icon, title, description, onClick }) {
  return (
    <button className="feature-card" onClick={onClick}>
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <div className="feature-arrow">→</div>
    </button>
  );
}


export function SectionHeader({ title, subtitle, description }) {
  return (
    <div className="section-header">
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

