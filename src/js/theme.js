/**
 * HORIZON Theme System
 * Shared dark mode toggle functionality for all pages
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'horizon-theme';
  const root = document.documentElement;

  // Get preferred theme (saved or system preference)
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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
