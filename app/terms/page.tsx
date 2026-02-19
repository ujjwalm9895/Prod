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

export default function TermsPage() {
  return (
    <>
      <AnnouncementStrip />
      <BackToTop />
      <NotificationContainer />
      <QuickViewModal />
      <Header />
      <main>
        <div className="policy-page">
          <section className="terms-hero">
            <div className="terms-hero-bg" aria-hidden="true"></div>
            <div className="container">
              <div className="terms-hero-inner">
                <p className="terms-hero-label">Terms & Conditions</p>
                <h1 className="terms-hero-title">Using Right2Fit services</h1>
                <p className="terms-hero-lead">Key terms for shopping with R2F—orders, payments, shipping, returns, and site use.</p>
                <p className="terms-hero-updated">Last updated: February 2026</p>
              </div>
            </div>
          </section>

          <section className="terms-content">
            <div className="container">
              <div className="terms-content-inner">
                <article className="terms-section">
                  <h2 className="terms-section-title">Acceptance of terms</h2>
                  <p className="terms-section-p">By accessing or purchasing from Right2Fit, you agree to these Terms & Conditions and our policies (Shipping, Exchange/Return, Privacy).</p>
                </article>

                <article className="terms-section">
                  <h2 className="terms-section-title">Products & pricing</h2>
                  <ul className="terms-list">
                    <li>We aim to keep product details accurate; minor variations (color/fit) may occur.</li>
                    <li>Prices and offers are subject to change; the price at checkout is final for that order.</li>
                  </ul>
                </article>

                <article className="terms-section">
                  <h2 className="terms-section-title">Orders & payments</h2>
                  <ul className="terms-list">
                    <li>Orders are confirmed upon successful payment (or COD acceptance where available).</li>
                    <li>We may cancel/refund orders for issues like payment failure, stock unavailability, or incorrect pricing; you'll be notified.</li>
                    <li>For COD, you may be contacted for verification; non-response can lead to cancellation.</li>
                  </ul>
                </article>

                <article className="terms-section">
                  <h2 className="terms-section-title">Shipping</h2>
                  <p className="terms-section-p">See our <Link href="/shipping">Shipping Policy</Link> for timelines, fees, and serviceability. Tracking is shared on dispatch.</p>
                </article>

                <article className="terms-section">
                  <h2 className="terms-section-title">Returns & exchanges</h2>
                  <p className="terms-section-p">See our <Link href="/returns">Exchange & Return Policy</Link> for eligibility and process.</p>
                </article>

                <article className="terms-section">
                  <h2 className="terms-section-title">Use of the site</h2>
                  <ul className="terms-list">
                    <li>Do not misuse the site, interfere with security, or attempt unauthorized access.</li>
                    <li>User-submitted content (reviews/feedback) should be lawful, respectful, and not infringe third-party rights.</li>
                  </ul>
                </article>

                <article className="terms-section">
                  <h2 className="terms-section-title">Intellectual property</h2>
                  <p className="terms-section-p">All content (text, graphics, logos, images) is owned by or licensed to Right2Fit and protected by applicable laws. Use is permitted only for personal, non-commercial shopping.</p>
                </article>

                <article className="terms-section">
                  <h2 className="terms-section-title">Limitation of liability</h2>
                  <p className="terms-section-p">To the fullest extent permitted by law, Right2Fit is not liable for indirect, incidental, or consequential damages arising from use of the site or products. For defective products, remedies are limited to repair, replacement, or refund as per policy.</p>
                </article>

                <article className="terms-section">
                  <h2 className="terms-section-title">Governing law</h2>
                  <p className="terms-section-p">These terms are governed by the laws of India. Disputes are subject to the jurisdiction of courts in India, venue as applicable to our registered office.</p>
                </article>

                <article className="terms-section">
                  <h2 className="terms-section-title">Updates</h2>
                  <p className="terms-section-p">We may update these terms periodically. Continued use of the site after updates constitutes acceptance of the revised terms.</p>
                </article>

                <article className="terms-section terms-section-contact">
                  <h2 className="terms-section-title">Questions?</h2>
                  <p className="terms-contact-text">Reach out for questions about these terms or general support.</p>
                  <div className="terms-contact-links">
                    <a href="mailto:r2f.helpdesk@gmail.com" className="terms-contact-link">r2f.helpdesk@gmail.com</a>
                    <a href="https://wa.me/919462968539" target="_blank" rel="noopener noreferrer" className="terms-contact-link">WhatsApp +91 94629 68539</a>
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
