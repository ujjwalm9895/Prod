# ⚡ Quick Commands - Shopify Theme

## 📍 Navigate to Theme Directory

**From `/d/Cycle 2`:**
```bash
cd "Cycle 2/Prod/shopify-theme"
```

**Or from project root:**
```bash
cd "d:\Cycle 2\Cycle 2\Prod\shopify-theme"
```

## ✅ Verify You're in the Right Place

Once in the theme directory, you should see:
```
shopify-theme/
├── assets/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
└── templates/
```

## 🚀 Theme Commands

### Check Theme (Validate)
```bash
shopify theme check
```

### Start Development Server
```bash
shopify theme dev
```
This will:
- Start local preview
- Show preview URL
- Auto-sync changes

### Push to Shopify
```bash
shopify theme push
```

### Publish Theme
```bash
shopify theme publish
```

### List Themes
```bash
shopify theme list
```

## 📦 GitHub Commands

### Initialize Git (if not done)
```bash
git init
git add .
git commit -m "R2F Shopify Theme"
git branch -M main
```

### Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/r2f-shopify-theme.git
git push -u origin main
```

## 🔍 Troubleshooting

### "No such file or directory"
- Make sure you're in the right location
- Check: `pwd` (shows current directory)
- Navigate: `cd "Cycle 2/Prod/shopify-theme"`

### "shopify: command not found"
- Install Shopify CLI: `npm install -g @shopify/cli @shopify/theme`
- Verify: `shopify version`

### Theme not found
- Theme is at: `d:\Cycle 2\Cycle 2\Prod\shopify-theme`
- Navigate there first!

---

**Quick Start:**
```bash
cd "Cycle 2/Prod/shopify-theme"
shopify theme check
shopify theme dev
```
