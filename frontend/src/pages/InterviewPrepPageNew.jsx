import React, { useState } from 'react';
import { getInterviewQuestions } from '../services/api';
import '../styles/interview-prep-new.css';

export default function InterviewPrepPageNew() {
  const [role, setRole] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleGetQuestions = async (e) => {
    e.preventDefault();
    if (!role.trim()) {
      setError('Please enter a job role.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await getInterviewQuestions(role);
      setQuestions(response.questions || []);
    } catch (err) {
      setError(err.message);
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="interview-prep-page">
      <div className="interview-intro">
        <h2 className="feature-page-title">Interview Preparation</h2>
        <p className="feature-page-subtitle">
          Get AI-generated interview questions tailored to your target role. Prepare confidently with detailed guidance.
        </p>
      </div>

      <form className="interview-form" onSubmit={handleGetQuestions}>
        <div className="input-group" style={{ marginBottom: 'var(--spacing-4)' }}>
          <label htmlFor="role">Target Job Role</label>
          <input
            id="role"
            type="text"
            placeholder="e.g., Senior Software Engineer, Product Manager"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-text" style={{ marginBottom: 'var(--spacing-4)' }}>{error}</p>}

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: '100%' }}
          disabled={loading}
        >
          {loading ? 'Generating Questions...' : 'Generate Questions'}
        </button>
      </form>

      {questions.length > 0 && (
        <div className="interview-questions">
          <h3 className="section-title">{questions.length} Interview Questions</h3>
          {questions.map((question, index) => (
            <div key={index} className="question-card">
              <div className="question-header">
                <div className="question-number">{index + 1}</div>
                <h3 className="question-text">{question.question}</h3>
                {question.difficulty && (
                  <span className="question-difficulty">
                    {question.difficulty}
                  </span>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() =>
                    setExpandedQuestion(
                      expandedQuestion === index ? null : index
                    )
                  }
                >
                  {expandedQuestion === index ? '−' : '+'}
                </button>
              </div>

              {expandedQuestion === index && (
                <div className="question-body">
                  {question.description && (
                    <p className="question-description">{question.description}</p>
                  )}

                  {question.tips && (
                    <div className="question-tips">
                      <h4>Preparation Tips</h4>
                      <ul>
                        {Array.isArray(question.tips)
                          ? question.tips.map((tip, i) => <li key={i}>{tip}</li>)
                          : <li>{question.tips}</li>}
                      </ul>
                    </div>
                  )}

                  {question.answer && (
                    <div className="question-answer">
                      <h4>Answer</h4>
                      <p>{question.answer}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
