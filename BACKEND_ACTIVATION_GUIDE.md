# 🚀 Backend Email Setup - Complete Guide

## Current Status

✅ **Frontend**: Running on http://localhost:3001  
✅ **SendGrid API Key**: Already added to `.env`  
⏳ **Backend**: Needs Python installation and setup  

---

## Quick Setup (3 Steps)

### Step 1: Install Python (One-time setup)

1. **Download Python**:
   - Go to: https://www.python.org/downloads/
   - Download **Python 3.11** or **3.12** (latest stable version)

2. **Install Python**:
   - Run the installer
   - ⚠️ **CRITICAL**: Check the box "**Add Python to PATH**" (at bottom of installer)
   - Click "Install Now"
   - Wait for installation to complete
   - **Restart your computer** (important for PATH to update)

3. **Verify Installation**:
   - Open a **new** PowerShell window
   - Run: `python --version`
   - You should see: `Python 3.11.x` or similar

---

### Step 2: Setup Backend (Automated)

After Python is installed:

1. **Navigate to the backend folder** in File Explorer:
   ```
   c:\GGeese Studio\GGeese Website V3\GGeese-WebsiteV2\backend
   ```

2. **Double-click**: `setup_backend.bat`
   - This will create a virtual environment
   - Install all required packages (FastAPI, SendGrid, etc.)
   - Takes about 1-2 minutes

3. **Wait for**: "Setup Complete!" message

---

### Step 3: Start Backend Server

1. **Double-click**: `start_backend.bat`
   
2. **You should see**:
   ```
   INFO:     Uvicorn running on http://127.0.0.1:8000
   INFO:     Application startup complete.
   ```

3. **Keep this window open** (minimizing is OK, but don't close it)

---

## Test the Contact Form

Now you have **both servers running**:
- Frontend: http://localhost:3001 ✅
- Backend: http://localhost:8000 ✅

### Try it out:
1. Go to: http://localhost:3001/contact
2. Fill out the contact form:
   - Name: Your Name
   - Email: your@email.com
   - Message: Test message
3. Click "Send Message"
4. You should see: ✅ "Message sent successfully!"
5. **Check**: ggeesestudio@gmail.com for the email!

---

## Alternative: Manual Setup (if scripts don't work)

If the `.bat` files don't work, you can set up manually:

### Open PowerShell in the backend folder and run:

```powershell
# Create virtual environment
python -m venv venv

# Activate it (if you get policy error, see below)
.\venv\Scripts\Activate.ps1

# Install dependencies
pip install -r requirements.txt

# Start server
uvicorn server:app --reload --port 8000
```

### If you get "execution policy" error:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Then try activating again.

---

## Files Created for You

I've set up everything needed:

✅ `backend/.env` - Your SendGrid API key is here  
✅ `backend/setup_backend.bat` - Automatic setup script  
✅ `backend/start_backend.bat` - Server startup script  
✅ `backend/PYTHON_SETUP.md` - Detailed troubleshooting guide  
✅ `backend/server.py` - Updated to work without MongoDB  

---

## Important Notes

### MongoDB is Optional
- Contact form **does not need** MongoDB
- It works with just SendGrid
- Any MongoDB warnings can be ignored

### Keep Both Servers Running
You need **two terminal windows** open:
1. **Frontend** (already running): `npm run start:win:3001`
2. **Backend** (start after Python setup): `start_backend.bat`

### Stopping Servers
- Frontend: Press `Ctrl+C` in the npm terminal
- Backend: Press `Ctrl+C` in the backend terminal
- Or just close the terminal windows

---

## Troubleshooting

### "Python is not installed"
→ Install from python.org, check "Add to PATH", restart computer

### "Module not found" errors
→ Run `setup_backend.bat` again

### Email not sending
→ Check backend terminal for errors
→ Verify SendGrid API key in `.env`
→ Make sure sender email is verified in SendGrid

### Port 8000 already in use
→ Change port in `start_backend.bat`: use `--port 8001` instead

---

## What Happens When You Submit the Form?

1. User fills form on http://localhost:3001/contact
2. Frontend sends data to backend (http://localhost:8000/api/contact)
3. Backend uses SendGrid to email ggeesestudio@gmail.com
4. You get a nice formatted email with:
   - Sender's name
   - Sender's email (set as reply-to)
   - Their message
   - Purple/pink GGeese branding

---

## Next Steps

1. ⬇️ **Install Python** from python.org (if not already installed)
2. 🔄 **Restart your computer** after Python installation
3. ▶️ **Run** `setup_backend.bat` 
4. 🚀 **Run** `start_backend.bat`
5. ✉️ **Test** the contact form!

Once you see "Uvicorn running on http://127.0.0.1:8000", you're all set! 🎉
