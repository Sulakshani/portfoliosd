# Formspree Setup Instructions (Easier Alternative)

Formspree is much easier to set up than EmailJS. Follow these simple steps:

## 1. Create Formspree Account
1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Verify your email address

## 2. Create a New Form
1. In your Formspree dashboard, click "New Form"
2. Enter your email address (sulakshanidissanayake@gmail.com)
3. Give your form a name (e.g., "Portfolio Contact Form")
4. Click "Create Form"

## 3. Get Your Form ID
1. After creating the form, you'll see a form ID that looks like: `xpznvoor` or similar
2. Copy this form ID

## 4. Update Your Code
In your `Contact.tsx` file, replace `YOUR_FORM_ID` with your actual form ID:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

For example, if your form ID is `xpznvoor`, it should be:
```typescript
const response = await fetch('https://formspree.io/f/xpznvoor', {
```

## 5. Test Your Form
1. Fill out your contact form on your website
2. Submit the form
3. Check your email - you should receive the submission

## Free Tier Benefits
- 50 submissions per month
- No setup complexity
- Spam protection included
- Works immediately after setup

## Alternative: Simple mailto Link
If you want an even simpler solution, you can replace the form with a mailto link:

```tsx
<a href="mailto:sulakshanidissanayake@gmail.com?subject=Portfolio Contact&body=Hello Sulakshani," className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full inline-block text-center">
  Send Email
</a>
```

This will open the user's default email client with your email pre-filled.

## Why Formspree is Better
- ✅ No API keys needed
- ✅ Works immediately 
- ✅ Built-in spam protection
- ✅ Simple setup
- ✅ Reliable delivery