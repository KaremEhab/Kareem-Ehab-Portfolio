(() => {
  const anchor = document.querySelector('.hero-orbit-anchor');
  if (!anchor) return;
  const title=document.querySelector('.hero-selected-title');
  const outline=document.querySelector('.hero-selected-outline');
  function alignOutline() {
    [...title.children].forEach((word,i)=>{
      const copy=outline.children[i], style=getComputedStyle(word);
      for(const prop of ['fontFamily','fontSize','fontWeight','fontStyle','letterSpacing','lineHeight','direction']) copy.style[prop]=style[prop];
      copy.style.left=word.offsetLeft+'px'; copy.style.top=word.offsetTop+'px';
      copy.style.right='auto';copy.style.bottom='auto';
    });
  }
  new ResizeObserver(alignOutline).observe(title);
  document.fonts.ready.then(alignOutline);
  document.addEventListener('localechange',()=>requestAnimationFrame(alignOutline));
  alignOutline();
  const spinner = anchor.querySelector('.hero-orbit-spinner');
  const ns = 'http://www.w3.org/2000/svg';
  const make = (tag, attrs) => {
    const node = document.createElementNS(ns, tag);
    for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
    return node;
  };
  const layers = ['back', 'front'].map(side => {
    const svg = make('svg', {viewBox:'0 0 1488 1057', class:`hero-ring-layer hero-ring-${side}`, 'aria-hidden':'true'});
    const defs = make('defs', {});
    const colors = [['#f6ffbb','#c8ed00','#617900'],['#ffe0d2','#ff7956','#a82c22'],['#e6e9f2','#30343e','#030407']];
    colors.forEach((stops, index) => {
      const gradient = make('radialGradient', {id:`planet-${side}-${index}`, cx:'.3', cy:'.25', r:'.8'});
      stops.forEach((color, i) => gradient.append(make('stop', {offset:[0,.4,1][i], 'stop-color':color})));
      defs.append(gradient);
    });
    svg.append(defs); anchor.append(svg); return svg;
  });
  const orbits = [
    {rx:650, ry:190, angle:-12, cy:480, speed:14, phase:2.1, radius:68, color:0},
    {rx:690, ry:255, angle:12, cy:580, speed:19, phase:.3, radius:43, color:1},
    {rx:610, ry:140, angle:8, cy:350, speed:11, phase:4.8, radius:27, color:0},
    {rx:690, ry:255, angle:12, cy:580, speed:19, phase:3.44, radius:15, color:2}
  ];
  function point(o, t) {
    const a=o.angle*Math.PI/180, x=o.rx*Math.cos(t), y=o.ry*Math.sin(t);
    return [744+x*Math.cos(a)-y*Math.sin(a), o.cy+x*Math.sin(a)+y*Math.cos(a)];
  }
  orbits.slice(0,3).forEach(o => {
    layers.forEach((layer, index) => {
      const start=index===0?Math.PI:0;
      const points=Array.from({length:81},(_,i)=>point(o,start+i*Math.PI/80));
      layer.append(make('path',{d:points.map((p,i)=>`${i?'L':'M'}${p.join(',')}`).join(' '),fill:'none',stroke:'#626572','stroke-width':2.4,'stroke-linecap':'round'}));
    });
  });
  const planets=orbits.map(o => {
    const g=make('g',{});
    const ball=make('circle',{r:o.radius,fill:`url(#planet-front-${o.color})`});
    g.append(ball,make('ellipse',{cx:-o.radius*.28,cy:-o.radius*.35,rx:o.radius*.18,ry:o.radius*.11,fill:'white',opacity:'.7',transform:'rotate(-25)'}));
    layers[1].append(g); return {g,ball};
  });
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let paused=reduced.matches, visible=true, frame=0, last=0, elapsed=0;
  function render() {
    const t=elapsed/1000;
    // A small circular drift and angular turn keep the sculpture in its original composition.
    spinner.style.transform=`translate(${Math.sin(t*.55)*12}px,${(Math.cos(t*.55)-1)*9}px) rotate(${Math.sin(t*.38)*16}deg)`;
    orbits.forEach((o,i)=>{
      const angle=o.phase+t*Math.PI*2/o.speed, depth=Math.sin(angle), [x,y]=point(o,angle);
      const side=depth<0?0:1, p=planets[i];
      if(p.g.parentNode!==layers[side]) layers[side].append(p.g);
      p.ball.setAttribute('fill',`url(#planet-${side===0?'back':'front'}-${o.color})`);
      p.g.setAttribute('transform',`translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${(.86+depth*.14).toFixed(3)})`);
    });
  }
  function tick(now) {
    frame=0;
    if(paused||!visible||document.hidden){last=0;return;}
    if(last) elapsed+=Math.min(now-last,64);
    last=now; render(); frame=requestAnimationFrame(tick);
  }
  function sync(){cancelAnimationFrame(frame);frame=0;last=0;if(!paused&&visible&&!document.hidden)frame=requestAnimationFrame(tick);}
  reduced.addEventListener('change',()=>{paused=reduced.matches;sync();});
  document.addEventListener('visibilitychange',sync);
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();}).observe(anchor);
  render();sync();
})();
