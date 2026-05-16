# 📧 EmailJS Template - Copy & Paste Configuration

## 🚨 IMPORTANT: Follow These Steps Exactly

### Step 1: Get Your Public Key (1 minute)

1. Go to: https://dashboard.emailjs.com/admin/account
2. Login to your EmailJS account
3. Find the **Public Key** section
4. Copy the key (it's a long string like: `xYz123AbC456...`)
5. Open the `.env` file in your project root
6. Replace `YOUR_PUBLIC_KEY_HERE` with your actual key
7. Save the file

**Your .env should look like:**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

---

### Step 2: Configure EmailJS Template (3 minutes)

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Find template: `template_4z4zc8a` (or create new one)
3. Click **Edit**

---

## 📋 Template Settings (Copy These Exactly)

### Settings Tab:

| Field | Value to Copy |
|-------|---------------|
| **Template Name** | Portfolio Contact Form |
| **From Name** | `{{from_name}}` |
| **From Email** | `noreply@emailjs.com` |
| **Reply-To** | `{{from_email}}` |
| **To Email** | `setumadhavani@gmail.com` |
| **Bcc** | (leave empty) |
| **Subject** | `Portfolio Contact: {{subject}}` |

⚠️ **IMPORTANT:** 
- Use double curly braces: `{{variable}}`
- Don't use single braces: `{variable}`
- Copy exactly as shown above

---

## 📝 Email Content (Copy This HTML)

Click on the **Content** tab and paste this entire HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); padding: 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">
                                📬 New Portfolio Contact
                            </h1>
                            <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px;">
                                Someone reached out via your portfolio
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            
                            <!-- From Name -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.5px;">
                                            👤 From
                                        </p>
                                        <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #7c3aed;">
                                            <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 600;">
                                                {{from_name}}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Email -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.5px;">
                                            📧 Email
                                        </p>
                                        <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
                                            <p style="margin: 0; font-size: 16px;">
                                                <a href="mailto:{{from_email}}" style="color: #2563eb; text-decoration: none; font-weight: 600;">
                                                    {{from_email}}
                                                </a>
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Subject -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.5px;">
                                            📋 Subject
                                        </p>
                                        <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #10b981;">
                                            <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 600;">
                                                {{subject}}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.5px;">
                                            💬 Message
                                        </p>
                                        <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #f59e0b;">
                                            <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Reply Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <a href="mailto:{{from_email}}?subject=Re: {{subject}}" style="display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(124, 58, 237, 0.3);">
                                            ↩️ Reply to {{from_name}}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 20px 30px; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; text-align: center; color: #6b7280; font-size: 12px; line-height: 1.5;">
                                This message was sent via your portfolio contact form<br>
                                <strong>setumadhavani.com</strong>
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

---

### Step 3: Save Template

1. Click **Save** button (top right)
2. Wait for "Template saved successfully" message

---

### Step 4: Test in EmailJS Dashboard

1. In template editor, click **Test It** button
2. Fill in test values:
   ```
   from_name: Test User
   from_email: test@example.com
   subject: Test Message
   message: This is a test message from EmailJS dashboard
   ```
3. Click **Send Test Email**
4. Check your inbox: `setumadhavani@gmail.com`
5. Verify email looks good

---

### Step 5: Restart Your Dev Server

```bash
# Stop current server (Ctrl+C if running)
# Then start again:
npm run dev
```

---

### Step 6: Test on Your Website

1. Open: http://localhost:5173
2. Go to Contact page
3. Fill out form:
   ```
   Name: John Doe
   Email: john@example.com
   Subject: Testing Contact Form
   Message: This is a test message from the website.
   ```
4. Click **Send Message**
5. You should see: "Message sent successfully!"
6. Check your email inbox

---

## ✅ Success Checklist

- [ ] Got Public Key from EmailJS dashboard
- [ ] Updated .env file with Public Key
- [ ] Configured EmailJS template settings
- [ ] Copied HTML email template
- [ ] Saved template in EmailJS
- [ ] Tested in EmailJS dashboard
- [ ] Received test email
- [ ] Restarted dev server
- [ ] Tested on website
- [ ] Received email from website

---

## 🐛 If It's Still Not Working

### Error: "Failed to send. Please try again."

**Check 1:** Open browser console (F12)
- Look for error message
- Common issues:
  - `Invalid public key` → Check .env file
  - `Template not found` → Check template ID
  - `Service not found` → Check service ID

**Check 2:** Verify .env file
```bash
# Make sure file exists and has correct values
cat .env
```

**Check 3:** Restart dev server
```bash
# Always restart after changing .env
npm run dev
```

**Check 4:** Check EmailJS service
- Go to: https://dashboard.emailjs.com/admin
- Click **Email Services**
- Make sure your service is connected (green checkmark)

---

## 📞 Still Need Help?

If you've followed all steps and it's still not working:

1. **Check EmailJS Status**: https://status.emailjs.com/
2. **EmailJS Documentation**: https://www.emailjs.com/docs/
3. **Contact EmailJS Support**: support@emailjs.com

---

## 🎉 That's It!

Once you complete these steps, your contact form will work perfectly!

**Time Required:** 5-10 minutes  
**Difficulty:** Easy (just copy-paste)  
**Result:** Professional email notifications with sender info
