# Setting Up Contact Form Email

The contact form is fully integrated and ready to send emails to `ggeesestudio@gmail.com`. Follow these steps to enable email functionality:

## 1. Get a SendGrid API Key

1. Go to [SendGrid](https://sendgrid.com/) and sign up for a free account
   - Free tier includes 100 emails/day
   
2. Verify your sender email:
   - Go to Settings → Sender Authentication
   - Choose "Single Sender Verification"
   - Verify an email address (can be `ggeesestudio@gmail.com` or `noreply@ggeese.nl`)

3. Create an API Key:
   - Go to Settings → API Keys
   - Click "Create API Key"
   - Name it "GGeese Website"
   - Choose "Restricted Access" → Check "Mail Send" with "Full Access"
   - Copy the API key (you won't see it again!)

## 2. Configure Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Copy the example environment file:
   ```bash
   copy .env.example .env  # Windows
   # or
   cp .env.example .env    # macOS/Linux
   ```

3. Edit `.env` and add your SendGrid API key:
   ```env
   SENDGRID_API_KEY=SG.your_actual_api_key_here
   SENDER_EMAIL=noreply@ggeese.nl
   ```

## 3. Install Backend Dependencies

```bash
# Create virtual environment (first time only)
python -m venv venv

# Activate it
venv\Scripts\activate  # Windows
# or
source venv/bin/activate  # macOS/Linux

# Install dependencies
pip install -r requirements.txt
```

## 4. Start Backend Server

```bash
uvicorn server:app --reload --port 8000
```

You should see:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

## 5. Test the Contact Form

1. Make sure both servers are running:
   - Frontend: http://localhost:3001
   - Backend: http://localhost:8000

2. Navigate to the Contact page: http://localhost:3001/contact

3. Fill out the form and submit

4. You should see a success toast notification

5. Check `ggeesestudio@gmail.com` for the email!

## Troubleshooting

### "Failed to send message"
- Check that backend server is running on port 8000
- Verify SENDGRID_API_KEY in backend/.env is correct
- Check backend terminal for error messages

### CORS Errors
- Make sure CORS_ORIGINS in backend/.env includes http://localhost:3001
- Restart the backend server after changing .env

### SendGrid Errors
- Verify your sender email in SendGrid dashboard
- Check that API key has "Mail Send" permissions
- Free tier limit is 100 emails/day

## Alternative: Using Gmail SMTP (Not Recommended)

If you prefer not to use SendGrid, you can modify `backend/emails.py` to use Gmail SMTP:

```python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_contact_form_email(name: str, email: str, message: str):
    sender = os.getenv('GMAIL_ADDRESS')
    password = os.getenv('GMAIL_APP_PASSWORD')
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f"Contact Form: {name}"
    msg['From'] = sender
    msg['To'] = 'ggeesestudio@gmail.com'
    
    # ... construct HTML message
    
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(sender, password)
        smtp.send_message(msg)
```

Note: Gmail requires an "App Password" - not your regular password.
