(() => {
  const projects=[...document.querySelectorAll('.gallery-project')];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  if(reduced.matches||!('IntersectionObserver' in window)) return;
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
  },{threshold:.04,rootMargin:'0px 0px 30px 0px'});
  projects.forEach(project=>{project.classList.add('gallery-reveal');observer.observe(project);});
  reduced.addEventListener('change',()=>{if(reduced.matches){projects.forEach(p=>p.classList.add('is-visible'));observer.disconnect();}});
})();
