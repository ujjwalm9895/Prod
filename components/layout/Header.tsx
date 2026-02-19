"use client"

import Link from "next/link"
import { useCartStore } from "@/store/cartStore"
import { useUIStore } from "@/store/uiStore"
import { Menu, X, ShoppingCart, Search, User } from "lucide-react"

export function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore()
  const { getTotalItems, openCart } = useCartStore()
  const cartItemCount = getTotalItems()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-black text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>₹200 Instant Discount on Prepaid Orders | Free PAN India Shipping</p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="text-2xl font-bold text-primary">
            R2F
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-primary transition-colors">
              MotionFit™
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/size-guide" className="hover:text-primary transition-colors">
              Size Guide
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-primary transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-primary transition-colors" aria-label="Account">
              <User size={20} />
            </button>
            <button
              onClick={openCart}
              className="relative p-2 hover:text-primary transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" onClick={closeMobileMenu} className="py-2 hover:text-primary">
              Home
            </Link>
            <Link href="/products" onClick={closeMobileMenu} className="py-2 hover:text-primary">
              MotionFit™
            </Link>
            <Link href="/about" onClick={closeMobileMenu} className="py-2 hover:text-primary">
              About
            </Link>
            <Link href="/size-guide" onClick={closeMobileMenu} className="py-2 hover:text-primary">
              Size Guide
            </Link>
            <Link href="/contact" onClick={closeMobileMenu} className="py-2 hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
