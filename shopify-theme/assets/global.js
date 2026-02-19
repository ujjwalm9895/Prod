/**
 * Global JavaScript for R2F Shopify Theme
 */

// Basic theme functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper if present (will be initialized after Swiper loads)
  if (typeof Swiper !== 'undefined') {
    initializeSwiper();
  } else {
    // Wait for Swiper to load
    window.addEventListener('load', function() {
      if (typeof Swiper !== 'undefined') {
        initializeSwiper();
      }
    });
  }
});

function initializeSwiper() {
  const heroSliders = document.querySelectorAll('.hero-slider.swiper');
  heroSliders.forEach(function(slider) {
    if (slider.swiper) return; // Already initialized
    
    try {
      new Swiper(slider, {
        navigation: {
          nextEl: slider.querySelector('.swiper-button-next'),
          prevEl: slider.querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: slider.querySelector('.swiper-pagination'),
          clickable: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
      });
    } catch (e) {
      console.log('Swiper initialization skipped:', e);
    }
  });
}
