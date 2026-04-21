# Security Cleanup Guide

## ✅ What I've Done

1. **Moved API keys to environment variables** - Updated `Contact.jsx` to use `import.meta.env` instead of hardcoded values
2. **Updated `.gitignore`** - Added `.env` files to prevent future commits
3. **Created `.env.example`** - Template for other developers
4. **Created `.env`** - Local environment file with your keys (not tracked by git)

## 🚨 Critical Next Steps

### 1. Remove Exposed Keys from Git History

The old keys are still in your git history. You need to:

**Option A: Using git-filter-repo (Recommended)**
```bash
# Install git-filter-repo
pip install git-filter-repo

# Remove the sensitive file from history
cd my-protfolio
git filter-repo --path src/pages/Contact.jsx --invert-paths --force
```

**Option B: Using BFG Repo-Cleaner**
```bash
# Download BFG from https://rtyley.github.io/bfg-repo-cleaner/
# Then run:
java -jar bfg.jar --delete-files Contact.jsx my-protfolio
```

**Option C: Create a fresh repository (Easiest)**
```bash
# Backup your current code
cd ..
cp -r my-protfolio my-protfolio-backup

# Remove git history
cd my-protfolio
rm -rf .git

# Initialize fresh repo
git init
git add .
git commit -m "Initial commit with secure configuration"

# Force push to GitHub (this will overwrite history)
git remote add origin https://github.com/Setumadhavani/my-protfolio.git
git push -f origin main
```

### 2. Revoke and Regenerate EmailJS Keys

Even after removing from git history, the exposed keys should be regenerated:

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Account** → **General**
3. Regenerate your **Public Key**
4. Go to **Email Services** and update your **Service ID** if possible
5. Go to **Email Templates** and create a new template (new Template ID)
6. Update your `.env` file with the new keys

### 3. Commit and Push the Secure Version

```bash
cd my-protfolio
git add .
git commit -m "fix: secure API keys using environment variables"
git push origin main
```

### 4. Close the GitHub Secret Scanning Alert

After completing steps 1-3:
1. Go to your repository on GitHub
2. Navigate to **Security** → **Secret scanning alerts**
3. Mark the alert as resolved
4. Select "Revoked" as the reason

## 📝 For Deployment (Vercel/Netlify)

Add these environment variables in your deployment platform:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### Vercel
1. Go to Project Settings → Environment Variables
2. Add each variable with its value
3. Redeploy

### Netlify
1. Go to Site Settings → Environment Variables
2. Add each variable
3. Trigger a new deploy

## 🔒 Best Practices Going Forward

1. **Never commit `.env` files** - They're now in `.gitignore`
2. **Use `.env.example`** - Share this with your team instead
3. **Rotate keys regularly** - Especially after any exposure
4. **Use different keys** - Have separate keys for development and production
5. **Review before committing** - Always check `git diff` before pushing

## ⚠️ Important Notes

- The `.env` file is local only and won't be pushed to GitHub
- Other developers will need to create their own `.env` file using `.env.example` as a template
- Your app won't work without the `.env` file in development
- Make sure to add environment variables to your hosting platform for production

## Need Help?

If you encounter any issues:
1. Check that `.env` is in the root of `my-protfolio` folder
2. Restart your dev server after creating `.env`
3. Verify environment variables are prefixed with `VITE_` (required for Vite)
