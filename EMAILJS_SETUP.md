# EmailJS Setup Instructions

To make your contact form functional, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Connect Your Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Mobile: {{mobile}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key
1. Go to "Account" -> "General"
2. Find your **Public Key**

## 5. Update Your Code
Replace the placeholders in `Contact.tsx`:

```typescript
const serviceId = 'your_actual_service_id';
const templateId = 'your_actual_template_id'; 
const publicKey = 'your_actual_public_key';
```

## 6. Test Your Form
1. Fill out your contact form
2. Check your email inbox
3. You should receive the form submission

## Free Tier Limits
- 200 emails per month
- EmailJS branding in emails

For more emails or to remove branding, consider upgrading to a paid plan.

## Security Note
Your EmailJS public key is safe to use in frontend code - it's designed for client-side usage.