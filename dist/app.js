const studies = {
  morrow: {
    title: 'Morrow',
    index: '01',
    accent: '#d5f55b',
    contrast: '#2b39ef',
    category: 'FINTECH · MOBILE APP',
    intro: 'A calmer, more intuitive way to understand and manage everyday finances.',
    heroMockup: 'morrow-case.webp',
    heroAlt: 'Morrow dual mobile banking screens showing balance and analytics',
    role: 'Product & UI/UX Designer',
    platform: 'iOS / Android Mobile',
    scope: 'Fintech Concept & Design System',
    storyline: [
      ['The Challenge', 'Dense financial data and fragmented actions competed for attention, causing cognitive overload.'],
      ['The Design Move', 'Streamlined the visual hierarchy around total net balance, 3-tap transfers, and categorized spending trends.'],
      ['The Outcome', 'A serene, high-efficiency banking experience that eliminates friction and builds daily confidence.']
    ],
    motionTitle: 'Responsive feedback without visual noise.',
    motionBody: 'Micro-interactions reassure users on every tap, state transitions indicate money flow, and charts animate on load.',
    cropLabels: ['Balance at a glance', 'Spending made visual'],
    uiScreens: [
      {
        id: 'm1',
        image: 'morrow-screen-1.jpg',
        tag: '01 / DASHBOARD',
        title: 'Home & Account Overview',
        desc: 'Clear financial hierarchy placing net balance, quick-send actions, and weekly spending velocity directly above the fold.',
        detail: 'High-contrast typography and instant action triggers reduce cognitive load for everyday money tasks.'
      },
      {
        id: 'm2',
        image: 'morrow-screen-2.jpg',
        tag: '02 / ANALYTICS',
        title: 'Spending Breakdown & Budgeting',
        desc: 'Interactive monthly spending donut breakdown, budget category progress indicators, and weekly spending velocity comparison.',
        detail: 'Accessible color tokens and clean percentage breakdowns give immediate visibility into spending patterns.'
      },
      {
        id: 'm3',
        image: 'morrow-screen-3.jpg',
        tag: '03 / TRANSACTIONS',
        title: 'Streamlined Transfer & Payment Flow',
        desc: 'Frictionless 3-tap payment journey with quick-select recipient contact avatars, clear keypad, and transaction categories.',
        detail: 'Instant confirmation state with reassuring micro-interactions and clear categorization.'
      }
    ],
    sections: [
      {
        label: '01 / THE CHALLENGE',
        title: 'Make the next decision obvious.',
        body: 'Balances, spending, and common actions often compete for attention. Traditional banking apps overload users with walls of numbers, hidden buttons, and disconnected menus. Morrow needed a serene hierarchy that answers the most important questions in under two seconds.'
      },
      {
        label: '02 / THE APPROACH',
        title: 'Start with what matters today.',
        body: 'I centered the experience on the current net balance, recent activity, and the primary actions people use repeatedly (Send, Add Money, Request, Cards). All secondary features were moved into progressive disclosure trays, keeping the main interface distraction-free.'
      },
      {
        label: '03 / DESIGN DECISIONS',
        title: 'Clarity without feeling clinical.',
        body: 'A compact spending visual, generous whitespace, and high-contrast cobalt and lime accents create a rhythmic layout that keeps financial data accessible and delightful to explore.',
        points: ['Hierarchical data clarity', 'Friction-free 3-tap transfer flow', 'WCAG AAA contrast ratios across charts']
      },
      {
        label: '04 / OUTCOME & METRICS',
        title: 'A focused, confident fintech direction.',
        body: 'The result is a production-ready mobile direction that makes essential information readable, reassuring, and validated through user journey testing.'
      }
    ],
    next: 'Gather — Good food, ready for pickup without the wait.'
  },

  gather: {
    title: 'Gather',
    index: '02',
    accent: '#ff835f',
    contrast: '#174f3a',
    category: 'FOOD & LIFESTYLE · MOBILE APP',
    intro: 'Good food, from discovery to counter pickup without the wait.',
    heroMockup: 'gather-case.webp',
    heroAlt: 'Gather food pickup app screens with menu discovery and order pickup status',
    role: 'Lead UI/UX Designer',
    platform: 'iOS / Android Mobile',
    scope: 'On-Demand Food Tech Concept',
    storyline: [
      ['The Challenge', 'Ordering lunch often felt disconnected: browsing took too long, and pickup timings were uncertain.'],
      ['The Design Move', 'Unified menu discovery, ingredient customization, and a live 3-stage pickup tracker into one coherent flow.'],
      ['The Outcome', 'Zero-fuss ordering with complete status transparency from first craving to counter handoff.']
    ],
    motionTitle: 'Every step feels seamlessly connected.',
    motionBody: 'Cards transition smoothly along the order journey, while the pickup pass provides live reassurance.',
    cropLabels: ['Food discovery', 'Pickup confidence'],
    uiScreens: [
      {
        id: 'g1',
        image: 'gather-screen-1.jpg',
        tag: '01 / DISCOVERY',
        title: 'Gourmet Discovery & Curated Menu',
        desc: 'Warm culinary palette, dish cards with preparation times, ratings, and instant category filters.',
        detail: 'Clear food photography framing, bold pricing, and quick-add shortcuts for high-velocity browsing.'
      },
      {
        id: 'g2',
        image: 'gather-screen-3.jpg',
        tag: '02 / CUSTOMIZATION',
        title: 'Item Customization & Bag Summary',
        desc: 'Calm ingredient transparency, dietary tags, single-tap dressing choices, and floating add-to-bag action.',
        detail: 'Structured radio and checkbox selectors with real-time price updates prevent ordering mistakes.'
      },
      {
        id: 'g3',
        image: 'gather-screen-2.jpg',
        tag: '03 / TRACKING',
        title: 'Live Order Tracker & Pickup QR Pass',
        desc: 'Real-time 3-stage progress timeline, pickup time window, and high-contrast counter barcode.',
        detail: 'Confidence-building live progress status and store pin eliminate waiting uncertainty.'
      }
    ],
    sections: [
      {
        label: '01 / THE CHALLENGE',
        title: 'Make a hungry moment feel simple.',
        body: 'During busy lunch hours, people need to choose quickly, customize dietary options easily, and know exactly when their meal will be ready. The interface had to remove doubt without losing appetite appeal.'
      },
      {
        label: '02 / THE APPROACH',
        title: 'One continuous pickup journey.',
        body: 'Discovery, ordering, and pickup status share the same visual language so the experience feels connected from the first choice to the final handoff at the counter.'
      },
      {
        label: '03 / DESIGN DECISIONS',
        title: 'Warm, useful, and easy to scan.',
        body: 'Curated categories, transparent pricing, and prominent pickup timing keep the interface lively while protecting the core purchase flow.',
        points: ['Visual-first menu cards', 'Ingredient & dietary transparency', 'Real-time QR pickup pass']
      },
      {
        label: '04 / OUTCOME & METRICS',
        title: 'Less waiting, maximum satisfaction.',
        body: 'The concept turns an everyday lunch decision into a compact, delightful flow with clear progress and memorable visual personality.'
      }
    ],
    next: 'Forma — A workspace that makes room for focused creative work.'
  },

  forma: {
    title: 'Forma',
    index: '03',
    accent: '#a8c7b1',
    contrast: '#2b39ef',
    category: 'WORKSPACE · WEB APP',
    intro: 'A serene workspace that makes room for focused creative work and design operations.',
    heroMockup: 'forma-case.webp',
    heroAlt: 'Forma responsive workspace dashboard on desktop and tablet displays',
    role: 'UI/UX & Design Systems Designer',
    platform: 'Responsive Web / Desktop',
    scope: 'SaaS Workspace & Design System',
    storyline: [
      ['The Challenge', 'Creative dashboards become visual noise when cluttered with excessive widgets and unstructured menus.'],
      ['The Design Move', 'Separated workspace structure from active focus, introducing a tokenized canvas with serene hierarchy.'],
      ['The Outcome', 'An expansive desktop web app that enhances creative velocity while keeping daily routines calm.']
    ],
    motionTitle: 'Progress appears when it matters.',
    motionBody: 'Subtle card movements and live metric summaries show progress without pulling focus from the work.',
    cropLabels: ['Daily priorities', 'A system that scales'],
    uiScreens: [
      {
        id: 'f1',
        image: 'forma-screen-1.jpg',
        tag: '01 / DASHBOARD',
        title: 'Focus Workspace & Activity Dashboard',
        desc: 'Spacious desktop canvas with persistent modular sidebar, high-level velocity metrics, and active project cards.',
        detail: 'A calm aesthetic that avoids widget clutter while keeping vital metrics and recent projects visible.'
      },
      {
        id: 'f2',
        image: 'forma-screen-2.jpg',
        tag: '02 / WORKSPACE',
        title: 'Design System & Kanban Sprint Canvas',
        desc: 'Multi-column project workflow with tag pills, teammate assignments, and keyboard-friendly task status states.',
        detail: 'Tokenized component architecture built for rapid multi-team handoff and design ops management.'
      },
      {
        id: 'f3',
        image: 'forma-screen-3.jpg',
        tag: '03 / ANALYTICS',
        title: 'Team Analytics & Velocity Tracking',
        desc: 'Sprint burndown charts, focus hour distribution, and team workload capacity indicators.',
        detail: 'Data visualization designed for effortless weekly sprint retrospectives and workload balance.'
      }
    ],
    sections: [
      {
        label: '01 / THE CHALLENGE',
        title: 'Keep growing work understandable.',
        body: 'As projects, notes, and tasks scale, the interface can quickly become the distraction. Forma needed to make priorities visible without turning the dashboard into an overwhelming wall of widgets.'
      },
      {
        label: '02 / THE APPROACH',
        title: 'Separate navigation from attention.',
        body: 'Persistent navigation anchors the workspace structure while the primary canvas stays focused on today’s priorities, team velocity, and next actions.'
      },
      {
        label: '03 / DESIGN DECISIONS',
        title: 'A quiet system with useful signals.',
        body: 'Consistent components, muted sage colors, and concise summaries help people orient themselves quickly across desktop, tablet, and responsive screens.',
        points: ['Token-driven component system', 'Focused multi-view sprint canvas', 'Keyboard-first navigation patterns']
      },
      {
        label: '04 / OUTCOME & METRICS',
        title: 'More room for the work itself.',
        body: 'The platform demonstrates how a structured design system can support complex workloads while keeping the daily experience serene.'
      }
    ],
    next: 'Morrow — Everyday finance, simplified.'
  }
};

const caseDialog = document.querySelector('#caseDialog');
const caseContent = document.querySelector('#caseContent');
let caseRevealObserver;

// Lightbox modal for full-screen UI screen inspection
let screenLightbox = document.querySelector('#screenLightbox');
if (!screenLightbox) {
  screenLightbox = document.createElement('dialog');
  screenLightbox.id = 'screenLightbox';
  screenLightbox.className = 'screen-lightbox';
  screenLightbox.innerHTML = `
    <div class="screen-lightbox-inner">
      <button type="button" class="screen-lightbox-close" aria-label="Close zoom preview">×</button>
      <div class="screen-lightbox-media">
        <img id="lightboxImage" src="" alt="">
      </div>
      <div class="screen-lightbox-caption">
        <span id="lightboxTag">UI DESIGN PAGE</span>
        <h3 id="lightboxTitle"></h3>
        <p id="lightboxDesc"></p>
      </div>
    </div>
  `;
  document.body.appendChild(screenLightbox);

  screenLightbox.querySelector('.screen-lightbox-close').addEventListener('click', () => screenLightbox.close());
  screenLightbox.addEventListener('click', (e) => {
    if (e.target === screenLightbox) screenLightbox.close();
  });
}

function openScreenZoom(imageSrc, title, desc, tag) {
  const img = screenLightbox.querySelector('#lightboxImage');
  const t = screenLightbox.querySelector('#lightboxTitle');
  const d = screenLightbox.querySelector('#lightboxDesc');
  const tg = screenLightbox.querySelector('#lightboxTag');
  img.src = imageSrc;
  img.alt = title;
  t.textContent = title;
  d.textContent = desc;
  tg.textContent = tag || 'UI DESIGN PAGE';
  if (!screenLightbox.open) screenLightbox.showModal();
}

function openCaseStudy(study) {
  const keys = Object.keys(studies);
  const currentKey = keys.find(key => studies[key] === study);
  const nextKey = keys[(keys.indexOf(currentKey) + 1) % keys.length];
  const nextStudy = studies[nextKey];

  // 60/40 Ratio: Story Sections paired with screens
  const sectionsHtml = study.sections.map((section, index) => {
    const matchingScreen = study.uiScreens[index % study.uiScreens.length];
    return `
      <section class="case-section-60-40 case-reveal case-section-${index + 1}">
        <div class="case-text-col">
          <span class="case-section-label">${section.label}</span>
          <h3>${section.title}</h3>
          <p>${section.body}</p>
          ${section.points ? `
            <ul class="case-points">
              ${section.points.map((pt, pIdx) => `<li><span>0${pIdx + 1}</span>${pt}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
        <div class="case-visual-col">
          <figure class="case-preview-frame">
            <img src="${matchingScreen.image}" alt="${matchingScreen.title}" loading="lazy" decoding="async">
            <figcaption>
              <span>${matchingScreen.tag}</span>
              <b>${matchingScreen.title}</b>
            </figcaption>
          </figure>
        </div>
      </section>
    `;
  }).join('');

  // UI Design Pages: Prominent, high-res screen showcase
  const uiPagesHtml = study.uiScreens.map((screen, idx) => `
    <article class="case-ui-card case-reveal">
      <div class="case-ui-frame" data-zoom-img="${screen.image}" data-zoom-title="${screen.title}" data-zoom-desc="${screen.desc}" data-zoom-tag="${screen.tag}">
        <img src="${screen.image}" alt="${study.title} — ${screen.title}" loading="lazy" decoding="async">
        <button type="button" class="case-ui-zoom-trigger" aria-label="Inspect ${screen.title} full screen">
          <span>Inspect Screen ↗</span>
        </button>
      </div>
      <div class="case-ui-meta">
        <span class="case-ui-tag">${screen.tag}</span>
        <h4>${screen.title}</h4>
        <p>${screen.desc}</p>
        <small>${screen.detail}</small>
      </div>
    </article>
  `).join('');

  const simpleStoryHtml = study.storyline.map(([label, copy], idx) => `
    <article>
      <span>0${idx + 1}</span>
      <small>${label}</small>
      <p>${copy}</p>
    </article>
  `).join('');

  const motionBlocks = Array.from({ length: 6 }, (_, index) => `<i style="--motion-index:${index}"></i>`).join('');

  caseContent.innerHTML = `
    <article class="case-study case-${currentKey}" style="--case-accent:${study.accent};--case-contrast:${study.contrast}">
      <div class="case-progress" aria-hidden="true"><i></i></div>

      <!-- Case Header: 60/40 balanced Hero with Mockup -->
      <header class="case-opening case-opening-60-40">
        <div class="case-opening-top">
          <span>CASE STUDY / ${study.index}</span>
          <span>KAREM EHAB · UI/UX</span>
        </div>
        
        <div class="case-hero-split">
          <div class="case-lockup">
            <span class="case-tag">${study.category}</span>
            <h2 class="case-title">${study.title}</h2>
            <p class="case-intro">${study.intro}</p>
            
            <dl class="case-meta">
              <div><dt>Role</dt><dd>${study.role}</dd></div>
              <div><dt>Platform</dt><dd>${study.platform}</dd></div>
              <div><dt>Scope</dt><dd>${study.scope}</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
            </dl>
          </div>

          <div class="case-hero-mockup-wrap">
            <figure class="case-hero-mockup-frame">
              <img src="${study.heroMockup}" alt="${study.heroAlt}" width="1536" height="1024" decoding="async" fetchpriority="high">
              <figcaption><span>Selected interface direction</span><b>${study.platform}</b></figcaption>
            </figure>
          </div>
        </div>
      </header>

      <!-- The Storyline (Problem / Design Move / Result) -->
      <section class="case-explainer case-reveal">
        <header>
          <span>THE SIMPLE STORY</span>
          <h3>What changed — and why it matters.</h3>
        </header>
        <div class="case-explainer-grid">${simpleStoryHtml}</div>
      </section>

      <!-- Prominent UI Design Pages Gallery (40% imagery requirement) -->
      <section class="case-ui-pages-section case-reveal">
        <header class="case-ui-pages-header">
          <div>
            <span class="eyebrow">02 / UI DESIGN PAGES</span>
            <h3>The screens behind the flow.</h3>
          </div>
          <p>Key moments from the interface, presented in high fidelity with full typography, spacing, and component details.</p>
        </header>
        
        <div class="case-ui-pages-grid">
          ${uiPagesHtml}
        </div>
      </section>

      <!-- 60/40 Deep Dive Sections -->
      <div class="case-story-60-40">
        ${sectionsHtml}
      </div>

      <!-- Design In Action & Motion -->
      <section class="case-showcase">
        <header class="case-reveal">
          <span>DESIGN IN ACTION</span>
          <h3>Flow, tactile feedback,<br>and micro-moments.</h3>
        </header>

        <div class="case-motion-preview case-reveal">
          <div class="case-motion-copy">
            <span>MOTION PREVIEW</span>
            <h3>${study.motionTitle}</h3>
            <p>${study.motionBody}</p>
          </div>
          <div class="case-motion-stage motion-${currentKey}" role="img" aria-label="Looping interface motion preview">
            <div class="case-motion-device"><b></b>${motionBlocks}</div>
            <span class="motion-orbit" aria-hidden="true"></span>
          </div>
        </div>
      </section>

      <!-- Next Case Footer -->
      <footer class="case-next case-reveal">
        <div>
          <span>Next Project</span>
          <h3>${nextStudy.title}</h3>
        </div>
        <button type="button" class="case-next-button" data-next-case="${nextKey}">View project →</button>
        <p>${study.next}</p>
      </footer>
    </article>
  `;

  if (!caseDialog.open) caseDialog.showModal();
  caseDialog.scrollTop = 0;
  document.body.classList.add('case-open');
  requestAnimationFrame(() => caseContent.querySelector('.case-study').classList.add('case-entered'));

  // Wire up next case button
  caseContent.querySelector('[data-next-case]').addEventListener('click', event => {
    openCaseStudy(studies[event.currentTarget.dataset.nextCase]);
  });

  // Wire up UI screen lightbox zoom
  caseContent.querySelectorAll('[data-zoom-img]').forEach(el => {
    el.addEventListener('click', () => {
      openScreenZoom(
        el.dataset.zoomImg,
        el.dataset.zoomTitle,
        el.dataset.zoomDesc,
        el.dataset.zoomTag
      );
    });
  });

  // Observe reveal elements
  caseRevealObserver?.disconnect();
  caseRevealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
  }, { root: caseDialog, rootMargin: '-8% 0px -12%', threshold: .12 });
  caseContent.querySelectorAll('.case-reveal').forEach(node => caseRevealObserver.observe(node));
}

// Project buttons in #work
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => openCaseStudy(studies[button.dataset.project]));
});

// Case dialog progress bar
caseDialog.addEventListener('scroll', () => {
  const progress = caseContent.querySelector('.case-progress i');
  if (!progress) return;
  const max = caseDialog.scrollHeight - caseDialog.clientHeight;
  progress.style.transform = `scaleX(${max ? Math.min(1, caseDialog.scrollTop / max) : 0})`;
}, { passive: true });

caseDialog.addEventListener('close', () => {
  document.body.classList.remove('case-open');
  caseRevealObserver?.disconnect();
});

// Close dialogs when clicking outside
document.querySelectorAll('dialog').forEach(d => {
  d.querySelector('.close')?.addEventListener('click', () => d.close());
  d.addEventListener('click', e => {
    const r = d.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close();
  });
});

// Centered projects carousel: snap scrolling, wheel navigation and selection.
(() => {
  const rail = document.querySelector('#projectsRail');
  if (!rail) return;
  const slides = [...rail.querySelectorAll('[data-project-slide]')];
  const dots = [...document.querySelectorAll('[data-project-goto]')];
  const previous = document.querySelector('[data-project-step="-1"]');
  const next = document.querySelector('[data-project-step="1"]');
  const title = document.querySelector('#projectsTitle');
  const captionIndex = document.querySelector('.projects-caption-index');
  const caption = document.querySelector('.projects-caption p');
  const scope = document.querySelector('.projects-caption-scope');
  const openCase = document.querySelector('.projects-open-case');
  const details = {
    morrow: ['Everyday finance, simplified with a clear balance, useful insights, and quick actions.', 'MOBILE APP  |  UI/UX DESIGN  |  PROTOTYPE'],
    gather: ['Good food, ready for pickup through a warm, connected order journey.', 'MOBILE APP  |  PRODUCT DESIGN  |  PROTOTYPE'],
    forma: ['A focused workspace that makes complex projects feel easier to navigate.', 'WEB APP  |  UI/UX DESIGN  |  DESIGN SYSTEM']
  };
  let activeIndex = 0;
  let scrollFrame = 0;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const projectKeys = slides.map(slide => slide.dataset.projectSlide);
  function centerSlide(index, smooth = true) {
    const slide = slides[(index + slides.length) % slides.length];
    const left = slide.offsetLeft - (rail.clientWidth - slide.clientWidth) / 2;
    rail.scrollTo({left, behavior:smooth && !reduced.matches ? 'smooth' : 'instant'});
  }
  function select(index) {
    activeIndex = index;
    slides.forEach((slide, i) => {
      const distance = Math.abs(i - index);
      slide.classList.toggle('is-active', i === index);
      slide.classList.toggle('is-near', distance === 1);
      slide.classList.toggle('is-far', distance > 1);
      slide.setAttribute('aria-current', i === index ? 'true' : 'false');
      slide.style.setProperty('--project-distance', String(distance));
      slide.style.setProperty('--project-near-gap', `${distance === 1 ? 34 : 0}px`);
    });
    const key = projectKeys[index];
    title.textContent = slides[index].querySelector('h3').textContent;
    captionIndex.textContent = `0${index + 1}`;
    caption.textContent = details[key][0];
    scope.textContent = details[key][1];
    openCase.dataset.project = key;
    openCase.setAttribute('aria-label', `Open ${slides[index].querySelector('h3').textContent} case study`);
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-pressed', String(i === index));
    });
  }
  function nearestSlide() {
    const center = rail.getBoundingClientRect().left + rail.clientWidth / 2;
    let nearest = 0, delta = Infinity;
    slides.forEach((slide, i) => {
      const box = slide.getBoundingClientRect();
      const distance = Math.abs(box.left + box.width / 2 - center);
      if (distance < delta) { delta = distance; nearest = i; }
    });
    if (nearest !== activeIndex) select(nearest);
  }
  rail.addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => { scrollFrame = 0; nearestSlide(); });
  }, {passive:true});
  slides.forEach((slide, i) => slide.querySelector('.project-select').addEventListener('click', () => {
    if (i === activeIndex) openCase.click();
    else centerSlide(i);
  }));
  dots.forEach((dot, i) => dot.addEventListener('click', () => centerSlide(i)));
  previous.addEventListener('click', () => centerSlide(activeIndex - 1));
  next.addEventListener('click', () => centerSlide(activeIndex + 1));
  rail.addEventListener('wheel', event => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    rail.scrollBy({left:event.deltaY, behavior:'smooth'});
  }, {passive:false});
  rail.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); centerSlide(activeIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); centerSlide(activeIndex - 1); }
  });
  select(0);
  requestAnimationFrame(() => centerSlide(0, false));
  window.addEventListener('resize', () => centerSlide(activeIndex, false), {passive:true});
})();

// Contact brief form
document.querySelector('#contactButton')?.addEventListener('click', () => {
  document.querySelector('#contact')?.scrollIntoView({
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
  });
  document.querySelector('#briefTitle')?.focus({ preventScroll: true });
});

document.querySelector('#briefForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const isArabic = window.portfolioLocale === 'ar';
  const type = f.get('type');
  const text = isArabic
    ? `فكرة مشروع لكريم إيهاب\n\nالاسم: ${f.get('name')}\nالبريد الإلكتروني: ${f.get('email')}\nنوع المشروع: ${type}\n\nالمشروع:\n${f.get('project')}\n`
    : `PROJECT BRIEF FOR KAREM EHAB\n\nName: ${f.get('name')}\nEmail: ${f.get('email')}\nProject type: ${type}\n\nProject:\n${f.get('project')}\n`;
  const subject = `New ${type} brief from ${f.get('name')}`;
  const channel = e.submitter?.value || 'email';
  if (channel === 'whatsapp') {
    window.open(`https://wa.me/201112190563?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  } else {
    const email = ['karemehab2323', 'gmail.com'].join('@');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  }
});

const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
