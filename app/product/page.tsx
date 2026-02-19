"use client"

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
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductDetails } from "@/components/product/ProductDetails"
import { ProductReviews } from "@/components/product/ProductReviews"
import { SizeGuideCTA } from "@/components/shared/SizeGuideCTA"
import { ProductZoomModal } from "@/components/product/ProductZoomModal"
import { ProductDetailsSection } from "@/components/product/ProductDetailsSection"

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("Black")

  return (
    <>
      <style jsx global>{`
        :root {
          --product-accent: #b8860b;
          --product-accent-light: #d4a84b;
        }
        .page-product-menlike {
          background: #fff !important;
        }
        .page-product-menlike #main-content {
          background: #fff !important;
          min-height: 0;
          padding: 0;
        }
        .page-product-menlike .product-layout {
          display: grid;
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 0 1rem;
          background: #fff;
          min-height: calc(100vh - 100px);
          max-height: calc(100vh - 100px);
          align-items: stretch;
        }
        @media (min-width: 768px) {
          .page-product-menlike .product-layout {
            grid-template-columns: 1fr 1fr;
            padding: 0;
            gap: 1.5rem;
          }
          .product-gallery-menlike {
            position: sticky;
            top: 0.5rem;
            min-height: 0;
            max-height: calc(100vh - 120px);
          }
          .product-detail-menlike {
            overflow-y: auto;
            overflow-x: hidden;
            min-height: 0;
            -webkit-overflow-scrolling: touch;
          }
        }
        @media (max-width: 767px) {
          .page-product-menlike .product-layout {
            min-height: auto;
            max-height: none;
          }
        }
      `}</style>
      <AnnouncementStrip />
      <BackToTop />
      <NotificationContainer />
      <QuickViewModal />
      <Header />
      <main id="main-content" className="page-product page-product-menlike" role="main">
        <div className="product-layout">
          <ProductGallery selectedColor={selectedColor} onColorChange={setSelectedColor} />
          <ProductDetails selectedColor={selectedColor} onColorChange={setSelectedColor} />
        </div>
        <ProductDetailsSection />
        <SizeGuideCTA />
        <ProductReviews />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
      <SearchOverlay />
      <ProductZoomModal />
    </>
  )
}
