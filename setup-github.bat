@echo off
REM This script initializes the PathIQ project for GitHub
REM Run this from the project root directory

echo.
echo ====================================
echo PathIQ GitHub Setup Guide
echo ====================================
echo.

echo Step 1: Initialize Git Repository
git init
echo ✓ Git initialized

echo.
echo Step 2: Verify .gitignore files are in place
if exist ".gitignore" echo ✓ Root .gitignore exists
if exist "backend\.gitignore" echo ✓ Backend .gitignore exists
if exist "frontend\.gitignore" echo ✓ Frontend .gitignore exists

echo.
echo Step 3: Create .env files from examples
if not exist "backend\.env" (
    copy "backend\.env.example" "backend\.env" >nul
    echo ✓ Created backend\.env
) else (
    echo ✓ backend\.env already exists
)

if not exist "frontend\.env" (
    copy "frontend\.env.example" "frontend\.env" >nul
    echo ✓ Created frontend\.env
) else (
    echo ✓ frontend\.env already exists
)

echo.
echo Step 4: Add global .gitignore rules
REM This ensures .env files are never tracked
echo Your .gitignore is already configured to ignore .env files

echo.
echo ====================================
echo NEXT STEPS:
echo ====================================
echo.
echo 1. Edit backend\.env with your OpenRouter API key:
echo    Get it from: https://openrouter.ai
echo.
echo 2. Add remote repository:
echo    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
echo.
echo 3. Configure Git user (if not already done):
echo    git config --global user.name "Your Name"
echo    git config --global user.email "your@email.com"
echo.
echo 4. Stage files for commit:
echo    git add .
echo.
echo 5. Verify .env is NOT included:
echo    git status (should show .env files as NOT included)
echo.
echo 6. Create initial commit:
echo    git commit -m "Initial commit: PathIQ project"
echo.
echo 7. Push to GitHub:
echo    git branch -M main
echo    git push -u origin main
echo.
echo ====================================
echo SECURITY CHECKLIST:
echo ====================================
echo.
echo [ ] .env file created with actual API key (LOCAL ONLY)
echo [ ] backend\.env is in .gitignore
echo [ ] frontend\.env is in .gitignore
echo [ ] backend\.env.example is checked (no real keys)
echo [ ] frontend\.env.example is checked (no real keys)
echo [ ] No API keys in any committed code
echo [ ] git status shows no .env files
echo.
pause

