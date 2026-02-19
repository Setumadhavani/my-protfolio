# EmailJS Template Configuration Guide

## Current Issue
Your emails are coming with no proper subject and generic sender information.

## Solution: Update Your EmailJS Template

### 1. Go to EmailJS Dashboard
- Visit https://dashboard.emailjs.com/
- Navigate to your service (service_lqz0u2r)
- Edit your template (template_4z4zc8a)

### 2. Configure Template Settings

**From Name:** 
```
{{user_name}} (via Portfolio Contact)
```

**From Email:** 
```
your-service-email@gmail.com
```
(This should be your verified email in EmailJS)

**Reply-To:** 
```
{{user_email}}
```

**To Email:** 
```
setumadhavani@gmail.com
```

**Subject:** 
```
Portfolio Contact: {{subject}}
```

### 3. Email Body Template
```html
<p>You have received a new message from your portfolio contact form:</p>

<p><strong>From:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{user_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>This message was sent via your portfolio contact form.</em></p>
```

### 4. Result
After this configuration:
- **Subject:** Will show "Portfolio Contact: [their subject]"
- **From:** Will show "[Their Name] (via Portfolio Contact)"
- **Reply-To:** Will be set to their email address
- **Body:** Will include all their information clearly formatted

### 5. Test the Form
After updating the template, test your contact form to ensure:
- Emails have proper subjects
- You can see who sent the message
- You can reply directly to the sender