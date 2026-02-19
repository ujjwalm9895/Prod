"use client"

import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    menu: false,
    policies: false,
    links: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <h3 className="footer-logo">R2F</h3>
              <p className="footer-tagline">Perfect Fit Perfect You</p>
              <p className="footer-description">Premium trousers engineered for Indian men who demand the perfect fit.</p>
              <p className="footer-description">Support: +91 94629 68539<br />r2f.helpdesk@gmail.com</p>
              <div className="footer-social">
                <a href="https://www.instagram.com/r2fwear/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/r2fwear" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col footer-collapsible">
              <h4 className="footer-heading footer-toggle" onClick={() => toggleSection("menu")}>
                <span>MENU</span>
                <svg className={`footer-toggle-icon ${openSections.menu ? "open" : ""}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </h4>
              <ul className={`footer-links footer-dropdown ${openSections.menu ? "open" : ""}`}>
                <li><Link href="/product">MotionFit™ Trouser</Link></li>
              </ul>
            </div>

            <div className="footer-col footer-collapsible">
              <h4 className="footer-heading footer-toggle" onClick={() => toggleSection("policies")}>
                <span>STORE POLICIES</span>
                <svg className={`footer-toggle-icon ${openSections.policies ? "open" : ""}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </h4>
              <ul className={`footer-links footer-dropdown ${openSections.policies ? "open" : ""}`}>
                <li><Link href="/size-guide">Size Guide</Link></li>
                <li><Link href="/returns">Returns & Exchange</Link></li>
                <li><Link href="/shipping">Shipping Policy</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-col footer-collapsible">
              <h4 className="footer-heading footer-toggle" onClick={() => toggleSection("links")}>
                <span>IMPORTANT LINK</span>
                <svg className={`footer-toggle-icon ${openSections.links ? "open" : ""}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </h4>
              <ul className={`footer-links footer-dropdown ${openSections.links ? "open" : ""}`}>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2026 R2F - Right2Fit. All rights reserved.</p>
            <div className="footer-payment">
              <span className="payment-text">We accept all major payment methods</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
