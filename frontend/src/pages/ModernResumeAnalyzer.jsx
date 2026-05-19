import React, { useState } from 'react';
import { analyzeResume } from '../services/api';
import { Button, Card, EmptyState, Spinner, Badge } from '../components/UIComponents';
import '../styles/resume-analyzer-modern.css';

function ModernResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size exceeds 5MB limit');
        setFile(null);
      } else {
        setFile(selectedFile);
        setError('');
      }
    }
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await analyzeResume(file);
      setResult(response);
    } catch (err) {
      setError(err.message || 'Failed to analyze resume');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resume-analyzer-modern">
      {/* Header */}
      <div className="analyzer-header">
        <h1>📄 Resume Analyzer</h1>
        <p>Get AI-powered insights on your resume strength and improvements</p>
      </div>

      <div className="analyzer-container">
        {!result ? (
          // Upload Section
          <Card className="upload-card">
            <form onSubmit={handleAnalyze} className="upload-form">
              <div className="upload-area">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                  id="resume-file"
                  className="file-input"
                  disabled={loading}
                />
                <label htmlFor="resume-file" className="file-label">
                  <div className="file-upload-icon">📁</div>
                  <h3>Upload Your Resume</h3>
                  <p>Drag and drop or click to select file</p>
                  <span className="file-formats">PDF, DOC, DOCX, or TXT (max 5MB)</span>
                </label>
              </div>

              {file && (
                <div className="file-selected">
                  <div className="file-info">
                    <span className="file-icon">✓</span>
                    <div>
                      <p className="file-name">{file.name}</p>
                      <p className="file-size">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="file-remove"
                    onClick={() => setFile(null)}
                  >
                    ✕
                  </button>
                </div>
              )}

              {error && (
                <div className="analysis-error">
                  <p>⚠️ {error}</p>
                </div>
              )}

              <Button
                variant="primary"
                type="submit"
                disabled={!file || loading}
                loading={loading}
                className="analyze-btn"
              >
                {loading ? 'Analyzing...' : 'Analyze Resume'}
              </Button>
            </form>
          </Card>
        ) : (
          // Results Section
          <div className="results-container">
            <div className="results-header">
              <h2>Analysis Results</h2>
              <Button
                variant="secondary"
                onClick={() => setResult(null)}
                className="back-btn"
              >
                ← Upload Another
              </Button>
            </div>

            {/* ATS Score */}
            <Card className="result-card ats-card">
              <div className="ats-score-display">
                <div className="score-circle">
                  <span className="score-value">{result.atsScore || 'N/A'}</span>
                </div>
                <div className="score-info">
                  <h3>ATS Score</h3>
                  <p>Your resume's Applicant Tracking System compatibility</p>
                </div>
              </div>
            </Card>

            {/* Suggestions */}
            {result.suggestions && result.suggestions.length > 0 && (
              <Card className="result-card">
                <h3 className="result-title">💡 Suggestions</h3>
                <ul className="suggestions-list">
                  {result.suggestions.map((suggestion, index) => (
                    <li key={index}>
                      <span className="suggestion-bullet">→</span>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Missing Keywords */}
            {result.missingKeywords && result.missingKeywords.length > 0 && (
              <Card className="result-card">
                <h3 className="result-title">🎯 Missing Keywords</h3>
                <div className="keywords-grid">
                  {result.missingKeywords.map((keyword, index) => (
                    <Badge key={index} variant="warning">
                      {keyword}
                    </Badge>
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
                Upload Another Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModernResumeAnalyzer;


