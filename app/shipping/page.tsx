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

export default function ShippingPage() {
  return (
    <>
      <AnnouncementStrip />
      <BackToTop />
      <NotificationContainer />
      <QuickViewModal />
      <Header />
      <main>
        <div className="policy-page">
          <section className="hero-section" style={{ padding: "2.5rem 0 1.5rem", background: "linear-gradient(135deg, rgba(0,0,0,0.82), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1506617420156-8e4536971650?w=1600&auto=format&fit=crop') center/cover no-repeat" }}>
            <div className="container">
              <div className="hero-content ship-hero">
                <p className="hero-subheading" style={{ fontWeight: 600, letterSpacing: "0.04em" }}>Shipping Policy</p>
                <h1 className="hero-heading ship-hero-heading">Fast, reliable delivery across India</h1>
                <p className="hero-description ship-hero-desc">How we ship MotionFit™ trousers and what to expect on delivery timelines and fees.</p>
              </div>
            </div>
          </section>

          <section className="brand-story shipping-content-section" style={{ padding: "2rem 0 3rem" }}>
            <div className="container">
              <div className="shipping-content-wrapper">
                <div className="shipping-grid">
                  <div className="brand-story-content shipping-content-item">
                    <h2 className="brand-story-title">Dispatch & timelines</h2>
                    <ul>
                      <li>Orders are typically dispatched within 1–2 business days.</li>
                      <li>Delivery window: 3–7 business days depending on your pincode.</li>
                      <li>You'll receive tracking details by email/SMS once shipped.</li>
                    </ul>
                  </div>

                  <div className="brand-story-content shipping-content-item">
                    <h2 className="brand-story-title">Shipping fees</h2>
                    <ul>
                      <li>Prepaid orders: Free shipping on eligible orders as per offers displayed onsite (e.g., free above ₹999; check current offer banners).</li>
                      <li>COD (where available): May include a small COD convenience fee; shown at checkout.</li>
                    </ul>
                  </div>

                  <div className="brand-story-content shipping-content-item">
                    <h2 className="brand-story-title">Serviceability</h2>
                    <ul>
                      <li>We ship across India. COD availability depends on the courier serviceability for your pincode.</li>
                      <li>If your pincode is unserviceable for COD, please choose prepaid.</li>
                    </ul>
                  </div>

                  <div className="brand-story-content shipping-content-item">
                    <h2 className="brand-story-title">Order tracking</h2>
                    <ul>
                      <li>Tracking link shared via email/SMS after dispatch.</li>
                      <li>If you don't receive tracking within 2 business days, contact us with your order number.</li>
                    </ul>
                  </div>

                  <div className="brand-story-content shipping-content-item">
                    <h2 className="brand-story-title">Delays & exceptions</h2>
                    <ul>
                      <li>Occasional delays can occur due to weather, festivals, or courier constraints.</li>
                      <li>We'll keep you updated if your shipment is delayed beyond the standard window.</li>
                    </ul>
                  </div>

                  <div className="brand-story-content shipping-content-item">
                    <h2 className="brand-story-title">Address changes</h2>
                    <ul>
                      <li>For address updates before dispatch, message us ASAP with your order number.</li>
                      <li>Once shipped, changes are subject to courier rules and may not be possible.</li>
                    </ul>
                  </div>

                  <div className="brand-story-content shipping-content-item shipping-damaged-section">
                    <h2 className="brand-story-title">Lost or damaged shipments</h2>
                    <ul>
                      <li>If a package is lost or arrives damaged, contact support within 48 hours with photos (for damage) and your order number.</li>
                      <li>We'll investigate with the courier and arrange a replacement or refund as applicable.</li>
                    </ul>
                  </div>
                </div>
                <div className="brand-story-content shipping-content-item shipping-contact">
                  <h2 className="brand-story-title">Questions?</h2>
                  <p>Need help with shipping or tracking? Reach out to our support team.</p>
                  <div className="shipping-contact-links">
                    <a href="mailto:r2f.helpdesk@gmail.com">r2f.helpdesk@gmail.com</a>
                    <a href="https://wa.me/919462968539" target="_blank" rel="noopener noreferrer">WhatsApp +91 94629 68539</a>
                  </div>
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
