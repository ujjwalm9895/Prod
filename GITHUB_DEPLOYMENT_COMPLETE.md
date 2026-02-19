# ✅ GitHub Deployment Setup - Complete Guide

Step-by-step guide to deploy your Shopify theme via GitHub.

## 🎯 Overview

This guide will help you:
1. Initialize Git in theme directory
2. Create GitHub repository
3. Push theme to GitHub
4. Connect GitHub to Shopify
5. Enable automatic deployments

---

## Part 1: Initialize Git in Theme Directory

### Step 1: Navigate to Theme Directory

```bash
cd "Cycle 2/Prod/shopify-theme"
```

Or from project root:
```bash
cd "d:\Cycle 2\Cycle 2\Prod\shopify-theme"
```

### Step 2: Initialize Git (Already Done ✅)

Git has been initialized in the theme directory.

### Step 3: Check Status

```bash
git status
```

You should see all theme files ready to be committed.

---

## Part 2: Create Initial Commit

### Step 1: Add All Files

```bash
git add .
```

### Step 2: Create Commit

```bash
git commit -m "Initial commit: R2F Shopify Theme - Production Ready"
```

### Step 3: Rename Branch to Main

```bash
git branch -M main
```

---

## Part 3: Create GitHub Repository

### Option A: Using GitHub Website (Recommended)

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `r2f-shopify-theme`
3. Description: `R2F - Right2Fit Shopify Theme`
4. Visibility: **Public** (or Private)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

### Option B: Using GitHub CLI

```bash
gh repo create r2f-shopify-theme --public --source=. --remote=origin --push
```

---

## Part 4: Connect Local Repository to GitHub

### Step 1: Add Remote

```bash
git remote add origin https://github.com/YOUR_USERNAME/r2f-shopify-theme.git
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Push to GitHub

```bash
git push -u origin main
```

### Step 3: Verify

```bash
git remote -v
```

Should show:
```
origin  https://github.com/YOUR_USERNAME/r2f-shopify-theme.git (fetch)
origin  https://github.com/YOUR_USERNAME/r2f-shopify-theme.git (push)
```

---

## Part 5: Connect GitHub to Shopify

### Step 1: Access Shopify Admin

1. Log in to your Shopify store: `https://YOUR_STORE.myshopify.com/admin`
2. Go to **Online Store** → **Themes**

### Step 2: Connect GitHub Repository

1. Click **"Add theme"** button
2. Select **"Connect from GitHub"**
3. If prompted, authorize Shopify to access your GitHub account
4. Select your repository: `r2f-shopify-theme`
5. Select branch: `main`
6. Click **"Connect theme"**

### Step 3: Enable Auto-Deploy

1. After connecting, find your theme in the themes list
2. Click **"Actions"** → **"Edit code"** (or click the theme)
3. In theme settings, look for **"Auto-deploy from GitHub"**
4. Enable it
5. Select branch: `main`
6. Click **"Save"**

### Step 4: Test Auto-Deploy

1. Make a small change to any file:
```bash
# Edit a file, then:
git add .
git commit -m "Test auto-deploy"
git push origin main
```

2. Check Shopify Admin → **Online Store** → **Themes**
3. You should see the theme updating automatically!

---

## Part 6: Daily Workflow

### Making Changes

1. **Edit files locally** in `shopify-theme` directory
2. **Test locally** (optional):
```bash
shopify theme dev --store=your-store.myshopify.com
```

3. **Commit changes:**
```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

4. **Auto-deploys to Shopify!** (if auto-deploy is enabled)

### Reviewing Changes

1. Go to Shopify Admin → **Online Store** → **Themes**
2. Find your theme (it will show "Updating..." while deploying)
3. Click **"Actions"** → **"Preview"** to see changes
4. Click **"Actions"** → **"Publish"** when ready to go live

---

## ✅ Complete Setup Checklist

- [ ] Git initialized in theme directory
- [ ] All files committed
- [ ] GitHub repository created
- [ ] Local repository connected to GitHub
- [ ] Code pushed to GitHub
- [ ] Shopify theme connected to GitHub
- [ ] Auto-deploy enabled
- [ ] Test deployment successful
- [ ] Theme preview working
- [ ] Ready for production!

---

## 🐛 Troubleshooting

### "Repository not found"
- Check repository name and username
- Verify you have access to the repository
- Try: `git remote set-url origin https://github.com/YOUR_USERNAME/r2f-shopify-theme.git`

### "Permission denied"
- Check your GitHub credentials
- Use Personal Access Token if needed
- Configure Git credentials: `git config --global user.name "Your Name"`

### Auto-deploy not working
1. Verify auto-deploy is enabled in Shopify theme settings
2. Check branch name matches (`main`)
3. Ensure GitHub permissions are granted in Shopify
4. Check for errors in Shopify Admin → **Online Store** → **Themes**

### Theme not updating
1. Check if changes were pushed to GitHub
2. Verify branch name is correct
3. Check Shopify theme sync status
4. Try manual sync: Click **"Actions"** → **"Sync from GitHub"**

---

## 📚 Additional Resources

- [Shopify Theme Development](https://shopify.dev/docs/themes)
- [GitHub Documentation](https://docs.github.com)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)

---

## 🎉 Next Steps

1. ✅ Follow this guide step by step
2. ✅ Push your theme to GitHub
3. ✅ Connect to Shopify
4. ✅ Enable auto-deploy
5. ✅ Start making changes!

---

**Your theme is ready for GitHub deployment! 🚀**
