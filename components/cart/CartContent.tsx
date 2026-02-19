"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useCartStore } from "@/store/cartStore"

export function CartContent() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore()
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [isHydrated, setIsHydrated] = useState(false)

  // Wait for store hydration to prevent hydration errors
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      const newSubtotal = getTotalPrice()
      setSubtotal(newSubtotal)
      setTotal(newSubtotal) // Shipping is free for orders above ₹999
    }
  }, [items, getTotalPrice, isHydrated])

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId)
    } else {
      updateQuantity(itemId, newQuantity)
    }
  }

  const handleRemove = (itemId: string) => {
    removeItem(itemId)
  }

  const itemCount = isHydrated ? items.reduce((sum, item) => sum + item.quantity, 0) : 0

  return (
    <>
      <style jsx>{`
        .cart-items {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        @media (min-width: 768px) {
          .cart-items {
            padding: 2rem;
          }
        }
        .cart-empty {
          text-align: center;
          padding: 4rem 2rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .cart-empty-icon {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem;
          color: #d1d5db;
        }
        .cart-empty h2 {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #111;
          margin: 0 0 0.75rem;
        }
        .cart-empty p {
          font-size: 1rem;
          color: #666;
          margin: 0 0 2rem;
        }
        .cart-empty .btn {
          display: inline-block;
          padding: 0.875rem 2rem;
          background: #111;
          color: #fff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .cart-empty .btn:hover {
          background: #C49A6C;
          transform: translateY(-2px);
        }
        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto auto;
          gap: 1.25rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid #f0f0f0;
          align-items: start;
        }
        .cart-item:last-child {
          border-bottom: none;
        }
        @media (max-width: 767px) {
          .cart-item {
            grid-template-columns: 80px 1fr;
            gap: 1rem;
            padding: 1.25rem 0;
          }
        }
        .cart-item-image {
          width: 100px;
          height: 120px;
          border-radius: 8px;
          overflow: hidden;
          background: #f5f5f5;
          flex-shrink: 0;
        }
        @media (max-width: 767px) {
          .cart-item-image {
            width: 80px;
            height: 100px;
          }
        }
        .cart-item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cart-item-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 0;
        }
        .cart-item-title {
          margin: 0;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          font-weight: 600;
          line-height: 1.4;
        }
        .cart-item-title a {
          color: #111;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .cart-item-title a:hover {
          color: #C49A6C;
        }
        .cart-item-variant {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
        }
        .cart-item-price {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .price-compare {
          font-size: 0.9rem;
          color: #999;
          text-decoration: line-through;
        }
        .price-current {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          font-weight: 700;
          color: #111;
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0.25rem;
          background: #fff;
        }
        .quantity-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: 600;
          color: #111;
          transition: all 0.2s ease;
          padding: 0;
        }
        .quantity-btn:hover {
          background: #f5f5f5;
          color: #C49A6C;
        }
        .quantity-input {
          width: 50px;
          height: 36px;
          text-align: center;
          border: none;
          background: transparent;
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          padding: 0;
          -moz-appearance: textfield;
        }
        .quantity-input::-webkit-outer-spin-button,
        .quantity-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .cart-item-quantity {
          display: flex;
          align-items: center;
        }
        @media (max-width: 767px) {
          .cart-item-quantity.desktop-only {
            display: none;
          }
        }
        .cart-item-actions.mobile-only {
          display: none;
        }
        @media (max-width: 767px) {
          .cart-item-actions.mobile-only {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-top: 1rem;
            grid-column: 1 / -1;
          }
        }
        .cart-item-total {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          font-weight: 700;
          color: #111;
          text-align: right;
          min-width: 100px;
        }
        @media (max-width: 767px) {
          .cart-item-total.desktop-only {
            display: none;
          }
        }
        .cart-item-remove-btn {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 767px) {
          .cart-item-remove-btn.desktop-only {
            display: none;
          }
        }
        .btn-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          cursor: pointer;
          color: #666;
          transition: all 0.2s ease;
          padding: 0;
        }
        .btn-icon:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #dc2626;
        }
        .cart-item-remove {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: #666;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cart-item-remove:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #dc2626;
        }
        .cart-summary {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          position: sticky;
          top: 100px;
          height: fit-content;
        }
        @media (max-width: 1023px) {
          .cart-summary {
            position: static;
          }
        }
        .summary-title {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 700;
          color: #111;
          margin: 0 0 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          font-size: 0.95rem;
          color: #666;
        }
        .summary-line span:last-child {
          font-weight: 600;
          color: #111;
        }
        .summary-note {
          background: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          margin: 1rem 0;
          font-size: 0.9rem;
          color: #166534;
          text-align: center;
        }
        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 0;
          margin-top: 1rem;
          border-top: 2px solid #f0f0f0;
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
        }
        .summary-total span:first-child {
          font-weight: 700;
          color: #111;
        }
        .summary-total span:last-child {
          font-size: clamp(1.5rem, 4vw, 1.75rem);
          font-weight: 700;
          color: #111;
        }
        .checkout-btn {
          width: 100%;
          margin-top: 1.5rem;
          padding: 1rem 1.5rem;
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          font-weight: 600;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: block;
          text-align: center;
          min-height: 52px;
        }
        .checkout-btn:hover {
          background: #C49A6C;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(196, 154, 108, 0.3);
        }
        .summary-offers {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f0f0f0;
        }
        .summary-offers p {
          margin: 0 0 0.75rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #111;
        }
        .summary-offers ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .summary-offers li {
          padding: 0.5rem 0;
          font-size: 0.85rem;
          color: #666;
          position: relative;
          padding-left: 1.25rem;
        }
        .summary-offers li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #C49A6C;
          font-weight: 700;
        }
        .summary-secure {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f0f0f0;
          font-size: 0.85rem;
          color: #666;
        }
        .summary-secure svg {
          color: #10b981;
        }
        .continue-shopping {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          color: #666;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }
        .continue-shopping:hover {
          color: #C49A6C;
        }
        .continue-shopping svg {
          width: 18px;
          height: 18px;
          transition: transform 0.2s ease;
        }
        .continue-shopping:hover svg {
          transform: translateX(-3px);
        }
      `}</style>
      <div className="cart-content">
        <div className="cart-items" data-aos="fade-up" id="cart-items-container">
          {!isHydrated ? (
            <div className="cart-empty" id="cart-empty-state">
              <p>Loading...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="cart-empty" id="cart-empty-state">
              <svg className="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
              </svg>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added anything to your cart yet.</p>
              <Link href="/product" className="btn">Continue Shopping</Link>
            </div>
          ) : (
            <div className="cart-items-list" id="cart-items-list">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <Image
                      src={item.variant.image || item.product.images[0] || "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop"}
                      alt={item.product.title}
                      width={100}
                      height={120}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="cart-item-details">
                    <h3 className="cart-item-title">
                      <Link href="/product">{item.product.title}</Link>
                    </h3>
                    <p className="cart-item-variant">
                      {item.variant.options.Size} / {item.variant.options.Color}
                    </p>
                    <div className="cart-item-price">
                      {item.product.compareAtPrice && (
                        <span className="price-compare">₹{item.product.compareAtPrice.toLocaleString("en-IN")}</span>
                      )}
                      <span className="price-current">₹{item.variant.price.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="cart-item-actions mobile-only">
                      <div className="quantity-selector">
                        <button
                          type="button"
                          className="quantity-btn quantity-minus"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={item.quantity}
                          min="0"
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                        />
                        <button
                          type="button"
                          className="quantity-btn quantity-plus"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="cart-item-remove"
                        onClick={() => handleRemove(item.id)}
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-quantity desktop-only">
                    <div className="quantity-selector">
                      <button
                        type="button"
                        className="quantity-btn quantity-minus"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="quantity-input"
                        value={item.quantity}
                        min="0"
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                      />
                      <button
                        type="button"
                        className="quantity-btn quantity-plus"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total desktop-only">
                    <span className="item-total">₹{(item.variant.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="cart-item-remove-btn desktop-only">
                    <button
                      type="button"
                      className="btn-icon cart-item-remove"
                      onClick={() => handleRemove(item.id)}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {isHydrated && items.length > 0 && (
          <div className="cart-summary" data-aos="fade-up" data-aos-delay="200" id="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-line">
              <span>Subtotal</span>
              <span id="cart-subtotal">₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span id="cart-shipping">FREE</span>
            </div>
            <div className="summary-note" id="shipping-note">
              {subtotal >= 999 ? "You qualify for free shipping!" : `Add ₹${Math.ceil(999 - subtotal).toLocaleString("en-IN")} more for free shipping!`}
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span id="cart-total">₹{total.toLocaleString("en-IN")}</span>
            </div>
            <Link href="#" className="btn btn-primary btn-lg btn-block checkout-btn" id="checkout-btn">
              Proceed to Checkout
            </Link>
            <div className="summary-offers">
              <p><strong>Available Offers:</strong></p>
              <ul>
                <li>₹200 Instant Discount on Prepaid Orders</li>
                <li>Free Shipping on orders above ₹999</li>
              </ul>
            </div>
            <div className="summary-secure">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="8" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 8V5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Secure Checkout</span>
            </div>
            <Link href="/product" className="continue-shopping">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
