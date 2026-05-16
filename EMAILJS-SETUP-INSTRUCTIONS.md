# 📧 EmailJS Setup - Quick Start Guide

## 🎯 Goal
Fix the contact form so emails are sent with proper sender name, email, and subject.

## ✅ What I've Fixed in Your Code

1. **Updated Contact Form** (`src/pages/Contact.jsx`)
   - Changed `user_name` → `from_name`
   - Changed `user_email` → `from_email`
   - Removed unnecessary hidden fields
   - These match EmailJS standard template variables

## 🔧 What You Need to Do

### Step 1: Configure EmailJS Template (5 minutes)

1. **Go to EmailJS Dashboard**
   - Visit: https://dashboard.emailjs.com/
   - Login with your account

2. **Navigate to Your Template**
   - Click **Email Templates** in sidebar
   - Find your template (template_4z4zc8a) or create new one
   - Click **Edit**

3. **Configure Template Settings**

   Copy these exact values:

   | Field | Value |
   |-------|-------|
   | **Template Name** | Portfolio Contact Form |
   | **From Name** | `{{from_name}}` |
   | **From Email** | noreply@emailjs.com |
   | **Reply-To** | `{{from_email}}` |
   | **To Email** | setumadhavani@gmail.com |
   | **Subject** | Portfolio Contact: {{subject}} |

4. **Set Email Body (Content)**

   Click on the **Content** tab and paste this:

   ```html
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
       <div style="background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
           <h2 style="margin: 0;">📬 New Portfolio Contact</h2>
       </div>
       
       <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
           <div style="margin-bottom: 20px;">
               <strong style="color: #7c3aed;">From:</strong><br>
               <div style="background: white; padding: 10px; border-radius: 6px; margin-top: 5px;">
                   {{from_name}}
               </div>
           </div>
           
           <div style="margin-bottom: 20px;">
               <strong style="color: #7c3aed;">Email:</strong><br>
               <div style="background: white; padding: 10px; border-radius: 6px; margin-top: 5px;">
                   <a href="mailto:{{from_email}}" style="color: #7c3aed;">{{from_email}}</a>
               </div>
           </div>
           
           <div style="margin-bottom: 20px;">
               <strong style="color: #7c3aed;">Subject:</strong><br>
               <div style="background: white; padding: 10px; border-radius: 6px; margin-top: 5px;">
                   {{subject}}
               </div>
           </div>
           
           <div style="margin-bottom: 20px;">
               <strong style="color: #7c3aed;">Message:</strong><br>
               <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #7c3aed; margin-top: 5px; white-space: pre-wrap;">{{message}}</div>
           </div>
           
           <div style="text-align: center; margin-top: 30px;">
               <a href="mailto:{{from_email}}" style="background: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                   Reply to {{from_name}}
               </a>
           </div>
       </div>
       
       <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
           <p>Sent via your portfolio contact form</p>
       </div>
   </div>
   ```

5. **Save Template**
   - Click **Save** button
   - Note your Template ID (you'll need it for .env)

### Step 2: Update Environment Variables

1. **Check your `.env` file** (create if it doesn't exist)

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

2. **Get Your Public Key**
   - In EmailJS dashboard, click **Account** in sidebar
   - Find **Public Key** section
   - Copy the key (long alphanumeric string)
   - Replace `your_public_key_here` with your actual key

3. **Restart Dev Server**
   ```bash
   # Stop current server (Ctrl+C)
   # Start again
   npm run dev
   ```

### Step 3: Test the Configuration

#### Test in EmailJS Dashboard (Recommended First)

1. In your template editor, click **Test It** button
2. Fill in test values:
   ```
   from_name: John Doe
   from_email: john@example.com
   subject: Test Message
   message: This is a test message from EmailJS dashboard
   ```
3. Click **Send Test Email**
4. Check your inbox (setumadhavani@gmail.com)
5. Verify:
   - ✅ Subject shows "Portfolio Contact: Test Message"
   - ✅ From shows "John Doe"
   - ✅ Reply-To is john@example.com
   - ✅ Message is formatted nicely

#### Test in Your Application

1. Open your portfolio: http://localhost:5173
2. Go to Contact page
3. Fill out the form:
   ```
   Name: Test User
   Email: test@example.com
   Subject: Testing Contact Form
   Message: This is a test message from the portfolio website.
   ```
4. Click **Send Message**
5. Check for success message
6. Check your email inbox

## 🐛 Troubleshooting

### Issue: "Failed to send. Please try again."

**Check 1: Environment Variables**
```bash
# Make sure .env file exists in root directory
ls -la .env

# Check if values are correct (don't share these publicly!)
cat .env
```

**Check 2: Browser Console**
1. Open DevTools (F12)
2. Go to Console tab
3. Try sending form again
4. Look for error messages

Common errors and solutions:

| Error | Solution |
|-------|----------|
| `Invalid service ID` | Check VITE_EMAILJS_SERVICE_ID in .env |
| `Invalid template ID` | Check VITE_EMAILJS_TEMPLATE_ID in .env |
| `Invalid public key` | Check VITE_EMAILJS_PUBLIC_KEY in .env |
| `Network error` | Check internet connection |
| `Template not found` | Verify template exists in EmailJS dashboard |

**Check 3: EmailJS Service Status**
- Visit: https://status.emailjs.com/
- Make sure all services are operational

**Check 4: Email Service Connection**
1. Go to EmailJS dashboard
2. Click **Email Services**
3. Check if your service (Gmail/Outlook/etc.) is connected
4. If not connected, click **Add New Service** and follow setup

### Issue: Emails not arriving

**Check 1: Spam Folder**
- Check your spam/junk folder
- Mark EmailJS emails as "Not Spam"

**Check 2: Email Service Limits**
- Free EmailJS plan: 200 emails/month
- Check your usage in dashboard

**Check 3: Email Address**
- Verify `setumadhavani@gmail.com` is correct
- Check for typos in template configuration

## 📋 Quick Verification Checklist

Before testing, verify:

- [ ] EmailJS template configured with correct field names
- [ ] Template uses `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- [ ] Reply-To set to `{{from_email}}`
- [ ] Subject set to `Portfolio Contact: {{subject}}`
- [ ] .env file exists with all three keys
- [ ] Public key is correct (from Account page)
- [ ] Dev server restarted after .env changes
- [ ] Template tested in EmailJS dashboard first
- [ ] Email service is connected in EmailJS

## 🎉 Success Indicators

You'll know it's working when:

1. ✅ Form shows "Message sent successfully!" after submission
2. ✅ You receive email at setumadhavani@gmail.com
3. ✅ Email subject shows "Portfolio Contact: [their subject]"
4. ✅ Email shows sender's actual name
5. ✅ You can click "Reply" and it goes to sender's email
6. ✅ Message is formatted nicely with all details

## 📞 Still Having Issues?

If you've followed all steps and it's still not working:

1. **Double-check template variables**
   - Make sure you used `{{from_name}}` not `{{user_name}}`
   - Make sure you used `{{from_email}}` not `{{user_email}}`

2. **Test with EmailJS test feature first**
   - This isolates whether the issue is with template or form

3. **Check EmailJS documentation**
   - Visit: https://www.emailjs.com/docs/

4. **Contact EmailJS support**
   - Email: support@emailjs.com
   - They usually respond within 24 hours

## 🔐 Security Reminder

- ✅ `.env` is in `.gitignore` (don't commit it!)
- ✅ Never share your EmailJS keys publicly
- ✅ Use environment variables for all sensitive data

## 📝 Summary

**What changed in code:**
- Form field names updated to match EmailJS standards
- `from_name` and `from_email` instead of `user_name` and `user_email`

**What you need to configure:**
- EmailJS template with correct variable names
- Environment variables in .env file
- Test to verify everything works

**Time required:** 5-10 minutes

**Difficulty:** Easy (just copy-paste configurations)

---

**Need help?** Check the detailed guide in `emailjs-template-guide.md`
