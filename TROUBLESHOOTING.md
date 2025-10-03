# Contact Form Troubleshooting Guide

## Step 1: Set up your Gmail App Password

### ⚠️ IMPORTANT: You MUST use an App Password, not your regular Gmail password

1. **Enable 2-Factor Authentication:**
   - Go to https://myaccount.google.com/security
   - Click "2-Step Verification" and enable it

2. **Generate App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" from dropdown
   - Click "Generate"
   - Copy the 16-character password (example: `abcd efgh ijkl mnop`)

## Step 2: Update .env.local file

Edit your `.env.local` file with your REAL credentials:

```
EMAIL_USER=sulakshanidissanayake@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

**Replace `abcdefghijklmnop` with your actual 16-character app password**

## Step 3: Restart Development Server

After updating .env.local, restart your server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 4: Test the Form

1. Fill out your contact form
2. Click "Send Message" 
3. Check browser console (F12) for any errors
4. Look for "API Response" in console

## Step 5: Check for Common Issues

### Issue: "Email credentials not configured"
**Solution:** Make sure `.env.local` exists and has correct format

### Issue: "Authentication failed"
**Solution:** 
- Make sure you're using App Password, not regular password
- Verify 2FA is enabled
- Check for typos in email/password

### Issue: "API not found"
**Solution:** 
- Make sure your development server is running
- Check that API files are in correct locations

## Debug Steps:

1. **Test API directly:**
   Open http://localhost:3001/api/test-email in browser
   Should show: `{"message":"API is working!","emailUser":"Set","emailPass":"Set"}`

2. **Check Environment Variables:**
   If `emailUser` or `emailPass` show "Not set", your .env.local file isn't working

3. **Check Console:**
   Open browser console (F12) when submitting form for detailed error messages

## If Still Not Working:

1. **Double-check App Password:** Generate a new one
2. **Try different email:** Test with a different Gmail account
3. **Check file locations:** Ensure API files are in `/app/api/` folder

## Current Test Mode:
The form is now in test mode. Once basic connectivity works, I'll switch it back to send actual emails.

Let me know what error messages you see!