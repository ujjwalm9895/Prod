# Project Structure

This document outlines the recommended folder structure for the R2F e-commerce project.

```
r2f-ecommerce/
├── app/                          # Next.js App Router
│   ├── (routes)/                # Route groups
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── contact/
│   │   │   └── page.tsx         # Contact page
│   │   ├── products/
│   │   │   ├── page.tsx         # Products listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Product detail page
│   │   ├── cart/
│   │   │   └── page.tsx         # Shopping cart
│   │   ├── checkout/
│   │   │   └── page.tsx         # Checkout page
│   │   ├── size-guide/
│   │   │   └── page.tsx         # Size guide
│   │   ├── shipping/
│   │   │   └── page.tsx         # Shipping policy
│   │   ├── returns/
│   │   │   └── page.tsx         # Returns policy
│   │   ├── privacy/
│   │   │   └── page.tsx         # Privacy policy
│   │   └── terms/
│   │       └── page.tsx         # Terms & conditions
│   ├── api/                     # API routes
│   │   ├── cart/
│   │   │   └── route.ts         # Cart API
│   │   ├── checkout/
│   │   │   └── route.ts         # Checkout API
│   │   ├── products/
│   │   │   └── route.ts         # Products API
│   │   └── webhooks/
│   │       └── route.ts         # Webhook handlers
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                  # Homepage
│   ├── loading.tsx               # Loading UI
│   ├── error.tsx                 # Error boundary
│   └── not-found.tsx             # 404 page
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (Shadcn)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Site header
│   │   ├── Footer.tsx           # Site footer
│   │   ├── AnnouncementBar.tsx  # Top announcement bar
│   │   └── MobileMenu.tsx       # Mobile navigation
│   ├── product/                 # Product components
│   │   ├── ProductCard.tsx      # Product card
│   │   ├── ProductGallery.tsx   # Image gallery
│   │   ├── ProductInfo.tsx      # Product details
│   │   ├── VariantSelector.tsx  # Color/Size selector
│   │   ├── AddToCart.tsx        # Add to cart button
│   │   └── ProductReviews.tsx   # Reviews section
│   ├── cart/                    # Cart components
│   │   ├── CartItem.tsx         # Cart item
│   │   ├── CartDrawer.tsx       # Cart sidebar
│   │   ├── CartSummary.tsx      # Cart totals
│   │   └── QuantitySelector.tsx  # Quantity controls
│   ├── checkout/                # Checkout components
│   │   ├── CheckoutForm.tsx     # Checkout form
│   │   ├── ShippingForm.tsx     # Shipping address
│   │   ├── PaymentForm.tsx      # Payment details
│   │   └── OrderSummary.tsx     # Order review
│   ├── home/                    # Homepage components
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Features.tsx         # Features section
│   │   ├── ProductShowcase.tsx  # Featured products
│   │   └── Testimonials.tsx     # Customer reviews
│   └── shared/                  # Shared components
│       ├── Loading.tsx          # Loading spinner
│       ├── ErrorBoundary.tsx    # Error handling
│       └── SEO.tsx              # SEO component
│
├── lib/                         # Utilities & helpers
│   ├── utils.ts                 # General utilities
│   ├── cn.ts                    # className utility
│   ├── api.ts                   # API client
│   ├── shopify.ts               # Shopify client (if using)
│   ├── stripe.ts                # Stripe client (if using)
│   └── email.ts                 # Email utilities
│
├── hooks/                       # Custom React hooks
│   ├── useCart.ts               # Cart management
│   ├── useProduct.ts            # Product data
│   ├── useAuth.ts               # Authentication
│   ├── useLocalStorage.ts       # Local storage
│   └── useMediaQuery.ts         # Responsive hooks
│
├── store/                       # Zustand stores
│   ├── cartStore.ts             # Cart state
│   ├── userStore.ts             # User state
│   └── uiStore.ts               # UI state (modals, etc.)
│
├── types/                       # TypeScript types
│   ├── product.ts               # Product types
│   ├── cart.ts                  # Cart types
│   ├── user.ts                  # User types
│   └── api.ts                   # API types
│
├── styles/                      # Global styles
│   ├── globals.css              # Global CSS
│   └── variables.css            # CSS variables
│
├── public/                      # Static assets
│   ├── images/                  # Images
│   │   ├── products/            # Product images
│   │   ├── logo/                # Logo files
│   │   └── hero/                # Hero images
│   ├── icons/                   # Icon files
│   └── fonts/                   # Custom fonts (if any)
│
├── View/                        # HTML previews (reference)
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   └── pages/
│       ├── about.html
│       └── ...
│
├── assets/                      # Legacy assets (to migrate)
│   ├── style.css
│   ├── script.js
│   └── ...
│
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment (gitignored)
├── .gitignore                   # Git ignore rules
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
├── README.md                    # Project documentation
└── DEPENDENCIES.md              # Dependencies guide
```

## Key Directories Explained

### `app/`
Next.js 14 App Router directory. All routes are defined here using the file system.

### `components/`
Reusable React components organized by feature/domain.

### `lib/`
Utility functions, API clients, and helper functions.

### `hooks/`
Custom React hooks for reusable logic.

### `store/`
Zustand stores for global state management.

### `types/`
TypeScript type definitions for type safety.

### `styles/`
Global CSS and CSS variables.

### `public/`
Static files served at the root URL.

## Naming Conventions

- **Components:** PascalCase (e.g., `ProductCard.tsx`)
- **Hooks:** camelCase starting with `use` (e.g., `useCart.ts`)
- **Utilities:** camelCase (e.g., `formatPrice.ts`)
- **Types:** PascalCase (e.g., `Product.ts`)
- **Files:** Match component/hook/type name

## Component Organization

1. **UI Components** (`components/ui/`): Generic, reusable components
2. **Feature Components** (`components/product/`, etc.): Domain-specific components
3. **Layout Components** (`components/layout/`): Site structure components
4. **Shared Components** (`components/shared/`): Cross-cutting components

## Best Practices

1. **Co-location:** Keep related files together
2. **Barrel Exports:** Use `index.ts` for clean imports
3. **Type Safety:** Use TypeScript for all components
4. **Code Splitting:** Lazy load heavy components
5. **Performance:** Optimize images, use Next.js Image component
