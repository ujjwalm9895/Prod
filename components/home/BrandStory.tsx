"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function BrandStory() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])
  return (
    <>
      <style jsx global>{`
        .brand-story {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          position: relative !important;
          z-index: 1 !important;
          background-color: #f8f8f8 !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .brand-story-grid {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
          align-items: center !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        @media (min-width: 1024px) {
          .brand-story-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 4rem !important;
          }
        }
        .brand-story-content {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .brand-story-media {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          border-radius: 12px;
          overflow: hidden;
        }
        .brand-story-media img {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .brand-story-subheading {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #C49A6C;
          margin-bottom: 1rem;
          display: block;
        }
        .brand-story-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          display: block;
        }
        @media (min-width: 768px) {
          .brand-story-title {
            font-size: 2.5rem;
          }
        }
        .brand-story-text {
          font-size: 1rem;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 2rem;
          display: block;
        }
        .brand-story-text p {
          margin-bottom: 1rem;
        }
      `}</style>
      <section className="brand-story" style={{
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        width: '100%',
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#f8f8f8',
        padding: 0,
        margin: 0,
        minHeight: '400px'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 1rem',
          display: 'block',
          visibility: 'visible',
          opacity: 1
        }}>
          <div className="brand-story-grid" style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr',
            gap: isDesktop ? '4rem' : '2rem',
            alignItems: 'center',
            visibility: 'visible',
            opacity: 1,
            width: '100%',
            minHeight: '300px'
          }}>
            <div className="brand-story-content" style={{
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}>
              <p className="brand-story-subheading">Our Story</p>
              <h2 className="brand-story-title">Built for the Perfect Fit</h2>
              <div className="brand-story-text">
                <p>R2F is built to give Indian men the perfect fit they've been missing — premium trousers engineered for comfort, movement & all-day performance.</p>
                <p>Whether you're heading to the office, traveling, or attending important meetings, our MotionFit™ technology ensures you look sharp and feel comfortable all day long.</p>
              </div>
              <Link href="/about" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="brand-story-media" style={{
              display: 'block',
              visibility: 'visible',
              opacity: 1,
              borderRadius: '12px',
              overflow: 'hidden',
              width: '100%'
            }}>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
                alt="R2F Brand Story"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
