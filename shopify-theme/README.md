# R2F Shopify Theme

Production-ready Shopify theme for R2F (Right2Fit) e-commerce store.

**For Shopify "Connect from GitHub":** This folder must be the **root** of the GitHub repo (so `layout/`, `sections/`, `templates/` are at the branch root). Do not connect a repo where the theme is in a subfolder — Shopify will show "Branch isn't a valid theme".

## 🚀 Quick Start

### Prerequisites
- Shopify CLI installed: `npm install -g @shopify/cli @shopify/theme`
- GitHub account
- Shopify store

### Setup

1. **Find your Shopify store domain:**
   
   **If your admin URL looks like:** `https://admin.shopify.com/store/smykaz-yu/`
   - Your store identifier is `smykaz-yu`
   - Your store domain is likely: `smykaz-yu.myshopify.com`
   - **OR** go to **Settings** → **Domains** to see your exact `.myshopify.com` domain
   
   **If your admin URL looks like:** `https://your-store.myshopify.com/admin`
   - Your store domain is: `your-store.myshopify.com`
   
   **To verify:** Go to **Settings** → **Domains** in Shopify admin - your `.myshopify.com` domain will be listed there.
   
   **Note:** Always use your `.myshopify.com` domain for CLI commands, even if you have a custom domain.

2. **Authenticate with Shopify:**
   ```bash
   shopify auth login
   ```
   This will prompt you to select your store if you have multiple stores.

3. **Test theme locally:**
   ```bash
   shopify theme dev --store=smykaz-yu.myshopify.com
   ```
   **For your store:** Use `smykaz-yu.myshopify.com` (or verify in Settings → Domains)

4. **Push to Shopify:**
   ```bash
   shopify theme push --store=smykaz-yu.myshopify.com
   ```
   **For your store:** Use `smykaz-yu.myshopify.com` (or verify in Settings → Domains)
   
   **Tip:** After running `shopify auth login`, you can select your store and skip the `--store` flag:
   ```bash
   shopify theme dev
   shopify theme push
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

1. **Create a new empty GitHub repository** (theme-only):
   - Go to https://github.com/new
   - Repository name: `r2f-shopify-theme`
   - Do **not** add README or .gitignore — create empty repo

2. **Push this folder as the repo root** (run from this directory):
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/r2f-shopify-theme.git
   git push -u origin main
   ```

3. **In Shopify:** Add theme → Connect from GitHub → choose **r2f-shopify-theme** and branch **main** (not the parent "Prod" repo).

### Daily Workflow

```bash
# Make changes
git add .
git commit -m "Your changes"
git push origin main
# Auto-deploys to Shopify!
```

## 📝 Sections

- **Header** - Site header with navigation
- **Footer** - Site footer with links and contact info
- **Hero Slider** - Configurable hero slider
- **Product Highlights** - Featured product display
- **Brand Story** - Brand content section

## 🎨 Customization

Edit sections in Shopify Admin:
1. Go to **Online Store** → **Themes** → **Customize**
2. Add/edit sections
3. Configure settings
4. Save

## ✅ Theme Validation

```bash
shopify theme check
```

**Status**: ✅ Valid theme (0 errors, 4 warnings - non-critical)

## 📚 Documentation

- `THEME_STRUCTURE_COMPLETE.md` - Complete structure documentation
- `PUSH_TO_GITHUB.md` - GitHub deployment guide

---

**Ready for Production** ✅
