"use client"

import Link from "next/link"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <>
      <style jsx>{`
        .hero-section {
          width: 100%;
          min-height: auto;
          height: auto;
          position: relative;
          z-index: 0;
        }
        .hero-slider,
        .hero-slide {
          width: 100%;
          height: auto;
          min-height: auto;
          position: relative;
        }
        .hero-slide {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .hero-image {
          object-fit: contain !important;
          object-position: center;
          width: 100% !important;
          height: auto !important;
          min-height: 80vh;
          max-height: 90vh;
          min-width: 100%;
          transform: none !important;
          display: block;
        }
        .hero-media {
          width: 100%;
          height: auto;
          min-height: 80vh;
          max-height: 90vh;
          overflow: visible;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }
        .hero-content {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          z-index: 2;
          min-height: auto;
          padding: 0 !important;
          margin: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content .container {
          padding: 0 !important;
          margin: 0 !important;
          width: 100%;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hero-text {
          padding: 0 !important;
          margin: 0 !important;
          text-align: center;
          width: 100%;
        }
        .hero-buttons {
          padding: 0 !important;
          margin: 0 !important;
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
        }
        .hero-buttons .btn {
          margin: 0;
          width: auto;
          max-width: none;
          display: inline-flex;
          white-space: nowrap;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .hero-media {
            background: transparent !important;
            min-height: auto !important;
            height: auto !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .hero-image {
            min-height: auto !important;
            height: auto !important;
            background: transparent !important;
          }
          .hero-section {
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .hero-slide {
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .hero-content {
            padding: 0 !important;
            margin: 0 !important;
          }
          .hero-image {
            min-height: 70vh;
          }
          .hero-media {
            min-height: 70vh;
          }
          .hero-subheading {
            display: none;
          }
          .hero-heading {
            display: none;
          }
          .hero-description {
            font-size: clamp(0.95rem, 3vw, 1.125rem);
            line-height: 1.6;
            margin-bottom: 1.5rem;
            padding: 0 !important;
          }
          .hero-buttons {
            padding: 0 !important;
            margin: 0 !important;
            flex-direction: column;
            gap: 0.75rem;
            width: auto;
            max-width: none;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .hero-buttons .btn {
            width: auto !important;
            max-width: none !important;
            padding: 0.875rem 1.5rem;
            font-size: clamp(0.95rem, 3vw, 1rem);
            min-height: 48px;
            margin: 0 !important;
            display: inline-flex !important;
            white-space: nowrap;
          }
          .hero-pagination {
            bottom: 15px !important;
          }
          .hero-button-prev,
          .hero-button-next {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .hero-description {
            font-size: clamp(0.875rem, 2.8vw, 1rem);
          }
        }
      `}</style>
      <section className="hero-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".hero-button-prev",
            nextEl: ".hero-button-next",
          }}
          pagination={{
            el: ".hero-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="hero-slider swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          <SwiperSlide className="hero-slide">
            <div className="hero-media">
              <img
                src="/assets/hero-index.jpg"
                alt="The Fit Changes Everything - MotionFit™ Trousers"
                className="hero-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&h=1080&fit=crop"
                }}
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
              <div className="container">
                <div className="hero-text">
                  <p className="hero-subheading" data-aos="fade-up">Premium Men's Trousers</p>
                  <h1 className="hero-heading" data-aos="fade-up" data-aos-delay="100">MotionFit™ Trousers</h1>
                  <p className="hero-description" data-aos="fade-up" data-aos-delay="200">Perfect Fit, Premium Comfort, 2-Way Stretch Performance</p>
                </div>
                <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
                  <Link href="/product" className="btn btn-primary btn-lg">Shop MotionFit</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="hero-pagination swiper-pagination"></div>
        <div className="hero-button-prev swiper-button-prev"></div>
        <div className="hero-button-next swiper-button-next"></div>
      </section>
    </>
  )
}
