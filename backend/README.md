# GGeese Studio Backend

FastAPI backend server for the GGeese Studio website, handling contact form submissions and other API endpoints.

## Setup

1. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   venv\Scripts\activate  # On Windows
   # or
   source venv/bin/activate  # On macOS/Linux
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure environment variables**:
   - Copy `.env.example` to `.env`
   - Update the values with your actual credentials:
     - `MONGO_URL`: Your MongoDB connection string
     - `SENDGRID_API_KEY`: Get this from [SendGrid](https://sendgrid.com/)
     - `SENDER_EMAIL`: The verified sender email in SendGrid

4. **Run the development server**:
   ```bash
   uvicorn server:app --reload --port 8000
   ```

## Contact Form Setup

The contact form uses SendGrid to send emails to `ggeesestudio@gmail.com`.

### Getting a SendGrid API Key:

1. Sign up for a free account at [SendGrid](https://sendgrid.com/)
2. Verify your sender email address or domain
3. Create an API key with Mail Send permissions
4. Add the API key to your `.env` file as `SENDGRID_API_KEY`

### Testing the Contact Form:

```bash
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

## API Endpoints

- `GET /api/` - Health check
- `POST /api/contact` - Submit contact form (sends email to ggeesestudio@gmail.com)
- `GET /api/status` - Get status checks
- `POST /api/status` - Create status check

## Frontend Integration

The frontend expects the backend to be running at the URL specified in `REACT_APP_BACKEND_URL` environment variable (default: `http://localhost:8000`).
