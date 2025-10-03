# Nodemailer Setup Guide for Contact Form

Your contact form now uses a backend API with Nodemailer for reliable email sending. Follow these steps to complete the setup:

## Step 1: Set up Gmail App Password

### Enable 2-Factor Authentication:
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click "Security" in the left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. Follow the steps to enable 2FA if not already enabled

### Generate App Password:
1. In Google Account Settings → Security
2. Under "Signing in to Google", click "App passwords"
3. Select "Mail" from the dropdown
4. Click "Generate"
5. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

## Step 2: Create Environment File

Create a `.env.local` file in your project root:

```bash
# .env.local
EMAIL_USER=sulakshanidissanayake@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important:** 
- Replace `your-16-character-app-password` with the app password from Step 1
- Use your actual Gmail address
- **Never commit this file to Git** (it's already in .gitignore)

## Step 3: Test Your Setup

1. Fill out your contact form
2. Click "Send Message"
3. Check your email inbox
4. You should receive a professionally formatted email

## What's Included:

### ✅ **Backend API** (`/api/send-email`)
- Secure server-side email sending
- Input validation
- Professional HTML email templates
- Error handling

### ✅ **Updated Contact Form**
- Sends data to your backend API
- Real-time status updates
- Form validation
- Loading states

### ✅ **Email Features**
- Professional HTML formatting
- All form data included
- Sender information clearly displayed
- Portfolio branding

## Email Template Preview:
```
Subject: New Contact Form Submission from [Name]

┌─────────────────────────────────────────┐
│ New Contact Form Submission             │
├─────────────────────────────────────────┤
│ Name: John Doe                          │
│ Email: john@example.com                 │
│ Mobile: +1234567890                     │
├─────────────────────────────────────────┤
│ Message:                                │
│ Hi Sulakshani, I'd like to discuss...   │
└─────────────────────────────────────────┘
```

## Troubleshooting:

### Common Issues:
1. **"Authentication failed"**
   - Make sure you're using an App Password, not your regular password
   - Verify 2FA is enabled on your Google account

2. **"Failed to send email"**
   - Check your `.env.local` file exists and has correct credentials
   - Restart your development server after adding environment variables

3. **"Network error"**
   - Make sure your development server is running
   - Check browser console for detailed error messages

### Testing:
```bash
# Restart your development server after adding .env.local
npm run dev
```

## Security Benefits:
- ✅ Email credentials stored securely on server
- ✅ No client-side API keys
- ✅ Backend validation
- ✅ Rate limiting possible
- ✅ More reliable than client-side solutions

## Alternative Email Services:
You can also use other email services by changing the configuration:

### Outlook:
```javascript
service: 'outlook'
```

### Custom SMTP:
```javascript
host: 'smtp.yourdomain.com',
port: 587,
secure: false,
```

Your contact form is now enterprise-ready with reliable email delivery!