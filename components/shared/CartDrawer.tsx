"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useCartStore } from "@/store/cartStore"

export function CartDrawer() {
  const { isOpen: isCartOpen, closeCart, items, getTotalPrice } = useCartStore()
  const [isHydrated, setIsHydrated] = useState(false)
  const total = getTotalPrice()

  // Wait for store hydration to prevent hydration errors
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleOverlayClick = () => {
    closeCart()
  }

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isCartOpen])

  return (
    <>
      <div className={`cart-drawer-overlay ${isCartOpen ? "active" : ""}`} id="cart-drawer-overlay" onClick={handleOverlayClick}></div>
      <div className={`cart-drawer ${isCartOpen ? "active" : ""}`} id="cart-drawer">
        <div className="cart-drawer-header">
          <h3>My Bag</h3>
          <button className="cart-drawer-close" aria-label="Close cart" onClick={closeCart}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="cart-drawer-body" data-cart-drawer-body>
          {!isHydrated ? (
            <div className="cart-drawer-empty">
              <p>Loading...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="cart-drawer-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              </svg>
              <p>Your cart is empty</p>
              <Link href="/product" className="btn btn-primary btn-block" style={{ marginTop: "1rem" }} onClick={closeCart}>
                Continue Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-drawer-item">
                <div className="cart-drawer-item-image">
                  <Image 
                    src={item.product.image || "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=240&fit=crop"} 
                    alt={item.product.title} 
                    width={200} 
                    height={240}
                  />
                </div>
                <div className="cart-drawer-item-info">
                  <p className="cart-drawer-item-title">{item.product.title}</p>
                  <p className="cart-drawer-item-meta">Size {item.variant.size} · {item.variant.color}</p>
                  <p className="cart-drawer-item-price">₹{item.variant.price.toLocaleString("en-IN")}</p>
                </div>
                <span className="cart-drawer-item-qty">{item.quantity}</span>
              </div>
            ))
          )}
        </div>
        {isHydrated && items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-drawer-subtotal">
              <span>Subtotal</span>
              <strong data-cart-drawer-subtotal>₹{total.toLocaleString("en-IN")}</strong>
            </div>
            <Link href="/cart" className="btn btn-secondary btn-block" onClick={closeCart}>View Cart</Link>
            <Link href="#" className="btn btn-primary btn-block" onClick={closeCart}>Checkout</Link>
          </div>
        )}
      </div>
    </>
  )
}
