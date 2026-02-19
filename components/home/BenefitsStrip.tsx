"use client"

export function BenefitsStrip() {
  return (
    <section className="benefits-strip-modern">
      <div className="container">
        <div className="benefits-grid-modern">
          <div className="benefit-card" data-aos="fade-up">
            <div className="benefit-icon-modern">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#C49A6C" strokeWidth="2.5"/>
                <path d="M16 24l6 6 10-12" stroke="#C49A6C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="benefit-title-modern">Perfect Fit</h3>
            <p className="benefit-desc-modern">Tailored for Indian body types</p>
          </div>

          <div className="benefit-card" data-aos="fade-up" data-aos-delay="50">
            <div className="benefit-icon-modern">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="10" y="10" width="28" height="28" rx="3" stroke="#C49A6C" strokeWidth="2.5"/>
                <path d="M18 24h12M24 18v12" stroke="#C49A6C" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="benefit-title-modern">Premium Fabric</h3>
            <p className="benefit-desc-modern">Luxurious feel</p>
          </div>

          <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
            <div className="benefit-icon-modern">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 10v28M10 24h28" stroke="#C49A6C" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="24" cy="24" r="8" stroke="#C49A6C" strokeWidth="2.5"/>
              </svg>
            </div>
            <h3 className="benefit-title-modern">Wrinkle-Free</h3>
            <p className="benefit-desc-modern">Always look sharp</p>
          </div>

          <div className="benefit-card" data-aos="fade-up" data-aos-delay="150">
            <div className="benefit-icon-modern">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#C49A6C" strokeWidth="2.5"/>
                <path d="M24 14v10l6 6" stroke="#C49A6C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="benefit-title-modern">2-Way Stretch</h3>
            <p className="benefit-desc-modern">Maximum comfort</p>
          </div>

          <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
            <div className="benefit-icon-modern">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#C49A6C" strokeWidth="2.5"/>
                <path d="M32 16L16 32M16 16l16 16" stroke="#C49A6C" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="benefit-title-modern">Easy Returns</h3>
            <p className="benefit-desc-modern">7-day hassle-free</p>
          </div>
        </div>
      </div>
    </section>
  )
}
