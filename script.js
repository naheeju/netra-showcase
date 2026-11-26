const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMobile.classList.toggle('open');
});
navMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navToggle.classList.remove('open');
  navMobile.classList.remove('open');
}));

/* ================= AMBIENT FULL-PAGE DOT NETWORK ================= */
(function () {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, dots;
  function resize() { w = canvas.width = innerWidth * devicePixelRatio; h = canvas.height = innerHeight * devicePixelRatio; }
  function init() {
    const gap = 46 * devicePixelRatio;
    dots = [];
    for (let x = gap / 2; x < w; x += gap) {
      for (let y = gap / 2; y < h; y += gap) {
        if (Math.random() > 0.55) continue;
        dots.push({
          x: x + (Math.random() - 0.5) * 10, y: y + (Math.random() - 0.5) * 10,
          base: 0.6 + Math.random() * 1.2,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.5
        });
      }
    }
  }
  let t = 0;
  function step() {
    t += 0.016;
    ctx.clearRect(0, 0, w, h);
    for (const d of dots) {
      const pulse = (Math.sin(t * d.speed + d.phase) + 1) / 2;
      ctx.beginPath();
      ctx.fillStyle = `rgba(150,175,255,${0.05 + pulse * 0.16})`;
      ctx.arc(d.x, d.y, d.base * devicePixelRatio * (0.7 + pulse * 0.5), 0, Math.PI * 2);
      ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(step);
  }
  resize(); init(); step();
  window.addEventListener('resize', () => { resize(); init(); if (reduceMotion) step(); });
})();

/* ================= HERO: ROTATING DOT GLOBE ================= */
(function () {
  const canvas = document.getElementById('globeCanvas');
  const ctx = canvas.getContext('2d');
  const size = 640, R = size * 0.34, cx = size / 2, cy = size / 2;
  const pts = [];
  const rings = 22, perRing = 34;
  for (let i = 0; i <= rings; i++) {
    const lat = (Math.PI * i / rings) - Math.PI / 2;
    const ringR = Math.cos(lat);
    const count = Math.max(4, Math.round(perRing * ringR));
    for (let j = 0; j < count; j++) {
      const lon = (Math.PI * 2 * j / count);
      pts.push({
        x0: ringR * Math.cos(lon), y0: Math.sin(lat), z0: ringR * Math.sin(lon)
      });
    }
  }
  let angle = 0;
  const COLORS = ['#5C86FF', '#A47CFF', '#2FE0C6'];
  function step() {
    angle += reduceMotion ? 0 : 0.0022;
    ctx.clearRect(0, 0, size, size);
    const proj = pts.map(p => {
      const x = p.x0 * Math.cos(angle) - p.z0 * Math.sin(angle);
      const z = p.x0 * Math.sin(angle) + p.z0 * Math.cos(angle);
      const y = p.y0;
      const scale = 1.6 / (2.4 - z);
      return { sx: cx + x * R * scale, sy: cy + y * R * scale, z, scale };
    });
    // connecting lines (subtle, only nearby on-sphere points, front-facing)
    for (let i = 0; i < proj.length; i++) {
      const a = proj[i];
      if (a.z < -0.15) continue;
      for (let j = i + 1; j < Math.min(i + 6, proj.length); j++) {
        const b = proj[j];
        if (b.z < -0.15) continue;
        const dx = a.sx - b.sx, dy = a.sy - b.sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 34) {
          ctx.strokeStyle = `rgba(120,150,255,${0.12 * (a.z + 1) / 2})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
        }
      }
    }
    proj.forEach((p, idx) => {
      const alpha = Math.max(0.08, (p.z + 1) / 2);
      ctx.beginPath();
      ctx.fillStyle = COLORS[idx % COLORS.length];
      ctx.globalAlpha = alpha;
      ctx.arc(p.sx, p.sy, 1.7 * p.scale, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    requestAnimationFrame(step);
  }
  step();
})();

/* ================= PER-CATEGORY WIDGET ANIMATIONS ================= */
document.querySelectorAll('.widget-canvas').forEach(canvas => {
  const type = canvas.dataset.widget;
  const dpr = devicePixelRatio;
  function fit() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  }
  fit(); window.addEventListener('resize', fit);
  const ctx = canvas.getContext('2d');
  let t = 0;

  if (type === 'radar') {
    function draw() {
      t += 0.02;
      const w = canvas.width, h = canvas.height, cx = w / 2, cy = h / 2, R = w * 0.42;
      ctx.clearRect(0, 0, w, h);
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath(); ctx.strokeStyle = 'rgba(92,134,255,0.18)'; ctx.lineWidth = 1;
        ctx.arc(cx, cy, R * r / 3, 0, Math.PI * 2); ctx.stroke();
      }
      const grad = ctx.createConicGradient ? ctx.createConicGradient(t, cx, cy) : null;
      ctx.save();
      ctx.translate(cx, cy); ctx.rotate(t);
      const sweep = ctx.createLinearGradient(0, 0, R, 0);
      sweep.addColorStop(0, 'rgba(92,134,255,0.55)'); sweep.addColorStop(1, 'rgba(92,134,255,0)');
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, R, -0.5, 0.02); ctx.closePath();
      ctx.fillStyle = sweep; ctx.fill();
      ctx.restore();
      requestAnimationFrame(draw);
    }
    draw();
  }

  if (type === 'bars') {
    const bars = 5;
    function draw() {
      t += 0.05;
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const bw = w / (bars * 2);
      for (let i = 0; i < bars; i++) {
        const bh = (Math.sin(t + i * 1.3) * 0.5 + 0.5) * h * 0.7 + h * 0.08;
        const x = bw + i * bw * 2;
        ctx.fillStyle = i === 2 ? 'rgba(164,124,255,0.9)' : 'rgba(164,124,255,0.4)';
        ctx.fillRect(x - bw * 0.35, h - bh, bw * 0.7, bh);
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  if (type === 'ping') {
    const rings = [0, 1, 2];
    function draw() {
      t += 0.02;
      const w = canvas.width, h = canvas.height, cx = w / 2, cy = h / 2, maxR = w * 0.42;
      ctx.clearRect(0, 0, w, h);
      // shield shape
      ctx.save();
      ctx.translate(cx, cy - h * 0.02);
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.22);
      ctx.bezierCurveTo(w * 0.18, -h * 0.16, w * 0.18, -h * 0.02, w * 0.18, h * 0.02);
      ctx.bezierCurveTo(w * 0.18, h * 0.22, 0, h * 0.3, 0, h * 0.3);
      ctx.bezierCurveTo(0, h * 0.3, -w * 0.18, h * 0.22, -w * 0.18, h * 0.02);
      ctx.bezierCurveTo(-w * 0.18, -h * 0.02, -w * 0.18, -h * 0.16, 0, -h * 0.22);
      ctx.strokeStyle = 'rgba(47,224,198,0.9)'; ctx.lineWidth = 2; ctx.stroke();
      ctx.restore();
      rings.forEach((r, i) => {
        const phase = (t * 0.5 + i / rings.length) % 1;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(47,224,198,${0.5 * (1 - phase)})`;
        ctx.lineWidth = 1.4;
        ctx.arc(cx, cy, phase * maxR, 0, Math.PI * 2);
        ctx.stroke();
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  if (type === 'terminal') {
    const lines = ['$ connect --auth', 'verifying lease...', 'session ready'];
    let li = 0, ci = 0, holding = 0;
    function draw() {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(242,184,75,0.9)';
      ctx.font = `${Math.floor(h * 0.1)}px 'JetBrains Mono', monospace`;
      const text = lines[li].slice(0, ci);
      ctx.fillText(text, w * 0.12, h * 0.55);
      const cursorOn = Math.floor(t * 3) % 2 === 0;
      if (cursorOn) {
        const tw = ctx.measureText(text).width;
        ctx.fillRect(w * 0.12 + tw + 2, h * 0.42, w * 0.03, h * 0.14);
      }
      t += 0.05;
      if (holding > 0) { holding--; }
      else if (ci < lines[li].length) { ci++; holding = 2; }
      else { holding = 40; ci = 0; li = (li + 1) % lines.length; }
      requestAnimationFrame(draw);
    }
    draw();
  }
});

/* ================= SCROLL REVEALS ================= */
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.cat-body').forEach(body => {
  const cards = body.querySelectorAll('.card');
  const svg = body.querySelector('[data-links]');

  function buildPaths() {
    svg.innerHTML = '';
    const bodyRect = body.getBoundingClientRect();
    const pts = Array.from(cards).map(c => {
      const r = c.getBoundingClientRect();
      return { x: r.left + r.width / 2 - bodyRect.left, y: r.top - bodyRect.top };
    });
    for (let i = 0; i < pts.length - 1; i++) {
      const p1 = pts[i], p2 = pts[i + 1];
      const midY = p1.y - 24;
      const d = `M${p1.x},${p1.y} C${p1.x},${midY} ${p2.x},${midY} ${p2.x},${p2.y}`;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.style.strokeDasharray = '400';
      path.style.strokeDashoffset = '400';
      svg.appendChild(path);
    }
  }
  buildPaths();
  window.addEventListener('resize', buildPaths);

  ScrollTrigger.create({
    trigger: body, start: 'top 78%', once: true,
    onEnter: () => {
      gsap.to(svg.querySelectorAll('path'), { strokeDashoffset: 0, duration: 0.9, ease: 'power2.out', stagger: 0.15 });
      gsap.to(cards, { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'back.out(1.6)', stagger: 0.12, delay: 0.1 });
    }
  });
});

document.querySelectorAll('.cat-head').forEach(head => {
  const items = head.children;
  gsap.set(items, { opacity: 0, y: 14 });
  ScrollTrigger.create({
    trigger: head, start: 'top 85%', once: true,
    onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' })
  });
});

gsap.set('.plist-item', { opacity: 0, y: 16 });
ScrollTrigger.create({
  trigger: '.principles', start: 'top 70%', once: true,
  onEnter: () => gsap.to('.plist-item', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' })
});