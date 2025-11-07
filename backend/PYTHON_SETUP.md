# Quick Python & Backend Setup Guide

## Step 1: Install Python (if not already installed)

You need Python 3.10 or higher installed on your system.

### Download Python:
1. Go to https://www.python.org/downloads/
2. Download Python 3.11 or 3.12 (recommended)
3. **IMPORTANT**: During installation, check the box "Add Python to PATH"
4. Click "Install Now"

### Verify Python Installation:
Open a new PowerShell window and run:
```bash
python --version
```
You should see something like: `Python 3.11.x`

## Step 2: Setup Backend (Easy Way)

### Option A: Use Setup Script (Recommended)
1. Open File Explorer and navigate to the `backend` folder
2. Double-click `setup_backend.bat`
3. Wait for it to install all dependencies
4. When done, double-click `start_backend.bat` to start the server

### Option B: Manual Setup
Open PowerShell in the backend folder and run:

```powershell
# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\Activate.ps1

# If you get execution policy error, run this first:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then try activating again
venv\Scripts\Activate.ps1

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn server:app --reload --port 8000
```

## Step 3: Test the Contact Form

Once the backend is running:
1. You should see: `Uvicorn running on http://127.0.0.1:8000`
2. Keep this window open (don't close it)
3. Go to your website at http://localhost:3001/contact
4. Fill out the contact form and submit
5. Check ggeesestudio@gmail.com for the email!

## Troubleshooting

### "Python is not installed"
- Install Python from python.org
- Make sure to check "Add Python to PATH"
- Restart your computer after installation

### "Execution policy" error
Run this in PowerShell (as Administrator):
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Backend server won't start
1. Make sure port 8000 is not already in use
2. Check that `.env` file exists with your SendGrid API key
3. MongoDB warnings are OK - contact form doesn't need MongoDB

### Email not sending
1. Verify SENDGRID_API_KEY is correct in `.env`
2. Check that your sender email is verified in SendGrid
3. Look at the backend terminal for error messages

## Notes

- The backend server needs to run alongside the frontend
- MongoDB is optional - contact form works without it
- Keep both terminal windows open (frontend + backend)
- Backend runs on http://localhost:8000
- Frontend runs on http://localhost:3001
