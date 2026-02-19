# 🎨 Converting to Shopify Theme - Complete Guide

Step-by-step guide to convert your Next.js app to a Shopify Theme (Liquid templates).

## 📋 Overview

This guide will help you convert your Next.js React application to a Shopify Theme using Liquid templating language.

**What You'll Convert:**
- React components → Liquid snippets/sections
- Next.js pages → Liquid templates
- TypeScript → Liquid + JavaScript
- Next.js routing → Shopify template system

---

## Part 1: Prerequisites

### Step 1: Install Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

### Step 2: Verify Installation

```bash
shopify version
```

### Step 3: Authenticate with Shopify

```bash
shopify auth login
```

---

## Part 2: Create Shopify Theme Structure

### Step 1: Initialize Theme

```bash
# Navigate to your project directory
cd "d:\Cycle 2\Cycle 2\Prod"

# Create theme directory
mkdir shopify-theme
cd shopify-theme

# Initialize Shopify theme
shopify theme init
```

This creates the standard Shopify theme structure:

```
shopify-theme/
├── assets/          # CSS, JS, images
├── config/          # Theme settings (settings_schema.json)
├── layout/          # Layout templates (theme.liquid)
├── locales/         # Translations
├── sections/        # Reusable sections
├── snippets/        # Reusable snippets
└── templates/       # Page templates
```

### Step 2: Copy Assets

```bash
# Copy images from public/assets to theme/assets
cp -r ../public/assets shopify-theme/assets/

# Copy CSS files
cp ../public/assets/*.css shopify-theme/assets/
```

---

## Part 3: Convert Components to Liquid

### Understanding the Conversion

**React Component Structure:**
```tsx
// components/home/HeroSlider.tsx
export function HeroSlider() {
  return <div>Content</div>
}
```

**Liquid Section Structure:**
```liquid
<!-- sections/hero-slider.liquid -->
<div class="hero-slider">
  Content
</div>
```

### Example 1: Convert HeroSlider Component

**Before (React):**
```tsx
// components/home/HeroSlider.tsx
"use client"
import { Swiper, SwiperSlide } from "swiper/react"

export function HeroSlider() {
  return (
    <section className="hero-section">
      <Swiper>
        <SwiperSlide>
          <img src="/assets/hero-index.jpg" alt="Hero" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
```

**After (Liquid):**
```liquid
<!-- sections/hero-slider.liquid -->
<section class="hero-section">
  <div class="hero-slider">
    {% for block in section.blocks %}
      <div class="hero-slide">
        <img src="{{ block.settings.image | image_url }}" alt="{{ block.settings.alt }}">
        <div class="hero-content">
          <h1>{{ block.settings.title }}</h1>
          <p>{{ block.settings.description }}</p>
          <a href="{{ block.settings.button_link }}" class="btn">{{ block.settings.button_text }}</a>
        </div>
      </div>
    {% endfor %}
  </div>
</section>

{% schema %}
{
  "name": "Hero Slider",
  "settings": [],
  "blocks": [
    {
      "type": "slide",
      "name": "Slide",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "text",
          "id": "title",
          "label": "Title"
        },
        {
          "type": "textarea",
          "id": "description",
          "label": "Description"
        },
        {
          "type": "text",
          "id": "button_text",
          "label": "Button Text"
        },
        {
          "type": "url",
          "id": "button_link",
          "label": "Button Link"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Hero Slider"
    }
  ]
}
{% endschema %}
```

### Example 2: Convert ProductHighlights Component

**Before (React):**
```tsx
// components/home/ProductHighlights.tsx
export function ProductHighlights() {
  const [selectedColor, setSelectedColor] = useState("Black")
  return (
    <section className="product-highlights">
      <h2>Most Trending Products</h2>
      {/* Product selection UI */}
    </section>
  )
}
```

**After (Liquid):**
```liquid
<!-- sections/product-highlights.liquid -->
<section class="product-highlights">
  <div class="container">
    <h2>{{ section.settings.title }}</h2>
    
    {% assign featured_product = collections[section.settings.collection].products.first %}
    
    {% if featured_product %}
      <div class="quick-buy-panel">
        <div class="product-media">
          <img src="{{ featured_product.featured_image | image_url }}" alt="{{ featured_product.title }}">
        </div>
        
        <div class="product-info">
          <h3>{{ featured_product.title }}</h3>
          <p class="price">{{ featured_product.price | money }}</p>
          
          <form action="/cart/add" method="post">
            {% for option in featured_product.options_with_values %}
              <label>{{ option.name }}</label>
              <select name="id" data-product-id="{{ featured_product.selected_or_first_available_variant.id }}">
                {% for value in option.values %}
                  <option value="{{ value }}">{{ value }}</option>
                {% endfor %}
              </select>
            {% endfor %}
            
            <button type="submit" class="btn">Add to Cart</button>
          </form>
        </div>
      </div>
    {% endif %}
  </div>
</section>

{% schema %}
{
  "name": "Product Highlights",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Title",
      "default": "Most Trending Products"
    },
    {
      "type": "collection",
      "id": "collection",
      "label": "Featured Collection"
    }
  ],
  "presets": [
    {
      "name": "Product Highlights"
    }
  ]
}
{% endschema %}
```

### Example 3: Convert Header Component

**Before (React):**
```tsx
// components/layout/Header.tsx
export function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </nav>
    </header>
  )
}
```

**After (Liquid Snippet):**
```liquid
<!-- snippets/header.liquid -->
<header class="site-header">
  <nav class="main-nav">
    <a href="/">{{ 'general.home' | t }}</a>
    <a href="/collections/all">{{ 'general.products' | t }}</a>
  </nav>
</header>
```

---

## Part 4: Convert Pages to Templates

### Homepage Conversion

**Before (Next.js):**
```tsx
// app/page.tsx
import { HeroSlider } from "@/components/home/HeroSlider"
import { ProductHighlights } from "@/components/home/ProductHighlights"

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ProductHighlights />
    </>
  )
}
```

**After (Liquid):**
```liquid
<!-- templates/index.liquid -->
{% section 'hero-slider' %}
{% section 'product-highlights' %}
{% section 'brand-story' %}
```

### Product Page Conversion

**Before (Next.js):**
```tsx
// app/product/[handle]/page.tsx
export default function ProductPage({ params }) {
  return <ProductDetails handle={params.handle} />
}
```

**After (Liquid):**
```liquid
<!-- templates/product.liquid -->
{% section 'product-details' %}
```

Shopify automatically uses this template for product pages!

---

## Part 5: Convert Styles

### Step 1: Copy CSS Files

```bash
# Copy your CSS files
cp public/assets/*.css shopify-theme/assets/
```

### Step 2: Update Asset References

**Before (Next.js):**
```tsx
<img src="/assets/product/black-1.png" />
```

**After (Liquid):**
```liquid
<img src="{{ 'product/black-1.png' | asset_url }}" />
```

### Step 3: Include CSS in Theme

```liquid
<!-- layout/theme.liquid -->
<head>
  {{ 'styles.css' | asset_url | stylesheet_tag }}
</head>
```

---

## Part 6: Convert JavaScript

### Step 1: Copy JavaScript Files

```bash
cp public/assets/*.js shopify-theme/assets/
```

### Step 2: Include JavaScript

```liquid
<!-- layout/theme.liquid -->
<body>
  <!-- Content -->
  
  {{ 'script.js' | asset_url | script_tag }}
</body>
```

### Step 3: Update JavaScript for Liquid

**Before (React/Next.js):**
```javascript
// Using React state
const [selectedColor, setSelectedColor] = useState("Black")
```

**After (Liquid + Vanilla JS):**
```javascript
// Using DOM manipulation
document.querySelector('.color-select').addEventListener('change', (e) => {
  const selectedColor = e.target.value
  updateProductImage(selectedColor)
})
```

---

## Part 7: Set Up Theme Configuration

### Step 1: Create Settings Schema

```json
// config/settings_schema.json
[
  {
    "name": "Theme Settings",
    "settings": [
      {
        "type": "text",
        "id": "store_name",
        "label": "Store Name",
        "default": "R2F - Right2Fit"
      },
      {
        "type": "image_picker",
        "id": "logo",
        "label": "Logo"
      },
      {
        "type": "color",
        "id": "primary_color",
        "label": "Primary Color",
        "default": "#C9A24D"
      }
    ]
  }
]
```

### Step 2: Use Settings in Theme

```liquid
<!-- layout/theme.liquid -->
<header>
  <img src="{{ settings.logo | image_url }}" alt="{{ settings.store_name }}">
</header>
```

---

## Part 8: Deploy Theme to Shopify

### Step 1: Push Theme to Shopify

```bash
# From shopify-theme directory
shopify theme push
```

### Step 2: Preview Theme

```bash
shopify theme dev
```

This opens a preview URL where you can see your theme.

### Step 3: Publish Theme

```bash
shopify theme publish
```

Or publish from Shopify Admin:
1. Go to **Online Store** → **Themes**
2. Find your theme
3. Click **Actions** → **Publish**

---

## Part 9: Component Conversion Checklist

### Components to Convert

- [ ] `HeroSlider` → `sections/hero-slider.liquid`
- [ ] `ProductHighlights` → `sections/product-highlights.liquid`
- [ ] `BrandStory` → `sections/brand-story.liquid`
- [ ] `Header` → `snippets/header.liquid` (include in layout)
- [ ] `Footer` → `snippets/footer.liquid` (include in layout)
- [ ] `CartDrawer` → `snippets/cart-drawer.liquid`
- [ ] `ProductDetails` → `sections/product-details.liquid`
- [ ] `ProductsCollection` → `sections/products-collection.liquid`

### Pages to Convert

- [ ] `app/page.tsx` → `templates/index.liquid`
- [ ] `app/products/page.tsx` → `templates/collection.liquid`
- [ ] `app/product/[handle]/page.tsx` → `templates/product.liquid`
- [ ] `app/cart/page.tsx` → `templates/cart.liquid`
- [ ] `app/about/page.tsx` → `templates/page.about.liquid`
- [ ] `app/contact/page.tsx` → `templates/page.contact.liquid`

---

## Part 10: Key Differences to Remember

### 1. Data Access

**Next.js:**
```tsx
const product = await fetchProduct(handle)
```

**Liquid:**
```liquid
{% assign product = all_products[handle] %}
```

### 2. Loops

**Next.js:**
```tsx
{products.map(product => <ProductCard key={product.id} product={product} />)}
```

**Liquid:**
```liquid
{% for product in collection.products %}
  {% render 'product-card', product: product %}
{% endfor %}
```

### 3. Conditionals

**Next.js:**
```tsx
{isAvailable && <button>Add to Cart</button>}
```

**Liquid:**
```liquid
{% if product.available %}
  <button>Add to Cart</button>
{% endif %}
```

### 4. Forms

**Next.js:**
```tsx
<form onSubmit={handleSubmit}>
  <input name="quantity" />
  <button type="submit">Add to Cart</button>
</form>
```

**Liquid:**
```liquid
<form action="/cart/add" method="post">
  <input type="hidden" name="id" value="{{ variant.id }}">
  <input type="number" name="quantity" value="1">
  <button type="submit">Add to Cart</button>
</form>
```

---

## Part 11: Testing Your Theme

### Step 1: Local Development

```bash
shopify theme dev
```

### Step 2: Test Features

- [ ] Homepage loads correctly
- [ ] Product pages work
- [ ] Add to cart works
- [ ] Checkout flow works
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] All sections editable in theme editor

### Step 3: Fix Issues

Common issues:
- Asset paths: Use `{{ 'filename.png' | asset_url }}`
- Product data: Use Shopify product objects
- Forms: Use Shopify form actions (`/cart/add`, `/cart/update`)

---

## Part 12: Resources

### Documentation
- [Shopify Theme Development](https://shopify.dev/docs/themes)
- [Liquid Documentation](https://shopify.dev/docs/api/liquid)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)

### Tools
- [Shopify Theme Inspector](https://chrome.google.com/webstore/detail/shopify-theme-inspector)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)

---

## ✅ Conversion Checklist

### Setup
- [ ] Shopify CLI installed
- [ ] Authenticated with Shopify
- [ ] Theme structure created
- [ ] Assets copied

### Components
- [ ] All React components converted to Liquid
- [ ] Sections created with schema
- [ ] Snippets created for reusable parts

### Pages
- [ ] All pages converted to templates
- [ ] Homepage working
- [ ] Product pages working
- [ ] Collection pages working

### Styling
- [ ] CSS files copied and included
- [ ] Asset references updated
- [ ] Responsive design working

### Functionality
- [ ] Cart working
- [ ] Checkout working
- [ ] Product selection working
- [ ] Forms submitting correctly

### Deployment
- [ ] Theme pushed to Shopify
- [ ] Theme previewed
- [ ] Theme published
- [ ] Site live!

---

## 🎉 Next Steps

1. ✅ Follow this guide step by step
2. ✅ Convert components one by one
3. ✅ Test each conversion
4. ✅ Deploy to Shopify
5. ✅ Go live!

---

**Need help?** Email: r2f.helpdesk@gmail.com
