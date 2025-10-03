# EmailJS Setup Guide for Contact Form

Follow these steps to set up EmailJS for your contact form:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Or any other provider
4. Follow the connection steps for your provider
5. **Save your Service ID** (looks like: `service_abc123`)

## Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Contact from {{from_name}} - Portfolio Website
```

**Content:**
```
Hello Sulakshani,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Mobile: {{mobile}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Save your Template ID** (looks like: `template_xyz789`)

## Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find your **"Public Key"** (looks like: `abcDEF123`)

## Step 5: Update Your Code
In your `Contact.tsx` file, replace these values:

```typescript
// Replace these with your actual EmailJS credentials
const serviceId = 'service_abc123';     // Your Service ID
const templateId = 'template_xyz789';   // Your Template ID  
const publicKey = 'abcDEF123';          // Your Public Key
```

## Step 6: Test Your Form
1. Fill out your contact form on your website
2. Click "Send Message"
3. Check your email inbox
4. You should receive the form submission

## Template Variables Used:
- `{{from_name}}` - Name from form
- `{{from_email}}` - Email from form
- `{{mobile}}` - Mobile from form
- `{{message}}` - Message from form
- `{{to_email}}` - Your email (hardcoded in component)

## Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic features

## Troubleshooting:
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is connected
- Test with a simple message first

## Example Configuration:
```typescript
const serviceId = 'service_ghi456';
const templateId = 'template_jkl789';
const publicKey = 'mnoPQR123';
```

Once you complete these steps, your contact form will send emails directly to your inbox!