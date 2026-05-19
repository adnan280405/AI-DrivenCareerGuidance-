# 🔐 Environment Variables & GitHub Setup - Quick Reference

## What I've Configured For You

### ✅ Created Files:
1. **Backend:**
   - `backend/.env.example` - Template showing required variables (no secrets)
   - Updated `backend/.gitignore` - Prevents `.env` from being committed

2. **Frontend:**
   - `frontend/.env.example` - Template for optional API URL config (no secrets)
   - Updated `frontend/.gitignore` - Added Node/npm exclusions

3. **Root Project:**
   - `.gitignore` - Global rules for entire project
   - `setup-github.bat` - Setup script for Windows
   - `setup-github.sh` - Setup script for Mac/Linux
   - `SETUP_ENV.md` - Detailed environment setup guide

---

## 🚀 Ready to Push to GitHub? Do This:

### **Step 1: Initialize Git** (Windows PowerShell)
```powershell
cd "C:\Users\thewn\OneDrive\Desktop\project\AICareer\AICareer"
git init
```

### **Step 2: Create Your Local .env Files**
```powershell
# Backend
copy backend\.env.example backend\.env
```

### **Step 3: Add Your API Key**
Edit `backend\.env` and add your actual OpenRouter API key:
```env
OPENROUTER_API_KEY=sk-or-v1-your-key-here
```

Get key from: https://openrouter.ai

### **Step 4: Verify .env Won't Be Committed**
```powershell
git status
```
❌ **You should NOT see** `backend/.env` or `frontend/.env` in the list

✅ **You should see** `backend/.env.example` and `frontend/.env.example`

### **Step 5: Add Remote & Push**
```powershell
git remote add origin https://github.com/USERNAME/REPO.git
git add .
git commit -m "Initial commit: PathIQ - AI Career Guidance Platform"
git branch -M main
git push -u origin main
```

---

## 🔒 Security Checklist

- ✅ `.env` files are in `.gitignore` 
- ✅ `.env.example` files show templates (no real keys)
- ✅ `OPENROUTER_API_KEY` kept ONLY in local `.env`
- ✅ No API keys hardcoded in source files
- ✅ Proper folder structure organized

---

## 📁 File Structure After Setup

```
AICareer/
├── .gitignore (prevents .env from git)
├── backend/
│   ├── .env (LOCAL ONLY - never committed)
│   ├── .env.example (USE THIS AS TEMPLATE)
│   ├── .gitignore
│   └── ...
├── frontend/
│   ├── .env (OPTIONAL - local only)
│   ├── .env.example (use if needed)
│   ├── .gitignore
│   └── ...
├── setup-github.bat
├── setup-github.sh
└── SETUP_ENV.md
```

---

## ⚠️ Important Notes

1. **Never commit `.env` files** - Only `.env.example` should be in git
2. **Each developer gets their own `.env`** - Copy from `.env.example` and add their own key
3. **If you accidentally committed `.env`** before:
   ```powershell
   # Remove from git history
   git rm --cached backend/.env
   git commit -m "Remove .env file"
   ```
4. **Environment variables must be set** before running the app:
   - Backend: `OPENROUTER_API_KEY` must be in `backend/.env` or system env vars
   - Frontend: Reads from `frontend/.env` (VITE_API_URL optional)

---

## 🛠️ Troubleshooting

**Q: Git still shows `.env` in status?**
```powershell
git rm --cached backend/.env
git commit -m "Stop tracking .env file"
```

**Q: APIKey not working after setup?**
- Verify `backend/.env` exists and has correct key
- Restart backend application
- Check key is valid at https://openrouter.ai

**Q: Frontend can't reach backend?**
- Ensure backend runs on `http://localhost:8080`
- Check `frontend/.env` VITE_API_URL setting
- Verify CORS is enabled in backend

---

## 📚 Additional Resources

- `SETUP_ENV.md` - Detailed setup guide
- `setup-github.bat/sh` - Automated setup scripts
- OpenRouter API: https://openrouter.ai/docs
- Git Docs: https://git-scm.com/docs

---

**You're all set! 🎉 Your project is now ready for GitHub with secure environment variables.**

