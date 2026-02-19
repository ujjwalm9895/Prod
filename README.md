# R2F - Right2Fit Shopify Theme

A modern, high-performance Shopify theme built with Liquid templates for R2F - Right2Fit e-commerce store.

## 🎯 Project Overview

This is a **Shopify Theme** project that will be deployed directly to your Shopify store:
- **Framework:** Shopify Liquid Templates
- **Hosting:** Shopify (fully hosted)
- **Deployment:** GitHub → Shopify (automatic)
- **Products:** Managed in Shopify Admin

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (for Shopify CLI)
- GitHub account
- **Shopify store** (create at [shopify.com](https://www.shopify.com))
- Shopify CLI installed

### Step 1: Install Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

### Step 2: Authenticate with Shopify

```bash
shopify auth login
```

### Step 3: Initialize Theme

```bash
# Navigate to project directory
cd "d:\Cycle 2\Cycle 2\Prod"

# Create theme directory
mkdir shopify-theme
cd shopify-theme

# Initialize Shopify theme
shopify theme init
```

### Step 4: Copy Theme Files

Copy the converted Liquid files from `shopify-theme-examples/` to your theme directory.

### Step 5: Test Locally

```bash
shopify theme dev
```

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **[SHOPIFY_THEME_CONVERSION.md](./SHOPIFY_THEME_CONVERSION.md)** | Complete conversion guide (Next.js → Shopify Theme) |
| **[THEME_MIGRATION_START.md](./THEME_MIGRATION_START.md)** | Quick start guide for conversion |
| **[SHOPIFY_SETUP.md](./SHOPIFY_SETUP.md)** | Shopify store setup guide |
| **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** | GitHub deployment setup |

---

## 🚀 Deployment via GitHub

### Step 1: Set Up GitHub Repository

See **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** for complete GitHub setup instructions.

**Quick Steps:**
```bash
git init
git add .


git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/r2f-shopify-theme.git
git push -u origin main
```

### Step 2: Connect GitHub to Shopify

1. Go to Shopify Admin → **Online Store** → **Themes**
2. Click **"Add theme"** → **"Connect from GitHub"**
3. Authorize Shopify to access GitHub
4. Select repository: `r2f-shopify-theme`
5. Select branch: `main`
6. Click **"Connect theme"**

### Step 3: Enable Auto-Deploy

1. In theme settings, enable **"Auto-deploy from GitHub"**
2. Select branch: `main`
3. Save

### Step 4: Push Changes

```bash
git add .
git commit -m "Update theme"
git push origin main
```

Changes will automatically deploy to Shopify!

---

## 📁 Project Structure

```
r2f-shopify-theme/
├── assets/              # CSS, JS, images
│   └── product/        # Product images
├── config/              # Theme settings
│   └── settings_schema.json
├── layout/              # Layout templates
│   └── theme.liquid     # Main layout
├── locales/             # Translations
├── sections/            # Reusable sections
│   ├── hero-slider.liquid
│   ├── product-highlights.liquid
│   └── brand-story.liquid
├── snippets/            # Reusable snippets
│   ├── header.liquid
│   └── footer.liquid
└── templates/          # Page templates
    ├── index.liquid     # Homepage
    ├── product.liquid   # Product page
    └── collection.liquid # Collection page
```

---

## 🛠️ Development Workflow

### Local Development

```bash
# Start local development server
shopify theme dev
```

This will:
- Start a local preview server
- Sync changes to Shopify
- Show preview URL

### Making Changes

1. **Edit Liquid files** in your theme directory
2. **Changes auto-sync** to Shopify (if `shopify theme dev` is running)
3. **Preview changes** in the preview URL
4. **Commit and push** to GitHub when ready

### Deploying to Production

**Option 1: Via GitHub (Recommended)**
```bash
git add .
git commit -m "Your changes"
git push origin main
# Auto-deploys if auto-deploy is enabled
```

**Option 2: Direct Push**
```bash
shopify theme push
shopify theme publish
```

---

## 📦 Theme Sections

### Available Sections

- **Hero Slider** (`sections/hero-slider.liquid`)
  - Configurable slides with images, titles, and CTAs
  - Editable in Shopify theme editor

- **Product Highlights** (`sections/product-highlights.liquid`)
  - Featured product display
  - Color and size selection
  - Add to cart functionality

- **Brand Story** (`sections/brand-story.liquid`)
  - Brand story content
  - Image and text layout
  - Responsive grid

### Adding Sections to Pages

In Shopify Admin:
1. Go to **Online Store** → **Themes** → **Customize**
2. Click **"Add section"**
3. Select section (e.g., "Hero Slider")
4. Configure settings
5. Save

---

## 🎨 Customization

### Theme Settings

Edit `config/settings_schema.json` to add theme settings:

```json
{
  "name": "Theme Settings",
  "settings": [
    {
      "type": "text",
      "id": "store_name",
      "label": "Store Name",
      "default": "R2F - Right2Fit"
    }
  ]
}
```

### Using Settings in Theme

```liquid
{{ settings.store_name }}
```

---

## ✅ Pre-Launch Checklist

- [ ] Shopify store created
- [ ] Products added to Shopify
- [ ] Product images uploaded
- [ ] Theme files converted and tested
- [ ] GitHub repository created
- [ ] Theme connected to GitHub
- [ ] Auto-deploy enabled
- [ ] All sections working
- [ ] Mobile responsive verified
- [ ] Cart and checkout tested
- [ ] Theme published

---

## 🐛 Troubleshooting

### Theme Not Syncing

```bash
# Re-authenticate
shopify auth logout
shopify auth login

# Restart dev server
shopify theme dev
```

### GitHub Connection Issues

1. Verify GitHub repository is accessible
2. Check branch name matches (`main`)
3. Ensure auto-deploy is enabled in Shopify
4. Check GitHub permissions in Shopify

### Build Errors

1. Check Liquid syntax
2. Verify all assets exist
3. Check browser console for errors
4. Review Shopify theme inspector

---

## 📞 Support

- **Email:** r2f.helpdesk@gmail.com
- **WhatsApp:** +91 94629 68539
- **Shopify Docs:** [shopify.dev/docs/themes](https://shopify.dev/docs/themes)

---

## 🎯 Next Steps

1. ✅ Follow **[THEME_MIGRATION_START.md](./THEME_MIGRATION_START.md)** to convert components
2. ✅ Read **[SHOPIFY_THEME_CONVERSION.md](./SHOPIFY_THEME_CONVERSION.md)** for detailed conversion guide
3. ✅ Set up GitHub deployment (see **[GITHUB_SETUP.md](./GITHUB_SETUP.md)**)
4. ✅ Connect theme to Shopify
5. ✅ Test and deploy!

---

**Built with ❤️ for R2F - Right2Fit**

*Powered by Shopify Liquid Templates*
