"use client"

export function AnnouncementBar() {
  return (
    <div className="announcement-strip" aria-live="polite">
      <style jsx>{`
        .announcement-strip {
          width: 100%;
          overflow: hidden;
          background: #0a0a0a;
          white-space: nowrap;
          position: relative;
          z-index: 1000;
        }
        .announcement-strip__track {
          display: inline-flex;
          animation: announcement-marquee 30s linear infinite;
          animation-iteration-count: infinite;
          contain: layout;
        }
        .announcement-strip__segment {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.5rem;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          flex-shrink: 0;
        }
        .announcement-strip__segment--blue {
          background: #0a0a0a;
        }
        .announcement-strip__segment--black {
          background: #000;
        }
        .announcement-strip__segment--black span {
          font-weight: 700;
        }
        .announcement-strip__segment--emphasis span {
          font-weight: 700;
        }
        .announcement-strip__icon {
          flex-shrink: 0;
          color: #facc15;
        }
        @keyframes announcement-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 640px) {
          .announcement-strip__segment {
            padding: 0.5rem 1rem;
            font-size: 0.7rem;
            gap: 0.4rem;
          }
          .announcement-strip__icon {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
      <div className="announcement-strip__track">
        <div className="announcement-strip__segment announcement-strip__segment--blue">
          <svg className="announcement-strip__icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11 2L7 10h3v8l4-8h-3V2z" />
          </svg>
          <span>₹200 Instant Discount on Prepaid Orders</span>
        </div>
        <div className="announcement-strip__segment announcement-strip__segment--black">
          <span>Free PAN India Shipping</span>
        </div>
        <div className="announcement-strip__segment announcement-strip__segment--blue announcement-strip__segment--emphasis">
          <span>Easy Size Exchange</span>
        </div>
        <div className="announcement-strip__segment announcement-strip__segment--blue">
          <svg className="announcement-strip__icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11 2L7 10h3v8l4-8h-3V2z" />
          </svg>
          <span>₹200 Instant Discount on Prepaid Orders</span>
        </div>
        <div className="announcement-strip__segment announcement-strip__segment--black">
          <span>Free PAN India Shipping</span>
        </div>
        <div className="announcement-strip__segment announcement-strip__segment--blue announcement-strip__segment--emphasis">
          <span>Easy Size Exchange</span>
        </div>
      </div>
    </div>
  )
}
