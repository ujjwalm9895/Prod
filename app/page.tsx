"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AnnouncementStrip } from "@/components/shared/AnnouncementStrip"
import { BackToTop } from "@/components/shared/BackToTop"
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat"
import { CartDrawer } from "@/components/shared/CartDrawer"
import { SearchOverlay } from "@/components/shared/SearchOverlay"
import { QuickViewModal } from "@/components/shared/QuickViewModal"
import { NotificationContainer } from "@/components/shared/NotificationContainer"
import { PremiumLoader } from "@/components/shared/PremiumLoader"
import { HeroSlider } from "@/components/home/HeroSlider"
import { ProductHighlights } from "@/components/home/ProductHighlights"
import { BrandStory } from "@/components/home/BrandStory"

export default function HomePage() {

  return (
    <>
      <style jsx global>{`
        body.page-index {
          font-family: 'Jost', sans-serif;
        }
        /* Ensure main content is visible and flows properly */
        main#main-content {
          position: relative;
          z-index: 1;
          width: 100%;
          overflow: visible;
          min-height: auto;
        }
        /* Ensure sections flow properly */
        main#main-content > section {
          position: relative;
          display: block;
        }
        /* Ensure Product Highlights section is visible */
        section.product-highlights,
        #product-highlights-section,
        .product-highlights {
          position: relative !important;
          z-index: 10 !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          min-height: 600px !important;
          height: auto !important;
          width: 100% !important;
          overflow: visible !important;
          background: linear-gradient(135deg, #0F0F0F, #3A3A3A, #C9A24D) !important;
          padding: 0 !important;
          margin: 0 !important;
          box-sizing: border-box !important;
        }
        .product-highlights .container,
        #product-highlights-section .container {
          max-width: 1200px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          min-height: 500px !important;
        }
        .product-highlights .section-header,
        .product-highlights .quick-buy-panel {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .product-highlights .quick-buy-panel {
          display: grid !important;
        }
        /* Ensure Brand Story section is visible */
        .brand-story {
          position: relative !important;
          z-index: 1 !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          background-color: #f8f8f8 !important;
          padding: 0 !important;
          margin: 0 !important;
          min-height: 400px !important;
        }
        .brand-story-grid {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
          align-items: center !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
        }
        @media (min-width: 1024px) {
          .brand-story-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 4rem !important;
          }
        }
        .brand-story-content,
        .brand-story-media {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .brand-story-media img {
          width: 100% !important;
          height: auto !important;
          display: block !important;
        }
        .brand-story-grid {
          display: grid !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .brand-story-content,
        .brand-story-media {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .brand-story-media img {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          height: auto !important;
        }
        /* Brand Story Mobile Responsive */
        @media (max-width: 1024px) {
          .brand-story {
            padding: 3rem 0;
          }
          .brand-story-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .brand-story-content {
            order: 1;
            text-align: center;
            padding: 0 1rem;
          }
          .brand-story-media {
            order: 2;
          }
          .brand-story-subheading {
            font-size: clamp(0.8rem, 2vw, 0.875rem);
          }
          .brand-story-title {
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin-bottom: 1rem;
          }
          .brand-story-text {
            font-size: clamp(0.95rem, 2.5vw, 1rem);
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }
          .brand-story-text p {
            margin-bottom: 1rem;
          }
          .brand-story-content .btn {
            width: 100%;
            max-width: 280px;
            padding: 0.875rem 1.5rem;
            font-size: clamp(0.95rem, 2.5vw, 1rem);
            min-height: 48px;
          }
        }
        @media (max-width: 480px) {
          .brand-story {
            padding: 2rem 0;
          }
          .brand-story-content {
            padding: 0 0.75rem;
          }
          .brand-story-title {
            font-size: clamp(1.35rem, 6vw, 1.75rem);
          }
          .brand-story-text {
            font-size: clamp(0.9rem, 2.3vw, 0.95rem);
          }
        }
        /* Section Header Mobile Responsive */
        @media (max-width: 768px) {
          .section-header {
            text-align: center;
            padding: 0 1rem;
            margin-bottom: 1.5rem;
          }
          .section-title {
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin-bottom: 0.5rem;
          }
          .section-description {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
          }
        }
        /* Container Mobile Padding */
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 0 0.75rem;
          }
        }
        /* Touch-friendly buttons and links */
        @media (max-width: 768px) {
          .btn {
            min-height: 48px;
            padding: 0.875rem 1.5rem;
            font-size: clamp(0.95rem, 2.5vw, 1rem);
          }
          .btn-lg {
            padding: 1rem 2rem;
            font-size: clamp(1rem, 3vw, 1.125rem);
            min-height: 52px;
          }
          a, button {
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }
        /* Improve readability on mobile */
        @media (max-width: 768px) {
          body {
            font-size: clamp(0.95rem, 2.5vw, 1rem);
            line-height: 1.6;
          }
          p {
            margin-bottom: 1rem;
            line-height: 1.7;
          }
          h1, h2, h3, h4, h5, h6 {
            line-height: 1.3;
            margin-bottom: 0.75rem;
          }
        }
      `}</style>
      <AnnouncementStrip />
      <PremiumLoader />
      <BackToTop />
      <NotificationContainer />
      <QuickViewModal />
      <Header />
      <main id="main-content" className="page-index">
        <HeroSlider />
        <ProductHighlights />
        <BrandStory />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
      <SearchOverlay />
    </>
  )
}
