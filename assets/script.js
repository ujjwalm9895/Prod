/**
 * R2F - Right2Fit Theme JavaScript
 * Mobile-first, performance-optimized
 */

(function() {
  'use strict';

  // ============================================
  // Utility Functions
  // ============================================
  
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // ============================================
  // Mobile Navigation
  // ============================================
  
  const initMobileNav = () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const menuClose = document.querySelector('.mobile-nav-close');
    const navDrawer = document.querySelector('.mobile-nav-drawer');
    const navOverlay = document.querySelector('.mobile-nav-overlay');
    
    if (!menuToggle || !navDrawer || !navOverlay) return;

    const openMenu = () => {
      navDrawer.classList.add('active');
      navOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      navDrawer.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    navOverlay.addEventListener('click', closeMenu);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navDrawer.classList.contains('active')) {
        closeMenu();
      }
    });
  };

  // ============================================
  // Swiper/Carousel Initialization
  // ============================================
  
  const initSwipers = () => {
    // Check if Swiper is loaded
    if (typeof Swiper === 'undefined') {
      console.warn('Swiper library not loaded');
      return;
    }

    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
      new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        speed: 900,
        pagination: {
          el: '.hero-pagination',
          clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
      });
    }

    // Bestsellers Carousel
    const bestsellersCarousel = document.querySelector('.bestsellers-carousel');
    if (bestsellersCarousel) {
      new Swiper('.bestsellers-carousel', {
        slidesPerView: 2,
        spaceBetween: 16,
        pagination: {
          el: '.bestsellers-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.bestsellers-button-next',
          prevEl: '.bestsellers-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
      });
    }

    // Reviews Carousel
    const reviewsCarousel = document.querySelector('.reviews-carousel');
    if (reviewsCarousel) {
      new Swiper('.reviews-carousel', {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
          el: '.reviews-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.reviews-button-next',
          prevEl: '.reviews-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },
      });
    }

    // Product page: Customer Reviews slider (auto-advance every 2.5s)
    const reviewsSlider = document.querySelector('.reviews-slider');
    if (reviewsSlider) {
      new Swiper('.reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.reviews-slider .reviews-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.reviews-slider .reviews-next',
          prevEl: '.reviews-slider .reviews-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      });
    }

    // Product Main Image Slider (with optional hero video)
    const productMainImage = document.querySelector('.product-main-image');
    if (productMainImage) {
      const productSwiper = new Swiper('.product-main-image', {
        loop: true,
        pagination: {
          el: '.product-image-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.product-main-image .swiper-button-next',
          prevEl: '.product-main-image .swiper-button-prev',
        },
      });

      // Play video only when its slide is active; pause when leaving
      const playPauseProductVideo = () => {
        const activeSlide = productMainImage.querySelector('.swiper-slide-active');
        if (!activeSlide) return;
        const activeVideo = activeSlide.querySelector('.product-hero-video');
        productMainImage.querySelectorAll('.product-hero-video').forEach((v) => {
          if (v === activeVideo) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      };
      productSwiper.on('slideChangeTransitionEnd', playPauseProductVideo);
      playPauseProductVideo();

      // Thumbnail navigation (sync with real index when loop is used)
      const thumbnails = document.querySelectorAll('.product-thumbnail');
      thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
          productSwiper.slideTo(index);
          thumbnails.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        });
      });
      productSwiper.on('slideChangeTransitionEnd', () => {
        const realIndex = productSwiper.realIndex;
        thumbnails.forEach((t, i) => t.classList.toggle('active', i === realIndex));
      });
    }
  };

  // ============================================
  // Sticky Header
  // ============================================
  
  const initStickyHeader = () => {
    const header = document.querySelector('.site-header');
    if (!header || !header.classList.contains('sticky-header')) return;

    let lastScroll = 0;
    const headerHeight = header.offsetHeight;

    const handleScroll = throttle(() => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.classList.remove('scrolled');
        return;
      }

      if (currentScroll > lastScroll && currentScroll > headerHeight) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.classList.add('scrolled');
      }

      lastScroll = currentScroll;
    }, 100);

    window.addEventListener('scroll', handleScroll);
  };

  // ============================================
  // Quick Add to Cart
  // ============================================
  
  const initQuickAdd = () => {
    const quickAddButtons = document.querySelectorAll('.product-quick-add, .product-card-atc');
    
    quickAddButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const product = getProductDataFromElement(button);
        addCartItem(product);
      });
    });
  };

  // ============================================
  // Cart Functions
  // ============================================
  
  const updateCartCount = (count) => {
    const cartCounts = document.querySelectorAll('[data-cart-count], .cart-count');
    cartCounts.forEach(el => {
      el.textContent = count;
      el.style.display = 'flex';
      el.setAttribute('aria-label', `Cart items: ${count}`);
    });
  };

  // ============================================
  // Local Preview Cart (Shopify-like)
  // ============================================

  const CART_STORAGE_KEY = 'r2f-preview-cart';

  const notifyUser = () => {};

  const parsePriceValue = (value) => {
    if (typeof value === 'number') return value;
    if (!value) return 0;
    const numeric = String(value).replace(/[^\d.]/g, '');
    return parseInt(numeric, 10) || 0;
  };

  const formatPrice = (value) => {
    const amount = parsePriceValue(value);
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const getCartItems = () => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (error) {
      console.warn('Unable to read cart', error);
    }
    return [];
  };

  const saveCartItems = (items) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    return items;
  };

  const cartTotals = (items) => {
    const subtotal = items.reduce((sum, item) => sum + (parsePriceValue(item.price) * item.quantity), 0);
    const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
    return { subtotal, shipping, total: subtotal + shipping, itemsCount };
  };

  const getProductDataFromElement = (element) => {
    const card = element.closest('.product-card') || element.closest('.product-page');
    const title = element.dataset.productTitle || card?.dataset?.productTitle || card?.querySelector('.product-card-title, .product-title')?.textContent?.trim() || 'Product';
    const price = parsePriceValue(element.dataset.productPrice || card?.dataset?.productPrice || card?.querySelector('.price-current')?.textContent);
    const compareAt = parsePriceValue(element.dataset.productCompare || card?.dataset?.productCompare || card?.querySelector('.price-compare')?.textContent || price);
    const image = element.dataset.productImage || card?.dataset?.productImage || card?.querySelector('img')?.src || '';
    const size = element.dataset.productSize || card?.dataset?.productSize || '';
    const id = element.dataset.productId || card?.dataset?.productId || title.toLowerCase().replace(/\s+/g, '-');

    return {
      id,
      title,
      price,
      compareAt,
      image,
      size,
      quantity: parseInt(element.dataset.quantity || '1', 10) || 1,
    };
  };

  const addCartItem = (product) => {
    const items = getCartItems();
    const existing = items.find(item => item.id === product.id && item.size === product.size);
    if (existing) {
      existing.quantity += product.quantity || 1;
    } else {
      items.push({ ...product, quantity: product.quantity || 1 });
    }
    saveCartItems(items);
    const totals = cartTotals(items);
    updateCartCount(totals.itemsCount);
    notifyUser('Added to cart!', 'success');
    renderCartPage(items);
  };

  const updateCartItemQuantity = (id, quantity, size = '') => {
    const items = getCartItems();
    const target = items.find(item => item.id === id && item.size === size);
    if (target) {
      target.quantity = Math.max(1, quantity);
      saveCartItems(items);
      updateCartCount(cartTotals(items).itemsCount);
      renderCartPage(items);
    }
  };

  const removeCartItem = (id, size = '') => {
    const items = getCartItems().filter(item => !(item.id === id && item.size === size));
    saveCartItems(items);
    updateCartCount(cartTotals(items).itemsCount);
    renderCartPage(items);
    notifyUser('Removed from cart', 'success');
  };

  const renderCartPage = (items = getCartItems()) => {
    const cartPage = document.querySelector('.cart-page');
    if (!cartPage) return;

    const itemsContainer = cartPage.querySelector('[data-cart-items]');
    const summaryContainer = cartPage.querySelector('[data-cart-summary]');
    const subtitle = cartPage.querySelector('[data-cart-subtitle]');

    const totals = cartTotals(items);
    if (subtitle) {
      subtitle.textContent = `${totals.itemsCount || 0} item${totals.itemsCount === 1 ? '' : 's'} in your cart`;
    }

    if (!itemsContainer || !summaryContainer) return;

    if (!items.length) {
      itemsContainer.innerHTML = `
        <div class="cart-empty">
          <p>Your cart is empty.</p>
          <a href="collection.html" class="btn btn-primary">Start Shopping</a>
        </div>
      `;
      summaryContainer.innerHTML = `
        <div class="summary-empty">
          <p>Add items to see your order summary.</p>
          <a href="collection.html" class="btn btn-secondary btn-block">Browse Products</a>
        </div>
      `;
      return;
    }

    itemsContainer.innerHTML = items.map(item => `
      <div class="cart-item" data-cart-item-id="${item.id}" data-cart-item-size="${item.size || ''}">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="cart-item-details">
          <h3 class="cart-item-title">
            <a href="product.html">${item.title}</a>
          </h3>
          ${item.size ? `<p class="cart-item-variant">Size: ${item.size}</p>` : ''}
          <div class="cart-item-price">
            ${item.compareAt && item.compareAt > item.price ? `<span class="price-compare">${formatPrice(item.compareAt)}</span>` : ''}
            <span class="price-current">${formatPrice(item.price)}</span>
          </div>
          <div class="cart-item-actions mobile-only">
            <div class="quantity-selector">
              <button type="button" class="quantity-btn quantity-minus">-</button>
              <input type="number" value="${item.quantity}" min="1" class="quantity-input">
              <button type="button" class="quantity-btn quantity-plus">+</button>
            </div>
            <button type="button" class="cart-item-remove">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="2"/>
              </svg>
              Remove
            </button>
          </div>
        </div>
        <div class="cart-item-quantity desktop-only">
          <div class="quantity-selector">
            <button type="button" class="quantity-btn quantity-minus">-</button>
            <input type="number" value="${item.quantity}" min="1" class="quantity-input">
            <button type="button" class="quantity-btn quantity-plus">+</button>
          </div>
        </div>
        <div class="cart-item-total desktop-only">
          <span class="item-total">${formatPrice(item.price * item.quantity)}</span>
        </div>
        <div class="cart-item-remove-btn desktop-only">
          <button type="button" class="btn-icon cart-item-remove">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>
      </div>
    `).join('');

    summaryContainer.innerHTML = `
      <h2 class="summary-title">Order Summary</h2>
      <div class="summary-line">
        <span>Subtotal</span>
        <span data-cart-subtotal>${formatPrice(totals.subtotal)}</span>
      </div>
      <div class="summary-line">
        <span>Shipping</span>
        <span data-cart-shipping>${totals.shipping === 0 ? 'FREE' : formatPrice(totals.shipping)}</span>
      </div>
      <div class="summary-note ${totals.shipping === 0 ? 'success' : ''}">
        ${totals.shipping === 0 ? 'You qualify for free shipping!' : 'Add items worth ₹999 for free shipping.'}
      </div>
      <div class="summary-total">
        <span>Total</span>
        <span data-cart-total>${formatPrice(totals.total)}</span>
      </div>
      <a href="#" class="btn btn-primary btn-lg btn-block checkout-btn">
        Proceed to Checkout
      </a>
    `;

    // Bind quantity and remove buttons
    const bindCartControls = () => {
      itemsContainer.querySelectorAll('.cart-item').forEach(itemEl => {
        const id = itemEl.dataset.cartItemId;
        const size = itemEl.dataset.cartItemSize || '';
        const qtyInput = itemEl.querySelector('.quantity-input');

        itemEl.querySelectorAll('.quantity-minus').forEach(btn => {
          btn.addEventListener('click', () => {
            const current = parseInt(qtyInput.value, 10) || 1;
            updateCartItemQuantity(id, current - 1, size);
          });
        });

        itemEl.querySelectorAll('.quantity-plus').forEach(btn => {
          btn.addEventListener('click', () => {
            const current = parseInt(qtyInput.value, 10) || 1;
            updateCartItemQuantity(id, current + 1, size);
          });
        });

        itemEl.querySelectorAll('.cart-item-remove').forEach(btn => {
          btn.addEventListener('click', () => removeCartItem(id, size));
        });
      });
    };

    bindCartControls();
  };

  const initCartPreview = () => {
    const totals = cartTotals(getCartItems());
    updateCartCount(totals.itemsCount);
    renderCartPage();
  };

  // ============================================
  // Cart Drawer (mobile)
  // ============================================

  const renderCartDrawer = (items) => {
    const body = document.querySelector('[data-cart-drawer-body]');
    const subtotalEl = document.querySelector('[data-cart-drawer-subtotal]');
    if (!body) return;

    const totals = cartTotals(items);
    if (subtotalEl) subtotalEl.textContent = formatPrice(totals.subtotal);

    if (!items.length) {
      body.innerHTML = `<p class="cart-drawer-empty">Your bag is empty.</p>`;
      return;
    }

    body.innerHTML = items.map(item => `
      <div class="cart-drawer-item" data-cart-id="${item.id}" data-cart-size="${item.size || ''}">
        <img src="${item.image}" alt="${item.title}">
        <div>
          <div class="cart-drawer-item-title">${item.title}</div>
          ${item.size ? `<div class="cart-drawer-item-size">Size: ${item.size}</div>` : ''}
          <div class="cart-drawer-qty">
            <button class="cart-drawer-qty-minus" aria-label="Decrease quantity">-</button>
            <span class="cart-drawer-qty-value">${item.quantity}</span>
            <button class="cart-drawer-qty-plus" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div style="text-align:right">
          <div class="cart-drawer-item-price">${formatPrice(item.price)}</div>
          <button class="cart-drawer-remove">Remove</button>
        </div>
      </div>
    `).join('');

    // Bind qty and remove
    body.querySelectorAll('.cart-drawer-item').forEach(row => {
      const id = row.dataset.cartId;
      const size = row.dataset.cartSize || '';
      row.querySelector('.cart-drawer-qty-minus').addEventListener('click', () => {
        const item = items.find(i => i.id === id && i.size === size);
        if (item) updateCartItemQuantity(id, item.quantity - 1, size);
        refreshCartDrawer();
      });
      row.querySelector('.cart-drawer-qty-plus').addEventListener('click', () => {
        const item = items.find(i => i.id === id && i.size === size);
        if (item) updateCartItemQuantity(id, item.quantity + 1, size);
        refreshCartDrawer();
      });
      row.querySelector('.cart-drawer-remove').addEventListener('click', () => {
        removeCartItem(id, size);
        refreshCartDrawer();
      });
    });
  };

  const refreshCartDrawer = () => {
    const items = getCartItems();
    renderCartDrawer(items);
  };

  const initCartDrawer = () => {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    const cartIcon = document.querySelector('.cart-icon');
    const closeBtn = document.querySelector('.cart-drawer-close');
    if (!drawer || !overlay || !cartIcon) return;

    const openDrawer = () => {
      refreshCartDrawer();
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    cartIcon.addEventListener('click', (e) => {
      if (window.innerWidth < 1024) {
        e.preventDefault();
        openDrawer();
      }
    });

    overlay.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  };

  // ============================================
  // Search Overlay
  // ============================================
  const initSearchOverlay = () => {
    const trigger = document.querySelector('.header-icon[aria-label="Search"], .header-icon[href="/search"]');
    const overlay = document.getElementById('search-overlay');
    const backdrop = document.getElementById('search-overlay-backdrop');
    const closeBtn = document.querySelector('.search-overlay-close');
    if (!trigger || !overlay || !backdrop) return;

    const openSearch = (e) => {
      e.preventDefault();
      overlay.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      const input = overlay.querySelector('input[type="text"]');
      if (input) setTimeout(() => input.focus(), 50);
    };

    const closeSearch = () => {
      overlay.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    trigger.addEventListener('click', openSearch);
    backdrop.addEventListener('click', closeSearch);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeSearch();
    });
  };

  // ============================================
  // Notifications
  // ============================================
  
  const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px 24px;
      background-color: ${type === 'success' ? '#10B981' : '#EF4444'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 9999;
      animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  // ============================================
  // Product Page Functionality
  // ============================================
  
  const initProductPage = () => {
    // Variant selection
    const variantOptions = document.querySelectorAll('[name^="option-"]');
    variantOptions.forEach(option => {
      option.addEventListener('change', (e) => {
        const label = e.target.closest('.product-option').querySelector('.option-selected');
        if (label) {
          label.textContent = `: ${e.target.value}`;
        }
      });
    });

    // Quantity selector
    const quantityMinus = document.querySelector('.quantity-minus');
    const quantityPlus = document.querySelector('.quantity-plus');
    const quantityInput = document.querySelector('.quantity-input');

    if (quantityMinus && quantityPlus && quantityInput) {
      quantityMinus.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
        }
      });

      quantityPlus.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
      });
    }

    // Buy Now button
    const buyNowButton = document.querySelector('.product-buy-now');
    if (buyNowButton) {
      buyNowButton.addEventListener('click', () => {
        const form = document.getElementById('product-form');
        if (form) {
          const qty = parseInt(form.querySelector('.quantity-input')?.value || '1', 10) || 1;
          const selectedSize = form.querySelector('input[name="size"]:checked')?.value || '';
          const product = getProductDataFromElement(buyNowButton);
          addCartItem({ ...product, size: selectedSize, quantity: qty });
          notifyUser('Item saved to cart. Complete checkout on Shopify.', 'success');
        }
      });
    }

    // Add to Cart (preview)
    const productAtcButton = document.querySelector('.product-atc');
    const productForm = document.getElementById('product-form');
    const handleProductAdd = (triggerEl) => {
      const qty = parseInt(productForm?.querySelector('.quantity-input')?.value || '1', 10) || 1;
      const selectedSize = productForm?.querySelector('input[name="size"]:checked')?.value || '';
      const product = getProductDataFromElement(triggerEl);
      addCartItem({ ...product, size: selectedSize, quantity: qty });
    };

    if (productForm && productAtcButton) {
      productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleProductAdd(productAtcButton);
      });
    }

    const stickyAtcButton = document.querySelector('.sticky-atc-button');
    if (stickyAtcButton) {
      stickyAtcButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleProductAdd(stickyAtcButton);
      });
    }

    // Sticky ATC visibility on mobile
    const stickyBar = document.getElementById('sticky-atc-bar');
    const mainCta = document.querySelector('.product-actions .product-atc');
    const stickyPrice = document.querySelector('.sticky-price');
    const priceCurrent = document.querySelector('.price-current');

    const updateStickyPrice = () => {
      if (stickyPrice && priceCurrent) {
        stickyPrice.textContent = priceCurrent.textContent;
      }
    };
    updateStickyPrice();

    if ('IntersectionObserver' in window && stickyBar && mainCta) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            stickyBar.classList.remove('visible');
          } else {
            stickyBar.classList.add('visible');
          }
        });
      }, { rootMargin: '0px', threshold: 0 });
      io.observe(mainCta);
    }

    // Update sticky price when size/variant changes
    const variantRadios = document.querySelectorAll('.option-values.option-buttons input[type="radio"]');
    variantRadios.forEach(r => r.addEventListener('change', updateStickyPrice));
  };

  // ============================================
  // Collection Page Filters
  // ============================================
  
  const initCollectionFilters = () => {
    const filterToggle = document.querySelector('.mobile-filter-toggle');
    const sidebar = document.querySelector('.collection-sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    const filterOverlay = document.querySelector('.filter-overlay');

    if (!filterToggle || !sidebar) return;

    const openFilters = () => {
      sidebar.classList.add('active');
      if (filterOverlay) filterOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeFilters = () => {
      sidebar.classList.remove('active');
      if (filterOverlay) filterOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    filterToggle.addEventListener('click', openFilters);
    if (sidebarClose) sidebarClose.addEventListener('click', closeFilters);
    if (filterOverlay) filterOverlay.addEventListener('click', closeFilters);

    // Clear filters
    const clearFilters = document.querySelector('.clear-filters');
    if (clearFilters) {
      clearFilters.addEventListener('click', () => {
        const checkboxes = sidebar.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
      });
    }
  };

  // ============================================
  // Lazy Loading Images
  // ============================================
  
  const initLazyLoading = () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
              img.removeAttribute('data-srcset');
            }
            observer.unobserve(img);
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  };

  // ============================================
  // Animate On Scroll (Simple Implementation)
  // ============================================
  
  const initAOS = () => {
    if ('IntersectionObserver' in window) {
      const aosObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      const aosElements = document.querySelectorAll('[data-aos]');
      aosElements.forEach(el => aosObserver.observe(el));
    }
  };

  // ============================================
  // Contact Form
  // ============================================
  
  const initContactForm = () => {
    const contactForm = document.querySelector('form[action*="contact"]');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      const submitButton = contactForm.querySelector('[type="submit"]');
      if (submitButton) {
        submitButton.classList.add('loading');
        submitButton.disabled = true;
      }
    });
  };

  // ============================================
  // Initialize Everything
  // ============================================
  
  const init = () => {
    initMobileNav();
    initStickyHeader();
    initQuickAdd();
    initCartPreview();
    initCartDrawer();
    initSearchOverlay();
    initProductPage();
    initCollectionFilters();
    initLazyLoading();
    initAOS();
    initContactForm();
    
    // Initialize Swiper after a short delay to ensure DOM is ready
    setTimeout(initSwipers, 100);
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Load Swiper library dynamically if not present
  if (typeof Swiper === 'undefined') {
    const swiperCSS = document.createElement('link');
    swiperCSS.rel = 'stylesheet';
    swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(swiperCSS);

    const swiperJS = document.createElement('script');
    swiperJS.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    swiperJS.onload = initSwipers;
    document.head.appendChild(swiperJS);
  }

  // ============================================
  // Footer Collapsible Dropdowns
  // ============================================
  
  const initFooterCollapsible = () => {
    const footerToggles = document.querySelectorAll('.footer-toggle');
    
    if (!footerToggles.length) return;

    footerToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        // Only work on mobile/tablet (< 1024px)
        if (window.innerWidth >= 1024) return;
        
        e.preventDefault();
        
        const footerCol = this.closest('.footer-collapsible');
        const isActive = footerCol.classList.contains('active');
        
        // Close all other dropdowns (optional - remove if you want multiple open)
        // document.querySelectorAll('.footer-collapsible').forEach(col => {
        //   if (col !== footerCol) {
        //     col.classList.remove('active');
        //   }
        // });
        
        // Toggle current dropdown
        footerCol.classList.toggle('active');
      });
    });

    // Handle window resize - open all on desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 1024) {
          // Desktop - ensure all are "open" (CSS handles display)
          document.querySelectorAll('.footer-collapsible').forEach(col => {
            col.classList.remove('active');
          });
        }
      }, 250);
    });
  };

  // Initialize footer collapsible
  initFooterCollapsible();

  // ============================================
  // Mobile Menu Tabs
  // ============================================
  
  const initMobileMenuTabs = () => {
    const tabs = document.querySelectorAll('.mobile-nav-tab');
    const panels = document.querySelectorAll('.mobile-nav-panel');
    
    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all panels
        panels.forEach(p => p.classList.remove('active'));
        
        // Show target panel
        const targetPanel = document.querySelector(`[data-panel="${targetTab}"]`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  };

  // Initialize mobile menu tabs
  initMobileMenuTabs();

  // ============================================
  // Mobile Menu Accordion
  // ============================================
  
  const initMobileMenuAccordion = () => {
    const accordionToggles = document.querySelectorAll('.mobile-nav-accordion-toggle');
    if (!accordionToggles.length) return;

    accordionToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.closest('.mobile-nav-accordion');
        if (!parent) return;
        const isOpen = parent.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
      });
    });
  };

  // Initialize mobile menu accordion
  initMobileMenuAccordion();

  // Expose cart helpers for other scripts (preview only)
  window.R2F_CART = {
    add: addCartItem,
    get: getCartItems,
    render: renderCartPage,
    updateQuantity: updateCartItemQuantity,
    remove: removeCartItem,
  };

})();

