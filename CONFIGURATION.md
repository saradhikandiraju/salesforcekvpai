# Configuration Guide

This application is fully configurable without a database. All business settings can be updated in the `constants.tsx` file.

## Quick Configuration

Edit `/constants.tsx` and update the `COMPANY_CONFIG` object:

### Company Information
```typescript
name: 'Your Company Name',
nameShort: 'Short Name',
tagline: 'Your Tagline',
description: 'Your company description',
logoText: 'L', // Single character for logo
```

### Contact Information
```typescript
contact: {
  email: 'your-email@company.com',
  phone: '+1 (555) 123-4567',
  businessHours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
  location: 'Your Location Description',
  legalEmail: 'legal@company.com',
  formAction: 'https://formsubmit.co/your-email@company.com', // Form submission URL
}
```

### Social Media Links
```typescript
social: {
  linkedin: 'https://www.linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  youtube: 'https://www.youtube.com/@yourcompany',
}
```

### Copyright
```typescript
copyright: {
  year: 2025,
  companyName: 'Your Company Name',
}
```

## Contact Form Setup

The contact form uses **FormSubmit** by default - the simplest solution with no signup required!

### Option 1: FormSubmit (Current - Easiest)
1. Update `formAction` in `COMPANY_CONFIG.contact.formAction` to:
   ```typescript
   formAction: `https://formsubmit.co/your-email@company.com`
   ```
2. That's it! FormSubmit will automatically forward submissions to your email.
3. First submission will include a verification email - click the link to activate.

### Option 2: Formspree (Alternative)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `formAction` to:
   ```typescript
   formAction: `https://formspree.io/f/YOUR_FORM_ID`
   ```

### Option 3: EmailJS (For more control)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Configure email service
3. Update the form submission handler in `app/contact/page.tsx`

## What Gets Updated Automatically

When you update `COMPANY_CONFIG`, these areas update automatically:
- ✅ Footer contact information
- ✅ Navbar company name and logo
- ✅ Contact page details
- ✅ Social media links throughout the site
- ✅ Email links (mailto:)
- ✅ Phone links (tel:)
- ✅ Copyright year and company name
- ✅ Site metadata (SEO)
- ✅ Legal page contact emails

## No Database Required

All configuration is stored in code, making it:
- Easy to version control
- Simple to update
- No database setup needed
- Fast and reliable

Just edit `constants.tsx` and redeploy!

