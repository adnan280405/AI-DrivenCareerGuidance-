import { Navigate, Route, Routes } from 'react-router-dom';
import ModernNavbar from './components/ModernNavbar';
import ModernHome from './pages/ModernHome';
import ModernChat from './pages/ModernChat';
import ModernResumeAnalyzer from './pages/ModernResumeAnalyzer';
import ModernInterviewPrep from './pages/ModernInterviewPrep';
import ModernSkillGap from './pages/ModernSkillGap';
import './styles/design-system.css';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="app">
      <ModernNavbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<ModernHome />} />
          <Route path="/?feature=chat" element={<ModernChat />} />
          <Route path="/?feature=resume" element={<ModernResumeAnalyzer />} />
          <Route path="/?feature=interview" element={<ModernInterviewPrep />} />
          <Route path="/?feature=skill-gap" element={<ModernSkillGap />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

