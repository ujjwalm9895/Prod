# 🚀 Quick Start - Shopify Theme Conversion

Quick reference to start converting your Next.js app to Shopify Theme.

## Step 1: Install Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
shopify auth login
```

## Step 2: Create Theme Structure

```bash
cd "d:\Cycle 2\Cycle 2\Prod"
mkdir shopify-theme
cd shopify-theme
shopify theme init
```

## Step 3: Copy Assets

```bash
# Copy images
cp -r ../public/assets shopify-theme/assets/

# Copy CSS
cp ../public/assets/*.css shopify-theme/assets/

# Copy JS
cp ../public/assets/*.js shopify-theme/assets/
```

## Step 4: Start Converting

Follow `SHOPIFY_THEME_CONVERSION.md` for detailed conversion guide.

### Quick Conversion Examples:

**Component → Section:**
- `components/home/HeroSlider.tsx` → `sections/hero-slider.liquid`
- `components/home/ProductHighlights.tsx` → `sections/product-highlights.liquid`

**Page → Template:**
- `app/page.tsx` → `templates/index.liquid`
- `app/product/[handle]/page.tsx` → `templates/product.liquid`

## Step 5: Test Locally

```bash
shopify theme dev
```

## Step 6: Deploy

```bash
shopify theme push
shopify theme publish
```

---

## 📚 Full Guide

See `SHOPIFY_THEME_CONVERSION.md` for complete conversion instructions.

---

**Ready to start?** Begin with Step 1 above! 🎨
