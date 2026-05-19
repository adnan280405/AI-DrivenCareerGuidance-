import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavbarNew from "./components/NavbarNew";
import LandingPage from "./pages/LandingPage";
import HomePageNew from "./pages/HomePageNew";
import SkillGapPageNew from "./pages/SkillGapPageNew";
import InterviewPrepPageNew from "./pages/InterviewPrepPageNew";
import ChatPageNew from "./pages/ChatPageNew";
import ResumeAnalyzerPageNew from "./pages/ResumeAnalyzerPageNew";
import MouseFollower from "./components/MouseFollower";
import React from "react";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <div className="app-shell">
      <MouseFollower />
      {showNavbar && <NavbarNew />}
      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePageNew />} />
          <Route path="/skill-gap" element={<SkillGapPageNew />} />
          <Route path="/interview-prep" element={<InterviewPrepPageNew />} />
          <Route path="/chat" element={<ChatPageNew />} />
          <Route path="/resume" element={<ResumeAnalyzerPageNew />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
