"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function ProductsCollection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <>
      <style jsx>{`
        .collection-page {
          padding: 2rem 0;
        }
        .collection-header {
          background: #fff;
          padding: 2rem 0;
          border-bottom: 1px solid #eee;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: #666;
        }
        .breadcrumbs a {
          color: #666;
          text-decoration: none;
        }
        .breadcrumbs a:hover {
          color: #111;
        }
        .collection-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #111;
          margin: 0 0 0.5rem;
        }
        .collection-count {
          font-size: 1rem;
          color: #666;
          margin: 0;
        }
        .collection-content {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        @media (max-width: 1023px) {
          .collection-content {
            grid-template-columns: 1fr;
          }
        }
        .mobile-filter-toggle {
          display: none;
          width: 100%;
          padding: 1rem;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          margin-bottom: 1rem;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        @media (max-width: 1023px) {
          .mobile-filter-toggle {
            display: flex;
          }
        }
        .collection-sidebar {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          height: fit-content;
          position: sticky;
          top: 100px;
        }
        @media (max-width: 1023px) {
          .collection-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 400px;
            height: 100vh;
            z-index: 10000;
            overflow-y: auto;
            transform: translateX(${isFilterOpen ? "0" : "-100%"});
            transition: transform 0.3s ease;
          }
        }
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eee;
        }
        .sidebar-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .sidebar-close {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        @media (max-width: 1023px) {
          .sidebar-close {
            display: block;
          }
        }
        .filter-group {
          margin-bottom: 2rem;
        }
        .filter-title {
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          margin: 0 0 1rem;
        }
        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .filter-size-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }
        .filter-color-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }
        .filter-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.9rem;
        }
        .filter-size-option,
        .filter-color-option {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-size-option:hover,
        .filter-color-option:hover {
          border-color: #C49A6C;
        }
        .color-swatch {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
        }
        .clear-filters {
          width: 100%;
          margin-top: 1rem;
        }
        .collection-main {
          min-width: 0;
        }
        .collection-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .results-count {
          font-size: 0.95rem;
          color: #666;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }
        .product-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .product-card-link {
          text-decoration: none;
          color: inherit;
        }
        .product-card-image {
          position: relative;
          width: 100%;
          padding-bottom: 125%;
          overflow: hidden;
          background: #f5f5f5;
        }
        .product-card-image img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-badges {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .badge {
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .badge-sale {
          background: #dc2626;
          color: #fff;
        }
        .product-card-info {
          padding: 1rem;
        }
        .product-card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          margin: 0 0 0.5rem;
        }
        .product-card-price {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .product-card-atc-form {
          padding: 0 1rem 1rem;
        }
        .product-card-atc {
          width: 100%;
        }
        .filter-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 9999;
        }
        @media (max-width: 1023px) {
          .filter-overlay {
            display: ${isFilterOpen ? "block" : "none"};
          }
        }
      `}</style>
      <div className="collection-page">
        <div className="collection-header">
          <div className="container">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>All Trousers</span>
            </nav>
            <h1 className="collection-title" data-aos="fade-up">All Products</h1>
            <p className="collection-count" data-aos="fade-up" data-aos-delay="100">1 product</p>
          </div>
        </div>

        <div className="container">
          <div className="collection-content">
            <button
              className="mobile-filter-toggle"
              onClick={() => setIsFilterOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1 4h18M4 10h12M7 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Filters
            </button>

            <div className="filter-overlay" onClick={() => setIsFilterOpen(false)}></div>

            <aside className={`collection-sidebar ${isFilterOpen ? "open" : ""}`}>
              <div className="sidebar-header">
                <h3 className="sidebar-title">Filters</h3>
                <button className="sidebar-close" onClick={() => setIsFilterOpen(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
              <div className="sidebar-content">
                <div className="filter-group">
                  <h4 className="filter-title">Price</h4>
                  <div className="filter-options">
                    <label className="filter-option">
                      <input type="checkbox" name="price" value="0-1000" />
                      <span>Under ₹1,000</span>
                    </label>
                    <label className="filter-option">
                      <input type="checkbox" name="price" value="1000-2000" />
                      <span>₹1,000 - ₹2,000</span>
                    </label>
                    <label className="filter-option">
                      <input type="checkbox" name="price" value="2000-3000" />
                      <span>₹2,000 - ₹3,000</span>
                    </label>
                    <label className="filter-option">
                      <input type="checkbox" name="price" value="3000+" />
                      <span>Above ₹3,000</span>
                    </label>
                  </div>
                </div>

                <div className="filter-group">
                  <h4 className="filter-title">Size</h4>
                  <div className="filter-options filter-size-grid">
                    {["28", "30", "32", "34", "36", "38", "40", "42"].map((size) => (
                      <label key={size} className="filter-size-option">
                        <input type="checkbox" name="size" value={size} />
                        <span>{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <h4 className="filter-title">Color</h4>
                  <div className="filter-options filter-color-grid">
                    {[
                      { name: "Black", value: "black", color: "black" },
                      { name: "Navy", value: "navy", color: "navy" },
                      { name: "Grey", value: "grey", color: "grey" },
                      { name: "Khaki", value: "khaki", color: "khaki" },
                    ].map((color) => (
                      <label key={color.value} className="filter-color-option" title={color.name}>
                        <input type="checkbox" name="color" value={color.value} />
                        <span className="color-swatch" style={{ backgroundColor: color.color }}></span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="btn btn-secondary btn-block clear-filters">Clear All Filters</button>
              </div>
            </aside>

            <div className="collection-main">
              <div className="collection-toolbar">
                <div className="toolbar-results">
                  <span className="results-count">Showing 1 product</span>
                </div>
                <div className="toolbar-sort">
                  <label>Featured</label>
                </div>
              </div>

              <div className="products-grid" data-aos="fade-up">
                <div className="product-card">
                  <Link href="/product" className="product-card-link">
                    <div className="product-card-image">
                      <Image
                        src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop"
                        alt="MotionFit™ Formal Trouser"
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                      <div className="product-badges">
                        <span className="badge badge-sale">-40%</span>
                      </div>
                    </div>
                    <div className="product-card-info">
                      <h3 className="product-card-title">MotionFit™ Formal Trouser</h3>
                      <div className="product-card-price">
                        <span className="price-compare">₹1,999</span>
                        <span className="price-current">₹1,199</span>
                      </div>
                    </div>
                  </Link>
                  <form method="post" action="#" className="product-card-atc-form">
                    <input type="hidden" name="id" value="1001-32" />
                    <button className="btn btn-primary btn-sm product-card-atc" type="submit">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
