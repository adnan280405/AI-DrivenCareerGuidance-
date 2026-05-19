import React, { useState } from 'react';
import { analyzeSkillGap } from '../services/api';
import '../styles/skill-gap-new.css';

export default function SkillGapPageNew() {
  const [targetRole, setTargetRole] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
        setSkillInput('');
      }
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!targetRole || skills.length === 0) {
      setError('Please enter a target role and at least one skill.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await analyzeSkillGap(targetRole, skills);
      setResults(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="skill-gap-page">
      <div className="skill-gap-intro">
        <h2 className="feature-page-title">Skill Gap Analysis</h2>
        <p className="feature-page-subtitle">
          Analyze the gap between your current skills and your target role. Get personalized recommendations and learning paths.
        </p>
      </div>

      <form className="skill-gap-form" onSubmit={handleAnalyze}>
        <div className="form-section">
          <h3 className="form-section-title">Target Role</h3>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="role">What is your target role?</label>
              <input
                id="role"
                type="text"
                placeholder="e.g., Senior Full Stack Engineer, Product Manager, Data Scientist"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="form-section-title">Current Skills</h3>
          <div className="skills-input-group">
            <label htmlFor="skills">Add your current skills</label>
            <input
              id="skills"
              type="text"
              placeholder="Type a skill and press Enter"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyPress={addSkill}
            />
            {skills.length > 0 && (
              <div className="skills-list">
                {skills.map((skill) => (
                  <div key={skill} className="skill-badge">
                    <span>{skill}</span>
                    <button type="button" onClick={() => removeSkill(skill)}>
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className="muted-text">
              {skills.length} skill{skills.length !== 1 ? 's' : ''} added
            </p>
          </div>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: '100%', marginTop: 'var(--spacing-6)' }}
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analyze Skills'}
        </button>
      </form>

      {results && (
        <div className="gap-results">
          <h3 className="section-title">Your Analysis Results</h3>
          <div className="gap-results-grid">
            <div className="gap-result-card">
              <h3>Missing Skills</h3>
              <ul>
                {(results.missingSkills || []).map((skill, index) => (
                  <li key={`${skill}-${index}`}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="gap-result-card">
              <h3>Step-by-Step Roadmap</h3>
              <ol>
                {(results.roadmap || []).map((step, index) => (
                  <li key={`${step}-${index}`}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
