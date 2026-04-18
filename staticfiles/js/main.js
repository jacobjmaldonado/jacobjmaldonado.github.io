(() => {
  'use strict';

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    const toggleVisible = () => {
      scrollTopBtn.classList.toggle('is-visible', window.scrollY > 400);
    };
    toggleVisible();
    document.addEventListener('scroll', toggleVisible, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (typeof GLightbox === 'function') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      openEffect: 'fade',
      closeEffect: 'fade',
      slideEffect: 'fade',
    });
  }
})();
