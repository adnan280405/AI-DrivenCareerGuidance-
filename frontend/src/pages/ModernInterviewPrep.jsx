import React, { useState } from 'react';
import { getInterviewQuestions } from '../services/api';
import { Button, Card, InputGroup, Badge, Spinner } from '../components/UIComponents';
import '../styles/interview-prep-modern.css';

const ROLES = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Data Scientist',
  'Product Manager',
  'DevOps Engineer',
  'UI/UX Designer',
  'Mobile Developer',
];

function ModernInterviewPrep() {
  const [selectedRole, setSelectedRole] = useState(ROLES[0]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setQuestions([]);
    setExpandedIndex(null);

    try {
      const response = await getInterviewQuestions(selectedRole);
      setQuestions(response.questions || []);
    } catch (err) {
      setError(err.message || 'Failed to generate interview questions');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="interview-prep-modern">
      {/* Header */}
      <div className="interview-header">
        <h1>🎯 Interview Preparation</h1>
        <p>Prepare with AI-generated role-specific interview questions</p>
      </div>

      <div className="interview-container">
        {/* Setup Section */}
        <Card className="setup-card">
          <div className="setup-content">
            <h2>Step 1: Choose Your Role</h2>
            <p>Select the position type you're preparing for</p>

            <div className="roles-grid">
              {ROLES.map((role) => (
                <button
                  key={role}
                  className={`role-button ${selectedRole === role ? 'active' : ''}`}
                  onClick={() => setSelectedRole(role)}
                >
                  {role}
                </button>
              ))}
            </div>

            {error && (
              <div className="setup-error">
                <p>⚠️ {error}</p>
              </div>
            )}

            <Button
              variant="primary"
              onClick={handleGenerate}
              loading={loading}
              className="generate-btn"
            >
              {loading ? 'Generating Questions...' : 'Generate Questions'}
            </Button>
          </div>
        </Card>

        {/* Questions Section */}
        {questions.length > 0 && (
          <div className="questions-section">
            <div className="questions-header">
              <h2>
                Interview Questions for <span>{selectedRole}</span>
              </h2>
              <Badge variant="primary">{questions.length} Questions</Badge>
            </div>

            <div className="interview-accordion">
              {questions.map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${expandedIndex === index ? 'expanded' : ''}`}
                >
                  <button
                    className="accordion-header"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    <div className="accordion-question">
                      <span className="question-number">{index + 1}</span>
                      <span className="question-text">{item.question}</span>
                    </div>
                    <span className="accordion-icon">
                      {expandedIndex === index ? '−' : '+'}
                    </span>
                  </button>

                  {expandedIndex === index && (
                    <div className="accordion-content">
                      <div className="answer-box">
                        <h4>Suggested Answer</h4>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="questions-footer">
              <p>💡 Tip: Read each question carefully, practice your answer out loud, and time yourself!</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!questions.length && !loading && (
          <Card className="empty-card">
            <div className="empty-state-interview">
              <div className="empty-icon">📝</div>
              <h3>Generate Questions to Get Started</h3>
              <p>Select a role above and click "Generate Questions" to start practicing</p>
            </div>
          </Card>
        )}

        {/* Loading State */}
        {loading && (
          <Card className="loading-card">
            <div className="loading-state">
              <Spinner size="lg" />
              <p>Generating interview questions...</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

export default ModernInterviewPrep;


