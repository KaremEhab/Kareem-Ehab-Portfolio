(() => {
  'use strict';
  const menu = document.querySelector('#headerMenu');
  const toggle = document.querySelector('#menuToggle');
  function setMenu(open, restoreFocus = false) {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.classList.toggle('open', open);
    if (restoreFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => setMenu(menu.hidden));
  document.addEventListener('click', event => {
    if (!menu.hidden && !document.querySelector('#siteHeader').contains(event.target)) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) setMenu(false, true);
  });
  document.addEventListener('focusin', event => {
    if (!menu.hidden && !document.querySelector('#siteHeader').contains(event.target)) setMenu(false);
  });
  document.querySelector('.menu-contact')?.addEventListener('click', () => setMenu(false));
  document.querySelectorAll('.site-header nav a,.site-header .brand').forEach(link => link.addEventListener('click', () => setMenu(false)));
  const headerLinks = [...document.querySelectorAll('.site-header nav a')];
  if ('IntersectionObserver' in window) {
    const activeSections = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        headerLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current','location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin:'-20% 0px -55% 0px', threshold:0});
    ['home','projects','play','contact'].map(id => document.getElementById(id)).filter(Boolean).forEach(section => activeSections.observe(section));
  }
  const visual = document.querySelector('#contactVisual');
  const layers = [...document.querySelectorAll('.scene-layer')];
  const briefButton = document.querySelector('#contactButton');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = !('IntersectionObserver' in window);
  let frame = 0;
  function renderScroll() {
    frame = 0;
    if (visible && !reduced.matches && !document.hidden) {
      const rect = visual.getBoundingClientRect();
      // Finish at the fully revealed scene, including at the end of the page.
      // Each plane travels a different distance; reversing scroll reverses the depth.
      const revealDistance = Math.min(rect.height, window.innerHeight * .8);
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / revealDistance));
      layers.forEach(layer => layer.style.setProperty('--layer-y', `${((1 - progress) * rect.height * Number(layer.dataset.depth)).toFixed(2)}px`));
    } else if (reduced.matches) layers.forEach(layer => layer.style.setProperty('--layer-y', '0px'));
  }
  function requestScroll() { if (!frame) frame = requestAnimationFrame(renderScroll); }
  document.addEventListener('localechange', requestScroll);
  document.addEventListener('visibilitychange', requestScroll);
  reduced.addEventListener('change', requestScroll);
  window.addEventListener('scroll', requestScroll, {passive:true});
  window.addEventListener('resize', requestScroll, {passive:true});
  if ('IntersectionObserver' in window) {
    const motionObserver = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; requestScroll(); }, {rootMargin:'80px 0px'});
    motionObserver.observe(visual);
    const ticker = document.querySelector('.ticker');
    const tickerObserver = new IntersectionObserver(entries => ticker.classList.toggle('ticker-visible', entries[0].isIntersecting));
    tickerObserver.observe(ticker);
  }
  requestScroll();
})();
