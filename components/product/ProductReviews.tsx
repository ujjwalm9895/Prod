"use client"

import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const reviews = [
  { author: "Pranav", initial: "P", body: "Good and comfortable", highlight: "Good and comfortable trouser" },
  { author: "OUMA SANKAR", initial: "O", body: "Good", highlight: "Good" },
  { author: "Vikrant", initial: "V", body: "Perfect fit", highlight: "Perfect fit, good quality" },
  { author: "MunavarAhmed", initial: "M", body: "Super!!", highlight: "Super!! Size is perfect, Material too good. Stitching quality is excellent!!!!!!" },
]

export function ProductReviews() {
  return (
    <>
      <style jsx>{`
        @keyframes reviews-section-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes review-card-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .reviews-section {
          width: 100%;
          max-width: none;
          margin: 2.5rem 0 2rem;
          padding: 2.5rem 1.5rem 3rem;
          box-sizing: border-box;
          border-top: 2px solid #e5e5e5;
          background: #fafafa;
          text-align: center;
          content-visibility: auto;
          contain-intrinsic-size: auto 320px;
          animation: reviews-section-in 0.6s ease-out;
        }
        .reviews-section h2 {
          font-size: 1.35rem;
          margin: 0 0 0.5rem;
        }
        .reviews-section > p {
          margin: 0 0 0.5rem;
          font-size: 0.95rem;
          color: #555;
        }
        .reviews-section > p a {
          color: #000;
          text-decoration: underline;
        }
        .reviews-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .reviews-summary .reviews-stars {
          color: var(--product-accent, #b8860b);
        }
        .reviews-summary > span:last-child {
          font-size: 0.9rem;
          color: #666;
        }
        .reviews-slider-wrap {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .reviews-slider.swiper {
          overflow: hidden;
          padding: 0.5rem 0 3rem;
          margin: 0 auto;
          width: 100%;
          max-width: 1200px;
          box-sizing: border-box;
        }
        .reviews-slider .swiper-wrapper {
          align-items: stretch;
        }
        .reviews-slider .swiper-slide {
          height: auto;
          display: flex;
          justify-content: center;
        }
        .reviews-slider .swiper-slide .review-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          max-width: 380px;
          margin: 0 auto;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .reviews-slider .swiper-slide-active .review-card {
          transform: scale(1.03);
          box-shadow: 0 10px 28px rgba(0,0,0,0.08);
        }
        .reviews-section .reviews-slider {
          text-align: center;
        }
        .review-card {
          border: 1px solid #eee;
          border-radius: 10px;
          padding: 1.25rem;
          margin: 0;
          background: #fff;
          height: 100%;
          min-height: 120px;
          text-align: center;
          animation: review-card-in 0.5s ease-out;
        }
        .review-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .review-avatar {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e5e5e5 0%, #eee 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
        }
        .review-author {
          font-weight: 600;
          font-size: 0.95rem;
        }
        .review-body {
          color: #444;
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.5;
          flex: 1;
          text-align: center;
        }
        .reviews-slider .swiper-pagination {
          bottom: 0.5rem;
          left: 0;
          width: 100%;
          text-align: center;
        }
        .reviews-slider .swiper-button-prev,
        .reviews-slider .swiper-button-next {
          color: #111;
          background: none;
          top: 50%;
          transform: translateY(-50%);
          margin-top: 0;
        }
        .reviews-slider .swiper-button-prev {
          left: 0;
        }
        .reviews-slider .swiper-button-next {
          right: 0;
        }
        .reviews-slider .swiper-button-prev::after,
        .reviews-slider .swiper-button-next::after {
          font-size: 20px;
        }
        .load-more-reviews {
          display: block;
          width: auto;
          margin: 2rem auto 0;
          padding: 0.6rem 1.5rem;
          background: #fff;
          border: 1px solid #000;
          cursor: pointer;
          font-size: 0.9rem;
          border-radius: 6px;
          text-align: center;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .load-more-reviews:hover {
          background: #111;
          color: #fff;
        }
      `}</style>
      <section className="reviews-section" id="reviews">
        <h2>Customer Reviews</h2>
        <p>Based on 320 reviews</p>
        <p><Link href="#">Write a review</Link></p>
        <div className="reviews-summary">
          <span className="reviews-stars">★★★★★</span>
          <span>68% (217) · 29% (93) · 3% (8) · 0% (0) · 1% (2)</span>
        </div>
        <div className="reviews-slider-wrap">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".reviews-prev",
              nextEl: ".reviews-next",
            }}
            pagination={{
              el: ".reviews-pagination",
              clickable: true,
            }}
            className="reviews-slider swiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <div className="review-header">
                    <span className="review-avatar">{review.initial}</span>
                    <span className="review-author">{review.author}</span>
                  </div>
                  <p className="review-body">
                    <strong>{review.highlight}</strong>
                    {review.body !== review.highlight && <><br />{review.body}</>}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination reviews-pagination"></div>
          <div className="swiper-button-prev reviews-prev"></div>
          <div className="swiper-button-next reviews-next"></div>
        </div>
        <button type="button" className="load-more-reviews">Load More</button>
      </section>
    </>
  )
}
