# Shopify Theme Examples

Example Liquid files converted from your Next.js components.

## 📁 Structure

```
shopify-theme-examples/
├── sections/
│   ├── hero-slider.liquid          # From components/home/HeroSlider.tsx
│   └── product-highlights.liquid    # From components/home/ProductHighlights.tsx
└── templates/
    └── index.liquid                 # From app/page.tsx
```

## 🚀 How to Use

1. **Copy these files to your Shopify theme:**
```bash
# After creating theme with: shopify theme init
cp sections/* shopify-theme/sections/
cp templates/* shopify-theme/templates/
```

2. **Customize the sections** in Shopify Admin:
   - Go to **Online Store** → **Themes** → **Customize**
   - Add sections to your homepage
   - Configure settings

3. **Test locally:**
```bash
shopify theme dev
```

## 📝 Next Steps

1. Convert remaining components:
   - `BrandStory` → `sections/brand-story.liquid`
   - `Header` → `snippets/header.liquid`
   - `Footer` → `snippets/footer.liquid`

2. Create layout file:
   - `layout/theme.liquid` (main theme layout)

3. Add more templates:
   - `templates/product.liquid`
   - `templates/collection.liquid`
   - `templates/cart.liquid`

See `SHOPIFY_THEME_CONVERSION.md` for complete guide!
