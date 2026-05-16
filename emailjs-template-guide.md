# EmailJS Template Configuration Guide

## 🚨 Current Issue
Your emails are failing to send or coming with no proper subject and generic sender information.

## ✅ Complete Solution

### Step 1: Update Your React Form (DONE ✓)
The form now uses the correct field names:
- `from_name` - Sender's name
- `from_email` - Sender's email
- `subject` - Email subject
- `message` - Email message

### Step 2: Configure EmailJS Template

#### 2.1 Go to EmailJS Dashboard
1. Visit https://dashboard.emailjs.com/
2. Login to your account
3. Navigate to **Email Services** → Select your service
4. Go to **Email Templates** → Select your template (or create new)

#### 2.2 Template Settings Configuration

**Template Name:** `Portfolio Contact Form`

**Template ID:** (Keep your existing ID or note the new one)

---

### 📧 Email Template Configuration

#### **From Name:**
```
{{from_name}}
```
*This will show the sender's actual name*

#### **From Email:**
```
noreply@emailjs.com
```
*Or use your verified email address*

#### **Reply-To:**
```
{{from_email}}
```
*This allows you to reply directly to the sender*

#### **To Email:**
```
setumadhavani@gmail.com
```
*Your email where you want to receive messages*

#### **Subject:**
```
Portfolio Contact: {{subject}}
```
*This will show "Portfolio Contact: [their subject]"*

---

### 📝 Email Body Template (HTML)

Copy and paste this into the **Content** section:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
            border-radius: 0 0 8px 8px;
        }
        .field {
            margin-bottom: 20px;
        }
        .label {
            font-weight: bold;
            color: #7c3aed;
            display: block;
            margin-bottom: 5px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .value {
            background: white;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }
        .message-box {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border-left: 4px solid #7c3aed;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
        }
        .reply-button {
            display: inline-block;
            background: #7c3aed;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2 style="margin: 0;">📬 New Portfolio Contact Message</h2>
    </div>
    
    <div class="content">
        <div class="field">
            <span class="label">👤 From</span>
            <div class="value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <span class="label">📧 Email</span>
            <div class="value">
                <a href="mailto:{{from_email}}" style="color: #7c3aed; text-decoration: none;">
                    {{from_email}}
                </a>
            </div>
        </div>
        
        <div class="field">
            <span class="label">📋 Subject</span>
            <div class="value">{{subject}}</div>
        </div>
        
        <div class="field">
            <span class="label">💬 Message</span>
            <div class="message-box">{{message}}</div>
        </div>
        
        <div style="text-align: center;">
            <a href="mailto:{{from_email}}" class="reply-button">
                Reply to {{from_name}}
            </a>
        </div>
    </div>
    
    <div class="footer">
        <p>This message was sent via your portfolio contact form at setumadhavani.com</p>
        <p>Received on {{current_date}}</p>
    </div>
</body>
</html>
```

---

### Step 3: Update Environment Variables

Make sure your `.env` file has the correct values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**To find your Public Key:**
1. Go to https://dashboard.emailjs.com/
2. Click on **Account** in the left sidebar
3. Copy the **Public Key** (starts with a long string)

---

### Step 4: Test Your Configuration

#### 4.1 Test in EmailJS Dashboard
1. In your template editor, click **Test It**
2. Fill in sample values:
   - `from_name`: John Doe
   - `from_email`: john@example.com
   - `subject`: Test Message
   - `message`: This is a test message
3. Click **Send Test Email**
4. Check your inbox (setumadhavani@gmail.com)

#### 4.2 Test in Your Application
1. Start your dev server: `npm run dev`
2. Go to the Contact page
3. Fill out the form with test data
4. Submit and check your email

---

### 🎯 Expected Result

After configuration, you should receive emails like this:

**From:** John Doe  
**Reply-To:** john@example.com  
**Subject:** Portfolio Contact: Project Inquiry  
**Body:** Beautifully formatted HTML email with all details

---

### 🔧 Troubleshooting

#### Issue: "Failed to send. Please try again."

**Solution 1: Check Environment Variables**
```bash
# Make sure .env file exists and has correct values
# Restart dev server after changing .env
npm run dev
```

**Solution 2: Verify EmailJS Service**
- Go to https://dashboard.emailjs.com/
- Check if your service is active
- Verify your email service connection (Gmail, Outlook, etc.)

**Solution 3: Check Browser Console**
- Open DevTools (F12)
- Go to Console tab
- Look for error messages
- Common errors:
  - Invalid service ID
  - Invalid template ID
  - Invalid public key
  - CORS issues (usually not a problem with EmailJS)

**Solution 4: Gmail Settings (if using Gmail)**
1. Go to https://myaccount.google.com/security
2. Enable "Less secure app access" OR
3. Use App Password:
   - Go to Security → 2-Step Verification → App passwords
   - Generate app password for EmailJS
   - Use this in EmailJS service configuration

---

### 📋 Quick Checklist

- [ ] Updated React form field names (from_name, from_email, subject, message)
- [ ] Configured EmailJS template with correct variables
- [ ] Set proper From Name: `{{from_name}}`
- [ ] Set proper Reply-To: `{{from_email}}`
- [ ] Set proper Subject: `Portfolio Contact: {{subject}}`
- [ ] Added HTML email body template
- [ ] Updated .env file with correct keys
- [ ] Tested in EmailJS dashboard
- [ ] Tested in application
- [ ] Received test email successfully

---

### 🎨 Alternative Simple Template (Plain Text)

If you prefer a simpler plain text email:

```
New message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.
```

---

### 📞 Need Help?

If you're still having issues:

1. **Check EmailJS Status**: https://status.emailjs.com/
2. **EmailJS Documentation**: https://www.emailjs.com/docs/
3. **EmailJS Support**: support@emailjs.com

---

### 🔐 Security Note

Never commit your `.env` file to Git. It's already in `.gitignore`, but double-check:

```bash
# Check if .env is ignored
git status

# If .env appears, add it to .gitignore
echo ".env" >> .gitignore
```

---

## ✨ Final Result

After completing all steps, your contact form will:
- ✅ Send emails successfully
- ✅ Show sender's actual name
- ✅ Include sender's email for easy reply
- ✅ Display proper subject line
- ✅ Format message beautifully
- ✅ Allow direct reply to sender
- ✅ Work reliably every time

---

**Last Updated:** 2024
**Author:** Setu Madhavani
**Portfolio:** setumadhavani.com