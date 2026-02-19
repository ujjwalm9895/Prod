"use client"

export function ProductDetailsSection() {
  return (
    <>
      <style jsx>{`
        .product-details-section {
          margin-top: 2.5rem;
          padding: 2.5rem 0;
          background: #fff;
          border-top: 1px solid #eee;
          clear: both;
          content-visibility: auto;
          contain-intrinsic-size: auto 400px;
          width: 100%;
          box-sizing: border-box;
        }
        .product-details-section__inner {
          max-width: 100%;
          width: 100%;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: left;
        }
        .trust-block {
          background: linear-gradient(135deg, #f8f6f2 0%, #fff 100%);
          padding: 2.5rem 2rem;
          margin: 0 auto 2rem;
          text-align: center;
          border-radius: 12px;
          border: 1px solid rgba(196, 154, 108, 0.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          max-width: 1200px;
        }
        .trust-block h3 {
          font-size: clamp(1.35rem, 2.5vw, 1.75rem);
          margin: 0 0 1rem;
          font-weight: 700;
          color: #111;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .trust-block p {
          margin: 0.875rem 0;
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: #444;
          line-height: 1.7;
          font-weight: 400;
        }
        .trust-block p:first-of-type {
          color: #666;
          font-size: clamp(0.95rem, 1.6vw, 1.05rem);
          font-weight: 500;
        }
        .trust-block p strong {
          color: #111;
          font-weight: 700;
          font-size: clamp(1.05rem, 1.9vw, 1.2rem);
        }
        .trust-block p:last-child {
          margin-bottom: 0;
        }
        .product-details-content-box {
          background: #f9f9f9;
          border: 1px solid #eee;
          border-radius: 10px;
          padding: 2rem 2.5rem;
          margin-top: 1rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        .product-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          width: 100%;
          align-items: start;
        }
        .product-details-column {
          display: flex;
          flex-direction: column;
        }
        .product-detail__description {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }
        .product-detail__description h2 {
          font-size: 1.15rem;
          margin: 0 0 0.75rem;
          color: #111;
          font-weight: 700;
        }
        .product-detail__description h2:first-child {
          margin-top: 0;
        }
        .product-detail__description p {
          margin: 0 0 1.25rem;
          font-size: 1rem;
          color: #444;
          line-height: 1.6;
        }
        .product-detail__description ul {
          margin: 0 0 1.25rem;
          padding-left: 1.5rem;
          font-size: 0.98rem;
          color: #444;
          line-height: 1.7;
        }
        .product-detail__description ul li {
          margin-bottom: 0.5rem;
        }
        .product-detail__description ul li:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 767px) {
          .product-details-section {
            padding: 2rem 0;
          }
          .product-details-section__inner {
            padding: 0 1rem;
          }
          .trust-block {
            padding: 2rem 1.5rem;
            margin-bottom: 1.5rem;
          }
          .trust-block h3 {
            font-size: clamp(1.25rem, 3vw, 1.5rem);
            margin-bottom: 0.875rem;
          }
          .trust-block p {
            font-size: clamp(0.95rem, 2vw, 1.05rem);
            margin: 0.75rem 0;
          }
          .trust-block p strong {
            font-size: clamp(1rem, 2.2vw, 1.1rem);
          }
          .product-details-content-box {
            padding: 1.5rem 1.25rem;
          }
          .product-details-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
      <section className="product-details-section" aria-labelledby="product-details-heading">
        <div className="product-details-section__inner">
          <div className="product-detail__trust trust-block">
            <h3>India's New Favorite Trousers – Built for Everyday Comfort</h3>
            <p>Loved by growing customers – Join the movement.</p>
            <p><strong>Sizes 28–36</strong> · Easy size exchange available.</p>
            <p>All-season durability – Comfort that lasts all year.</p>
          </div>
          <div className="product-details-content-box">
            <div className="product-details-grid">
              <div className="product-details-column product-details-left">
                <div className="product-detail__description product-description-block">
                  <h2 id="product-details-heading">Product Details</h2>
                  <p><strong>MotionFit™ Formal Trouser</strong> – Style and comfort for Indian body types. Proprietary 2-way stretch fabric, slim fit with a no belt-gap waistband.</p>
                  <h2>Key Features</h2>
                  <ul>
                    <li><strong>Fabric:</strong> Blended cotton, highly durable</li>
                    <li><strong>Fit:</strong> Slim fit, trimmer in the hips & seat</li>
                    <li><strong>Stretch:</strong> 2-way stretch, holds shape</li>
                    <li><strong>Rise & length:</strong> Mid-rise, standard length</li>
                    <li><strong>Wrinkle-free:</strong> Sharp look all day</li>
                    <li><strong>Deep pockets:</strong> Phone and wallet sit flush</li>
                    <li><strong>Versatile:</strong> Work, travel, casual</li>
                  </ul>
                </div>
              </div>
              <div className="product-details-column product-details-right">
                <div className="product-detail__description product-description-block">
                  <h2>Care</h2>
                  <ul>
                    <li>Machine wash cold, similar colors</li>
                    <li>Do not bleach · Tumble dry low or hang dry</li>
                    <li>Iron on low heat if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
