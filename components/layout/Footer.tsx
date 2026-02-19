"use client"

import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-primary bg-clip-text text-transparent">
              R2F
            </h3>
            <p className="text-gray-400 mb-2">Perfect Fit Perfect You</p>
            <p className="text-gray-400 text-sm mb-4">
              Premium trousers engineered for Indian men who demand the perfect fit.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/r2fwear/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/r2fwear" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">MENU</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                  MotionFit™ Trouser
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">STORE POLICIES</h4>
            <ul className="space-y-2">
              <li><Link href="/size-guide" className="text-gray-400 hover:text-white">Size Guide</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-white">Returns & Exchange</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-white">Shipping Policy</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">IMPORTANT LINKS</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2026 R2F - Right2Fit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
