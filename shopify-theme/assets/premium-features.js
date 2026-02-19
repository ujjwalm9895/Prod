/**
 * Premium Features & Enhancements
 * Luxury E-commerce Experience
 */

(function() {
  'use strict';

  // ============================================
  // PREMIUM PAGE LOADER
  // ============================================
  
  const initPremiumLoader = () => {
    const body = document.body;
    if (!body || !body.classList.contains('page-index')) return;
    if (document.querySelector('.premium-loader')) return; // already rendered in layout

    // If no loader exists (edge), create a fallback with logo
    const loader = document.createElement('div');
    loader.className = 'premium-loader';
    loader.innerHTML = `
      <div class="loader-logo">
        <img src="{{ 'loader-logo.png' | asset_url }}"
             alt="R2F Loader Logo">
      </div>
      <div class="loader-bar">
        <div class="loader-bar-fill"></div>
      </div>
    `;
    document.body.prepend(loader);

    const hardTimeout = setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 200);
    }, 2000);

    window.addEventListener('load', () => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 200);
      clearTimeout(hardTimeout);
    });
  };

  // ============================================
  // SCROLL PROGRESS INDICATOR
  // ============================================
  
  const initScrollIndicator = () => {
    // disabled per request (scroll bar removed)
    return;
  };

  // ============================================
  // BACK TO TOP BUTTON
  // ============================================
  
  const initBackToTop = () => {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    `;
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
    });

    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };

  // ============================================
  // NOTIFICATION TOAST SYSTEM
  // ============================================
  
  const showNotification = (title, message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    
    const iconSVG = type === 'success' 
      ? '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" fill="none"/>'
      : '<path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" fill="none"/>';
    
    toast.innerHTML = `
      <div class="notification-icon ${type}">
        <svg width="24" height="24" viewBox="0 0 24 24">${iconSVG}</svg>
      </div>
      <div class="notification-content">
        <h4>${title}</h4>
        <p>${message}</p>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  };

  // Make it globally available
  window.showNotification = showNotification;

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
  };

  // ============================================
  // PARALLAX EFFECT
  // ============================================
  
  const initParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    if (!parallaxElements.length) return;

    window.addEventListener('scroll', () => {
      parallaxElements.forEach(element => {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  };

  // ============================================
  // ANIMATED COUNTERS
  // ============================================
  
  const initCounters = () => {
    const counters = document.querySelectorAll('.stat-counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  };

  // ============================================
  // QUICK VIEW MODAL
  // ============================================
  
  const initQuickView = () => {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
      <button class="quick-view-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <div class="quick-view-content">
        <div id="quick-view-body"></div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.quick-view-close');
    
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Add quick view buttons to product cards
    document.querySelectorAll('.product-card').forEach(card => {
      if (!card.querySelector('.product-card-quick-view')) {
        const quickViewBtn = document.createElement('div');
        quickViewBtn.className = 'product-card-quick-view';
        quickViewBtn.textContent = 'Quick View';
        card.querySelector('.product-card-image').appendChild(quickViewBtn);

        quickViewBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          openQuickView(card);
        });
      }
    });

    function openQuickView(productCard) {
      const productImage = productCard.querySelector('img').src;
      const productTitle = productCard.querySelector('.product-card-title').textContent;
      const productPrice = productCard.querySelector('.price-current').textContent;
      
      const quickViewBody = document.getElementById('quick-view-body');
      quickViewBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
          <div>
            <img src="${productImage}" alt="${productTitle}" style="width: 100%; border-radius: 8px;">
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <h2 style="font-size: 1.75rem; font-weight: 700; color: #000;">${productTitle}</h2>
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-gold);">${productPrice}</div>
            <div style="border-top: 1px solid #e0e0e0; padding-top: 1rem;">
              <h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">Select Size:</h4>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${['28', '30', '32', '34', '36', '38', '40'].map(size => 
                  `<button class="size-option" style="padding: 0.5rem 1rem; border: 1px solid #d0d0d0; background: white; border-radius: 4px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.borderColor='var(--color-gold)'; this.style.color='var(--color-gold)';" onmouseout="this.style.borderColor='#d0d0d0'; this.style.color='inherit';">${size}</button>`
                ).join('')}
              </div>
            </div>
            <button class="btn btn-primary btn-lg"
                    style="margin-top: auto;"
                    data-quick-add
                    data-product-id="${productTitle.toLowerCase().replace(/\s+/g, '-')}"
                    data-product-title="${productTitle}"
                    data-product-price="${productPrice.replace(/[^\d]/g, '')}"
                    data-product-image="${productImage}">
              Add to Cart
            </button>
            <a href="product.html" class="btn btn-secondary btn-lg">View Full Details</a>
          </div>
        </div>
      `;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      quickViewBody.querySelectorAll('.size-option').forEach(btn => {
        btn.addEventListener('click', () => {
          quickViewBody.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
      const defaultSizeBtn = quickViewBody.querySelector('.size-option');
      if (defaultSizeBtn && !defaultSizeBtn.classList.contains('active')) {
        defaultSizeBtn.classList.add('active');
      }

      const quickAddBtn = quickViewBody.querySelector('[data-quick-add]');
      if (quickAddBtn) {
        quickAddBtn.addEventListener('click', () => {
          const product = {
            id: quickAddBtn.dataset.productId,
            title: quickAddBtn.dataset.productTitle,
            price: parseInt(quickAddBtn.dataset.productPrice || '0', 10),
            compareAt: parseInt(quickAddBtn.dataset.productPrice || '0', 10),
            image: quickAddBtn.dataset.productImage,
            quantity: 1,
            size: quickViewBody.querySelector('.size-option.active')?.textContent || '',
          };

          if (window.R2F_CART && typeof window.R2F_CART.add === 'function') {
            window.R2F_CART.add(product);
          } else if (typeof window.showNotification === 'function') {
            window.showNotification('Added to Cart!', `${product.title} has been added to your cart`, 'success');
          }
        });
      }
    }
  };

  // ============================================
  // PRODUCT CARD ENHANCEMENTS
  // ============================================
  
  const initProductCardEnhancements = () => {
    document.querySelectorAll('.product-card').forEach((card, index) => {
      // Add badges
      if (index % 3 === 0 && !card.querySelector('.product-card-badge')) {
        const badge = document.createElement('div');
        badge.className = 'product-card-badge';
        badge.textContent = 'New';
        card.appendChild(badge);
      }

      // Add action buttons
      if (!card.querySelector('.product-card-actions')) {
        const actions = document.createElement('div');
        actions.className = 'product-card-actions';
        actions.innerHTML = `
          <button class="product-action-btn wishlist-btn" title="Add to Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button class="product-action-btn compare-btn" title="Compare">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </button>
        `;
        card.appendChild(actions);

        // Wishlist functionality
        const wishlistBtn = actions.querySelector('.wishlist-btn');
        wishlistBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          wishlistBtn.classList.toggle('active');
          const productTitle = card.querySelector('.product-card-title').textContent;
          if (wishlistBtn.classList.contains('active')) {
            wishlistBtn.querySelector('svg').style.fill = 'currentColor';
            showNotification('Added to Wishlist', `${productTitle} added to your wishlist`, 'success');
          } else {
            wishlistBtn.querySelector('svg').style.fill = 'none';
            showNotification('Removed from Wishlist', `${productTitle} removed from wishlist`, 'success');
          }
        });

        // Compare functionality
        const compareBtn = actions.querySelector('.compare-btn');
        compareBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const productTitle = card.querySelector('.product-card-title').textContent;
          showNotification('Added to Compare', `${productTitle} added to comparison list`, 'success');
        });
      }
    });
  };

  // ============================================
  // SMOOTH ANCHOR SCROLLING
  // ============================================
  
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // ============================================
  // IMAGE LAZY LOADING WITH BLUR EFFECT
  // ============================================
  
  const initLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  };

  // ============================================
  // ADD TO CART ANIMATION
  // ============================================
  
  const initAddToCartAnimation = () => {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.btn-primary') && 
          (e.target.textContent.includes('Add to Cart') || 
           e.target.closest('.btn-primary').textContent.includes('Add to Cart'))) {
        
        const button = e.target.closest('.btn-primary');
        const productCard = button.closest('.product-card');
        
        if (productCard) {
          const productTitle = productCard.querySelector('.product-card-title')?.textContent || 'Product';
          showNotification('Added to Cart!', `${productTitle} has been added to your cart`, 'success');
          
          // Update cart count
          const cartCount = document.querySelector('.cart-count');
          if (cartCount) {
            const currentCount = parseInt(cartCount.textContent) || 0;
            cartCount.textContent = currentCount + 1;
            cartCount.style.animation = 'pulse 0.5s ease';
            setTimeout(() => cartCount.style.animation = '', 500);
          }
        }
      }
    });
  };

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  
  const initHeaderScrollEffect = () => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Hide header on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 500) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    });
  };

  // ============================================
  // INITIALIZE ALL FEATURES
  // ============================================
  
  const init = () => {
    try { initPremiumLoader(); } catch (e) { console.warn('loader init', e); }
    try { initScrollIndicator(); } catch (e) { console.warn('indicator init', e); }
    try { initBackToTop(); } catch (e) { console.warn('back-to-top init', e); }
    try { initScrollReveal(); } catch (e) { console.warn('reveal init', e); }
    try { initParallax(); } catch (e) { console.warn('parallax init', e); }
    try { initCounters(); } catch (e) { console.warn('counters init', e); }
    try { initQuickView(); } catch (e) { console.warn('quick-view init', e); }
    try { initProductCardEnhancements(); } catch (e) { console.warn('card enhance', e); }
    try { initSmoothScroll(); } catch (e) { console.warn('smooth scroll', e); }
    try { initLazyLoading(); } catch (e) { console.warn('lazy load', e); }
    try { initAddToCartAnimation(); } catch (e) { console.warn('atc animate', e); }
    try { initHeaderScrollEffect(); } catch (e) { console.warn('header scroll', e); }

    console.log('✨ Premium features initialized');
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

