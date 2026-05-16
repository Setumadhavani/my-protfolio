# 📧 How to Send Emails from Your Contact Form

## 🎯 Simple 3-Step Process

---

## STEP 1: Get Your EmailJS Public Key

### What is it?
A key that allows your website to send emails through EmailJS.

### How to get it:

1. **Open your browser** and go to:
   ```
   https://dashboard.emailjs.com/admin/account
   ```

2. **Login** with your EmailJS account
   - Email: (your EmailJS email)
   - Password: (your EmailJS password)

3. **Find the Public Key section**
   - Look for a box labeled "Public Key"
   - You'll see a long string like: `xYz123AbC456DeF789`

4. **Copy the key**
   - Click the copy button OR
   - Select all and copy (Ctrl+C / Cmd+C)

5. **Open your project in VS Code**

6. **Find the `.env` file** in the root folder
   - It's already created for you
   - If you don't see it, press Ctrl+P and type `.env`

7. **Edit the file**
   - Find this line:
     ```
     VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
     ```
   - Replace `YOUR_PUBLIC_KEY_HERE` with your actual key:
     ```
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

8. **Save the file** (Ctrl+S / Cmd+S)

✅ **Step 1 Complete!**

---

## STEP 2: Configure EmailJS Template

### What is it?
A template that formats how your emails will look.

### How to configure:

1. **Go to EmailJS Templates**
   ```
   https://dashboard.emailjs.com/admin/templates
   ```

2. **Find your template**
   - Look for: `template_4z4zc8a`
   - Click on it to open

3. **Click "Edit" button** (top right)

4. **Go to "Settings" tab**

5. **Fill in these fields EXACTLY:**

   | Field Name | What to Type |
   |------------|--------------|
   | Template Name | `Portfolio Contact Form` |
   | From Name | `{{from_name}}` |
   | From Email | `noreply@emailjs.com` |
   | Reply-To | `{{from_email}}` |
   | To Email | `setumadhavani@gmail.com` |
   | Subject | `Portfolio Contact: {{subject}}` |

   ⚠️ **IMPORTANT:** 
   - Type `{{from_name}}` with TWO curly braces on each side
   - Don't type just `{from_name}` with one brace
   - Copy exactly as shown above

6. **Go to "Content" tab**

7. **Delete everything** in the content box

8. **Copy this HTML code:**

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

9. **Paste it** into the Content box (Ctrl+V / Cmd+V)

10. **Click "Save" button** (top right)

11. **Wait for confirmation** - You'll see "Template saved successfully"

✅ **Step 2 Complete!**

---

## STEP 3: Test Your Email Form

### 3A: Restart Your Development Server

1. **Open Terminal** in VS Code (View → Terminal)

2. **Stop the server** if it's running:
   - Press `Ctrl+C` (Windows/Linux)
   - Press `Cmd+C` (Mac)

3. **Start the server again:**
   ```bash
   npm run dev
   ```

4. **Wait** until you see:
   ```
   Local: http://localhost:5173/
   ```

### 3B: Test in Browser

1. **Open your browser**

2. **Go to:**
   ```
   http://localhost:5173
   ```

3. **Click on "Contact"** in the navigation

4. **Fill out the form:**
   ```
   Name: Test User
   Email: test@example.com
   Subject: Testing Email
   Message: This is a test message to check if emails are working!
   ```

5. **Click "Send Message" button**

6. **Wait for success message:**
   - You should see: "Message sent successfully! I'll reply soon."
   - If you see "Failed to send", check troubleshooting below

7. **Check your email inbox:**
   - Open Gmail
   - Go to: setumadhavani@gmail.com
   - Look for new email
   - Check spam folder if not in inbox

✅ **Step 3 Complete!**

---

## 🎉 Success! Your Email Form is Working!

You should now receive emails when someone fills out your contact form.

---

## 🐛 Troubleshooting

### Problem: "Failed to send. Please try again."

**Solution 1: Check Public Key**
1. Open `.env` file
2. Make sure `VITE_EMAILJS_PUBLIC_KEY` has your actual key
3. No spaces before or after the key
4. Save file
5. Restart server: `npm run dev`

**Solution 2: Check Browser Console**
1. Press F12 to open DevTools
2. Click "Console" tab
3. Try sending form again
4. Look for red error messages
5. Common errors:
   - "Invalid public key" → Check .env file
   - "Template not found" → Check template ID
   - "Service not found" → Check service ID

**Solution 3: Verify EmailJS Service**
1. Go to: https://dashboard.emailjs.com/admin
2. Click "Email Services"
3. Make sure your service has a green checkmark
4. If not, click "Connect Service" and follow steps

### Problem: Email not arriving

**Solution 1: Check Spam Folder**
- Open Gmail
- Click "Spam" folder
- Look for email from EmailJS

**Solution 2: Check Email Address**
1. Go to EmailJS template
2. Verify "To Email" is: `setumadhavani@gmail.com`
3. No typos
4. Save template

**Solution 3: Test in EmailJS Dashboard**
1. Go to your template
2. Click "Test It" button
3. Fill in test values
4. Click "Send Test Email"
5. Check if you receive it

### Problem: Wrong sender name or email

**Solution: Check Template Variables**
1. Go to EmailJS template
2. Settings tab
3. Make sure:
   - From Name is: `{{from_name}}` (with double braces)
   - Reply-To is: `{{from_email}}` (with double braces)
4. Save template

---

## 📋 Quick Checklist

Before testing, make sure:

- [ ] Got public key from EmailJS dashboard
- [ ] Updated .env file with public key
- [ ] Saved .env file
- [ ] Configured template settings (From Name, Reply-To, Subject)
- [ ] Copied HTML template to Content tab
- [ ] Saved template in EmailJS
- [ ] Restarted dev server
- [ ] Tested form on website
- [ ] Checked email inbox (and spam folder)

---

## 🎯 What Happens When Someone Contacts You

1. **Visitor fills form** on your website
2. **Form sends data** to EmailJS
3. **EmailJS formats** the data using your template
4. **You receive email** at setumadhavani@gmail.com
5. **Email shows:**
   - Visitor's name
   - Visitor's email
   - Subject
   - Message
   - Reply button
6. **You click reply** and respond directly to visitor

---

## 💡 Tips

- **Test regularly** - Send test emails to make sure it's working
- **Check spam** - First emails might go to spam
- **Save template** - Always save after making changes
- **Restart server** - Always restart after changing .env
- **Use real email** - Use your actual email for testing

---

## 📞 Still Need Help?

If you're stuck:

1. **Check all steps again** - Make sure you didn't miss anything
2. **Read error messages** - They usually tell you what's wrong
3. **Check EmailJS status**: https://status.emailjs.com/
4. **Contact EmailJS support**: support@emailjs.com

---

## 🎉 That's It!

You now know how to send emails from your contact form!

**Total Time:** 10 minutes  
**Difficulty:** Easy  
**Result:** Working contact form that sends emails
