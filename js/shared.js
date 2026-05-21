/* ════════════════════════════════════════
   SK BALOCH — YEAR 3026 ENGINE
   Bubble Physics · Cursor Trail · Touch FX
════════════════════════════════════════ */

/* ── THEME ── */
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;
html.setAttribute('data-theme', localStorage.getItem('skb-theme') || 'dark');
themeBtn?.addEventListener('click', () => {
  const t = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', t);
  localStorage.setItem('skb-theme', t);
});

/* ── HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});
document.querySelectorAll('.mobile-nav a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileNav?.classList.remove('open');
  })
);

/* ── LANGUAGE ── */
const LANGS = {
  en:{nav:{home:'Home',about:'About',projects:'Projects',contact:'Contact'},hero:{title1:'Crafting Digital',title2:'Experiences That',title3:'Convert & Impress',sub:'Expert in premium web development. Modern, fast, and fully custom websites built to grow your business.',cta:'✦ Get a Quote',cta2:'View Projects →'},stats:{languages:'Languages',clients:'Satisfied Clients',responsive:'Responsive',trust:'Trust Score'},offer:{label:'WHAT WE OFFER',title:'Full-Stack Services in',title2:'Web Development'},reviews:{label:'CLIENT REVIEWS',title:'What Our',title2:' Clients Say'},whyus:{label:'WHY US',title:'The',title2:' Right Choice For You'},footer:{rights:'All rights reserved.'}},
  es:{nav:{home:'Inicio',about:'Sobre mí',projects:'Proyectos',contact:'Contacto'},hero:{title1:'Creando Experiencias',title2:'Digitales que',title3:'Convierten e Impresionan',sub:'Experto en desarrollo web premium. Sitios modernos, rápidos y personalizados.',cta:'✦ Cotizar',cta2:'Ver Proyectos →'},stats:{languages:'Idiomas',clients:'Clientes',responsive:'Responsivo',trust:'Confianza'},offer:{label:'LO QUE OFRECEMOS',title:'Servicios Full-Stack en',title2:'Desarrollo Web'},reviews:{label:'RESEÑAS',title:'Lo que dicen',title2:' nuestros Clientes'},whyus:{label:'POR QUÉ NOSOTROS',title:'La',title2:' Elección Correcta'},footer:{rights:'Todos los derechos reservados.'}},
  fr:{nav:{home:'Accueil',about:'À propos',projects:'Projets',contact:'Contact'},hero:{title1:'Créer des Expériences',title2:'Numériques qui',title3:'Convertissent',sub:'Expert en développement web premium. Sites modernes, rapides et personnalisés.',cta:'✦ Obtenir un Devis',cta2:'Voir les Projets →'},stats:{languages:'Langues',clients:'Clients Satisfaits',responsive:'Responsive',trust:'Score de Confiance'},offer:{label:'CE QUE NOUS OFFRONS',title:'Services Full-Stack en',title2:'Développement Web'},reviews:{label:'AVIS CLIENTS',title:'Ce que disent',title2:' nos Clients'},whyus:{label:'POURQUOI NOUS',title:'Le',title2:' Bon Choix Pour Vous'},footer:{rights:'Tous droits réservés.'}},
  de:{nav:{home:'Startseite',about:'Über mich',projects:'Projekte',contact:'Kontakt'},hero:{title1:'Digitale Erlebnisse',title2:'Schaffen die',title3:'Überzeugen',sub:'Experte für Premium-Webentwicklung. Moderne, schnelle Websites.',cta:'✦ Angebot',cta2:'Projekte →'},stats:{languages:'Sprachen',clients:'Kunden',responsive:'Responsiv',trust:'Vertrauen'},offer:{label:'WAS WIR BIETEN',title:'Full-Stack in',title2:'Webentwicklung'},reviews:{label:'BEWERTUNGEN',title:'Was sagen',title2:' unsere Kunden'},whyus:{label:'WARUM WIR',title:'Die',title2:' Richtige Wahl'},footer:{rights:'Alle Rechte vorbehalten.'}},
  it:{nav:{home:'Home',about:'Chi siamo',projects:'Progetti',contact:'Contatti'},hero:{title1:'Creare Esperienze',title2:'Digitali che',title3:'Convertono',sub:'Esperto in sviluppo web premium. Siti moderni, veloci e personalizzati.',cta:'✦ Preventivo',cta2:'Vedi Progetti →'},stats:{languages:'Lingue',clients:'Clienti',responsive:'Responsive',trust:'Fiducia'},offer:{label:'COSA OFFRIAMO',title:'Servizi Full-Stack in',title2:'Sviluppo Web'},reviews:{label:'RECENSIONI',title:'Cosa dicono',title2:' i Clienti'},whyus:{label:'PERCHÉ NOI',title:'La',title2:' Scelta Giusta'},footer:{rights:'Tutti i diritti riservati.'}},
  pt:{nav:{home:'Início',about:'Sobre',projects:'Projetos',contact:'Contato'},hero:{title1:'Criando Experiências',title2:'Digitais que',title3:'Convertem',sub:'Especialista em desenvolvimento web premium. Sites modernos e personalizados.',cta:'✦ Orçamento',cta2:'Ver Projetos →'},stats:{languages:'Idiomas',clients:'Clientes',responsive:'Responsivo',trust:'Confiança'},offer:{label:'O QUE OFERECEMOS',title:'Serviços Full-Stack em',title2:'Desenvolvimento Web'},reviews:{label:'AVALIAÇÕES',title:'O que dizem',title2:' os Clientes'},whyus:{label:'POR QUÊ NÓS',title:'A',title2:' Escolha Certa'},footer:{rights:'Todos os direitos reservados.'}},
  nl:{nav:{home:'Home',about:'Over mij',projects:'Projecten',contact:'Contact'},hero:{title1:'Digitale Ervaringen',title2:'Creëren die',title3:'Converteren',sub:'Expert in premium webontwikkeling. Moderne, snelle websites.',cta:'✦ Offerte',cta2:'Projecten →'},stats:{languages:'Talen',clients:'Klanten',responsive:'Responsief',trust:'Vertrouwen'},offer:{label:'WAT WE BIEDEN',title:'Full-Stack in',title2:'Webontwikkeling'},reviews:{label:'BEOORDELINGEN',title:'Wat zeggen',title2:' de Klanten'},whyus:{label:'WAAROM WIJ',title:'De',title2:' Juiste Keuze'},footer:{rights:'Alle rechten voorbehouden.'}},
  pl:{nav:{home:'Główna',about:'O mnie',projects:'Projekty',contact:'Kontakt'},hero:{title1:'Tworzenie Cyfrowych',title2:'Doświadczeń które',title3:'Konwertują',sub:'Ekspert w tworzeniu stron premium. Nowoczesne, szybkie strony.',cta:'✦ Wycena',cta2:'Projekty →'},stats:{languages:'Języki',clients:'Klienci',responsive:'Responsywny',trust:'Zaufanie'},offer:{label:'CO OFERUJEMY',title:'Full-Stack w',title2:'Tworzeniu Stron'},reviews:{label:'OPINIE',title:'Co mówią',title2:' Klienci'},whyus:{label:'DLACZEGO MY',title:'Właściwy',title2:' Wybór'},footer:{rights:'Wszelkie prawa zastrzeżone.'}},
  sv:{nav:{home:'Hem',about:'Om mig',projects:'Projekt',contact:'Kontakt'},hero:{title1:'Skapar Digitala',title2:'Upplevelser som',title3:'Konverterar',sub:'Expert på premium webbutveckling. Moderna, snabba webbplatser.',cta:'✦ Offert',cta2:'Se Projekt →'},stats:{languages:'Språk',clients:'Kunder',responsive:'Responsiv',trust:'Förtroende'},offer:{label:'VAD VI ERBJUDER',title:'Full-Stack i',title2:'Webbutveckling'},reviews:{label:'RECENSIONER',title:'Vad säger',title2:' kunderna'},whyus:{label:'VARFÖR VI',title:'Det',title2:' Rätta Valet'},footer:{rights:'Alla rättigheter förbehållna.'}}
};
function applyLang(lang) {
  const d = LANGS[lang] || LANGS.en;
  document.querySelectorAll('[data-t]').forEach(el => {
    const keys = el.getAttribute('data-t').split('.');
    let val = d;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.textContent = val;
  });
}
const langSelect = document.getElementById('langSelect');
const savedLang = localStorage.getItem('skb-lang') || 'en';
if (langSelect) { langSelect.value = savedLang; applyLang(savedLang); }
langSelect?.addEventListener('change', e => {
  localStorage.setItem('skb-lang', e.target.value);
  applyLang(e.target.value);
});

/* ── SCROLL REVEAL ── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.getAttribute('data-delay') || 0;
      setTimeout(() => entry.target.classList.add('revealed'), +delay);
      revObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('[data-reveal]').forEach(el => revObs.observe(el));

/* ── COUNTER ── */
function animCount(el, raw, dur = 1800) {
  const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
  const suf = raw.replace(/[0-9.]/g, '');
  const isFloat = raw.includes('.');
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = (isFloat ? (e * num).toFixed(1) : Math.floor(e * num)) + suf;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animCount(entry.target, entry.target.getAttribute('data-count'));
      cntObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => cntObs.observe(el));

/* ══════════════════════════════════════
   ★  BUBBLE PHYSICS ENGINE — 3026  ★
══════════════════════════════════════ */
const canvas = document.getElementById('bubble-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let W = 0, H = 0, bubbles = [];

const COLS = [
  [79,138,255], [180,89,255], [0,245,200],
  [255,184,48], [255,94,160], [100,255,180],
  [255,255,120]
];

class Bubble {
  constructor(x, y, vx, vy, r, touch = false) {
    this.x = x; this.y = y;
    this.vx = vx ?? (Math.random() - .5) * 1.6;
    this.vy = vy ?? -(0.5 + Math.random() * 1.6);
    this.r = r ?? (8 + Math.random() * 42);
    this.maxAlpha = touch ? 0.9 : 0.3 + Math.random() * 0.5;
    this.alpha = this.maxAlpha;
    this.life = 1;
    this.decay = 0.003 + Math.random() * 0.006;
    this.grav = -(0.018 + Math.random() * 0.02);
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpd = 0.022 + Math.random() * 0.03;
    this.shimmer = Math.random() * Math.PI * 2;
    this.ci = Math.floor(Math.random() * COLS.length);
    this.ci2 = (this.ci + 1 + Math.floor(Math.random() * (COLS.length - 1))) % COLS.length;
    this.pop = false; this.popR = this.r; this.popA = 0;
  }
  update() {
    if (this.pop) { this.popR += 4.5; this.popA -= .07; return this.popA > 0; }
    this.wobble += this.wobbleSpd;
    this.shimmer += .038;
    this.x += this.vx + Math.sin(this.wobble) * .55;
    this.y += this.vy;
    this.vy += this.grav;
    this.life -= this.decay;
    this.alpha = this.maxAlpha * this.life;
    if (this.life <= 0 || this.y + this.r < 0 || this.x - this.r > W || this.x + this.r < 0) return false;
    if (Math.random() < .0007 && this.r > 14) this.pop = true;
    return true;
  }
  draw() {
    if (!ctx) return;
    const [r1,g1,b1] = COLS[this.ci];
    const [r2,g2,b2] = COLS[this.ci2];
    const sf = (Math.sin(this.shimmer) + 1) / 2;
    const cr = Math.round(r1 + (r2-r1)*sf);
    const cg = Math.round(g1 + (g2-g1)*sf);
    const cb = Math.round(b1 + (b2-b1)*sf);
    if (this.pop) {
      ctx.save();
      ctx.strokeStyle = `rgba(${cr},${cg},${cb},${this.popA})`;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.popR, 0, Math.PI*2); ctx.stroke();
      ctx.restore(); return;
    }
    ctx.save();
    const g = ctx.createRadialGradient(
      this.x - this.r*.3, this.y - this.r*.3, this.r*.05,
      this.x, this.y, this.r
    );
    g.addColorStop(0, `rgba(255,255,255,${this.alpha*.72})`);
    g.addColorStop(.3, `rgba(${cr},${cg},${cb},${this.alpha*.42})`);
    g.addColorStop(.72, `rgba(${cr},${cg},${cb},${this.alpha*.14})`);
    g.addColorStop(1, `rgba(${cr},${cg},${cb},${this.alpha*.04})`);
    ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = g; ctx.fill();

    const rim = ctx.createRadialGradient(this.x, this.y, this.r*.84, this.x, this.y, this.r);
    rim.addColorStop(0, `rgba(${cr},${cg},${cb},0)`);
    rim.addColorStop(1, `rgba(${cr},${cg},${cb},${this.alpha*.62})`);
    ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = rim; ctx.fill();

    ctx.beginPath(); ctx.arc(this.x - this.r*.28, this.y - this.r*.28, this.r*.22, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${this.alpha*.52})`; ctx.fill();
    ctx.beginPath(); ctx.arc(this.x + this.r*.2, this.y + this.r*.2, this.r*.07, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${this.alpha*.34})`; ctx.fill();
    ctx.restore();
  }
}

function resize() {
  if (!canvas) return;
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

function tick() {
  if (!ctx) return;
  ctx.clearRect(0, 0, W, H);
  if (Math.random() < .042 && bubbles.length < 65)
    bubbles.push(new Bubble(Math.random()*W, H+20, (Math.random()-.5)*1.3, -(0.5+Math.random()*1.6), 10+Math.random()*45));
  bubbles = bubbles.filter(b => { const alive = b.update(); if(alive) b.draw(); return alive; });
  requestAnimationFrame(tick);
}

if (canvas) {
  resize();
  window.addEventListener('resize', resize);
  tick();
  setInterval(() => {
    for(let i=0;i<3;i++)
      bubbles.push(new Bubble(Math.random()*W, H+10, (Math.random()-.5)*2.2, -(1+Math.random()*2.2), 14+Math.random()*32));
  }, 900);
}

/* ── CURSOR TRAIL ── */
let mx = -300, my = -300;
const TRAIL = 18;
const dots = Array.from({length:TRAIL}, () => {
  const d = document.createElement('div');
  d.style.cssText = 'position:fixed;pointer-events:none;z-index:9997;border-radius:50%;transform:translate(-50%,-50%);';
  document.body.appendChild(d);
  return {el:d, x:-300, y:-300};
});

const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if (cursorDot) { cursorDot.style.left = mx+'px'; cursorDot.style.top = my+'px'; }
  if (cursorRing) { cursorRing.style.left = mx+'px'; cursorRing.style.top = my+'px'; }
});

let lastBubble = 0;
window.addEventListener('mousemove', e => {
  if (Date.now() - lastBubble < 75 || !canvas) return;
  lastBubble = Date.now();
  bubbles.push(new Bubble(e.clientX, e.clientY, (Math.random()-.5)*2.2, -(1.5+Math.random()*2), 4+Math.random()*14));
});

(function trailLoop() {
  let px = mx, py = my;
  dots.forEach((dot, i) => {
    const lr = Math.max(0.05, .38 - i * .016);
    dot.x += (px - dot.x) * lr;
    dot.y += (py - dot.y) * lr;
    const sz = Math.max(1.5, 13 - i * .62);
    const al = Math.max(0, 1 - i / TRAIL);
    const [cr,cg,cb] = COLS[i % COLS.length];
    dot.el.style.cssText = `position:fixed;pointer-events:none;z-index:9997;border-radius:50%;transform:translate(-50%,-50%);left:${dot.x}px;top:${dot.y}px;width:${sz}px;height:${sz}px;background:rgba(${cr},${cg},${cb},${al*.72});box-shadow:0 0 ${sz*2}px rgba(${cr},${cg},${cb},${al*.4});opacity:${al};`;
    px = dot.x; py = dot.y;
  });
  requestAnimationFrame(trailLoop);
})();

/* ── TOUCH / CLICK BURST ── */
function burst(x, y, n = 18) {
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI*2/n)*i + Math.random()*.5;
    const speed = 1.8 + Math.random()*4.2;
    bubbles.push(new Bubble(x, y, Math.cos(angle)*speed, Math.sin(angle)*speed-2, 6+Math.random()*26, true));
  }
}
document.addEventListener('touchstart', e => {
  Array.from(e.changedTouches).forEach(t => burst(t.clientX, t.clientY, 16));
}, { passive: true });
document.addEventListener('click', e => burst(e.clientX, e.clientY, 10));

/* ── SCROLL BUBBLES ── */
let lastSY = window.scrollY, scrollThrottle = 0;
window.addEventListener('scroll', () => {
  const now = Date.now();
  if (now - scrollThrottle < 55) return;
  scrollThrottle = now;
  const delta = Math.abs(window.scrollY - lastSY);
  lastSY = window.scrollY;
  const n = Math.min(Math.floor(delta / 7), 7);
  for (let i = 0; i < n; i++)
    bubbles.push(new Bubble(Math.random()*W, H*.1+Math.random()*H*.8, (Math.random()-.5)*3.2, -(1+Math.random()*3.2), 8+Math.random()*22));
}, { passive: true });

/* ── 3D TILT on cards ── */
document.querySelectorAll('.glass').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(620px) rotateX(${-y*13}deg) rotateY(${x*13}deg) scale(1.025)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ── MAGNETIC HOVER ── */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width/2) / r.width * 10;
    const dy = (e.clientY - r.top - r.height/2) / r.height * 10;
    btn.style.transform = `translate(${dx}px,${dy}px) scale(1.04)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

/* ── CURSOR RING BIG ── */
document.querySelectorAll('a,button,.btn,.filter-pill').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing?.classList.add('big'));
  el.addEventListener('mouseleave', () => cursorRing?.classList.remove('big'));
});

/* ── PAGE TRANSITION ── */
document.querySelectorAll('a[href]').forEach(link => {
  if (!link.href.startsWith(location.origin)) return;
  if (link.href.includes('mailto:') || link.href.includes('wa.me') || link.href.includes('#')) return;
  link.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.add('exit');
    for(let i=0;i<18;i++)
      bubbles.push(new Bubble(Math.random()*W, Math.random()*H, (Math.random()-.5)*4.5, -2.5-Math.random()*3.5, 12+Math.random()*35, true));
    setTimeout(() => { window.location.href = link.href; }, 360);
  });
});
window.addEventListener('pageshow', () => document.body.classList.remove('exit'));
