# 🔑 How to Get Your EmailJS Public Key

## Step-by-Step with Visual Guide

---

## Step 1: Open EmailJS Dashboard

1. **Open your web browser** (Chrome, Firefox, Safari, etc.)

2. **Copy this URL and paste in address bar:**
   ```
   https://dashboard.emailjs.com/admin/account
   ```

3. **Press Enter**

---

## Step 2: Login to EmailJS

You'll see a login page.

**Enter your credentials:**
- Email: (your EmailJS account email)
- Password: (your EmailJS password)

**Click "Sign In" button**

> 💡 **Don't have an account?**
> - Click "Sign Up" 
> - Create free account
> - Verify your email
> - Then come back to this guide

---

## Step 3: Find Your Public Key

After logging in, you'll be on the **Account** page.

**Look for a section that says "Public Key"**

It looks like this:

```
┌─────────────────────────────────────────────┐
│  Public Key                                 │
├─────────────────────────────────────────────┤
│                                             │
│  xYz123AbC456DeF789GhI012JkL345MnO678      │
│                                             │
│  [📋 Copy]                                  │
│                                             │
└─────────────────────────────────────────────┘
```

**The public key is a long string of letters and numbers**

Examples of what it might look like:
- `user_xYz123AbC456DeF789`
- `xYz123AbC456DeF789GhI012`
- `AbC123DeF456GhI789JkL012`

---

## Step 4: Copy the Public Key

**Option 1: Click the Copy Button**
- Look for a 📋 copy icon or "Copy" button
- Click it
- You'll see "Copied!" message

**Option 2: Manual Copy**
- Click inside the key box
- Select all the text (Ctrl+A / Cmd+A)
- Copy (Ctrl+C / Cmd+C)

---

## Step 5: Paste in Your .env File

1. **Go back to VS Code**

2. **Open the `.env` file**
   - It's in the root folder of your project
   - If you don't see it in the file explorer:
     - Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
     - Type `.env`
     - Press Enter

3. **Find this line:**
   ```env
   VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
   ```

4. **Replace `YOUR_PUBLIC_KEY_HERE` with your actual key**

   **Before:**
   ```env
   VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
   ```

   **After:**
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

5. **Make sure:**
   - ✅ No spaces before the key
   - ✅ No spaces after the key
   - ✅ No quotes around the key
   - ✅ Key is on the same line

6. **Save the file**
   - Press `Ctrl+S` (Windows/Linux)
   - Press `Cmd+S` (Mac)
   - Or click File → Save

---

## ✅ Done! Public Key Added

Your `.env` file should now look like this:

```env
# EmailJS Configuration
# Get your keys from https://dashboard.emailjs.com/

# Your Service ID (already configured)
VITE_EMAILJS_SERVICE_ID=your_service_id_here

# Your Template ID (already configured)
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here

# Your Public Key - UPDATED ✅
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

---

## 🎯 What's Next?

Now you need to configure your EmailJS template.

**Continue to:** `CONFIGURE-TEMPLATE.md` (I'll create this next)

Or follow **Step 2** in `HOW-TO-SEND-EMAILS.md`

---

## 🐛 Troubleshooting

### Problem: Can't find Public Key on dashboard

**Solution:**
1. Make sure you're logged in
2. Click on your profile icon (top right)
3. Click "Account" or "Integration"
4. Look for "API Keys" or "Public Key" section
5. If still not found, click "General" tab

### Problem: Public Key not working

**Solution:**
1. Make sure you copied the entire key
2. No extra spaces or characters
3. Check if key starts with `user_` or just letters/numbers
4. Try copying again from EmailJS dashboard

### Problem: .env file not found

**Solution:**
1. Make sure you're in the project root folder
2. Press `Ctrl+P` and type `.env`
3. If it doesn't exist, create it:
   - Right-click in file explorer
   - New File
   - Name it exactly: `.env` (with the dot)

---

## 📸 Visual Reference

**Where to find Public Key:**

```
EmailJS Dashboard
├── Login
├── Account Page (you are here)
│   ├── General Tab
│   ├── API Keys Section
│   │   └── Public Key: xYz123... [Copy]
│   └── Other settings
└── ...
```

**Alternative locations:**
- Account → Integration → Public Key
- Account → API Keys → Public Key
- Settings → API → Public Key

---

## 💡 Tips

- **Keep your key private** - Don't share it publicly
- **One key per account** - You only need to do this once
- **Key doesn't expire** - Unless you regenerate it
- **Save immediately** - Don't close browser before copying

---

## ✅ Verification

You'll know you did it right when:

1. ✅ `.env` file has your actual key (not YOUR_PUBLIC_KEY_HERE)
2. ✅ Key is a long string of letters/numbers
3. ✅ No spaces or quotes around the key
4. ✅ File is saved

---

## 🚀 Next Step

After adding your public key, you need to configure the EmailJS template.

**Continue to:** Step 2 in `HOW-TO-SEND-EMAILS.md`

Or I can create a separate guide for configuring the template!

---

**Need help?** Let me know and I'll guide you through it! 😊
