"use client"

import { useState, useEffect, useRef } from "react"
import { useCartStore } from "@/store/cartStore"
import Link from "next/link"

const colors = [
  { name: "Black", value: "Black", color: "#111111", textColor: "#ffffff" },
  { name: "Navy Blue", value: "Navy Blue", color: "#1e3a8a", textColor: "#ffffff" },
  { name: "Starlight Silver", value: "Starlight Silver", color: "#d9d9d9", textColor: "#111111" },
  { name: "Beige", value: "Beige", color: "#d7c6a0", textColor: "#111111" },
  { name: "Golden Brown", value: "Golden Brown", color: "#b8860b", textColor: "#ffffff" },
  { name: "Military Green", value: "Military Green", color: "#4b5320", textColor: "#ffffff" },
]

const sizes = ["28", "30", "32", "34", "36"]

// Variant map matching the HTML script
const variantMap: Record<string, string> = {
  'Black|28': '1001-28-BLK',
  'Black|30': '1001-30-BLK',
  'Black|32': '1001-32-BLK',
  'Black|34': '1001-34-BLK',
  'Black|36': '1001-36-BLK',
  'Navy Blue|32': '1001-32-NV',
  'Starlight Silver|32': '1001-32-SL',
  'Beige|32': '1001-32-BE',
  'Golden Brown|32': '1001-32-GB',
  'Military Green|32': '1001-32-MG'
}

// Color to image mapping matching the HTML
const productImages: Record<string, string> = {
  "Black": "/assets/product/black-1.png",
  "Navy Blue": "/assets/product/navy-1.png",
  "Starlight Silver": "/assets/product/silver-1.png",
  "Beige": "/assets/product/beige-1.png",
  "Golden Brown": "/assets/product/dark-brown-1.png", // Using dark-brown for Golden Brown as per HTML
  "Military Green": "/assets/product/military-green-1.png",
}

export function ProductHighlights() {
  const [selectedColor, setSelectedColor] = useState("Black")
  const [selectedSize, setSelectedSize] = useState("32")
  const [productImage, setProductImage] = useState("/assets/product/black-1.png")
  const [availability, setAvailability] = useState("In stock")
  const [isAvailable, setIsAvailable] = useState(true)
  const [disabledSizes, setDisabledSizes] = useState<Set<string>>(new Set())
  const variantIdRef = useRef("1001-32-BLK")
  const { addItem, openCart } = useCartStore()

  // Debug: Log when component renders (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('ProductHighlights component rendered')
      const section = document.getElementById('product-highlights-section')
      if (section) {
        console.log('Section found:', section)
        console.log('Section styles:', window.getComputedStyle(section))
      } else {
        console.error('Section NOT found!')
      }
    }
  }, [])

  // Update availability and disabled sizes when color or size changes
  useEffect(() => {
    const colorValue = colors.find(c => c.value === selectedColor)?.value || "Black"
    setProductImage(productImages[colorValue] || "/assets/product/black-1.png")
    
    // Update disabled sizes based on selected color
    const newDisabledSizes = new Set<string>()
    sizes.forEach(size => {
      const key = `${selectedColor}|${size}`
      if (!variantMap[key]) {
        newDisabledSizes.add(size)
      }
    })
    setDisabledSizes(newDisabledSizes)
    
    // Update variant ID and availability
    const key = `${selectedColor}|${selectedSize}`
    const variantId = variantMap[key]
    
    if (variantId) {
      variantIdRef.current = variantId
      setAvailability("In stock")
      setIsAvailable(true)
    } else {
      variantIdRef.current = ""
      setAvailability("Select a valid combination")
      setIsAvailable(false)
    }
  }, [selectedColor, selectedSize])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!isAvailable) return
    
    const variantId = variantIdRef.current
    
    // Create a mock product object for adding to cart
    const product = {
      id: "1001",
      title: "MotionFit™ Formal Trouser",
      description: "Premium MotionFit™ trousers with 2-way stretch, wrinkle-free fabric, and tailored taper fit.",
      price: 1199,
      compareAtPrice: 1999,
      images: [productImage],
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
      image: productImage,
      options: {
        Color: selectedColor,
        Size: selectedSize,
      },
    }
    
    addItem(product, variant, 1)
    openCart()
  }

  return (
    <>
      <style jsx global>{`
        .product-highlights {
          background: linear-gradient(135deg, #0F0F0F, #3A3A3A, #C9A24D) !important;
          padding: 0 !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          position: relative !important;
          z-index: 1 !important;
        }
        .product-highlights .section-title {
          color: #fff !important;
        }
        .product-highlights .section-description {
          color: #e5e7eb !important;
        }
        .product-highlights .quick-buy-panel {
          display: grid;
          grid-template-columns: minmax(240px, 320px) 1fr;
          gap: 20px;
          padding: 24px;
          border: 1px solid rgba(201, 162, 77, 0.3);
          border-radius: 24px;
          box-shadow: 0 20px 50px -12px rgba(0,0,0,0.6);
          align-items: center;
          background: linear-gradient(135deg, #0F0F0F, #3A3A3A, #C9A24D);
          position: relative;
        }
        .product-highlights .quick-buy-title,
        .product-highlights .price-current {
          color: #fff !important;
        }
        .product-highlights .quick-buy-subtitle,
        .product-highlights .option-label,
        .product-highlights .price-compare {
          color: #e5e5e5 !important;
        }
        .product-highlights .quick-buy-media img {
          width: 100%;
          max-height: 320px;
          object-fit: cover;
          border-radius: 12px;
        }
        .product-highlights .quick-buy-content {
          display: grid;
          gap: 10px;
        }
        .product-highlights .quick-buy-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .product-highlights .quick-buy-actions .btn {
          flex: 1 1 160px;
          justify-content: center;
        }
        .quick-buy-colors .color-swatches {
          display: inline-flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }
        .color-swatch {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #e5e7eb;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease;
          background: var(--swatch-color, #e5e7eb);
        }
        input[type="radio"]:checked + .color-pill .color-swatch {
          border-color: rgba(255,255,255,0.2);
          box-shadow: none;
        }
        .color-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #fff;
          position: relative;
        }
        .color-swatch {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.1);
          display: block;
          background: var(--swatch-color, #e5e7eb);
        }
        .color-name {
          display: none;
        }
        .selected-color-name {
          font-weight: 600;
          color: #fff;
          margin-left: 8px;
          font-size: 0.95rem;
        }
        input[type="radio"]:checked + .color-pill {
          background-color: #111;
          border-color: #111;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
        .color-pill:hover {
          border-color: #999;
          background-color: #fafafa;
        }
        input[type="radio"]:checked + .color-pill:hover {
          background-color: #000;
          border-color: #000;
        }
        .swatch-dot {
          display: none;
        }
        .quick-buy-sizes .option-button {
          color: #111 !important;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          min-width: 0;
          margin-right: 0;
          border: 1px solid #e5e7eb;
          background: #fff;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .quick-buy-sizes .option-values.option-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }
        .quick-buy-sizes input[type="radio"] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .quick-buy-sizes input[type="radio"]:checked + .option-button {
          background-color: #111;
          color: #fff !important;
          border-color: #111;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
        .quick-buy-sizes .option-button:hover {
          border-color: #999;
          background-color: #fafafa;
        }
        .quick-buy-sizes input[type="radio"]:checked + .option-button:hover {
          background-color: #000;
          border-color: #000;
        }
        .quick-buy-colors .color-swatches {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }
        .quick-buy-colors input[type="radio"] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .quick-buy-availability {
          margin: 6px 0 0;
          color: #0a7f4f;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .quick-buy-availability.unavailable {
          color: #b91c1c;
        }
        .quick-buy-sizes input[type="radio"]:disabled + .option-button,
        .quick-buy-colors input[type="radio"]:disabled + .color-pill {
          cursor: not-allowed;
          position: relative;
          opacity: 0.6;
          background-color: rgba(255,255,255,0.05);
          color: #888 !important;
          border-color: #444;
        }
        .quick-buy-sizes input[type="radio"]:disabled + .option-button::before,
        .quick-buy-colors input[type="radio"]:disabled + .color-pill::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom right, transparent calc(50% - 1px), #888 calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px));
          z-index: 2;
          pointer-events: none;
          border-radius: inherit;
        }
        @media (max-width: 768px) {
          .product-highlights {
            padding: 0;
          }
          .product-highlights .section-header {
            padding: 0 1rem;
            margin-bottom: 1.5rem;
          }
          .product-highlights .section-title {
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin-bottom: 0.5rem;
          }
          .product-highlights .section-description {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
          }
          .product-highlights .quick-buy-panel {
            grid-template-columns: 1fr;
            padding: 1.25rem;
            gap: 1.5rem;
            border-radius: 16px;
            margin: 0 1rem;
          }
          .product-highlights .quick-buy-media {
            order: -1;
          }
          .product-highlights .quick-buy-media img {
            max-height: 280px;
            width: 100%;
            object-fit: contain;
          }
          .product-highlights .quick-buy-title {
            font-size: clamp(1.25rem, 4vw, 1.5rem);
            margin-bottom: 0.5rem;
          }
          .product-highlights .quick-buy-subtitle {
            font-size: clamp(0.85rem, 2vw, 0.95rem);
            margin-bottom: 1rem;
          }
          .product-highlights .quick-buy-price {
            margin-bottom: 1.25rem;
          }
          .product-highlights .price-current {
            font-size: clamp(1.5rem, 5vw, 1.75rem);
          }
          .product-highlights .price-compare {
            font-size: clamp(1rem, 3vw, 1.15rem);
          }
          .product-highlights .quick-buy-colors,
          .product-highlights .quick-buy-sizes {
            margin-bottom: 1.25rem;
          }
          .product-highlights .option-label {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
            margin-bottom: 0.75rem;
            display: block;
          }
          .product-highlights .quick-buy-colors .color-swatches {
            gap: 0.75rem;
            justify-content: flex-start;
          }
          .product-highlights .color-pill {
            width: 40px;
            height: 40px;
          }
          .product-highlights .color-swatch {
            width: 28px;
            height: 28px;
          }
          .product-highlights .quick-buy-sizes .option-values {
            gap: 0.75rem;
            justify-content: flex-start;
          }
          .product-highlights .quick-buy-sizes .option-button {
            width: 42px;
            height: 42px;
            font-size: 0.95rem;
          }
          .product-highlights .quick-buy-actions {
            flex-direction: column;
            gap: 0.75rem;
          }
          .product-highlights .quick-buy-actions .btn {
            flex: 1 1 auto;
            width: 100%;
            padding: 0.875rem 1.25rem;
            font-size: clamp(0.95rem, 2.5vw, 1rem);
            min-height: 48px;
          }
          .product-highlights .quick-buy-availability {
            font-size: clamp(0.85rem, 2vw, 0.9rem);
            text-align: center;
          }
        }
        @media (max-width: 480px) {
          .product-highlights {
            padding: 0;
          }
          .product-highlights .quick-buy-panel {
            padding: 1rem;
            gap: 1.25rem;
            margin: 0 0.75rem;
          }
          .product-highlights .quick-buy-media img {
            max-height: 240px;
          }
          .product-highlights .quick-buy-colors .color-swatches {
            gap: 0.5rem;
          }
          .product-highlights .color-pill {
            width: 38px;
            height: 38px;
          }
          .product-highlights .color-swatch {
            width: 26px;
            height: 26px;
          }
          .product-highlights .quick-buy-sizes .option-button {
            width: 40px;
            height: 40px;
            font-size: 0.9rem;
          }
        }
      `}</style>
      <section 
        className="product-highlights" 
        id="product-highlights-section"
        style={{ 
          display: 'block', 
          visibility: 'visible', 
          opacity: 1,
          background: 'linear-gradient(135deg, #0F0F0F, #3A3A3A, #C9A24D)',
          padding: 0,
          width: '100%',
          minHeight: '600px',
          position: 'relative',
          zIndex: 10,
          marginTop: 0,
          marginBottom: 0,
          overflow: 'visible',
          boxSizing: 'border-box'
        }}
      >
        {/* Test element to verify section is rendering - TEMPORARY */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '10px', 
          background: 'red',
          pointerEvents: 'none',
          zIndex: 1000
        }} />
        <div className="container" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem',
          position: 'relative',
          zIndex: 2,
          display: 'block',
          visibility: 'visible',
          opacity: 1,
          minHeight: '500px'
        }}>
          <div className="section-header" style={{ 
            marginBottom: '2rem',
            textAlign: 'center',
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}>
            <h2 className="section-title" style={{ 
              color: '#fff', 
              fontSize: '2rem', 
              fontWeight: '700', 
              marginBottom: '0.5rem',
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}>Most Trending Products</h2>
            <p className="section-description" style={{ 
              color: '#e5e7eb', 
              fontSize: '1rem',
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}>What others are buying</p>
          </div>
          <div className="quick-buy-panel" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 320px) 1fr',
            gap: '20px',
            padding: '24px',
            border: '1px solid rgba(201, 162, 77, 0.3)',
            borderRadius: '24px',
            boxShadow: '0 20px 50px -12px rgba(0,0,0,0.6)',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #0F0F0F, #3A3A3A, #C9A24D)',
            position: 'relative',
            visibility: 'visible',
            opacity: 1,
            minHeight: '400px'
          }}>
            <div className="quick-buy-media" style={{ 
              width: '100%', 
              maxHeight: '320px', 
              display: 'block',
              visibility: 'visible',
              opacity: 1,
              minHeight: '200px',
              backgroundColor: '#1a1a1a',
              borderRadius: '12px'
            }}>
              <img
                id="quick-buy-product-image"
                src={productImage}
                alt="MotionFit Formal Trousers"
                style={{ 
                  objectFit: "contain", 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '320px', 
                  borderRadius: '12px',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop"
                }}
              />
            </div>
            <div className="quick-buy-content" style={{ 
              display: 'grid', 
              gap: '10px',
              visibility: 'visible',
              opacity: 1,
              minHeight: '300px'
            }}>
              <span className="pill-badge pill-accent" style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: '#C49A6C', color: '#fff', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>Bestseller</span>
              <h3 className="quick-buy-title" style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700', margin: '0.5rem 0' }}>MotionFit™ Formal Trouser</h3>
              <p className="quick-buy-subtitle" style={{ color: '#e5e7eb', fontSize: '0.95rem', marginBottom: '1rem' }}>2-way stretch · Wrinkle-free · Tailored taper</p>
              <div className="quick-buy-price" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span className="price-compare" style={{ color: '#e5e7eb', textDecoration: 'line-through', fontSize: '1rem' }}>₹1,999</span>
                <span className="price-current" style={{ color: '#fff', fontSize: '1.75rem', fontWeight: '700' }}>₹1,199</span>
                <span className="price-discount" style={{ color: '#C49A6C', fontSize: '0.9rem', fontWeight: '600' }}>40% OFF</span>
              </div>
              <form onSubmit={handleSubmit} className="quick-buy-form" id="quick-buy-form-preview">
                <input type="hidden" name="id" id="quick-buy-variant-id-preview" value={variantIdRef.current} />

                <div className="quick-buy-colors" style={{ marginBottom: '1.5rem' }}>
                  <span className="option-label" style={{ color: '#e5e7eb', fontSize: '0.95rem', fontWeight: '500', display: 'block', marginBottom: '0.75rem' }}>Color: <span className="selected-color-name" id="selected-color-display-preview" style={{ color: '#fff', fontWeight: '600' }}>{selectedColor}</span></span>
                  <div className="option-values color-swatches" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {colors.map((color) => (
                      <div key={color.value}>
                        <input
                          type="radio"
                          name="qb-color"
                          id={`qb-color-${color.value.toLowerCase().replace(/\s+/g, "-")}`}
                          value={color.value}
                          checked={selectedColor === color.value}
                          onChange={(e) => setSelectedColor(e.target.value)}
                          className="sr-only"
                        />
                        <label
                          htmlFor={`qb-color-${color.value.toLowerCase().replace(/\s+/g, "-")}`}
                          className="color-pill"
                          title={color.name}
                          style={{ 
                            "--swatch-color": color.color, 
                            "--text-color": color.textColor,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '44px',
                            height: '44px',
                            padding: 0,
                            border: selectedColor === color.value ? '2px solid #111' : '1px solid #e5e7eb',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            background: selectedColor === color.value ? '#111' : '#fff',
                            transform: selectedColor === color.value ? 'translateY(-2px)' : 'none',
                            boxShadow: selectedColor === color.value ? '0 4px 10px rgba(0,0,0,0.15)' : 'none'
                          } as React.CSSProperties}
                        >
                          <span className="color-swatch" style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '1px solid rgba(0,0,0,0.1)',
                            display: 'block',
                            background: color.color
                          }}>
                            <span className="swatch-dot"></span>
                          </span>
                          <span className="color-name" style={{ display: 'none' }}>{color.name}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="quick-buy-sizes" style={{ marginBottom: '1.5rem' }}>
                  <span className="option-label" style={{ color: '#e5e7eb', fontSize: '0.95rem', fontWeight: '500', display: 'block', marginBottom: '0.75rem' }}>Size</span>
                  <div className="option-values option-buttons" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {sizes.map((size) => {
                      const isDisabled = disabledSizes.has(size)
                      return (
                        <div key={size}>
                          <input
                            type="radio"
                            name="qb-size"
                            id={`qb-size-${size}`}
                            value={size}
                            checked={selectedSize === size}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            disabled={isDisabled}
                            className="sr-only"
                          />
                          <label 
                            htmlFor={`qb-size-${size}`} 
                            className="option-button"
                            style={{
                              color: isDisabled ? '#888' : (selectedSize === size ? '#fff' : '#111'),
                              width: '44px',
                              height: '44px',
                              borderRadius: '50%',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: 0,
                              minWidth: 0,
                              marginRight: 0,
                              border: isDisabled ? '1px solid #444' : (selectedSize === size ? '1px solid #111' : '1px solid #e5e7eb'),
                              background: isDisabled ? 'rgba(255,255,255,0.05)' : (selectedSize === size ? '#111' : '#fff'),
                              fontWeight: 500,
                              cursor: isDisabled ? 'not-allowed' : 'pointer',
                              transition: 'all 0.2s ease',
                              transform: selectedSize === size ? 'translateY(-2px)' : 'none',
                              boxShadow: selectedSize === size ? '0 4px 10px rgba(0,0,0,0.15)' : 'none',
                              opacity: isDisabled ? 0.6 : 1,
                              position: 'relative'
                            }}
                          >
                            {size}
                          </label>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="quick-buy-actions" style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg" 
                    id="quick-buy-submit-preview"
                    disabled={!isAvailable}
                    style={{
                      padding: '1rem 2rem',
                      background: !isAvailable ? '#666' : '#111',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: !isAvailable ? 'not-allowed' : 'pointer',
                      minHeight: '52px',
                      width: '100%'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                <p className={`quick-buy-availability ${!isAvailable ? 'unavailable' : ''}`} id="quick-buy-availability-preview" style={{
                  margin: '6px 0 0',
                  color: !isAvailable ? '#b91c1c' : '#0a7f4f',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  textAlign: 'center'
                }}>
                  {availability}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
