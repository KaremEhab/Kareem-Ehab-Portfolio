(() => {
  'use strict';
  const menu = document.querySelector('#headerMenu');
  const toggle = document.querySelector('#menuToggle');
  const header = document.querySelector('#siteHeader');

  function setMenu(open, restoreFocus = false) {
    if (!menu || !toggle) return;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.classList.toggle('open', open);
    if (restoreFocus) toggle.focus();
  }

  if (toggle && menu) {
    toggle.addEventListener('click', () => setMenu(menu.hidden));
    document.addEventListener('click', event => {
      if (!menu.hidden && header && !header.contains(event.target)) setMenu(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !menu.hidden) setMenu(false, true);
    });
  }


  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
