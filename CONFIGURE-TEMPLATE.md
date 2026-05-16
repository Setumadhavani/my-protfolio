# ⚙️ How to Configure EmailJS Template

## Step-by-Step Visual Guide

---

## Step 1: Open EmailJS Templates

1. **Open your web browser**

2. **Go to this URL:**
   ```
   https://dashboard.emailjs.com/admin/templates
   ```

3. **You should already be logged in**
   - If not, login with your EmailJS credentials

---

## Step 2: Find Your Template

You'll see a list of your email templates.

**Look for:** `template_4z4zc8a`

It will look something like this:

```
┌────────────────────────────────────────────┐
│  📧 My Templates                           │
├────────────────────────────────────────────┤
│                                            │
│  template_4z4zc8a                         │
│  Portfolio Contact Form                    │
│  [Edit] [Delete] [Test]                   │
│                                            │
└────────────────────────────────────────────┘
```

**Click the "Edit" button** on your template

---

## Step 3: Configure Settings Tab

You'll see the template editor with tabs at the top.

**Make sure you're on the "Settings" tab**

Now fill in these fields **EXACTLY as shown:**

### Field 1: Template Name
```
Portfolio Contact Form
```

### Field 2: From Name
```
{{from_name}}
```
⚠️ **IMPORTANT:** Type TWO curly braces `{{` then `from_name` then TWO curly braces `}}`

### Field 3: From Email
```
noreply@emailjs.com
```

### Field 4: Reply-To
```
{{from_email}}
```
⚠️ **IMPORTANT:** Type TWO curly braces `{{` then `from_email` then TWO curly braces `}}`

### Field 5: To Email
```
setumadhavani@gmail.com
```
⚠️ **IMPORTANT:** This is YOUR email where you want to receive messages

### Field 6: Bcc
```
(leave empty)
```

### Field 7: Subject
```
Portfolio Contact: {{subject}}
```
⚠️ **IMPORTANT:** Type `Portfolio Contact: ` then `{{subject}}`

---

## Step 4: Configure Content Tab

**Click on the "Content" tab** (next to Settings)

You'll see a large text box with some default content.

**Delete everything** in that box:
- Select all (Ctrl+A / Cmd+A)
- Delete (Backspace / Delete key)

Now **copy this entire HTML code:**

```html
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f3f4f6;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); padding: 30px; text-align: center;">
            <h1 style="margin: 0; color: white; font-size: 24px;">📬 New Portfolio Contact</h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
            
            <!-- From -->
            <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 5px 0; font-size: 12px; font-weight: bold; color: #7c3aed; text-transform: uppercase;">👤 From</p>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #7c3aed;">
                    <p style="margin: 0; font-size: 16px; font-weight: 600;">{{from_name}}</p>
                </div>
            </div>
            
            <!-- Email -->
            <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 5px 0; font-size: 12px; font-weight: bold; color: #7c3aed; text-transform: uppercase;">📧 Email</p>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
                    <a href="mailto:{{from_email}}" style="color: #2563eb; text-decoration: none; font-weight: 600;">{{from_email}}</a>
                </div>
            </div>
            
            <!-- Subject -->
            <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 5px 0; font-size: 12px; font-weight: bold; color: #7c3aed; text-transform: uppercase;">📋 Subject</p>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #10b981;">
                    <p style="margin: 0; font-size: 16px; font-weight: 600;">{{subject}}</p>
                </div>
            </div>
            
            <!-- Message -->
            <div style="margin-bottom: 30px;">
                <p style="margin: 0 0 5px 0; font-size: 12px; font-weight: bold; color: #7c3aed; text-transform: uppercase;">💬 Message</p>
                <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #f59e0b;">
                    <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
                </div>
            </div>
            
            <!-- Reply Button -->
            <div style="text-align: center;">
                <a href="mailto:{{from_email}}" style="display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); color: white; text-decoration: none; padding: 15px 40px; border-radius: 8px; font-weight: bold;">
                    ↩️ Reply to {{from_name}}
                </a>
            </div>
            
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
                Sent via your portfolio contact form<br>
                <strong>setumadhavani.com</strong>
            </p>
        </div>
        
    </div>
</body>
</html>
```

**Paste it** into the Content box:
- Click in the content box
- Paste (Ctrl+V / Cmd+V)

---

## Step 5: Save Template

**Click the "Save" button** (top right corner)

You should see a success message:
```
✅ Template saved successfully
```

---

## Step 6: Test Your Template (Optional but Recommended)

**Click the "Test It" button** (next to Save)

A popup will appear with test fields.

**Fill in test values:**
```
from_name: Test User
from_email: test@example.com
subject: Test Message
message: This is a test message to verify the template works!
```

**Click "Send Test Email"**

**Check your email:** setumadhavani@gmail.com
- Look in inbox
- Check spam folder if not there
- You should receive a beautifully formatted email

---

## ✅ Done! Template Configured

Your EmailJS template is now ready to send emails!

---

## 🎯 What's Next?

Now you need to test your contact form on your website.

**Continue to:** Step 3 in `HOW-TO-SEND-EMAILS.md`

Or follow these quick steps:

1. **Restart your dev server:**
   ```bash
   npm run dev
   ```

2. **Open:** http://localhost:5173

3. **Go to Contact page**

4. **Fill out form and test!**

---

## 🐛 Troubleshooting

### Problem: Can't find template_4z4zc8a

**Solution:**
1. Check if you're logged into correct account
2. Look for any template in the list
3. If no templates exist, create a new one:
   - Click "Create New Template"
   - Use the settings from Step 3 above
   - Note the new template ID
   - Update `.env` file with new template ID

### Problem: Save button is grayed out

**Solution:**
1. Make sure all required fields are filled
2. Check that From Email is valid
3. Check that To Email is valid
4. Try refreshing the page and editing again

### Problem: Test email not arriving

**Solution:**
1. Check spam folder
2. Verify To Email is correct: setumadhavani@gmail.com
3. Check EmailJS service is connected:
   - Go to Email Services
   - Make sure service has green checkmark
4. Wait a few minutes (sometimes delayed)

### Problem: Variables showing as {{from_name}} in email

**Solution:**
1. Make sure you used double curly braces: `{{variable}}`
2. Not single braces: `{variable}`
3. Check spelling: `from_name` not `fromname`
4. Save template after changes

---

## 📋 Quick Checklist

Make sure you:

- [ ] Opened EmailJS templates page
- [ ] Found template_4z4zc8a
- [ ] Clicked Edit
- [ ] Settings tab filled correctly
- [ ] From Name: {{from_name}}
- [ ] Reply-To: {{from_email}}
- [ ] To Email: setumadhavani@gmail.com
- [ ] Subject: Portfolio Contact: {{subject}}
- [ ] Content tab - pasted HTML template
- [ ] Clicked Save
- [ ] Saw success message
- [ ] (Optional) Tested and received email

---

## 💡 Important Notes

**About Variables:**
- `{{from_name}}` = Sender's name from form
- `{{from_email}}` = Sender's email from form
- `{{subject}}` = Subject from form
- `{{message}}` = Message from form

**About Email Addresses:**
- **From Email:** Can be `noreply@emailjs.com` or your verified email
- **Reply-To:** MUST be `{{from_email}}` so you can reply to sender
- **To Email:** YOUR email where you receive messages

**About Template:**
- Save after every change
- Test before using on website
- You can edit anytime
- Changes take effect immediately

---

## ✅ Verification

You'll know it's configured correctly when:

1. ✅ Template saved without errors
2. ✅ Test email received (if you tested)
3. ✅ Email shows sender's name
4. ✅ Email shows sender's email
5. ✅ Email has proper subject
6. ✅ Reply button works

---

## 🚀 Ready to Test!

Your template is configured! Now test your contact form:

1. Restart dev server: `npm run dev`
2. Open: http://localhost:5173
3. Go to Contact page
4. Fill form and submit
5. Check your email!

---

**Need help?** Let me know! 😊
