"use client"

import Link from "next/link"
import Image from "next/image"
import { useCartStore } from "@/store/cartStore"
import { useUIStore } from "@/store/uiStore"
import { useState, useEffect } from "react"
import styles from "./Header.module.css"

export function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore()
  const { getTotalItems, openCart } = useCartStore()
  const [isHydrated, setIsHydrated] = useState(false)
  const [activeTab, setActiveTab] = useState<"menu" | "categories">("menu")
  
  // Wait for store hydration to prevent hydration errors
  useEffect(() => {
    setIsHydrated(true)
  }, [])
  
  const cartItemCount = isHydrated ? getTotalItems() : 0

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header className="site-header sticky-header">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="container">
          <div className="announcement-slider" aria-live="polite">
            <div className="announcement-slide">₹200 Instant Discount on Prepaid Orders</div>
            <div className="announcement-slide">Free PAN India Shipping</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" aria-label="Open menu" onClick={toggleMobileMenu}>
              <span className="hamburger">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h10" />
                </svg>
              </span>
            </button>

            {/* Logo */}
            <div className="header-logo">
              <Link href="/" className="logo-link">
                <Image src="/assets/r2f-logo.png" alt="R2F - Right2Fit" className="logo-img" width={120} height={40} priority />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="header-nav desktop-nav">
              <ul className="nav-list">
                <li><Link href="/" className="nav-link">Home</Link></li>
                <li><Link href="/product" className="nav-link">MotionFit™</Link></li>
                <li><Link href="/about" className="nav-link">About</Link></li>
                <li><Link href="/size-guide" className="nav-link">Size Guide</Link></li>
                <li><Link href="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <button className="header-icon" aria-label="Search" onClick={() => {
                const overlay = document.getElementById("search-overlay")
                const backdrop = document.getElementById("search-overlay-backdrop")
                if (overlay && backdrop) {
                  overlay.classList.add("active")
                  backdrop.classList.add("active")
                  document.body.style.overflow = "hidden"
                }
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button className="header-icon" aria-label="Account">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM3 18a7 7 0 1 1 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button className="header-icon cart-icon" aria-label="Cart" id="cart-icon-toggle" onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                openCart()
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M1 1h3l2.68 13.39a1 1 0 0 0 1 .81h9.72a1 1 0 0 0 1-.81L20 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="cart-count" data-cart-count>{cartItemCount || 1}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-nav-header">
          <div className="mobile-nav-tabs">
            <button 
              className={`mobile-nav-tab ${activeTab === "menu" ? "active" : ""}`} 
              data-tab="menu"
              onClick={() => setActiveTab("menu")}
            >
              MENU
            </button>
            <button 
              className={`mobile-nav-tab ${activeTab === "categories" ? "active" : ""}`} 
              data-tab="categories"
              onClick={() => setActiveTab("categories")}
            >
              CATEGORIES
            </button>
          </div>
          <button className="mobile-nav-close" aria-label="Close menu" onClick={closeMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mobile-nav-content">
          {/* Menu Panel */}
          <div className={`mobile-nav-panel ${activeTab === "menu" ? "active" : ""}`} data-panel="menu">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item"><Link href="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link></li>
              <li className="mobile-nav-item"><Link href="/product" className="mobile-nav-link" onClick={closeMobileMenu}>MotionFit™</Link></li>
              <li className="mobile-nav-item"><Link href="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About Us</Link></li>
              <li className="mobile-nav-item"><Link href="/size-guide" className="mobile-nav-link" onClick={closeMobileMenu}>Size Guide</Link></li>
              <li className="mobile-nav-item"><Link href="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</Link></li>
            </ul>
          </div>

          {/* Categories Panel */}
          <div className={`mobile-nav-panel ${activeTab === "categories" ? "active" : ""}`} data-panel="categories">
            <div className="mobile-categories-grid">
              <Link href="/product" className="mobile-category-product" onClick={closeMobileMenu}>
                <div className="mobile-category-product__info">
                  <span className="mobile-category-product__title">MotionFit™ Formal Trouser</span>
                  <span className="mobile-category-product__chevron">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "active" : ""}`} onClick={closeMobileMenu}></div>
    </header>
  )
}
