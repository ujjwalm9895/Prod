# R2F Shopify Theme

Production-ready Shopify theme for R2F - Right2Fit e-commerce store.

## 🚀 Quick Start

### Prerequisites
- Shopify CLI installed: `npm install -g @shopify/cli @shopify/theme`
- GitHub account
- Shopify store

### Setup

1. **Authenticate with Shopify:**
```bash
shopify auth login
```

2. **Test theme locally:**
```bash
shopify theme dev --store=your-store.myshopify.com
```

3. **Push to Shopify:**
```bash
shopify theme push --store=your-store.myshopify.com
```

## 📁 Theme Structure

```
shopify-theme/
├── assets/              # CSS, JS, images
├── config/             # Theme settings
├── layout/             # Layout templates
├── locales/            # Translations
├── sections/           # Reusable sections
├── snippets/           # Reusable snippets
└── templates/          # Page templates
```

## 🔄 GitHub Deployment

### Initial Setup

1. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Repository name: `r2f-shopify-theme`
   - Create repository

2. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit: R2F Shopify Theme"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/r2f-shopify-theme.git
git push -u origin main
```

3. **Connect to Shopify:**
   - Go to Shopify Admin → **Online Store** → **Themes**
   - Click **"Add theme"** → **"Connect from GitHub"**
   - Select repository: `r2f-shopify-theme`
   - Select branch: `main`
   - Enable auto-deploy

### Daily Workflow

```bash
# Make changes
git add .
git commit -m "Your changes"
git push origin main
# Auto-deploys to Shopify!
```

## 📝 Sections

- **Hero Slider** - Configurable hero slider
- **Product Highlights** - Featured product display
- **Brand Story** - Brand content section

## 🎨 Customization

Edit sections in Shopify Admin:
1. Go to **Online Store** → **Themes** → **Customize**
2. Add/edit sections
3. Configure settings
4. Save

---

**Built for R2F - Right2Fit**
