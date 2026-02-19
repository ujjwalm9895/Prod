"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useCartStore } from "@/store/cartStore"

const colors = [
  { name: "Black", value: "Black", image: "black" },
  { name: "Navy Blue", value: "Navy Blue", image: "navy" },
  { name: "Starlight Silver", value: "Starlight Silver", image: "silver" },
  { name: "Beige", value: "Beige", image: "beige" },
  { name: "Dark Brown", value: "Dark Brown", image: "dark-brown" },
  { name: "Military Green", value: "Military Green", image: "military-green" },
]

const sizes = ["28", "30", "32", "34", "36"]

const variantMap: Record<string, string> = {
  "Black|28": "1001-28-BLK",
  "Black|30": "1001-30-BLK",
  "Black|32": "1001-32-BLK",
  "Black|34": "1001-34-BLK",
  "Black|36": "1001-36-BLK",
  "Navy Blue|32": "1001-32-NV",
  "Starlight Silver|32": "1001-32-SL",
  "Beige|32": "1001-32-BE",
  "Dark Brown|32": "1001-32-DB",
  "Military Green|32": "1001-32-MG",
}

const fallbackImages: Record<string, string> = {
  "Black": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=100&h=100&fit=crop",
  "Navy Blue": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=100&h=100&fit=crop",
  "Starlight Silver": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop",
  "Beige": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&h=100&fit=crop",
  "Dark Brown": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&h=100&fit=crop",
  "Military Green": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=100&h=100&fit=crop",
}

interface ProductDetailsProps {
  selectedColor?: string
  onColorChange?: (color: string) => void
}

export function ProductDetails({ selectedColor: externalSelectedColor, onColorChange }: ProductDetailsProps) {
  const [internalSelectedColor, setInternalSelectedColor] = useState("Black")
  const selectedColor = externalSelectedColor || internalSelectedColor
  const [selectedSize, setSelectedSize] = useState("32")
  const [variantId, setVariantId] = useState("1001-32-BLK")
  const [isAvailable, setIsAvailable] = useState(true)
  const { addItem, openCart } = useCartStore()

  useEffect(() => {
    const key = `${selectedColor}|${selectedSize}`
    const variant = variantMap[key]
    if (variant) {
      setVariantId(variant)
      setIsAvailable(true)
    } else {
      setVariantId("")
      setIsAvailable(false)
    }
    if (onColorChange) {
      onColorChange(selectedColor)
    }
  }, [selectedColor, selectedSize, onColorChange])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isAvailable) return

    const product = {
      id: "1001",
      title: "MotionFit™ Formal Trouser",
      description: "Premium MotionFit™ trousers with 2-way stretch, wrinkle-free fabric, and tailored taper fit.",
      price: 1199,
      compareAtPrice: 1999,
      images: [`/assets/product/${colors.find(c => c.value === selectedColor)?.image || "black"}-1.png`],
      variants: [],
      handle: "motionfit-formal-trouser",
      tags: ["bestseller", "formal"],
      available: true,
    }

    const variant = {
      id: variantId,
      title: `${selectedColor} - Size ${selectedSize}`,
      price: 1199,
      compareAtPrice: 1999,
      available: true,
      image: `/assets/product/${colors.find(c => c.value === selectedColor)?.image || "black"}-1.png`,
      options: {
        Color: selectedColor,
        Size: selectedSize,
      },
    }

    addItem(product, variant, 1)
    openCart()
  }

  const getColorImage = (colorValue: string) => {
    const color = colors.find(c => c.value === colorValue)
    return color ? `/assets/product/${color.image}-1.png` : "/assets/product/black-1.png"
  }

  return (
    <>
      <style jsx>{`
        .product-detail-menlike h1 {
          font-size: 1.6rem;
          margin: 0 0 0.5rem;
          line-height: 1.3;
          color: #111;
        }
        .product-detail-menlike .product-price-block {
          margin-bottom: 0.35rem;
        }
        .product-detail-menlike .price-compare {
          text-decoration: line-through;
          color: #888;
          margin-right: 0.5rem;
          font-size: 1rem;
        }
        .product-detail-menlike .price-current {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111;
        }
        .product-detail-menlike .price-badge {
          display: inline-block;
          background: var(--product-accent, #b8860b);
          color: #fff;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          margin-left: 0.5rem;
          vertical-align: middle;
          border-radius: 6px;
          font-weight: 600;
        }
        .product-detail-menlike .tax-shipping {
          font-size: 0.85rem;
          color: #555;
          margin-bottom: 0.5rem;
        }
        .product-detail-menlike .tax-shipping a {
          color: #000;
          text-decoration: underline;
        }
        .product-detail-menlike .reviews-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .product-detail-menlike .reviews-stars {
          color: var(--product-accent, #b8860b);
          font-size: 1rem;
          letter-spacing: 0.05em;
        }
        .product-detail-menlike .reviews-link {
          font-size: 0.9rem;
        }
        .product-detail-menlike .reviews-link a {
          color: #000;
          text-decoration: underline;
        }
        .product-detail-menlike .product-option {
          margin-bottom: 0.85rem;
        }
        .product-detail-menlike .option-label {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          display: block;
          color: #111;
        }
        .product-detail-menlike .option-label a {
          font-weight: 400;
          margin-left: 0.25rem;
        }
        .product-detail-menlike .option-values {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .product-detail-menlike .option-values.size-radio-row {
          gap: 0.75rem 1.25rem;
          align-items: center;
        }
        .product-detail-menlike .size-option-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          font-size: 0.95rem;
        }
        .product-detail-menlike .size-option-wrap input[type="radio"] {
          width: 18px;
          height: 18px;
          margin: 0;
          cursor: pointer;
          accent-color: var(--product-accent, #b8860b);
          flex-shrink: 0;
        }
        .product-detail-menlike .size-option-wrap input[type="radio"]:checked + .size-num {
          font-weight: 700;
          color: #111;
        }
        .product-detail-menlike .size-num {
          font-weight: 400;
          color: #333;
        }
        .product-detail-menlike .option-label .selected-size-value {
          font-weight: 700;
          margin-right: 0.25rem;
        }
        .product-detail-menlike .color-thumb-img {
          padding: 0;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid #e5e5e5;
          padding: 0;
          background: #f0f0f0;
          cursor: pointer;
          display: block;
        }
        .product-detail-menlike .product-option input[type="radio"] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .product-detail-menlike .product-option.quick-buy-sizes input[type="radio"] {
          position: static;
          opacity: 1;
          pointer-events: auto;
        }
        .product-detail-menlike input[type="radio"]:checked + .color-thumb-img {
          border-color: var(--product-accent, #b8860b);
          font-weight: 600;
          box-shadow: 0 0 0 1px var(--product-accent, #b8860b);
        }
        .product-detail-menlike .color-thumb-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          vertical-align: middle;
        }
        .product-detail-menlike .option-values.color-thumbnails-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .product-detail-menlike .order-now-btn {
          width: 100%;
          padding: 1rem 1.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          background: #000;
          color: #fff;
          border: none;
          cursor: pointer;
          margin-top: 0.75rem;
          border-radius: 6px;
          transition: opacity 0.2s ease, background 0.2s ease;
        }
        .product-detail-menlike .order-now-btn:hover:not(:disabled) {
          opacity: 0.9;
        }
        .product-detail-menlike .order-now-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .product-detail-menlike .quick-buy-availability {
          color: #333;
        }
        .product-detail-menlike .quick-buy-availability.unavailable {
          color: #c00;
        }
        .prepaid-offer {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.5rem;
          padding: 0.4rem 0.75rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(13,148,136,0.35);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .prepaid-offer .prepaid-offer-icon {
          flex-shrink: 0;
        }
        .prepaid-offer-tag {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          margin-top: 0.5rem;
          padding: 0.55rem 0.85rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          text-shadow: 0 1px 0 rgba(255,255,255,0.4);
          background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 40%, transparent 60%), linear-gradient(135deg, #fde047 0%, #facc15 25%, #eab308 50%, #ca8a04 75%, #a16207 100%);
          border-radius: 8px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 12px rgba(234,179,8,0.5), 0 4px 24px rgba(250,204,21,0.35), 0 0 32px rgba(251,191,36,0.25);
          border: 1px solid rgba(255,255,255,0.55);
          width: 100%;
          text-align: center;
          overflow: hidden;
        }
        .prepaid-offer-tag strong {
          font-weight: 800;
          text-shadow: 0 1px 0 rgba(255,255,255,0.5);
          color: #0c0a09;
        }
        @media (max-width: 767px) {
          .prepaid-offer-tag {
            font-size: 1rem;
          }
        }
      `}</style>
      <div className="product-detail-menlike">
        <h1>MotionFit™ Formal Trouser</h1>
        <div className="product-price-block">
          <span className="price-compare">₹1,999</span>
          <span className="price-current">₹1,199</span>
          <span className="price-badge">SAVE 40%</span>
        </div>
        <p className="prepaid-offer" role="status">
          <svg className="prepaid-offer-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          Pay online & get <strong>₹200 off</strong> – Prepaid only!
        </p>
        <p className="tax-shipping">Tax included. <Link href="/shipping">Shipping</Link> calculated at checkout.</p>
        <div className="reviews-row">
          <span className="reviews-stars" aria-hidden="true">★★★★½</span>
          <span className="reviews-link"><Link href="#reviews">320 reviews</Link></span>
        </div>

        <form id="product-form-preview" method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="id" id="quick-buy-variant-id-preview" value={variantId} />
          <input type="hidden" name="quantity" value="1" />

          <div className="product-option quick-buy-colors">
            <span className="option-label">COLOR: <span className="selected-color-name" id="selected-color-display-preview">{selectedColor}</span></span>
            <div className="option-values color-thumbnails-row">
              {colors.map((color) => (
                <div key={color.value}>
                  <input
                    type="radio"
                    name="qb-color"
                    id={`qb-color-${color.value.toLowerCase().replace(/\s+/g, "-")}`}
                    value={color.value}
                    checked={selectedColor === color.value}
                    onChange={(e) => {
                      if (onColorChange) {
                        onColorChange(e.target.value)
                      } else {
                        setInternalSelectedColor(e.target.value)
                      }
                    }}
                    className="sr-only"
                  />
                  <label
                    htmlFor={`qb-color-${color.value.toLowerCase().replace(/\s+/g, "-")}`}
                    className="color-thumb-img"
                    title={color.name}
                    style={{ width: "52px", height: "52px" }}
                  >
                    <Image
                      src={getColorImage(color.value)}
                      alt={color.name}
                      width={52}
                      height={52}
                      style={{ objectFit: "cover" }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = fallbackImages[color.value] || fallbackImages["Black"]
                      }}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="product-option quick-buy-sizes">
            <span className="option-label">
              SIZE: <span id="selected-size-display-preview" className="selected-size-value" aria-live="polite">{selectedSize}</span>{" "}
              <Link href="/size-guide" style={{ fontSize: "0.85rem", fontWeight: "400" }}>Size Chart</Link>
            </span>
            <div className="option-values size-radio-row" role="radiogroup" aria-label="Waist size">
              {sizes.map((size) => {
                const key = `${selectedColor}|${size}`
                const isAvailable = !!variantMap[key]
                return (
                  <label key={size} className="size-option-wrap" htmlFor={`qb-size-${size}`}>
                    <input
                      type="radio"
                      name="qb-size"
                      id={`qb-size-${size}`}
                      value={size}
                      checked={selectedSize === size}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      disabled={!isAvailable}
                    />
                    <span className="size-num">{size}</span>
                  </label>
                )
              })}
            </div>
          </div>

          <p className={`quick-buy-availability ${!isAvailable ? "unavailable" : ""}`} id="quick-buy-availability-preview" style={{ marginTop: "0.5rem", marginBottom: "0.25rem", fontSize: "0.9rem" }}>
            {isAvailable ? "In stock" : "Select a valid combination"}
          </p>
          <button
            type="submit"
            className="order-now-btn product-atc"
            id="quick-buy-submit-preview"
            disabled={!isAvailable}
            data-product-id="1001"
            data-product-title="MotionFit™ Formal Trouser"
            data-product-price="1199"
            data-product-compare="1999"
            data-product-image="/assets/product/black-1.png"
          >
            {isAvailable ? "Add to Cart" : "Sold Out"}
          </button>
          <p className="prepaid-offer-tag">Pay online & get <strong>₹200 off</strong> – Prepaid only!</p>
        </form>

        <p className="notify-me-link" id="notify-me-link" style={{ display: isAvailable ? "none" : "block", marginTop: "0.75rem" }}>
          <Link href="#">Notify Me When Available</Link>
        </p>
      </div>
    </>
  )
}
