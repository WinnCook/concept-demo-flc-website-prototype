/**
 * HORIZON Theme System
 * Shared dark mode toggle functionality for all pages
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'horizon-theme';
  const root = document.documentElement;

  // Get preferred theme - default to dark mode
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) return savedTheme;
    return 'dark'; // Dark mode is the default experience
  }

  // Apply theme to document
  function setTheme(theme, showNotification = false) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update all toggle icons on the page
    document.querySelectorAll('.theme-toggle__icon').forEach(icon => {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    });

    // Show toast if available and requested
    if (showNotification && typeof window.showToast === 'function') {
      window.showToast(
        theme === 'dark' ? 'Dark Mode Enabled' : 'Light Mode Enabled',
        'Your preference has been saved',
        'success'
      );
    }
  }

  // Toggle between light and dark
  function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme') || getPreferredTheme();
    setTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
  }

  // Initialize theme immediately (before DOM ready to prevent flash)
  setTheme(getPreferredTheme(), false);

  // ===== MOBILE HAMBURGER MENU =====
  function initMobileNav() {
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const backdrop = document.querySelector('.mobile-nav__backdrop');

    if (!hamburger || !mobileNav) return;

    function openMobileNav() {
      hamburger.classList.add('active');
      mobileNav.classList.add('active');
      if (backdrop) backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    function toggleMobileNav() {
      if (mobileNav.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    }

    hamburger.addEventListener('click', toggleMobileNav);
    if (backdrop) backdrop.addEventListener('click', closeMobileNav);

    // Close on link click
    mobileNav.querySelectorAll('.mobile-nav__link, .mobile-nav__cta').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeMobileNav();
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && mobileNav.classList.contains('active')) {
        closeMobileNav();
      }
    });
  }

  // Setup event listeners when DOM is ready
  function init() {
    // Attach click handlers to all theme toggles
    document.querySelectorAll('.theme-toggle, #themeToggle').forEach(toggle => {
      toggle.addEventListener('click', toggleTheme);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? 'dark' : 'light', false);
      }
    });

    // Initialize mobile nav
    initMobileNav();
  }

  // Run init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.HorizonTheme = {
    get: getPreferredTheme,
    set: setTheme,
    toggle: toggleTheme
  };
})();
