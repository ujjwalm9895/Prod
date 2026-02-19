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

export default function ReturnsPage() {
  return (
    <>
      <AnnouncementStrip />
      <BackToTop />
      <NotificationContainer />
      <QuickViewModal />
      <Header />
      <main>
        <div className="policy-page">
          <section className="hero-section" style={{ padding: "2.5rem 0 1.5rem", background: "linear-gradient(135deg, rgba(0,0,0,0.82), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&auto=format&fit=crop') center/cover no-repeat" }}>
            <div className="container">
              <div className="hero-content returns-hero">
                <p className="hero-subheading" style={{ fontWeight: 600, letterSpacing: "0.04em" }}>Exchange & Return Policy</p>
                <h1 className="hero-heading returns-hero-heading">Hassle-free exchanges & returns</h1>
                <p className="hero-description returns-hero-desc">We want you to love the fit. If it isn't right, we'll make it right.</p>
              </div>
            </div>
          </section>

          <section className="brand-story returns-content-section">
            <div className="container">
              <div className="returns-content-wrapper">
                <div className="returns-grid">
                  <div className="brand-story-content">
                    <h2 className="brand-story-title">Eligibility</h2>
                    <ul>
                      <li>Initiate within 7 days of delivery.</li>
                      <li>Unused, unwashed, with tags and original packaging.</li>
                      <li>Proof of purchase (order number/email).</li>
                    </ul>
                  </div>
                  <div className="brand-story-content">
                    <h2 className="brand-story-title">How to request</h2>
                    <ul>
                      <li>Email <a href="mailto:r2f.helpdesk@gmail.com">r2f.helpdesk@gmail.com</a> or WhatsApp <a href="https://wa.me/919462968539" target="_blank" rel="noopener noreferrer">+91 94629 68539</a>.</li>
                      <li>Share order number, item, and reason (size/fit/color/other).</li>
                      <li>We'll arrange the next steps and pickup guidance where applicable.</li>
                    </ul>
                  </div>
                  <div className="brand-story-content">
                    <h2 className="brand-story-title">Exchanges</h2>
                    <ul>
                      <li>Like-for-like exchanges on available sizes/colors.</li>
                      <li>If unavailable, we can offer an alternative or refund as applicable.</li>
                    </ul>
                  </div>
                  <div className="brand-story-content">
                    <h2 className="brand-story-title">Refunds</h2>
                    <ul>
                      <li>Processed to the original payment method after inspection.</li>
                      <li>Allow 5–7 business days after receipt at our facility.</li>
                    </ul>
                  </div>
                  <div className="brand-story-content">
                    <h2 className="brand-story-title">Shipping & pickups</h2>
                    <ul>
                      <li>Prepaid orders: return label/pickup guidance provided where serviceable.</li>
                      <li>COD: may require self-ship with a trackable service; keep the receipt.</li>
                    </ul>
                  </div>
                  <div className="brand-story-content">
                    <h2 className="brand-story-title">Non-returnable</h2>
                    <ul>
                      <li>Items not in original condition or beyond the 7-day window.</li>
                      <li>Customized/altered items.</li>
                    </ul>
                  </div>
                </div>
                <div className="brand-story-content returns-contact-section">
                  <h2 className="brand-story-title">Contact</h2>
                  <p>Email: <a href="mailto:r2f.helpdesk@gmail.com">r2f.helpdesk@gmail.com</a><br />WhatsApp: <a href="https://wa.me/919462968539" target="_blank" rel="noopener noreferrer">+91 94629 68539</a></p>
                </div>
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
