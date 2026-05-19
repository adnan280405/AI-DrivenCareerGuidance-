import React, { useState } from 'react';
import { analyzeResume } from '../services/api';
import '../styles/resume-new.css';

export default function ResumeAnalyzerPageNew() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);

  const handleFileSelect = async (selectedFile) => {
    if (!selectedFile) return;

    setLoading(true);
    setError('');
    try {
      const response = await analyzeResume(selectedFile);
      setFile(selectedFile);
      setResults(response);
    } catch (err) {
      setError(err.message);
      setFile(null);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const atsScore = results?.atsScore ?? results?.score;
  const suggestions = results?.suggestions ?? results?.recommendations;
  const missingKeywords = results?.missingKeywords ?? results?.improvements;
  const strengths = results?.strengths;

  return (
    <div className="resume-page">
      <div className="resume-intro">
        <h2 className="feature-page-title">Resume Analyzer</h2>
        <p className="feature-page-subtitle">
          Upload your resume and get AI-powered insights on how to optimize it for your target role.
        </p>
      </div>

      <div
        className={`resume-upload-zone ${dragOver ? 'dragover' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('resume-file-input').click()}
      >
        <div className="upload-icon">📄</div>
        <div className="upload-text">
          <h3>Upload Your Resume</h3>
          <p>Drag and drop your PDF or DOC file, or click to select</p>
        </div>
        <input
          id="resume-file-input"
          type="file"
          className="upload-input"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
        {file && <p className="muted-text">File: {file.name}</p>}
        {loading && <p style={{ color: 'var(--color-text-secondary)' }}>Analyzing your resume...</p>}
      </div>

      {error && <p className="error-text" style={{ textAlign: 'center', margin: '0 var(--spacing-4)' }}>{error}</p>}

      {results && (
        <div className="resume-results">
          <h3 className="section-title">Analysis Complete</h3>

          <div className="resume-results-grid">
            {(atsScore !== undefined && atsScore !== null) && (
              <div className="resume-analysis-card">
                <p className="analysis-label">ATS Score</p>
                <p className="analysis-value">{atsScore}%</p>
                <p className="muted-text" style={{ marginTop: 'var(--spacing-3)' }}>
                  {atsScore >= 80 ? 'Excellent resume!' : atsScore >= 60 ? 'Good, but could be improved' : 'Needs improvement'}
                </p>
              </div>
            )}

            {strengths && (
              <div className="resume-analysis-card">
                <p className="analysis-label">Key Strengths</p>
                <div className="analysis-items">
                  {Array.isArray(strengths)
                    ? strengths.slice(0, 3).map((strength, idx) => (
                        <div key={idx} className="analysis-item">
                          ✓ {strength}
                        </div>
                      ))
                    : <div className="analysis-item">✓ {strengths}</div>}
                </div>
              </div>
            )}

            {missingKeywords && (
              <div className="resume-analysis-card">
                <p className="analysis-label">Missing Keywords</p>
                <div className="analysis-items">
                  {Array.isArray(missingKeywords)
                    ? missingKeywords.slice(0, 6).map((keyword, idx) => (
                        <div key={idx} className="analysis-item">
                          → {keyword}
                        </div>
                      ))
                    : <div className="analysis-item">→ {missingKeywords}</div>}
                </div>
              </div>
            )}
          </div>

          {suggestions && (
            <div className="resume-recommendations">
              <h3>Suggestions</h3>
              <div className="recommendations-list">
                {Array.isArray(suggestions)
                  ? suggestions.map((rec, idx) => (
                      <div key={idx} className="recommendation-item">
                        <div className="recommendation-number">{idx + 1}</div>
                        <div className="recommendation-text">
                          <p>{rec.description || rec}</p>
                        </div>
                      </div>
                    ))
                  : <div className="recommendation-item">
                      <div className="recommendation-number">1</div>
                      <div className="recommendation-text">
                        <p>{suggestions}</p>
                      </div>
                    </div>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
