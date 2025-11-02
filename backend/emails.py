from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
from typing import Optional

class EmailDeliveryError(Exception):
    pass

def send_contact_form_email(name: str, email: str, message: str):
    """
    Send contact form submission to GGeese Studio
    
    Args:
        name: Sender's name
        email: Sender's email
        message: Contact message
    """
    subject = f"New Contact Form Submission from {name}"
    
    html_content = f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                <h2 style="color: #7c3aed; margin-bottom: 20px;">New Contact Form Submission</h2>
                
                <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <p><strong style="color: #7c3aed;">From:</strong> {name}</p>
                    <p><strong style="color: #7c3aed;">Email:</strong> <a href="mailto:{email}" style="color: #7c3aed; text-decoration: none;">{email}</a></p>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #7c3aed;">
                        <h3 style="color: #7c3aed; margin-bottom: 10px;">Message:</h3>
                        <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">{message}</p>
                    </div>
                </div>
                
                <p style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
                    This message was sent from the GGeese Studio website contact form.
                </p>
            </div>
        </body>
    </html>
    """
    
    plain_text_content = f"""
    New Contact Form Submission
    
    From: {name}
    Email: {email}
    
    Message:
    {message}
    
    ---
    This message was sent from the GGeese Studio website contact form.
    """
    
    message_obj = Mail(
        from_email=os.getenv('SENDER_EMAIL'),
        to_emails='ggeesestudio@gmail.com',
        subject=subject,
        html_content=html_content,
        plain_text_content=plain_text_content
    )
    
    # Set reply-to as the sender's email
    message_obj.reply_to = email
    
    try:
        sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))
        response = sg.send(message_obj)
        return response.status_code == 202
    except Exception as e:
        raise EmailDeliveryError(f"Failed to send email: {str(e)}")
