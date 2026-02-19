# R2F - Right2Fit E-Commerce Website

A modern, high-performance e-commerce website built with Next.js 14, React, and TypeScript.

## 🏗️ Project Structure

```
r2f-ecommerce/
├── app/                          # Next.js App Router
│   ├── (routes)/                # Route groups
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── products/            # Product pages
│   │   └── ...                  # Other pages
│   ├── api/                     # API routes
│   ├── layout.tsx               # Root layout
│   └── page.tsx                  # Homepage
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (Shadcn)
│   ├── layout/                  # Layout components (Header, Footer)
│   ├── product/                 # Product-related components
│   ├── cart/                    # Cart components
│   ├── checkout/                # Checkout components
│   ├── home/                    # Homepage components
│   └── shared/                  # Shared components
│
├── lib/                         # Utilities & helpers
│   ├── utils/                   # Utility functions
│   └── api/                     # API clients
│
├── hooks/                       # Custom React hooks
│   ├── useCart.ts               # Cart management hook
│   └── index.ts                 # Barrel export
│
├── store/                       # Zustand stores
│   ├── cartStore.ts             # Cart state management
│   └── uiStore.ts               # UI state management
│
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
│
├── styles/                      # Global styles
│   └── globals.css              # Global CSS & Tailwind
│
└── public/                      # Static assets
    └── images/                  # Image files
```

## 📋 Naming Conventions

### Files & Folders
- **Components:** PascalCase (e.g., `ProductCard.tsx`)
- **Hooks:** camelCase starting with `use` (e.g., `useCart.ts`)
- **Utilities:** camelCase (e.g., `formatPrice.ts`)
- **Types:** PascalCase (e.g., `Product.ts`)
- **Stores:** camelCase ending with `Store` (e.g., `cartStore.ts`)
- **Folders:** lowercase with hyphens (e.g., `size-guide/`)

### Code
- **Components:** PascalCase (e.g., `export function ProductCard()`)
- **Functions:** camelCase (e.g., `function formatPrice()`)
- **Variables:** camelCase (e.g., `const productPrice`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `const MAX_QUANTITY`)
- **Types/Interfaces:** PascalCase (e.g., `interface Product`)

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open browser:**
```
http://localhost:3000
```

## 📦 Key Dependencies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🎯 Features

- ✅ Modular component architecture
- ✅ Type-safe with TypeScript
- ✅ Responsive design
- ✅ State management with Zustand
- ✅ Form handling with React Hook Form
- ✅ Animations with Framer Motion
- ✅ SEO optimized
- ✅ Performance optimized

## 📚 Documentation

- See `DEPENDENCIES.md` for detailed dependency explanations
- See `PROJECT_STRUCTURE.md` for folder organization details
- See `QUICK_START.md` for getting started guide

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
```

## 📝 Notes

- All components use TypeScript for type safety
- Components are organized by feature/domain
- Use barrel exports (`index.ts`) for clean imports
- Follow the naming conventions above
- Keep components small and focused
- Use custom hooks for reusable logic

---

**Built with ❤️ for R2F - Right2Fit**
