# 🚀 Quick Start Guide

Get your R2F e-commerce site up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

## Step 2: Set Up Environment Variables

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your configuration values.

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Start Building!

### Create Your First Page

1. Create `app/page.tsx` for the homepage
2. Create `app/(routes)/about/page.tsx` for the about page
3. Add components in `components/` directory

### Example Homepage (`app/page.tsx`)

```tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Add more sections */}
      </main>
      <Footer />
    </>
  )
}
```

### Example Component (`components/layout/Header.tsx`)

```tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            R2F
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/products">MotionFit™</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
```

## Next Steps

1. **Set up Shadcn/ui components:**
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
# Add more components as needed
```

2. **Create your components:**
   - Start with layout components (Header, Footer)
   - Build product components
   - Add cart functionality
   - Implement checkout

3. **Set up your backend:**
   - Choose your e-commerce backend (Shopify, custom API, etc.)
   - Configure API routes in `app/api/`
   - Set up payment processing

4. **Customize styling:**
   - Update `tailwind.config.js` for your brand colors
   - Modify `styles/globals.css` for global styles
   - Use your existing CSS from `assets/` folder as reference

## Reference Your HTML Previews

Your existing HTML files in the `View/` folder serve as design references:

- `View/index.html` → `app/page.tsx` (Homepage)
- `View/product.html` → `app/(routes)/products/[slug]/page.tsx`
- `View/cart.html` → `app/(routes)/cart/page.tsx`
- `View/pages/about.html` → `app/(routes)/about/page.tsx`
- And so on...

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Check for errors
npm run type-check       # TypeScript checking
npm run format           # Format code
```

## Need Help?

- Check `README.md` for detailed documentation
- See `DEPENDENCIES.md` for dependency explanations
- Review `PROJECT_STRUCTURE.md` for folder organization
- Check Next.js docs: https://nextjs.org/docs

## Tips

1. **Use TypeScript:** All files should be `.tsx` or `.ts`
2. **Component Structure:** Keep components small and focused
3. **Performance:** Use Next.js Image component for images
4. **SEO:** Add metadata to each page
5. **Responsive:** Mobile-first approach with Tailwind

Happy coding! 🎉
