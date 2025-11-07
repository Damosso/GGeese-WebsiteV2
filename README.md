# GGeese Studio Website V3

Modern website for GGeese Studio featuring ArcadiaX - our mixed reality drift karting platform.

## Project Structure

```
├── frontend/          # React frontend application
├── backend/           # FastAPI backend server
├── tests/            # Test files
└── README.md         # This file
```

## Quick Start

### Frontend Development

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server** (Windows):
   ```bash
   npm run start:win:3001
   ```
   Or on macOS/Linux:
   ```bash
   npm start
   ```

4. **Open browser**: http://localhost:3001

### Backend Setup (for Contact Form)

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Create virtual environment**:
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment**:
   - Copy `.env.example` to `.env`
   - Add your SendGrid API key (for email functionality)
   - Update MongoDB URL if needed

5. **Start backend server**:
   ```bash
   uvicorn server:app --reload --port 8000
   ```

## Features

- ✅ Modern React 19 frontend with Tailwind CSS
- ✅ Smooth scroll-to-top on navigation
- ✅ Working contact form with email delivery
- ✅ Video gallery section on ArcadiaX page
- ✅ Responsive design for all devices
- ✅ Hot reload development server
- ✅ Custom UI components (Radix UI)

## Technologies

**Frontend:**
- React 19
- React Router v7
- Tailwind CSS
- Radix UI
- Lucide Icons

**Backend:**
- FastAPI
- MongoDB
- SendGrid (email)
- Motor (async MongoDB driver)

## Contact Form

The contact form sends emails to `ggeesestudio@gmail.com` using SendGrid. To enable:

1. Sign up for [SendGrid](https://sendgrid.com/) (free tier available)
2. Get an API key with Mail Send permissions
3. Add to `backend/.env` as `SENDGRID_API_KEY`
4. Start the backend server

## Development Notes

- **Node Version**: Use Node 18-20 (recommended: Node 20)
- **Port 3001**: Dev server runs on 3001 to avoid conflicts
- **OpenSSL**: Uses legacy provider for Node 24 compatibility
- **Hot Reload**: Changes automatically refresh the browser

## Deployment

See individual README files in `frontend/` and `backend/` for deployment instructions.

## Support

For questions or issues, contact: ggeesestudio@gmail.com
