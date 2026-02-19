# 🚀 GitHub-Only Deployment Guide

Complete guide to deploy your Shopify theme via GitHub (without using Shopify CLI).

## ✅ What's Ready

- ✅ Git initialized
- ✅ All theme files committed
- ✅ Theme structure validated
- ✅ Required files created (header, footer, index.json)

## 📋 Step-by-Step: GitHub Deployment

### Step 1: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `r2f-shopify-theme`
3. Description: `R2F - Right2Fit Shopify Theme`
4. Visibility: **Public** (or Private)
5. **DO NOT** check "Initialize with README"
6. Click **"Create repository"**

### Step 2: Push Theme to GitHub

**In your terminal, navigate to theme directory:**

```bash
cd "Cycle 2/Prod/shopify-theme"
```

**Add remote and push:**

```bash
# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/r2f-shopify-theme.git

# Push to GitHub
git push -u origin main
```

### Step 3: Connect GitHub to Shopify

1. **Log in to Shopify Admin:**
   - Go to `https://YOUR_STORE.myshopify.com/admin`

2. **Navigate to Themes:**
   - Go to **Online Store** → **Themes**

3. **Connect GitHub:**
   - Click **"Add theme"** button
   - Select **"Connect from GitHub"**
   - If prompted, authorize Shopify to access your GitHub account
   - Select your repository: `r2f-shopify-theme`
   - Select branch: `main`
   - Click **"Connect theme"**

4. **Enable Auto-Deploy:**
   - After connecting, find your theme in the list
   - Click **"Actions"** → **"Edit code"**
   - Look for **"Auto-deploy from GitHub"**
   - Enable it
   - Select branch: `main`
   - Click **"Save"**

### Step 4: Verify Connection

1. Make a small test change:
```bash
# Edit any file, then:
git add .
git commit -m "Test auto-deploy"
git push origin main
```

2. Check Shopify Admin → **Online Store** → **Themes**
3. You should see the theme updating automatically!

## 🔄 Daily Workflow

### Making Changes

1. **Edit files** in `shopify-theme/` directory
2. **Commit changes:**
```bash
cd "Cycle 2/Prod/shopify-theme"
git add .
git commit -m "Description of changes"
git push origin main
```

3. **Auto-deploys to Shopify!** ✨

### Reviewing Changes

1. Go to Shopify Admin → **Online Store** → **Themes**
2. Find your theme (shows "Updating..." while deploying)
3. Click **"Actions"** → **"Preview"** to see changes
4. Click **"Actions"** → **"Publish"** when ready

## ✅ Required Files Checklist

Your theme includes all required files:

- ✅ `layout/theme.liquid` - Main layout
- ✅ `templates/index.json` - Homepage template
- ✅ `sections/header.liquid` - Header section
- ✅ `sections/footer.liquid` - Footer section
- ✅ `sections/header-group.json` - Header group
- ✅ `sections/footer-group.json` - Footer group
- ✅ `sections/hero-slider.liquid` - Hero section
- ✅ `sections/product-highlights.liquid` - Product section
- ✅ `sections/brand-story.liquid` - Brand section
- ✅ `config/settings_schema.json` - Theme settings
- ✅ `locales/en.default.json` - Translations
- ✅ `snippets/meta-tags.liquid` - Meta tags
- ✅ All assets (CSS, JS, images)

## 🐛 Troubleshooting

### "Branch is not a valid theme"

**Common causes:**
1. Missing required files (✅ Fixed - all files added)
2. Incorrect theme structure (✅ Fixed - proper structure)
3. Wrong branch selected (Use `main` branch)

**Solution:**
- Make sure you're selecting the `main` branch in Shopify
- Verify all files are pushed to GitHub
- Check that `layout/theme.liquid` exists
- Ensure `templates/index.json` exists

### "Repository not found"
- Check repository name matches exactly
- Verify you have access to the repository
- Try: `git remote set-url origin https://github.com/YOUR_USERNAME/r2f-shopify-theme.git`

### Auto-deploy not working
1. Verify auto-deploy is enabled in Shopify
2. Check branch name is `main`
3. Ensure GitHub permissions are granted
4. Check for errors in Shopify Admin

## 📁 Theme Structure (Verified)

```
shopify-theme/
├── layout/
│   └── theme.liquid          ✅ Required
├── templates/
│   └── index.json            ✅ Required (JSON format)
├── sections/
│   ├── header-group.json     ✅ Required
│   ├── footer-group.json     ✅ Required
│   ├── header.liquid         ✅ Required
│   ├── footer.liquid         ✅ Required
│   ├── hero-slider.liquid    ✅ Custom
│   ├── product-highlights.liquid ✅ Custom
│   └── brand-story.liquid    ✅ Custom
├── config/
│   └── settings_schema.json  ✅ Required
├── locales/
│   └── en.default.json       ✅ Required
├── snippets/
│   └── meta-tags.liquid      ✅ Required
└── assets/                   ✅ All assets
```

## 🎯 Quick Commands

```bash
# Navigate to theme
cd "Cycle 2/Prod/shopify-theme"

# Check status
git status

# Push changes
git add .
git commit -m "Your changes"
git push origin main
```

## ✅ Pre-Deployment Checklist

- [x] Git initialized
- [x] All files committed
- [x] Theme structure valid
- [x] Required files present
- [x] Branch is `main`
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Shopify connected to GitHub
- [ ] Auto-deploy enabled
- [ ] Test deployment successful

---

## 🚀 Ready to Deploy!

Your theme is now properly structured and ready for GitHub deployment. Follow the steps above to push to GitHub and connect to Shopify!

**Next:** Create GitHub repository and push your code! 🎉
