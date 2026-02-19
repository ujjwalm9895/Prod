# 📁 Modular Folder Structure - R2F E-Commerce

## Complete Project Organization

```
r2f-ecommerce/
├── app/                              # Next.js App Router
│   ├── (routes)/                    # Route groups
│   │   ├── about/
│   │   │   └── page.tsx             # About page
│   │   ├── contact/
│   │   │   └── page.tsx             # Contact page
│   │   ├── products/
│   │   │   ├── page.tsx             # Products listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Product detail
│   │   ├── cart/
│   │   │   └── page.tsx             # Shopping cart
│   │   ├── checkout/
│   │   │   └── page.tsx             # Checkout
│   │   ├── size-guide/
│   │   │   └── page.tsx             # Size guide
│   │   ├── shipping/
│   │   │   └── page.tsx             # Shipping policy
│   │   ├── returns/
│   │   │   └── page.tsx             # Returns policy
│   │   ├── privacy/
│   │   │   └── page.tsx             # Privacy policy
│   │   └── terms/
│   │       └── page.tsx              # Terms & conditions
│   ├── api/                         # API routes
│   │   ├── cart/
│   │   │   └── route.ts             # Cart API
│   │   ├── checkout/
│   │   │   └── route.ts             # Checkout API
│   │   └── products/
│   │       └── route.ts             # Products API
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Homepage
│   ├── loading.tsx                  # Loading UI
│   ├── error.tsx                    # Error boundary
│   └── not-found.tsx                # 404 page
│
├── components/                      # React Components
│   ├── ui/                          # Reusable UI (Shadcn)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── index.ts                 # Barrel export
│   │
│   ├── layout/                      # Layout Components
│   │   ├── Header.tsx               # Site header
│   │   ├── Footer.tsx                # Site footer
│   │   ├── AnnouncementBar.tsx      # Top announcement
│   │   ├── MobileMenu.tsx            # Mobile navigation
│   │   └── index.ts                 # Barrel export
│   │
│   ├── product/                     # Product Components
│   │   ├── ProductCard.tsx          # Product card
│   │   ├── ProductGallery.tsx       # Image gallery
│   │   ├── ProductInfo.tsx          # Product details
│   │   ├── VariantSelector.tsx      # Color/Size selector
│   │   ├── AddToCart.tsx            # Add to cart button
│   │   ├── ProductReviews.tsx       # Reviews section
│   │   └── index.ts                 # Barrel export
│   │
│   ├── cart/                        # Cart Components
│   │   ├── CartItem.tsx             # Cart item
│   │   ├── CartDrawer.tsx           # Cart sidebar
│   │   ├── CartSummary.tsx          # Cart totals
│   │   ├── QuantitySelector.tsx     # Quantity controls
│   │   └── index.ts                 # Barrel export
│   │
│   ├── checkout/                    # Checkout Components
│   │   ├── CheckoutForm.tsx         # Checkout form
│   │   ├── ShippingForm.tsx         # Shipping address
│   │   ├── PaymentForm.tsx          # Payment details
│   │   ├── OrderSummary.tsx         # Order review
│   │   └── index.ts                 # Barrel export
│   │
│   ├── home/                        # Homepage Components
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── Features.tsx             # Features section
│   │   ├── ProductShowcase.tsx      # Featured products
│   │   ├── Testimonials.tsx         # Customer reviews
│   │   └── index.ts                 # Barrel export
│   │
│   └── shared/                      # Shared Components
│       ├── Loading.tsx               # Loading spinner
│       ├── ErrorBoundary.tsx        # Error handling
│       ├── SEO.tsx                  # SEO component
│       └── index.ts                 # Barrel export
│
├── lib/                             # Utilities & Helpers
│   ├── utils/                       # Utility Functions
│   │   ├── cn.ts                    # className utility
│   │   ├── formatPrice.ts           # Price formatting
│   │   ├── formatDate.ts            # Date formatting
│   │   └── index.ts                 # Barrel export
│   │
│   └── api/                         # API Clients
│       ├── shopify.ts               # Shopify client
│       ├── stripe.ts                # Stripe client
│       └── index.ts                 # Barrel export
│
├── hooks/                           # Custom React Hooks
│   ├── useCart.ts                   # Cart management
│   ├── useProduct.ts                # Product data
│   ├── useAuth.ts                   # Authentication
│   ├── useLocalStorage.ts           # Local storage
│   ├── useMediaQuery.ts             # Responsive hooks
│   └── index.ts                     # Barrel export
│
├── store/                           # Zustand Stores
│   ├── cartStore.ts                 # Cart state
│   ├── userStore.ts                 # User state
│   ├── uiStore.ts                   # UI state
│   └── index.ts                     # Barrel export
│
├── types/                           # TypeScript Types
│   ├── product.ts                   # Product types
│   ├── cart.ts                      # Cart types
│   ├── user.ts                      # User types
│   ├── api.ts                       # API types
│   └── index.ts                     # Barrel export
│
├── styles/                          # Global Styles
│   └── globals.css                  # Global CSS & Tailwind
│
├── public/                          # Static Assets
│   ├── images/                      # Images
│   │   ├── products/                # Product images
│   │   ├── logo/                    # Logo files
│   │   └── hero/                    # Hero images
│   ├── icons/                       # Icon files
│   └── fonts/                       # Custom fonts
│
├── View/                            # HTML Previews (Reference)
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   └── pages/
│       └── ...
│
└── assets/                          # Legacy Assets (to migrate)
    ├── style.css
    ├── script.js
    └── ...
```

## 📝 Naming Conventions

### Files & Folders
- **Components:** PascalCase (e.g., `ProductCard.tsx`)
- **Hooks:** camelCase starting with `use` (e.g., `useCart.ts`)
- **Utilities:** camelCase (e.g., `formatPrice.ts`)
- **Types:** PascalCase (e.g., `Product.ts`)
- **Stores:** camelCase ending with `Store` (e.g., `cartStore.ts`)
- **Folders:** lowercase with hyphens (e.g., `size-guide/`)
- **Pages:** lowercase (e.g., `page.tsx`)

### Code
- **Components:** PascalCase (e.g., `export function ProductCard()`)
- **Functions:** camelCase (e.g., `function formatPrice()`)
- **Variables:** camelCase (e.g., `const productPrice`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `const MAX_QUANTITY`)
- **Types/Interfaces:** PascalCase (e.g., `interface Product`)

## 🎯 Module Organization Principles

1. **Feature-Based:** Components organized by feature/domain
2. **Barrel Exports:** Use `index.ts` for clean imports
3. **Co-location:** Keep related files together
4. **Separation of Concerns:** Clear boundaries between layers
5. **Reusability:** Shared components in `components/shared/`

## 📦 Import Examples

```typescript
// Components
import { Header, Footer } from "@/components/layout"
import { ProductCard } from "@/components/product"

// Hooks
import { useCart } from "@/hooks"

// Utils
import { cn, formatPrice } from "@/lib/utils"

// Types
import type { Product, CartItem } from "@/types"

// Store
import { useCartStore } from "@/store/cartStore"
```

## ✅ Benefits of This Structure

1. **Scalable:** Easy to add new features
2. **Maintainable:** Clear organization
3. **Type-Safe:** TypeScript throughout
4. **Modular:** Independent modules
5. **Testable:** Easy to test components
6. **Developer-Friendly:** Intuitive navigation
