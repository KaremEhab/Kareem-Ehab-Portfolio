(() => {
  'use strict';
  const finePointer = matchMedia('(pointer:fine) and (hover:hover)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (!finePointer.matches || reducedMotion.matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'joy-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<span class="joy-cursor-ring"></span><span class="joy-cursor-dot"></span>';
  document.body.append(cursor);
  document.body.classList.add('joy-cursor-enabled');

  const colors = ['#2b39ef', '#d5f55b', '#ff835f', '#a987ef'];
  const shapes = ['✦', '●', '◇', '✧'];
  const interactiveSelector = 'a,button,select,input,textarea,label,[role="button"],[data-project],.memory-tile,.hunt-tile';
  let x = innerWidth / 2;
  let y = innerHeight / 2;
  let lastX = x;
  let lastY = y;
  let lastTrail = 0;
  let frame = 0;
  let effectSurface = document.body;

  function renderCursor() {
    frame = 0;
    cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
  }

  function particle(px, py, options = {}) {
    const node = document.createElement('span');
    const index = options.index ?? Math.floor(Math.random() * shapes.length);
    node.className = `joy-particle ${options.burst ? 'joy-burst' : 'joy-trail'}`;
    node.textContent = shapes[index % shapes.length];
    node.style.left = `${px}px`;
    node.style.top = `${py}px`;
    node.style.color = colors[index % colors.length];
    node.style.setProperty('--joy-x', `${options.dx ?? (Math.random() - .5) * 26}px`);
    node.style.setProperty('--joy-y', `${options.dy ?? 10 + Math.random() * 24}px`);
    node.style.setProperty('--joy-rotate', `${options.rotate ?? (Math.random() - .5) * 180}deg`);
    node.style.setProperty('--joy-scale', `${options.scale ?? .65 + Math.random() * .55}`);
    effectSurface.append(node);
    setTimeout(() => node.remove(), options.burst ? 900 : 680);
  }

  function trail(px, py, now) {
    const distance = Math.hypot(px - lastX, py - lastY);
    if (now - lastTrail < 34 || distance < 9) return;
    lastTrail = now;
    lastX = px;
    lastY = py;
    particle(px + (Math.random() - .5) * 5, py + (Math.random() - .5) * 5);
  }

  function burst(px, py, strong) {
    const count = strong ? 16 : 10;
    for (let index = 0; index < count; index++) {
      const angle = (Math.PI * 2 * index) / count + Math.random() * .18;
      const distance = (strong ? 48 : 34) + Math.random() * (strong ? 46 : 28);
      particle(px, py, {
        burst: true,
        index,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
        rotate: 90 + Math.random() * 260,
        scale: .8 + Math.random() * .7
      });
    }
    const ripple = document.createElement('span');
    ripple.className = 'joy-click-ring';
    ripple.style.left = `${px}px`;
    ripple.style.top = `${py}px`;
    effectSurface.append(ripple);
    setTimeout(() => ripple.remove(), 650);
  }

  document.addEventListener('pointermove', event => {
    if (event.pointerType && event.pointerType !== 'mouse') return;
    x = event.clientX;
    y = event.clientY;
    effectSurface = event.target.closest?.('dialog[open]') || document.body;
    if (cursor.parentElement !== effectSurface) effectSurface.append(cursor);
    cursor.classList.add('is-visible');
    if (!frame) frame = requestAnimationFrame(renderCursor);
    trail(x, y, performance.now());
    const action = event.target.closest?.(interactiveSelector);
    cursor.classList.toggle('is-action', Boolean(action));
    cursor.classList.toggle('is-text', Boolean(event.target.closest?.('input,textarea')));
  }, { passive: true });

  document.addEventListener('pointerdown', event => {
    if (event.pointerType && event.pointerType !== 'mouse') return;
    const action = event.target.closest?.(interactiveSelector);
    cursor.classList.add('is-pressed');
    burst(event.clientX, event.clientY, Boolean(action));
  }, { passive: true });
  document.addEventListener('pointerup', () => cursor.classList.remove('is-pressed'), { passive: true });
  document.addEventListener('pointercancel', () => cursor.classList.remove('is-pressed'), { passive: true });
  document.documentElement.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
  document.documentElement.addEventListener('mouseenter', () => cursor.classList.add('is-visible'));
})();
