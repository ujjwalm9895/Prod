"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export function ProductZoomModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState("")
  const [zoomLevel, setZoomLevel] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const zoomLevels = [1, 1.5, 2, 2.5, 3]

  useEffect(() => {
    const handleOpenZoom = (e: Event) => {
      const customEvent = e as CustomEvent<{ src: string }>
      if (customEvent.detail?.src) {
        setImageSrc(customEvent.detail.src)
        setZoomLevel(0)
        setPosition({ x: 0, y: 0 })
        setIsOpen(true)
        document.body.style.overflow = "hidden"
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
        document.body.style.overflow = ""
      }
    }

    window.addEventListener("product-zoom-open", handleOpenZoom)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("product-zoom-open", handleOpenZoom)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleZoomIn = () => {
    if (zoomLevel < zoomLevels.length - 1) {
      setZoomLevel(zoomLevel + 1)
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleZoomOut = () => {
    if (zoomLevel > 0) {
      setZoomLevel(zoomLevel - 1)
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevels[zoomLevel] > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevels[zoomLevel] > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomLevels[zoomLevel] > 1 && e.touches.length === 1) {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoomLevels[zoomLevel] > 1 && e.touches.length === 1) {
      e.preventDefault()
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  if (!isOpen) return null

  return (
    <>
      <style jsx>{`
        .product-zoom-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .product-zoom-box {
          position: relative;
          max-width: 95vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .zoom-image-wrap {
          overflow: hidden;
          max-width: 90vw;
          max-height: 85vh;
          cursor: ${zoomLevels[zoomLevel] > 1 ? "grab" : "default"};
          user-select: none;
          touch-action: none;
        }
        .zoom-image-wrap:active {
          cursor: ${zoomLevels[zoomLevel] > 1 ? "grabbing" : "default"};
        }
        .zoom-image-wrap img {
          display: block;
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
          transition: transform 0.1s ease-out;
        }
        .product-zoom-close {
          position: absolute;
          top: -2.5rem;
          right: 0;
          width: 40px;
          height: 40px;
          border: none;
          background: #fff;
          color: #111;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .product-zoom-close:hover {
          background: #eee;
        }
        .product-zoom-controls {
          position: absolute;
          bottom: -2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.95);
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
        }
        .product-zoom-controls button {
          width: 36px;
          height: 36px;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1.1rem;
          line-height: 1;
        }
        .product-zoom-controls button:hover {
          background: #f0f0f0;
          border-color: #999;
        }
        .product-zoom-controls span {
          font-size: 0.85rem;
          min-width: 3ch;
          text-align: center;
        }
      `}</style>
      <div
        id="product-zoom-overlay"
        className="product-zoom-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Zoomed product image"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false)
          }
        }}
      >
        <div className="product-zoom-box">
          <button
            type="button"
            className="product-zoom-close"
            id="product-zoom-close"
            aria-label="Close zoom"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <div
            className="zoom-image-wrap"
            id="zoom-image-wrap"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {imageSrc && (
              <Image
                id="zoom-modal-img"
                src={imageSrc}
                alt="MotionFit™ Formal Trouser – zoomed view"
                width={1200}
                height={1200}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevels[zoomLevel]})`,
                  objectFit: "contain",
                }}
                priority
              />
            )}
          </div>
          <div className="product-zoom-controls">
            <button
              type="button"
              id="zoom-out-btn"
              aria-label="Zoom out"
              onClick={handleZoomOut}
              disabled={zoomLevel === 0}
            >
              −
            </button>
            <span id="zoom-level-text">{Math.round(zoomLevels[zoomLevel] * 100)}%</span>
            <button
              type="button"
              id="zoom-in-btn"
              aria-label="Zoom in"
              onClick={handleZoomIn}
              disabled={zoomLevel === zoomLevels.length - 1}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
