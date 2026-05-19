import React, { useState } from 'react';
import { analyzeSkillGap } from '../services/api';
import { Button, Card, InputGroup, Badge, Spinner } from '../components/UIComponents';
import '../styles/skill-gap-modern.css';

function ModernSkillGap() {
  const [targetRole, setTargetRole] = useState('');
  const [skills, setSkills] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!targetRole.trim() || !skills.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    const skillArray = skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    try {
      const response = await analyzeSkillGap(targetRole.trim(), skillArray);
      setResult(response);
    } catch (err) {
      setError(err.message || 'Failed to analyze skill gap');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="skill-gap-modern">
      {/* Header */}
      <div className="skill-gap-header">
        <h1>📈 Skill Gap Analyzer</h1>
        <p>Identify missing skills and get a personalized learning roadmap</p>
      </div>

      <div className="skill-gap-container">
        {!result ? (
          // Input Section
          <Card className="input-card">
            <form onSubmit={handleAnalyze} className="skill-gap-form">
              <h2>Analyze Your Skills</h2>

              <InputGroup label="Target Role" error="">
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  placeholder="e.g., Senior Frontend Developer"
                  disabled={loading}
                />
              </InputGroup>

              <InputGroup
                label="Current Skills"
                error="Enter skills separated by commas"
              >
                <textarea
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="React, JavaScript, CSS, Git, TypeScript..."
                  rows={5}
                  disabled={loading}
                />
              </InputGroup>

              {error && (
                <div className="skill-gap-error">
                  <p>⚠️ {error}</p>
                </div>
              )}

              <Button
                variant="primary"
                type="submit"
                disabled={!targetRole.trim() || !skills.trim() || loading}
                loading={loading}
                className="analyze-btn"
              >
                {loading ? 'Analyzing...' : 'Analyze Gap'}
              </Button>
            </form>
          </Card>
        ) : (
          // Results Section
          <div className="results-container">
            <div className="results-header">
              <div>
                <h2>Analysis Results for</h2>
                <p className="target-role">{targetRole}</p>
              </div>
              <Button
                variant="secondary"
                onClick={() => setResult(null)}
                className="back-btn"
              >
                ← New Analysis
              </Button>
            </div>

            {/* Missing Skills */}
            {result.missingSkills && result.missingSkills.length > 0 && (
              <Card className="result-card missing-skills-card">
                <div className="result-card-header">
                  <h3>🎯 Missing Skills</h3>
                  <Badge variant="warning">{result.missingSkills.length} Skills</Badge>
                </div>
                <div className="skills-tags">
                  {result.missingSkills.map((skill, index) => (
                    <div key={index} className="skill-tag">
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Roadmap */}
            {result.roadmap && result.roadmap.length > 0 && (
              <Card className="result-card roadmap-card">
                <div className="result-card-header">
                  <h3>🗺️ Learning Roadmap</h3>
                  <Badge variant="primary">{result.roadmap.length} Steps</Badge>
                </div>
                <div className="roadmap-timeline">
                  {result.roadmap.map((step, index) => (
                    <div key={index} className="roadmap-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <p>{step}</p>
                      </div>
                      {index < result.roadmap.length - 1 && (
                        <div className="step-connector"></div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            <div className="results-footer">
              <Button
                variant="primary"
                onClick={() => setResult(null)}
                className="full-width"
              >
                Start Another Analysis
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModernSkillGap;


