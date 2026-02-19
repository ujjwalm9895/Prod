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

export default function SizeGuidePage() {
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
              <div className="hero-content size-guide-hero">
                <p className="hero-subheading" style={{ fontWeight: 600, letterSpacing: "0.04em" }}>Size Guide</p>
                <h1 className="hero-heading size-guide-hero-heading">Find Your Perfect Fit</h1>
                <p className="hero-description size-guide-hero-desc">Measure once, order confidently. Our MotionFit™ trousers are tailored for Indian body types.</p>
              </div>
            </div>
          </section>

          <section className="size-guide-content">
            <div className="container">
              <div className="size-guide-content-wrapper">
                <div className="size-guide-section">
                  <h2 className="size-guide-section-title">How to Measure</h2>
                  <div className="size-guide-instructions">
                    <h3>Measurement Guide</h3>
                    <ol>
                      <li><strong>Waist:</strong> Measure around your natural waistline (usually just above your belly button). Keep the tape snug but not tight.</li>
                      <li><strong>Hip:</strong> Measure around the fullest part of your hips, keeping the tape parallel to the floor.</li>
                      <li><strong>Thigh:</strong> Measure around the fullest part of your thigh, typically about 2-3 inches below your crotch.</li>
                      <li><strong>Length:</strong> Measure from the top of the waistband to the desired hem length (standard is 40 inches).</li>
                      <li><strong>Bottom:</strong> Measure the leg opening width at the bottom hem.</li>
                    </ol>
                    <p style={{ marginTop: "1rem", color: "#666", fontSize: "0.95rem" }}><strong>Tip:</strong> Use a flexible measuring tape and measure over light clothing. If you're between sizes, we recommend sizing up for a more comfortable fit.</p>
                  </div>
                </div>

                <div className="size-guide-section">
                  <h2 className="size-guide-section-title">Size Chart</h2>
                  <div className="size-guide-table-wrapper">
                    <table className="size-guide-table">
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>Waist (inches)</th>
                          <th>Length (inches)</th>
                          <th>Hip (inches)</th>
                          <th>Thigh (inches)</th>
                          <th>Bottom (inches)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>28</td>
                          <td>29"</td>
                          <td>40"</td>
                          <td>34"</td>
                          <td>22"</td>
                          <td>13"</td>
                        </tr>
                        <tr>
                          <td>30</td>
                          <td>31"</td>
                          <td>40"</td>
                          <td>36"</td>
                          <td>23"</td>
                          <td>14"</td>
                        </tr>
                        <tr>
                          <td>32</td>
                          <td>33"</td>
                          <td>40"</td>
                          <td>38"</td>
                          <td>24"</td>
                          <td>14½"</td>
                        </tr>
                        <tr>
                          <td>34</td>
                          <td>35"</td>
                          <td>40"</td>
                          <td>40"</td>
                          <td>25"</td>
                          <td>15"</td>
                        </tr>
                        <tr>
                          <td>36</td>
                          <td>37"</td>
                          <td>40"</td>
                          <td>42"</td>
                          <td>25½"</td>
                          <td>15¾"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="size-guide-section">
                  <h2 className="size-guide-section-title">Fit Details</h2>
                  <div className="brand-story-content">
                    <h3 className="brand-story-title">Slim Fit</h3>
                    <ul>
                      <li>Trimmer through the hips and seat</li>
                      <li>Standard leg opening</li>
                      <li>Mid-rise waistband</li>
                      <li>2-way stretch for comfort</li>
                    </ul>
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
