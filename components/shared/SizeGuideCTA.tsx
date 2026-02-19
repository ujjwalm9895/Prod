"use client"

import Link from "next/link"

export function SizeGuideCTA() {
  return (
    <section className="size-guide-cta-section">
      <div className="container">
        <div className="size-guide-cta-content">
          <div className="size-guide-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 className="size-guide-cta-heading">Need Help Finding Your Perfect Fit?</h2>
          <p className="size-guide-cta-subheading">Get the right size every time with our comprehensive size guide.</p>
          <div className="size-guide-cta-buttons">
            <Link href="/size-guide" className="size-guide-btn-primary">View Size Guide</Link>
            <a href="https://wa.me/919462968539" className="size-guide-btn-secondary" target="_blank" rel="noopener noreferrer">Chat with Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
