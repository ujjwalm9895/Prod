import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "@/styles/globals.css"

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "R2F - Right2Fit | Premium MotionFit™ Trousers",
    template: "%s | R2F - Right2Fit",
  },
  description:
    "R2F - Right2Fit. Premium MotionFit™ trousers for Indian men. Perfect fit, 2-way stretch, free shipping.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jost.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/style.css" />
        <link rel="stylesheet" href="/assets/benefits-modern.css" />
        <link rel="stylesheet" href="/assets/size-guide-cta.css" />
        <link rel="stylesheet" href="/assets/footer-compact.css" />
        <link rel="stylesheet" href="/assets/footer-collapsible.css" />
        <link rel="stylesheet" href="/assets/mobile-menu-enhanced.css" />
        <link rel="stylesheet" href="/assets/premium-enhancements.css" />
        <link rel="stylesheet" href="/assets/collection.css" />
        <link rel="stylesheet" href="/assets/mobile.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
