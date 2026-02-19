# 📦 GitHub Setup for Shopify Theme Deployment

Complete guide to set up GitHub repository and connect it to Shopify for automatic theme deployment.

## 🎯 Overview

This guide will help you:
1. Create GitHub repository
2. Push theme code to GitHub
3. Connect GitHub to Shopify
4. Enable automatic deployments

---

## Part 1: GitHub Repository Setup

### Step 1: Initialize Git Repository

```bash
# Navigate to your theme directory
cd "d:\Cycle 2\Cycle 2\Prod\shopify-theme"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: R2F Shopify Theme"

# Rename branch to main
git branch -M main
```

### Step 2: Create GitHub Repository

**Option A: Using GitHub Website (Recommended)**

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `r2f-shopify-theme`
3. Description: `R2F - Right2Fit Shopify Theme`
4. Visibility: **Public** (or Private)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

**Option B: Using GitHub CLI**

```bash
# Install GitHub CLI if not installed
# Windows: winget install GitHub.cli
# Mac: brew install gh

# Login to GitHub
gh auth login

# Create repository
gh repo create r2f-shopify-theme --public --source=. --remote=origin --push
```

### Step 3: Connect Local Repository to GitHub

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/r2f-shopify-theme.git

# Push to GitHub
git push -u origin main
```

### Step 4: Verify Connection

```bash
# Check remote connection
git remote -v

# Should show:
# origin  https://github.com/YOUR_USERNAME/r2f-shopify-theme.git (fetch)
# origin  https://github.com/YOUR_USERNAME/r2f-shopify-theme.git (push)

# Check status
git status
```

---

## Part 2: Connect GitHub to Shopify

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

1. Make a small change to any file in your theme
2. Commit and push:
```bash
git add .
git commit -m "Test auto-deploy"
git push origin main
```

3. Check Shopify Admin → **Online Store** → **Themes**
4. You should see the theme updating automatically!

---

## Part 3: Daily Workflow

### Making Changes

1. **Edit files locally** in your `shopify-theme` directory
2. **Test locally** (optional):
```bash
shopify theme dev
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

## Part 4: GitHub Actions (Optional)

If you want more control over deployments, you can use GitHub Actions:

### Step 1: Create Workflow File

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Shopify

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Shopify CLI
        run: npm install -g @shopify/cli @shopify/theme

      - name: Deploy to Shopify
        env:
          SHOPIFY_CLI_THEME_TOKEN: ${{ secrets.SHOPIFY_CLI_THEME_TOKEN }}
          SHOPIFY_STORE: ${{ secrets.SHOPIFY_STORE }}
        run: |
          shopify theme push --store=$SHOPIFY_STORE --theme=${{ secrets.SHOPIFY_THEME_ID }}
```

### Step 2: Add GitHub Secrets

1. Go to GitHub repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Add these secrets:
   - `SHOPIFY_CLI_THEME_TOKEN` - Get from `shopify theme push --print`
   - `SHOPIFY_STORE` - Your store domain (e.g., `your-store.myshopify.com`)
   - `SHOPIFY_THEME_ID` - Your theme ID (optional, for specific theme)

---

## Troubleshooting

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

## ✅ Checklist

- [ ] Git repository initialized
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Shopify theme connected to GitHub
- [ ] Auto-deploy enabled
- [ ] Test deployment successful
- [ ] Theme preview working
- [ ] Ready for production!

---

## 📚 Additional Resources

- [Shopify Theme Development](https://shopify.dev/docs/themes)
- [GitHub Documentation](https://docs.github.com)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)

---

**Next Steps:** See **[SHOPIFY_THEME_CONVERSION.md](./SHOPIFY_THEME_CONVERSION.md)** to convert your components to Liquid templates!
