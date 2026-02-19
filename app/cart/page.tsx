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
import { SizeGuideCTA } from "@/components/shared/SizeGuideCTA"
import { CartContent } from "@/components/cart/CartContent"

export default function CartPage() {
  return (
    <>
      <style jsx global>{`
        body.page-cart {
          font-family: 'Jost', sans-serif;
          background: #fafafa;
        }
        .cart-page {
          padding: 2rem 0 4rem;
          min-height: 60vh;
        }
        .page-header {
          text-align: center;
          margin-bottom: 2.5rem;
          padding: 1.5rem 0;
        }
        .page-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #111;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }
        .page-subtitle {
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          color: #666;
          margin: 0;
        }
        .cart-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .cart-content {
            grid-template-columns: 1fr 380px;
            gap: 3rem;
          }
        }
      `}</style>
      <AnnouncementStrip />
      <BackToTop />
      <NotificationContainer />
      <QuickViewModal />
      <Header />
      <main id="main-content">
        <div className="cart-page">
          <div className="container">
            <div className="page-header" data-aos="fade-up">
              <h1 className="page-title">Shopping Cart</h1>
              <p className="page-subtitle" data-cart-subtitle>1 item in your cart</p>
            </div>
            <CartContent />
          </div>
        </div>
        <SizeGuideCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
      <SearchOverlay />
    </>
  )
}
