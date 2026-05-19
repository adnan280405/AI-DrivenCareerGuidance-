# PathIQ - Setup & Development Guide

## Quick Start

### Prerequisites
- Node.js 18+ 
- Java 21+
- Maven 3.8+

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Development

```bash
./mvnw.cmd spring-boot:run
```

The backend API will be available at `http://localhost:8080`

### Full Build

#### Frontend Build
```bash
cd frontend
npm run build
```
Output: `frontend/dist/`

#### Backend Build
```bash
./mvnw.cmd clean package
```
Output: `target/AICareer-0.0.1-SNAPSHOT.jar`

## Project Structure

### Frontend (`/frontend`)
```
src/
├── components/
│   ├── NavbarNew.jsx          # Main navigation
│   └── MouseFollower.jsx      # Pointer effect
├── pages/
│   ├── HomePageNew.jsx        # Landing page
│   ├── SkillGapPageNew.jsx    # Skill analyzer
│   ├── InterviewPrepPageNew.jsx # Interview prep
│   ├── ChatPageNew.jsx        # AI chat
│   └── ResumeAnalyzerPageNew.jsx # Resume analyzer
├── services/
│   └── api.js                 # Backend API client
├── styles/
│   ├── design-tokens.css      # Design system
│   ├── global.css             # Base styles
│   ├── navbar-new.css         # Nav styles
│   ├── home-new.css           # Home styles
│   ├── skill-gap-new.css      # Skill gap styles
│   ├── interview-prep-new.css # Interview styles
│   ├── chat-new.css           # Chat styles
│   └── resume-new.css         # Resume styles
├── App.jsx                    # Route definitions
├── main.jsx                   # Entry point
└── App.css                    # Style imports
```

### Backend (`/src`)
```
main/java/com/adnan/aicareer/
├── AiCareerApplication.java          # Spring Boot app
├── Controller/
│   ├── ChatController.java
│   ├── SkillGapController.java
│   ├── InterviewPrepController.java
│   └── ResumeAnalysisController.java
├── DTOs/                             # Data models
└── service/
    └── ChatService.java              # Business logic
```

## API Endpoints

All endpoints accept JSON and return JSON.

### Chat
- **POST** `/api/chat`
- Request: `{ "message": "string" }`
- Response: `{ "reply": "string" }`

### Interview Questions
- **GET** `/api/interview?role={role}`
- Response: `{ "questions": [...] }`

### Skill Gap Analysis
- **POST** `/api/skill-gap`
- Request: `{ "targetRole": "string", "currentSkills": "string" }`
- Response: `{ "gapAnalysis": {...}, "recommendations": [...] }`

### Resume Analysis
- **POST** `/api/resume/analyze`
- Request: `FormData` with file field "resume"
- Response: `{ "score": number, "strengths": [...], "improvements": [...] }`

## Design System

### Colors
- Primary: `#0084ff` (Electric Blue)
- Accent: `#14b8a6` (Teal)
- Background: `#0f1419` (Dark Navy)
- Text: `#e5e7eb` (Light Gray)

See `DESIGN_SYSTEM.md` for full token documentation.

### Component Variants

**Buttons:**
```jsx
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-outline">Outline</button>
<button className="btn btn-primary btn-lg">Large</button>
<button className="btn btn-primary btn-sm">Small</button>
```

**Cards:**
```jsx
<div className="card">
  <h3 className="card-title">Title</h3>
  <div className="card-content">Content</div>
</div>

<div className="result-panel">
  <h3>Result</h3>
  <p>Analysis result</p>
</div>
```

**Forms:**
```jsx
<form className="stack-form">
  <div className="input-group">
    <label htmlFor="input">Label</label>
    <input id="input" type="text" />
  </div>
  <button className="btn btn-primary">Submit</button>
</form>
```

**Badges:**
```jsx
<span className="badge">New</span>
<span className="badge accent">Featured</span>
```

## Environment Variables

Create `.env` in frontend directory:
```
VITE_API_URL=http://localhost:8080
```

## Common Tasks

### Add a New Page
1. Create component in `src/pages/`
2. Create styles in `src/styles/`
3. Add route in `App.jsx`
4. Add navigation in `NavbarNew.jsx`

### Update Colors
Edit `src/styles/design-tokens.css` `:root` variables

### Change Typography
Modify font scales in `design-tokens.css` `--font-size-*` variables

### Add Components
Create reusable components in `src/components/`

## Troubleshooting

**Build fails with CSS import errors:**
- Ensure all CSS files exist in `styles/` directory
- Check import paths use correct filenames

**API calls return 404:**
- Verify backend is running on `http://localhost:8080`
- Check endpoint paths match backend routes
- Verify request body format matches API schema

**Components not rendering:**
- Check React Router paths match navigation links
- Verify component imports are correct
- Check for console errors

## Production Deployment

### Frontend
```bash
npm run build
# Deploy dist/ folder to CDN or web server
```

### Backend
```bash
./mvnw.cmd clean package
java -jar target/AICareer-0.0.1-SNAPSHOT.jar
```

Set environment variables:
- `SPRING_PROFILES_ACTIVE=production`
- `SERVER_PORT=8080`
- Database connection properties (if applicable)

## Code Style

- Use functional React components with hooks
- Follow BEM naming for CSS classes
- Use CSS custom properties (variables) for theming
- Mobile-first responsive design
- Semantic HTML
- Meaningful variable/function names

## Performance Tips

1. Code split route components
2. Lazy load images
3. Minimize CSS specificity
4. Debounce resize handlers
5. Use CSS Grid/Flexbox (avoid absolute positioning)
6. Enable gzip compression

## Resources

- [React documentation](https://react.dev)
- [Vite documentation](https://vitejs.dev)
- [Spring Boot documentation](https://spring.io/projects/spring-boot)
- [CSS Variables guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## Support

For issues or questions, check:
1. Console errors (browser DevTools)
2. Network tab (API calls)
3. Backend logs
4. Design system documentation

