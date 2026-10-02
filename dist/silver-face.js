(() => {
  'use strict';
  const canvas = document.querySelector('#silverCanvas');
  const stage = document.querySelector('#silverStage');
  const portrait = document.querySelector('#silverPortrait');
  const fallback = document.querySelector('#silverFallback');
  const pause = document.querySelector('#silverMotion');
  const hello = document.querySelector('#silverWave');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const gl = canvas.getContext('webgl', {alpha:true, antialias:true, premultipliedAlpha:false});
  if (!gl) { pause.hidden = true; hello.hidden = true; return; }
  // A front-view relief mesh retains the supplied likeness. It is intentionally
  // limited to small turns; a single portrait does not contain side/back geometry.
  const vertex = `precision mediump float;attribute vec3 position;attribute vec2 uv;varying vec2 vUv;
    uniform vec2 turn;uniform vec2 fit;uniform float bob;
    void main(){vUv=uv;vec3 p=position;float cy=cos(turn.x),sy=sin(turn.x);
    p=vec3(cy*p.x+sy*p.z,p.y,-sy*p.x+cy*p.z);
    float cx=cos(turn.y),sx=sin(turn.y);p=vec3(p.x,cx*p.y-sx*p.z,sx*p.y+cx*p.z);
    float perspective=3.8/(3.8-p.z);gl_Position=vec4(p.x*fit.x*perspective,(p.y+bob)*fit.y*perspective,0.,1.);}`;
  const fragment = `precision mediump float;varying vec2 vUv;uniform sampler2D portrait;
    uniform float blink;uniform vec2 gaze;uniform vec2 turn;
    vec4 eye(vec2 center,vec2 radius,vec4 base){
      vec2 p=(vUv-center)/radius;float mask=1.-smoothstep(.78,1.,dot(p,p));
      vec2 shifted=vUv-gaze*vec2(.003,.0017)*mask;
      vec4 openEye=texture2D(portrait,shifted);
      float closeMask=mask*blink;
      vec4 lid=texture2D(portrait,vec2(vUv.x,center.y-radius.y*1.6));
      float crease=exp(-pow((p.y-.26)*11.,2.))*.42;
      lid.rgb*=1.-crease*blink;
      return mix(base,mix(openEye,lid,closeMask),mask);
    }
    void main(){vec4 color=texture2D(portrait,vUv);
      color=eye(vec2(.392,.389),vec2(.062,.016),color);
      color=eye(vec2(.604,.382),vec2(.061,.018),color);
      color.rgb*=1.+turn.x*(vUv.x-.5)*.22;
      if(color.a<.015)discard;gl_FragColor=color;}`;
  function shader(type, source) {
    const s = gl.createShader(type); gl.shaderSource(s,source); gl.compileShader(s);
    if (!gl.getShaderParameter(s,gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  }
  let program;
  try {
    program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));
  } catch(error) { console.warn(error);pause.hidden=true;hello.hidden=true;return; }
  gl.useProgram(program);
  const vertices=[],indices=[],segments=100;
  const bump=(u,v,x,y,w,h,height)=>height*Math.exp(-(((u-x)/w)**2+((v-y)/h)**2)*2);
  for(let row=0;row<=segments;row++)for(let col=0;col<=segments;col++){
    const u=col/segments,v=row/segments;
    const depth=bump(u,v,.5,.4,.38,.44,.29)+bump(u,v,.5,.47,.064,.13,.15)+bump(u,v,.39,.47,.12,.12,.045)+bump(u,v,.62,.47,.12,.12,.045)+bump(u,v,.5,.75,.19,.25,.07);
    vertices.push((u-.5)*1.72,(.5-v)*2,depth,u,v);
    if(row<segments&&col<segments){const a=row*(segments+1)+col,b=a+segments+1;indices.push(a,b,a+1,a+1,b,b+1);}
  }
  gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);
  for(const [name,size,offset] of [['position',3,0],['uv',2,12]]){const loc=gl.getAttribLocation(program,name);gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,size,gl.FLOAT,false,20,offset);}
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);
  const uniforms=Object.fromEntries(['turn','fit','bob','blink','gaze'].map(name=>[name,gl.getUniformLocation(program,name)]));
  const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);gl.clearColor(0,0,0,0);
  let loaded=false,visible=false,paused=reduced.matches,frame=0,last=0,time=0,blinkAt=2.4,greet=-10;
  const target={x:0,y:0},current={x:0,y:0};
  function resize(){const rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);gl.viewport(0,0,canvas.width,canvas.height);const aspect=rect.width/rect.height;gl.uniform2f(uniforms.fit,Math.min(.91/aspect,1.02),Math.min(.91,aspect*1.02));start();}
  function draw(now){
    const dt=Math.min((now-last)/1000||0,.05);last=now;
    if(!paused){time+=dt;const ease=1-Math.exp(-dt*7);current.x+=(target.x-current.x)*ease;current.y+=(target.y-current.y)*ease;}
    const age=time-greet;const nod=age<1.1?Math.sin(age*Math.PI*3)*Math.exp(-age*3)*.12:0;
    let blink=0;if(!paused&&time>=blinkAt){const b=(time-blinkAt)/.19;blink=b<1?Math.sin(b*Math.PI):0;if(b>=1)blinkAt=time+2.8+Math.random()*3.4;}
    gl.uniform2f(uniforms.turn,current.x*.20+(paused?0:Math.sin(time*.6)*.018),current.y*.11+nod);
    gl.uniform2f(uniforms.gaze,current.x,current.y);gl.uniform1f(uniforms.blink,blink);gl.uniform1f(uniforms.bob,paused?0:Math.sin(time*1.3)*.009);
    gl.clear(gl.COLOR_BUFFER_BIT);if(loaded)gl.drawElements(gl.TRIANGLES,indices.length,gl.UNSIGNED_SHORT,0);
    frame=0;if(loaded&&visible&&!document.hidden&&!paused)frame=requestAnimationFrame(draw);
  }
  function start(){if(frame)cancelAnimationFrame(frame);frame=0;last=performance.now();if(loaded)draw(last);}
  function load(){if(loaded)return;gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,fallback);loaded=true;portrait.classList.add('is-ready');resize();start();}
  if(fallback.complete&&fallback.naturalWidth)load();else fallback.addEventListener('load',load,{once:true});
  new ResizeObserver(resize).observe(portrait);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;start();},{rootMargin:'60px'}).observe(stage);
  window.addEventListener('pointermove',event=>{if(paused)return;const r=portrait.getBoundingClientRect();target.x=Math.max(-1,Math.min(1,(event.clientX-r.left-r.width/2)/(innerWidth*.4)));target.y=Math.max(-1,Math.min(1,(event.clientY-r.top-r.height*.4)/(innerHeight*.4)));},{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>{target.x=0;target.y=0;});
  hello.addEventListener('click',()=>{if(paused)return;greet=time;blinkAt=time+.18;start();});
  function updatePause(){pause.setAttribute('aria-pressed',String(paused));pause.textContent=paused?'Resume motion':'Pause motion';start();}
  pause.addEventListener('click',()=>{paused=!paused;updatePause();});reduced.addEventListener('change',()=>{paused=reduced.matches;updatePause();});
  document.addEventListener('visibilitychange',start);
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();loaded=false;if(frame)cancelAnimationFrame(frame);portrait.classList.remove('is-ready');pause.hidden=true;hello.hidden=true;});
  updatePause();
})();
