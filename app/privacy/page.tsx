"use client"

import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AnnouncementStrip } from "@/components/shared/AnnouncementStrip"
import { BackToTop } from "@/components/shared/BackToTop"
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat"
import { CartDrawer } from "@/components/shared/CartDrawer"
import { SearchOverlay } from "@/components/shared/SearchOverlay"
import { QuickViewModal } from "@/components/shared/QuickViewModal"
import { NotificationContainer } from "@/components/shared/NotificationContainer"

export default function PrivacyPage() {
  return (
    <>
      <AnnouncementStrip />
      <BackToTop />
      <NotificationContainer />
      <QuickViewModal />
      <Header />
      <main>
        <div className="policy-page">
          <section className="privacy-hero">
            <div className="privacy-hero-bg" aria-hidden="true"></div>
            <div className="container">
              <div className="privacy-hero-inner">
                <p className="privacy-hero-label">Privacy Policy</p>
                <h1 className="privacy-hero-title">Your privacy matters</h1>
                <p className="privacy-hero-lead">How we collect, use, and protect your data at R2F.</p>
                <p className="privacy-hero-updated">Last updated: February 2026</p>
              </div>
            </div>
          </section>

          <section className="privacy-content">
            <div className="container">
              <div className="privacy-content-inner">
                <article className="privacy-section">
                  <h2 className="privacy-section-title">What we collect</h2>
                  <ul className="privacy-list">
                    <li>Contact details: name, email, phone (when provided).</li>
                    <li>Order info: shipping/billing addresses, items purchased.</li>
                    <li>Device/usage data: pages viewed, basic analytics to improve experience.</li>
                  </ul>
                </article>
                <article className="privacy-section">
                  <h2 className="privacy-section-title">How we use it</h2>
                  <ul className="privacy-list">
                    <li>Process and deliver orders, send confirmations and updates.</li>
                    <li>Provide support and respond to inquiries.</li>
                    <li>Improve site performance and product experience.</li>
                    <li>Send offers/updates when you opt in (you can opt out anytime).</li>
                  </ul>
                </article>
                <article className="privacy-section">
                  <h2 className="privacy-section-title">Sharing</h2>
                  <ul className="privacy-list">
                    <li>We share with payment, shipping, and analytics partners as needed to fulfill services.</li>
                    <li>We don't sell your data.</li>
                  </ul>
                </article>
                <article className="privacy-section">
                  <h2 className="privacy-section-title">Security & retention</h2>
                  <ul className="privacy-list">
                    <li>Industry-standard security; Shopify-hosted checkout.</li>
                    <li>Data retained only as long as necessary for orders, legal, and accounting.</li>
                  </ul>
                </article>
                <article className="privacy-section">
                  <h2 className="privacy-section-title">Your choices</h2>
                  <ul className="privacy-list">
                    <li>Update or delete your data by contacting support.</li>
                    <li>Opt out of marketing anytime via unsubscribe link or request.</li>
                  </ul>
                </article>
                <article className="privacy-section privacy-section-contact">
                  <h2 className="privacy-section-title">Questions?</h2>
                  <p className="privacy-contact-text">Reach out for privacy requests or general support.</p>
                  <div className="privacy-contact-links">
                    <a href="mailto:r2f.helpdesk@gmail.com" className="privacy-contact-link">r2f.helpdesk@gmail.com</a>
                    <a href="https://wa.me/919462968539" target="_blank" rel="noopener noreferrer" className="privacy-contact-link">WhatsApp +91 94629 68539</a>
                  </div>
                  <Link href="/contact" className="btn btn-primary btn-sm">Contact us</Link>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
      <SearchOverlay />
    </>
  )
}
