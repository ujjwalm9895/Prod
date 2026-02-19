"use client"

import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const colors = [
  { name: "Black", value: "Black", image: "black" },
  { name: "Navy Blue", value: "Navy Blue", image: "navy" },
  { name: "Starlight Silver", value: "Starlight Silver", image: "silver" },
  { name: "Beige", value: "Beige", image: "beige" },
  { name: "Dark Brown", value: "Dark Brown", image: "dark-brown" },
  { name: "Military Green", value: "Military Green", image: "military-green" },
]

const fallbackImages: Record<string, string> = {
  "Black": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1024&h=1024&fit=crop",
  "Navy Blue": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1024&h=1024&fit=crop",
  "Starlight Silver": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1024&h=1024&fit=crop",
  "Beige": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1024&h=1024&fit=crop",
  "Dark Brown": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1024&h=1024&fit=crop",
  "Military Green": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1024&h=1024&fit=crop",
}

interface ProductGalleryProps {
  onImageClick?: (src: string) => void
  selectedColor?: string
  onColorChange?: (color: string) => void
}

export function ProductGallery({ onImageClick, selectedColor: externalSelectedColor, onColorChange }: ProductGalleryProps) {
  const [internalSelectedColor, setInternalSelectedColor] = useState("Black")
  const selectedColor = externalSelectedColor || internalSelectedColor
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const colorData = colors.find(c => c.value === selectedColor)
    if (colorData) {
      const images = Array.from({ length: 5 }, (_, i) => 
        `/assets/product/${colorData.image}-${i + 1}.png`
      )
      setGalleryImages(images)
      // Reset swiper to first slide when color changes
      if (swiperRef.current) {
        swiperRef.current.slideTo(0)
      }
    }
  }, [selectedColor])

  const handleThumbnailClick = (color: string) => {
    if (onColorChange) {
      onColorChange(color)
    } else {
      setInternalSelectedColor(color)
    }
  }

  const handleSlideClick = (imageSrc: string) => {
    if (onImageClick) {
      onImageClick(imageSrc)
    } else {
      // Dispatch custom event for zoom modal
      window.dispatchEvent(
        new CustomEvent("product-zoom-open", { detail: { src: imageSrc } })
      )
    }
  }

  return (
    <>
      <style jsx>{`
        .product-gallery-menlike {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          display: flex;
          flex-direction: row;
          gap: 0.75rem;
          padding: 0;
          min-height: 0;
          align-items: flex-start;
        }
        .gallery-thumbnails {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          justify-content: flex-start;
          padding: 0;
          order: 1;
          width: 100px;
          flex-shrink: 0;
          max-height: min(90vw, 620px);
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: rgba(196, 154, 108, 0.5) transparent;
          padding-right: 4px;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .gallery-thumbnails::-webkit-scrollbar {
          width: 6px;
        }
        .gallery-thumbnails::-webkit-scrollbar-track {
          background: transparent;
        }
        .gallery-thumbnails::-webkit-scrollbar-thumb {
          background: rgba(196, 154, 108, 0.5);
          border-radius: 3px;
        }
        .gallery-thumbnails::-webkit-scrollbar-thumb:hover {
          background: rgba(196, 154, 108, 0.7);
        }
        @media (min-width: 768px) {
          .gallery-thumbnails {
            max-height: min(70vh, 680px);
            min-height: 420px;
          }
        }
        .gallery-main {
          flex: 1;
          min-width: 0;
          position: relative;
          min-height: 0;
          display: flex;
          flex-direction: column;
          order: 2;
        }
        .gallery-thumbnails__item {
          position: relative;
          width: 85px;
          aspect-ratio: 1;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid #e5e5e5;
          background: #f0f0f0;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          flex-shrink: 0;
        }
        .gallery-thumbnails__item:hover {
          border-color: #ccc;
        }
        .gallery-thumbnails__item.active {
          border-color: var(--product-accent, #b8860b);
          box-shadow: 0 0 0 1px var(--product-accent, #b8860b);
        }
        .gallery-thumbnails__item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .product-main-image.swiper {
          width: 100%;
          height: 90vw;
          max-height: 620px;
          min-height: 320px;
          background: #f0f0f0;
          border-radius: 6px;
          overflow: hidden;
          flex: 1;
        }
        @media (min-width: 768px) {
          .product-main-image.swiper {
            height: 70vh;
            min-height: 420px;
            max-height: 680px;
          }
        }
        .product-main-image .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          cursor: pointer;
          height: 100%;
          padding: 1rem;
          box-sizing: border-box;
        }
        .product-main-image .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          background: #f0f0f0;
          pointer-events: none;
          max-width: 100%;
          max-height: 100%;
          position: relative;
        }
        .product-gallery-menlike .swiper-button-prev,
        .product-gallery-menlike .swiper-button-next {
          background: none !important;
          box-shadow: none !important;
          width: 40px;
          height: 40px;
          color: #111;
        }
        .product-gallery-menlike .swiper-button-prev::after,
        .product-gallery-menlike .swiper-button-next::after {
          font-size: 22px;
          font-weight: 700;
        }
        .product-gallery-menlike .swiper-button-prev:hover,
        .product-gallery-menlike .swiper-button-next:hover {
          color: #333;
          background: none !important;
        }
        .click-enlarge {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          font-size: 0.75rem;
          color: #666;
          margin: 0;
          z-index: 2;
        }
        @media (max-width: 767px) {
          .gallery-thumbnails {
            display: none !important;
          }
          .gallery-main {
            order: 1;
            width: 100%;
          }
          .product-gallery-menlike {
            flex-direction: column;
          }
          .product-main-image.swiper {
            height: auto !important;
            min-height: auto !important;
            max-height: none !important;
          }
          .product-main-image .swiper-slide {
            height: auto !important;
            width: 100% !important;
          }
          .product-main-image .swiper-slide img {
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            object-fit: contain !important;
          }
        }
      `}</style>
      <div className="product-gallery-menlike">
        <div className="gallery-thumbnails" role="listbox" aria-label="Select colour">
          {colors.map((color) => (
            <button
              key={color.value}
              type="button"
              className={`gallery-thumbnails__item ${selectedColor === color.value ? "active" : ""}`}
              data-color={color.value}
              aria-label={color.name}
              aria-selected={selectedColor === color.value}
              onClick={() => handleThumbnailClick(color.value)}
            >
              <img
                src={`/assets/product/${color.image}-1.png`}
                alt={color.name}
                width={85}
                height={85}
                style={{ objectFit: "cover" }}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = fallbackImages[color.value] || fallbackImages["Black"]
                }}
              />
            </button>
          ))}
        </div>
        <div className="gallery-main">
          <p className="click-enlarge">Click to enlarge</p>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".product-gallery-menlike .swiper-button-prev",
              nextEl: ".product-gallery-menlike .swiper-button-next",
            }}
            pagination={{
              el: ".product-image-pagination",
              clickable: true,
            }}
            className="product-main-image swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
          >
            {galleryImages.map((imageSrc, index) => (
              <SwiperSlide
                key={`${selectedColor}-${index}`}
                onClick={() => handleSlideClick(imageSrc)}
              >
                <img
                  data-gallery-index={index + 1}
                  src={imageSrc}
                  alt={`MotionFit™ Formal Trouser – view ${index + 1}`}
                  className="product-main-img"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = fallbackImages[selectedColor] || fallbackImages["Black"]
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination product-image-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </>
  )
}
