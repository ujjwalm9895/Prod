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
import { ProductsCollection } from "@/components/products/ProductsCollection"

export default function ProductsPage() {
  return (
    <>
      <style jsx global>{`
        body.page-collection {
          font-family: 'Jost', sans-serif;
        }
      `}</style>
      <AnnouncementStrip />
      <BackToTop />
      <NotificationContainer />
      <QuickViewModal />
      <Header />
      <main id="main-content">
        <ProductsCollection />
        <SizeGuideCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
      <SearchOverlay />
    </>
  )
}
