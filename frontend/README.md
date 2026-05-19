# AI Career Navigator Frontend

A production-ready React frontend for an AI-powered career assistant app.

## Tech Stack

- React (functional components + hooks)
- React Router DOM
- Plain CSS (no UI frameworks)
- Fetch API for backend communication

## Folder Structure

src/
  components/
  pages/
   services/
  styles/

## Pages and Features

- Chat: Chat-style interface with typing state and auto-scroll
- Resume Analyzer: Upload resume and view ATS insights
- Interview Prep: Generate role-based interview questions and expand answers
- Skill Gap: Analyze missing skills and roadmap for target role

## API Endpoints Used

- POST /api/chat
- POST /api/resume/analyze
- GET /api/interview?role=...
- POST /api/skill-gap

## Run

1. Install Node.js (if not installed).
2. Install dependencies:

   npm install

3. Start development server:

   npm run dev

4. Build for production:

   npm run build
