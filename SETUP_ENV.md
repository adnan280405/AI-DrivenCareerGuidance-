# Environment Setup Guide

This guide explains how to set up environment variables for the PathIQ project.

## Backend Setup

### Step 1: Create `.env` file
Create a `.env` file in the `backend/` directory:

```bash
cp backend/.env.example backend/.env
```

### Step 2: Add your OpenRouter API Key
Edit `backend/.env` and replace the placeholder with your actual API key:

```env
OPENROUTER_API_KEY=sk-or-v1-your-actual-api-key-here
```

Get your API key from: https://openrouter.ai

### Step 3: Ensure `.env` is not tracked by Git
The `.env` file is already in `.gitignore`, so it won't be committed to GitHub.

---

## Frontend Setup

### Step 1: Create `.env` file (optional)
If you need custom backend URL configuration, create a `.env` file in the `frontend/` directory:

```bash
cp frontend/.env.example frontend/.env
```

### Step 2: Configure Backend API URL (if needed)
Edit `frontend/.env` to match your backend URL:

```env
VITE_API_URL=http://localhost:8080
```

For production, update to your production backend URL.

---

## Running the Application

### Backend:
```bash
cd backend
# Maven will read from .env file (ensure your system has the OPENROUTER_API_KEY environment variable set)
./mvnw spring-boot:run
```

### Frontend:
```bash
cd frontend
npm install
npm run dev
```

---

## Before Pushing to GitHub

✅ Make sure:
- [ ] `.env` file exists locally with your API key
- [ ] `.env` file is in `.gitignore` (cannot be committed)
- [ ] `.env.example` file is committed (shows the template)
- [ ] Tests pass locally
- [ ] No sensitive information in commit history

To verify what's staged for commit:
```bash
git status
```

The `.env` file should NOT appear in the list.

---

## Troubleshooting

**Error: "OPENROUTER_API_KEY not found"**
- Ensure `.env` file exists in `backend/` directory
- Restart your IDE/terminal after creating `.env`
- On Windows, you may need to set environment variable in system settings or PowerShell

**Frontend can't connect to backend**
- Ensure backend is running on `http://localhost:8080`
- Check the `VITE_API_URL` in `frontend/.env`
- Verify CORS is configured in backend

---

## Notes

- `.env` files are local to your machine and never committed to Git
- `.env.example` files show what variables are needed
- Keep API keys secure and never share them
- Each developer should have their own `.env` file with their own API key

