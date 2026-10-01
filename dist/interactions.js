(() => {
  'use strict';
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const loader = document.querySelector('#siteLoader');
  let finished = false;
  function finishLoading() {
    if (finished) return;
    finished = true;
    loader.classList.add('loaded');
    document.body.classList.add('site-ready');
    loader.setAttribute('aria-hidden', 'true');
    setTimeout(() => loader.remove(), 450);
  }
  // Never hold the page hostage to a slow font or artwork request.
  const failSafe = setTimeout(finishLoading, 4000);
  const heroAsset = document.querySelector('#heroModel');
  const heroReady = new Promise(resolve => {
    if (!heroAsset || heroAsset.complete) resolve();
    else {
      heroAsset.addEventListener('load', resolve, { once: true });
      heroAsset.addEventListener('error', resolve, { once: true });
    }
  });
  Promise.allSettled([heroReady, document.fonts?.ready || Promise.resolve()])
    .then(() => { clearTimeout(failSafe); finishLoading(); });

  // Give the rendered 3D artwork spatial movement without a heavy WebGL runtime.
  const model = document.querySelector('#heroModel');
  const modelShell = document.querySelector('.hero-orbit-shell');
  if (model && modelShell && !motionPreference.matches) {
    const hero = document.querySelector('.hero-selected');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    let pointerX = 0, pointerY = 0, targetProgress = 0, progress = 0;
    let currentX = 0, currentY = 0, frame = 0, lastTime = 0;
    let heroTop = 0, range = 1;
    const renderModel = time => {
      frame = 0;
      if (motionPreference.matches || document.hidden) { lastTime = 0; return; }
      const dt = lastTime ? Math.min(time - lastTime, 48) : 16.7;
      lastTime = time;
      const ease = 1 - Math.exp(-dt / 70);
      progress += (targetProgress - progress) * ease;
      currentX += (pointerX - currentX) * ease;
      currentY += (pointerY - currentY) * ease;
      const y = progress * (finePointer.matches ? 88 : 56);
      const z = progress * 9 + currentX * .16;
      const scale = 1 - progress * .035;
      // Touch scrolling uses a single composited 2D transform; no per-frame layout reads.
      const tilt = finePointer.matches ? ` rotateX(${currentY * .38}deg) rotateY(${currentX * .42}deg)` : '';
      model.style.transform = `translate3d(0,${y.toFixed(2)}px,0)${tilt} rotateZ(${z.toFixed(3)}deg) scale(${scale.toFixed(5)})`;
      if (Math.abs(targetProgress - progress) > .0001 || Math.abs(pointerX - currentX) > .01 || Math.abs(pointerY - currentY) > .01) {
        frame = requestAnimationFrame(renderModel);
      } else lastTime = 0;
    };
    const requestRender = () => { if (!frame) frame = requestAnimationFrame(renderModel); };
    const updateScroll = () => {
      targetProgress = Math.max(0, Math.min(1, (scrollY - heroTop) / range));
      requestRender();
    };
    const measure = () => {
      heroTop = hero.getBoundingClientRect().top + scrollY;
      range = Math.max(hero.offsetHeight, innerHeight * .8);
      updateScroll();
    };
    hero.addEventListener('pointermove', event => {
      if (!finePointer.matches) return;
      const bounds = hero.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - .5) * 18;
      pointerY = -((event.clientY - bounds.top) / bounds.height - .5) * 14;
      requestRender();
    }, { passive: true });
    hero.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0; requestRender(); });
    addEventListener('scroll', updateScroll, { passive: true });
    addEventListener('resize', measure, { passive: true });
    new ResizeObserver(measure).observe(hero);
    motionPreference.addEventListener('change', () => {
      if (motionPreference.matches) {
        cancelAnimationFrame(frame); frame = 0; lastTime = 0; model.style.transform = '';
      } else measure();
    });
    measure();
  }

  // Composited entrances replace per-scroll style writes and clipping.
  const targets = [...document.querySelectorAll('.section-head, .project, .about-heading, .about-profile, .principles-grid article, .play > div:first-child, .play-canvas, .game-intro, .game-board, .footer-top, .footer-links')];
  if ('IntersectionObserver' in window && !motionPreference.matches) {
    targets.forEach((node, index) => {
      node.classList.add('motion-target');
      node.style.setProperty('--motion-delay', `${node.classList.contains('project') ? (index % 2) * 70 : 0}ms`);
    });
    const entrances = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
        else {
          const above = entry.boundingClientRect.bottom <= 0;
          if (above || entry.boundingClientRect.top >= window.innerHeight - 64) {
            entry.target.style.setProperty('--motion-y', above ? '-18px' : '24px');
            entry.target.classList.remove('is-visible');
          }
        }
      });
    }, {rootMargin:'0px 0px -64px 0px', threshold:0});
    targets.forEach(node => entrances.observe(node));
    motionPreference.addEventListener('change', () => {
      if (motionPreference.matches) {
        entrances.disconnect(); targets.forEach(node => node.classList.add('is-visible'));
      }
    });
  }

  const board = document.querySelector('#gameBoard');
  const scoreLabel = document.querySelector('#gameScore');
  const pairsLabel = document.querySelector('#gamePairs');
  const bestLabel = document.querySelector('#gameBest');
  const status = document.querySelector('#gameStatus');
  let game = 'pairs';
  let huntTarget = -1;
  let huntBest = 0;
  let score = 0, lives = 3, streak = 0;
  try { huntBest = Number(localStorage.getItem('karem-color-hunt-high-score')) || 0; } catch (_) {}
  const symbols = [
    { icon: '●', name: 'circle', color: '#2b39ef' },
    { icon: '◎', name: 'ring', color: '#50651b' },
    { icon: '◆', name: 'diamond', color: '#ad4629' },
    { icon: '+', name: 'plus', color: '#6f43ad' },
    { icon: '■', name: 'square', color: '#25323c' },
    { icon: '✦', name: 'spark', color: '#a34275' }
  ];
  let first = null, locked = false, moves = 0, pairs = 0, pending = 0, best = 0;
  try { best = Number(localStorage.getItem('karem-pixel-pairs-high-score')) || 0; } catch (_) {}
  bestLabel.textContent = String(best);
  function flip(tile, show) {
    tile.classList.toggle('flipped', show);
    tile.setAttribute('aria-pressed', String(show));
    const symbol = symbols[Number(tile.dataset.symbol)];
    tile.setAttribute('aria-label', show ? `Tile ${tile.dataset.position}: ${symbol.name}` : `Tile ${tile.dataset.position}: hidden`);
  }
  function updateStats() {
    if (game === 'pairs') score = Math.max(0, pairs * 100 - (moves - pairs) * 10);
    scoreLabel.textContent = score;
    pairsLabel.textContent = game === 'hunt' ? lives : pairs;
    const previous = game === 'hunt' ? huntBest : best;
    if (score > previous) {
      if (game === 'hunt') huntBest = score; else best = score;
      try { localStorage.setItem(game === 'hunt' ? 'karem-color-hunt-high-score' : 'karem-pixel-pairs-high-score', String(score)); } catch (_) {}
    }
    bestLabel.textContent = String(game === 'hunt' ? huntBest : best);
  }
  function choose(tile) {
    if (locked || tile === first || tile.classList.contains('matched')) return;
    flip(tile, true);
    if (!first) { first = tile; status.textContent = 'Find its matching tile.'; return; }
    moves++;
    if (first.dataset.symbol === tile.dataset.symbol) {
      pairs++;
      for (const match of [first, tile]) {
        match.classList.add('matched');
        match.setAttribute('aria-disabled', 'true');
        match.setAttribute('aria-label', `Tile ${match.dataset.position}: ${symbols[Number(match.dataset.symbol)].name}, matched`);
      }
      first = null;
      updateStats();
      if (pairs === 6) {
        status.textContent = `All pairs found! ${score} points. Try for a new high score?`;
        board.classList.add('won');
      } else status.textContent = `A match! ${6 - pairs} pairs to go.`;
    } else {
      locked = true;
      const previous = first;
      status.textContent = 'Different shapes. Remember their places.';
      updateStats();
      pending = setTimeout(() => {
        flip(previous, false); flip(tile, false);
        first = null; locked = false; pending = 0;
        status.textContent = 'Try another pair.';
      }, 900);
    }
  }
  function huntBoard(focusIndex = -1) {
    const size = pairs < 4 ? 9 : 16;
    huntTarget = Math.floor(Math.random() * size);
    const hue = Math.floor(Math.random() * 360);
    const lightness = 40 + Math.floor(Math.random() * 12);
    const difference = Math.max(8, 23 - pairs * 1.3);
    board.classList.toggle('hunt-large', size === 16);
    board.replaceChildren(...Array.from({ length: size }, (_, index) => {
      const tile = document.createElement('button');
      tile.type = 'button'; tile.className = 'hunt-tile'; tile.dataset.position = index;
      tile.setAttribute('aria-label', `Color tile ${index + 1}`);
      tile.style.setProperty('--hunt-color', `hsl(${hue} 65% ${lightness + (index === huntTarget ? difference : 0)}%)`);
      return tile;
    }));
    if (focusIndex >= 0) board.children[Math.min(focusIndex, size - 1)].focus();
  }
  function chooseColor(tile, keyboard) {
    if (lives === 0 || tile.classList.contains('hunt-miss')) return;
    moves++;
    const position = Number(tile.dataset.position);
    if (position !== huntTarget) {
      lives--; streak = 0; score = Math.max(0, score - 25);
      tile.classList.add('hunt-miss'); tile.setAttribute('aria-disabled', 'true');
      tile.setAttribute('aria-label', `Color tile ${position + 1}, same shade as the others`);
      updateStats();
      if (lives === 0) {
        board.classList.add('game-over');
        board.querySelectorAll('.hunt-tile').forEach(t => t.setAttribute('aria-disabled', 'true'));
        status.textContent = `Game over. ${score} points. Start a new game.`;
      } else status.textContent = `Not quite. ${lives} lives left. Look for the lighter tile.`;
      return;
    }
    const earned = 100 + Math.min(streak, 10) * 10;
    score += earned; streak++; pairs++;
    updateStats();
    status.textContent = `+${earned} points! Find the next lighter tile.`;
    huntBoard(keyboard ? position : -1);
  }
  function newRound() {
    clearTimeout(pending); pending = 0;
    first = null; locked = false; moves = 0; pairs = 0; score = 0; lives = 3; streak = 0;
    board.classList.remove('won', 'game-over');
    board.classList.toggle('color-hunt', game === 'hunt');
    board.classList.remove('hunt-large');
    bestLabel.textContent = String(game === 'hunt' ? huntBest : best);
    if (game === 'hunt') {
      huntBoard(); updateStats();
      status.textContent = 'Find the lighter tile. Keep playing while you have lives.';
      return;
    }
    const deck = symbols.flatMap((_, index) => [index, index]);
    for (let index = deck.length - 1; index > 0; index--) {
      const other = Math.floor(Math.random() * (index + 1));
      [deck[index], deck[other]] = [deck[other], deck[index]];
    }
    board.replaceChildren(...deck.map((symbol, index) => {
      const tile = document.createElement('button');
      tile.type = 'button'; tile.className = 'memory-tile';
      tile.dataset.symbol = symbol; tile.dataset.position = index + 1;
      tile.setAttribute('aria-label', `Tile ${index + 1}: hidden`);
      tile.setAttribute('aria-pressed', 'false');
      tile.style.setProperty('--tile-color', symbols[symbol].color);
      const back = document.createElement('span'); back.className = 'tile-back'; back.textContent = '?';
      const face = document.createElement('span'); face.className = 'tile-face'; face.textContent = symbols[symbol].icon;
      back.setAttribute('aria-hidden', 'true'); face.setAttribute('aria-hidden', 'true');
      tile.append(back, face); return tile;
    }));
    updateStats(); status.textContent = 'Find your first pair.';
  }
  board.addEventListener('click', event => {
    if (game === 'hunt') {
      const tile = event.target.closest('.hunt-tile');
      if (tile && board.contains(tile)) chooseColor(tile, event.detail === 0);
      return;
    }
    const tile = event.target.closest('.memory-tile');
    if (tile && board.contains(tile)) choose(tile);
  });
  document.querySelector('#gameReset').addEventListener('click', newRound);
  document.querySelector('#gameSwitch').addEventListener('click', () => {
    game = game === 'pairs' ? 'hunt' : 'pairs';
    const hunting = game === 'hunt';
    document.querySelector('#gameEyebrow').textContent = hunting ? 'COLOR HUNT' : 'PIXEL PAIRS';
    document.querySelector('#gameTitle').textContent = hunting ? 'One shade stands out.' : 'Good eyes. Great matches.';
    document.querySelector('#gameInstructions').textContent = hunting ? 'Find the lighter tile. +100 points, streak bonuses, 3 lives.' : 'Find six pairs. +100 per match, −10 per miss.';
    document.querySelector('#gameGoalLabel').textContent = hunting ? ' lives' : ' / 6 pairs';
    document.querySelector('#gameSwitch').textContent = hunting ? 'Pixel Pairs ◎' : 'Color Hunt ◈';
    board.setAttribute('aria-label', hunting ? 'Color Hunt: find the lighter tile' : 'Pixel Pairs matching tiles');
    newRound();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && locked) {
      clearTimeout(pending);
      board.querySelectorAll('.flipped:not(.matched)').forEach(tile => flip(tile, false));
      first = null; locked = false;
      status.textContent = 'Ready when you are. Try another pair.';
    }
  });
  newRound();
})();
