"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AnnouncementStrip } from "@/components/shared/AnnouncementStrip"
import { BackToTop } from "@/components/shared/BackToTop"
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat"
import { CartDrawer } from "@/components/shared/CartDrawer"
import { SearchOverlay } from "@/components/shared/SearchOverlay"
import { QuickViewModal } from "@/components/shared/QuickViewModal"
import { NotificationContainer } from "@/components/shared/NotificationContainer"

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("built-for-indian-fits")

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <>
      <AnnouncementStrip />
      <BackToTop />
      <NotificationContainer />
      <QuickViewModal />
      <Header />
      <main>
        <div className="about-page">
          <section className="hero-section" style={{ padding: "3rem 0 2rem", background: "linear-gradient(135deg, rgba(0,0,0,0.82), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1600&auto=format&fit=crop&sat=-40') center/cover no-repeat" }}>
            <div className="container">
              <div className="hero-content" style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
                <p className="hero-subheading" style={{ fontWeight: 600, letterSpacing: "0.04em" }}>About R2F</p>
                <h1 className="hero-heading" style={{ margin: "0.5rem 0 1rem" }}>Built for the Perfect Fit</h1>
                <p className="hero-description" style={{ color: "#dcd6cc" }}>Right2Fit is on a mission to engineer wardrobe staples that move with you—premium MotionFit™ trousers tailored for Indian body types, crafted for comfort, performance, and confidence.</p>
                <div className="hero-buttons" style={{ marginTop: "1.25rem", display: "inline-flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
                  <Link href="/product" className="btn btn-primary btn-lg">Shop MotionFit</Link>
                  <Link href="/size-guide" className="btn btn-secondary btn-lg">Size Guide</Link>
                </div>
              </div>
            </div>
          </section>

          <section className="about-stats" style={{ padding: "1.5rem 0" }}>
            <div className="container">
              <div className="about-stat-grid">
                <div className="about-stat-card">
                  <p className="about-stat-label">Perfect Fit</p>
                  <p className="about-stat-value">2-Way Stretch</p>
                  <p className="about-stat-note">Moves with you, never restricts.</p>
                </div>
                <div className="about-stat-card">
                  <p className="about-stat-label">Comfort</p>
                  <p className="about-stat-value">Breathable & Soft</p>
                  <p className="about-stat-note">Sweat-resistant interior feel.</p>
                </div>
                <div className="about-stat-card">
                  <p className="about-stat-label">Care</p>
                  <p className="about-stat-value">Wrinkle-Resistant</p>
                  <p className="about-stat-note">Wash, hang, go. Minimal fuss.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="brand-story" style={{ padding: "2.5rem 0" }}>
            <div className="container">
              <div className="brand-story-grid">
                <div className="brand-story-content">
                  <p className="brand-story-subheading">Our Story</p>
                  <h2 className="brand-story-title">Why we started</h2>
                  <div className="brand-story-text">
                    <p>We couldn't find trousers that fit right, stayed sharp, and felt great all day. So we built MotionFit™—a premium stretch construction that blends tailored structure with 2-way flexibility and breathable, sweat-resistant comfort.</p>
                    <p>From office hours to flights and dinners, R2F pieces are designed to keep you confident, comfortable, and ready for whatever's next.</p>
                  </div>
                </div>
                <div className="brand-story-media">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=960&h=720&fit=crop"
                    alt="R2F Story"
                    width={960}
                    height={720}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="brand-story" style={{ padding: "2.5rem 0" }}>
            <div className="container">
              <div className="about-accordion">
                <div className="about-accordion-item">
                  <button
                    type="button"
                    className="about-accordion-toggle"
                    aria-expanded={openAccordion === "built-for-indian-fits"}
                    onClick={() => toggleAccordion("built-for-indian-fits")}
                  >
                    <span>Built for Indian fits</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="about-accordion-panel" hidden={openAccordion !== "built-for-indian-fits"}>
                    <p>Waist-to-hip ratios and thigh room tuned for Indian body types, so you get a clean drape without tight spots.</p>
                  </div>
                </div>
                <div className="about-accordion-item">
                  <button
                    type="button"
                    className="about-accordion-toggle"
                    aria-expanded={openAccordion === "all-day-movement"}
                    onClick={() => toggleAccordion("all-day-movement")}
                  >
                    <span>All-day movement</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="about-accordion-panel" hidden={openAccordion !== "all-day-movement"}>
                    <p>2-way stretch fabric with recovery, so knees don't bag out and you can sit, sprint, or travel comfortably.</p>
                  </div>
                </div>
                <div className="about-accordion-item">
                  <button
                    type="button"
                    className="about-accordion-toggle"
                    aria-expanded={openAccordion === "low-maintenance"}
                    onClick={() => toggleAccordion("low-maintenance")}
                  >
                    <span>Low maintenance</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="about-accordion-panel" hidden={openAccordion !== "low-maintenance"}>
                    <p>Wrinkle-resistant, quick-dry fabric; toss it in the wash, hang dry, and head out looking sharp.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="brand-story" style={{ padding: "2.5rem 0" }}>
            <div className="container">
              <div className="brand-story-grid">
                <div className="brand-story-media">
                  <Image
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=960&h=720&fit=crop"
                    alt="MotionFit Craft"
                    width={960}
                    height={720}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="brand-story-content">
                  <p className="brand-story-subheading">What makes MotionFit™ different</p>
                  <h2 className="brand-story-title">Engineered for movement</h2>
                  <div className="brand-story-text">
                    <ul>
                      <li><strong>2-way stretch</strong> for easy movement.</li>
                      <li><strong>Wrinkle-resistant & quick-dry</strong> to stay sharp from desk to dinner.</li>
                      <li><strong>Breathable & sweat-resistant</strong> for all-day comfort in Indian climates.</li>
                      <li><strong>Tailored slim fit</strong> that flatters without feeling tight.</li>
                      <li><strong>Durable build</strong> that keeps its shape, wash after wash.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="brand-story" style={{ padding: "2.5rem 0" }}>
            <div className="container">
              <div className="brand-story-grid">
                <div className="brand-story-content">
                  <p className="brand-story-subheading">Our promise</p>
                  <h2 className="brand-story-title">Comfort, confidence, consistency</h2>
                  <div className="brand-story-text">
                    <p>Every R2F piece is tested for fit, stretch recovery, and color fastness. If it doesn't meet our bar, it doesn't ship. We back every order with free & easy returns because getting the right fit should be effortless.</p>
                  </div>
                  <div className="hero-buttons" style={{ marginTop: "1rem", display: "inline-flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <Link href="/product" className="btn btn-primary btn-sm">Shop MotionFit</Link>
                    <Link href="/contact" className="btn btn-secondary btn-sm">Talk to us</Link>
                  </div>
                </div>
                <div className="brand-story-media">
                  <Image
                    src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?w=960&h=720&fit=crop"
                    alt="R2F Promise"
                    width={960}
                    height={720}
                    style={{ objectFit: "cover" }}
                  />
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
