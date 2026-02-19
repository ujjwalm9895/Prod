# Dependencies Guide

This document explains all the dependencies used in the R2F e-commerce project.

## Core Framework

### `next` (^14.2.0)
- **Purpose:** React framework for production with server-side rendering
- **Why:** Best-in-class performance, SEO, and developer experience
- **Features:** App Router, Image Optimization, API Routes

### `react` (^18.3.0) & `react-dom` (^18.3.0)
- **Purpose:** UI library for building user interfaces
- **Why:** Industry standard, component-based architecture
- **Features:** Hooks, Server Components, Concurrent Rendering

## UI Components & Styling

### `@radix-ui/*` (Multiple packages)
- **Purpose:** Unstyled, accessible UI primitives
- **Packages:**
  - `react-accordion` - Collapsible content sections
  - `react-alert-dialog` - Modal dialogs
  - `react-dialog` - Dialog/Modal components
  - `react-dropdown-menu` - Dropdown menus
  - `react-popover` - Popover tooltips
  - `react-select` - Select dropdowns
  - `react-tabs` - Tab navigation
  - `react-toast` - Toast notifications
- **Why:** Accessible, unstyled, highly customizable

### `tailwindcss` (^3.4.1)
- **Purpose:** Utility-first CSS framework
- **Why:** Rapid UI development, small bundle size, highly customizable
- **Features:** Responsive design, dark mode, custom theme

### `tailwindcss-animate` (^1.0.7)
- **Purpose:** Animation utilities for Tailwind
- **Why:** Smooth animations without custom CSS

### `class-variance-authority` (^0.7.0)
- **Purpose:** Build variant-based components
- **Why:** Type-safe component variants

### `clsx` (^2.1.0) & `tailwind-merge` (^2.3.0)
- **Purpose:** Conditional className utilities
- **Why:** Clean conditional styling

## Animations

### `framer-motion` (^11.0.0)
- **Purpose:** Production-ready motion library
- **Why:** Smooth animations, gesture support, layout animations
- **Use Cases:** Page transitions, hover effects, scroll animations

### `aos` (^2.3.4)
- **Purpose:** Animate On Scroll library
- **Why:** Easy scroll-triggered animations
- **Use Cases:** Fade-in effects, slide-in animations

## State Management

### `zustand` (^4.5.0)
- **Purpose:** Lightweight state management
- **Why:** Simple API, no boilerplate, TypeScript support
- **Use Cases:** Cart state, user state, UI state

## Forms & Validation

### `react-hook-form` (^7.51.0)
- **Purpose:** Performant forms with easy validation
- **Why:** Minimal re-renders, easy API
- **Use Cases:** Contact forms, checkout forms, product filters

### `zod` (^3.23.0)
- **Purpose:** TypeScript-first schema validation
- **Why:** Type-safe validation, great DX
- **Use Cases:** Form validation, API response validation

### `@hookform/resolvers` (^3.3.4)
- **Purpose:** Connect Zod with React Hook Form
- **Why:** Seamless integration

## UI Libraries

### `swiper` (^11.1.0)
- **Purpose:** Touch slider/carousel
- **Why:** Smooth touch gestures, responsive
- **Use Cases:** Product image galleries, hero sliders, testimonials

### `lucide-react` (^0.344.0)
- **Purpose:** Beautiful icon library
- **Why:** Consistent icons, tree-shakeable, customizable

## Utilities

### `date-fns` (^3.3.0)
- **Purpose:** Date utility library
- **Why:** Lightweight, modular, immutable
- **Use Cases:** Order dates, product dates, formatting

### `react-intersection-observer` (^9.5.3)
- **Purpose:** Observe element visibility
- **Why:** Performance optimization, lazy loading
- **Use Cases:** Infinite scroll, lazy load images, animations

### `sharp` (^0.33.0)
- **Purpose:** High-performance image processing
- **Why:** Fast image optimization for Next.js
- **Use Cases:** Image resizing, format conversion

## Development Dependencies

### TypeScript (`typescript`, `@types/*`)
- **Purpose:** Type safety and better DX
- **Why:** Catch errors early, better IDE support

### ESLint (`eslint`, `eslint-config-next`)
- **Purpose:** Code linting
- **Why:** Maintain code quality, catch bugs

### Prettier (`prettier`, `prettier-plugin-tailwindcss`)
- **Purpose:** Code formatting
- **Why:** Consistent code style

### PostCSS & Autoprefixer
- **Purpose:** CSS processing
- **Why:** Vendor prefixes, CSS transformations

## Optional Dependencies (Add as needed)

### E-Commerce Backend
```bash
npm install @shopify/hydrogen-react  # If using Shopify
# OR
npm install commerce-sdk              # If using Salesforce Commerce Cloud
```

### Payment Processing
```bash
npm install @stripe/stripe-js        # Stripe
# OR
npm install razorpay                  # Razorpay
```

### Analytics
```bash
npm install @vercel/analytics         # Vercel Analytics
npm install react-ga4                # Google Analytics
```

### Email
```bash
npm install nodemailer                # Email sending
npm install @sendgrid/mail            # SendGrid
```

### Authentication
```bash
npm install next-auth                 # NextAuth.js
# OR
npm install @clerk/nextjs            # Clerk
```

## Installation Order

1. **Core dependencies first:**
```bash
npm install next react react-dom
```

2. **UI & Styling:**
```bash
npm install tailwindcss @radix-ui/react-accordion ...
```

3. **State & Forms:**
```bash
npm install zustand react-hook-form zod
```

4. **Animations:**
```bash
npm install framer-motion aos
```

5. **Dev dependencies:**
```bash
npm install -D typescript @types/react eslint prettier
```

## Bundle Size Considerations

- **Large:** `framer-motion`, `swiper`
- **Medium:** `@radix-ui/*` packages
- **Small:** `zustand`, `clsx`, `date-fns`

Consider code-splitting for large dependencies and lazy loading components.

## Updates

To update dependencies:
```bash
npm update
# or for major updates
npm install package@latest
```

Always test after updating dependencies!
