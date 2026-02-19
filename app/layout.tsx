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
      <body className="antialiased">{children}</body>
    </html>
  )
}
