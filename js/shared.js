/* ========== SHARED JS ========== */

// ---- THEME ----
const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;
const saved = localStorage.getItem('skb-theme') || 'dark';
root.setAttribute('data-theme', saved);
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('skb-theme', next);
  });
}

// ---- LANGUAGE ----
const translations = {
  en: {},
  es: {
    'nav.home': 'Inicio', 'nav.about': 'Nosotros', 'nav.projects': 'Proyectos', 'nav.contact': 'Contacto',
    'hero.badge': 'Premium Website Developer',
    'hero.title1': 'Crafting Digital', 'hero.title2': 'Experiences That', 'hero.title3': 'Convert & Impress',
    'hero.sub': 'Experto en desarrollo web premium. Sitios modernos, rápidos y totalmente personalizados para impulsar tu negocio.',
    'hero.cta': 'Obtener Cotización', 'hero.cta2': 'Ver Proyectos',
    'stats.languages': 'Idiomas', 'stats.clients': 'Clientes Satisfechos', 'stats.responsive': 'Responsivo', 'stats.trust': 'Puntuación de Confianza',
    'offer.label': 'QUÉ OFRECEMOS', 'offer.title': 'Servicios Completos de', 'offer.title2': 'Desarrollo Web',
    'reviews.label': 'RESEÑAS', 'reviews.title': 'Lo Que Dicen Nuestros', 'reviews.title2': 'Clientes',
    'whyus.label': 'POR QUÉ NOSOTROS', 'whyus.title': 'La Elección', 'whyus.title2': 'Correcta Para Ti',
    'footer.rights': 'Todos los derechos reservados.'
  },
  fr: {
    'nav.home': 'Accueil', 'nav.about': 'À propos', 'nav.projects': 'Projets', 'nav.contact': 'Contact',
    'hero.badge': 'Développeur Web Premium',
    'hero.title1': 'Créer des Expériences', 'hero.title2': 'Numériques Qui', 'hero.title3': 'Convertissent',
    'hero.sub': 'Expert en développement web premium. Sites modernes, rapides et entièrement personnalisés.',
    'hero.cta': 'Obtenir un Devis', 'hero.cta2': 'Voir les Projets',
    'stats.languages': 'Langues', 'stats.clients': 'Clients Satisfaits',
    'footer.rights': 'Tous droits réservés.'
  },
  de: {
    'nav.home': 'Startseite', 'nav.about': 'Über uns', 'nav.projects': 'Projekte', 'nav.contact': 'Kontakt',
    'hero.badge': 'Premium Website Entwickler',
    'hero.title1': 'Digitale Erlebnisse', 'hero.title2': 'Die Überzeugen', 'hero.title3': 'Und Beeindrucken',
    'hero.sub': 'Experte für Premium-Webentwicklung. Moderne, schnelle und vollständig maßgeschneiderte Websites.',
    'hero.cta': 'Angebot Anfordern', 'hero.cta2': 'Projekte Ansehen',
    'footer.rights': 'Alle Rechte vorbehalten.'
  },
  it: {
    'nav.home': 'Home', 'nav.about': 'Chi Siamo', 'nav.projects': 'Progetti', 'nav.contact': 'Contatti',
    'hero.badge': 'Sviluppatore Web Premium',
    'hero.title1': 'Esperienze Digitali', 'hero.title2': 'Che Convertono', 'hero.title3': 'E Impressionano',
    'hero.sub': 'Esperto in sviluppo web premium. Siti moderni, veloci e completamente personalizzati.',
    'hero.cta': 'Richiedi Preventivo', 'hero.cta2': 'Vedi Progetti',
    'footer.rights': 'Tutti i diritti riservati.'
  },
  pt: {
    'nav.home': 'Início', 'nav.about': 'Sobre', 'nav.projects': 'Projetos', 'nav.contact': 'Contato',
    'hero.badge': 'Desenvolvedor Web Premium',
    'hero.title1': 'Criando Experiências', 'hero.title2': 'Digitais Que', 'hero.title3': 'Convertem',
    'hero.sub': 'Especialista em desenvolvimento web premium. Sites modernos, rápidos e totalmente personalizados.',
    'hero.cta': 'Obter Orçamento', 'hero.cta2': 'Ver Projetos',
    'footer.rights': 'Todos os direitos reservados.'
  },
  nl: {
    'nav.home': 'Home', 'nav.about': 'Over ons', 'nav.projects': 'Projecten', 'nav.contact': 'Contact',
    'hero.badge': 'Premium Website Ontwikkelaar',
    'hero.title1': 'Digitale Ervaringen', 'hero.title2': 'Die Converteren', 'hero.title3': 'En Imponeren',
    'hero.sub': 'Expert in premium webontwikkeling. Moderne, snelle en volledig op maat gemaakte websites.',
    'hero.cta': 'Offerte Aanvragen', 'hero.cta2': 'Projecten Bekijken',
    'footer.rights': 'Alle rechten voorbehouden.'
  },
  pl: {
    'nav.home': 'Strona główna', 'nav.about': 'O nas', 'nav.projects': 'Projekty', 'nav.contact': 'Kontakt',
    'hero.badge': 'Premium Deweloper Stron',
    'hero.title1': 'Tworzymy Cyfrowe', 'hero.title2': 'Doświadczenia Które', 'hero.title3': 'Konwertują',
    'hero.sub': 'Ekspert w tworzeniu stron premium. Nowoczesne, szybkie i w pełni dostosowane strony internetowe.',
    'hero.cta': 'Uzyskaj Wycenę', 'hero.cta2': 'Zobacz Projekty',
    'footer.rights': 'Wszelkie prawa zastrzeżone.'
  },
  sv: {
    'nav.home': 'Hem', 'nav.about': 'Om oss', 'nav.projects': 'Projekt', 'nav.contact': 'Kontakt',
    'hero.badge': 'Premium Webbutvecklare',
    'hero.title1': 'Skapar Digitala', 'hero.title2': 'Upplevelser Som', 'hero.title3': 'Konverterar',
    'hero.sub': 'Expert på premium webbutveckling. Moderna, snabba och helt skräddarsydda webbplatser.',
    'hero.cta': 'Få en Offert', 'hero.cta2': 'Se Projekt',
    'footer.rights': 'Alla rättigheter förbehållna.'
  }
};

function detectLang() {
  const path = window.location.pathname;
  const langMap = { '/es': 'es', '/fr': 'fr', '/de': 'de', '/it': 'it', '/pt': 'pt', '/nl': 'nl', '/pl': 'pl', '/sv': 'sv' };
  for (const [key, val] of Object.entries(langMap)) {
    if (path.endsWith(key) || path.includes(key + '/')) return val;
  }
  return localStorage.getItem('skb-lang') || 'en';
}

function applyTranslations(lang) {
  const t = translations[lang] || {};
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key]) el.textContent = t[key];
  });
  const sel = document.getElementById('langSelect');
  if (sel) sel.value = lang;
  localStorage.setItem('skb-lang', lang);
  document.documentElement.lang = lang;
}

const langSelect = document.getElementById('langSelect');
if (langSelect) {
  const currentLang = detectLang();
  applyTranslations(currentLang);
  langSelect.addEventListener('change', (e) => {
    applyTranslations(e.target.value);
  });
}

// ---- HAMBURGER ----
const ham = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (ham && mobileNav) {
  ham.addEventListener('click', () => {
    const open = mobileNav.style.display === 'flex';
    mobileNav.style.display = open ? 'none' : 'flex';
  });
}

// ---- CUSTOM CURSOR ----
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  if (dot) { dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px'; }
});

function animRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  if (ring) { ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px'; }
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a,button').forEach(el => {
  el.addEventListener('mouseenter', () => { if (ring) { ring.style.width='52px'; ring.style.height='52px'; ring.style.borderColor='var(--accent2)'; } if(dot){dot.style.width='12px';dot.style.height='12px';} });
  el.addEventListener('mouseleave', () => { if (ring) { ring.style.width='36px'; ring.style.height='36px'; ring.style.borderColor='rgba(79,138,255,0.5)'; } if(dot){dot.style.width='8px';dot.style.height='8px';} });
});

// ---- CURSOR TRAIL ----
const trailColors = ['var(--accent)', 'var(--accent2)', 'var(--accent3)'];
const trailCount = 12;
const trails = [];
for (let i = 0; i < trailCount; i++) {
  const d = document.createElement('div');
  d.className = 'trail-dot';
  d.style.background = trailColors[i % trailColors.length];
  d.style.opacity = String(0.5 - i * 0.04);
  d.style.width = d.style.height = (6 - i * 0.3) + 'px';
  document.body.appendChild(d);
  trails.push({ el: d, x: 0, y: 0 });
}
let trailMX = 0, trailMY = 0;
document.addEventListener('mousemove', e => { trailMX = e.clientX; trailMY = e.clientY; });
function animTrails() {
  let x = trailMX, y = trailMY;
  trails.forEach((t, i) => {
    const delay = 0.15 + i * 0.05;
    t.x += (x - t.x) * delay;
    t.y += (y - t.y) * delay;
    t.el.style.left = t.x + 'px';
    t.el.style.top = t.y + 'px';
    x = t.x; y = t.y;
  });
  requestAnimationFrame(animTrails);
}
animTrails();

// ---- CANVAS BUBBLES ----
const canvas = document.getElementById('bubble-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

  const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

  class Bubble {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = H + Math.random() * 100;
      this.r = 2 + Math.random() * 6;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = -0.4 - Math.random() * 0.8;
      this.alpha = 0.1 + Math.random() * 0.25;
      this.colorIdx = Math.floor(Math.random() * 3);
    }
    update() {
      this.x += this.vx + Math.sin(Date.now() * 0.001 + this.y) * 0.3;
      this.y += this.vy;
      if (this.y < -20) this.reset();
    }
    draw() {
      const colors = isDark()
        ? ['rgba(79,138,255,', 'rgba(162,89,255,', 'rgba(0,229,201,']
        : ['rgba(79,138,255,', 'rgba(162,89,255,', 'rgba(0,180,160,'];
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = colors[this.colorIdx] + this.alpha + ')';
      ctx.fill();
      ctx.strokeStyle = colors[this.colorIdx] + (this.alpha * 1.5) + ')';
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  }

  const bubbles = Array.from({ length: 60 }, () => new Bubble());
  function animBubbles() {
    ctx.clearRect(0, 0, W, H);
    bubbles.forEach(b => { b.update(); b.draw(); });
    requestAnimationFrame(animBubbles);
  }
  animBubbles();
}

// ---- TOUCH RIPPLE ----
document.addEventListener('click', (e) => {
  const ripple = document.createElement('div');
  ripple.className = 'touch-ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
});

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('revealed'), parseInt(e.target.dataset.delay || 0));
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// ---- FLOAT BUTTON BUBBLES ----
document.querySelectorAll('.float-btn').forEach(btn => {
  setInterval(() => {
    const b = document.createElement('div');
    b.style.cssText = `
      position:absolute;
      width:${4+Math.random()*6}px;height:${4+Math.random()*6}px;
      border-radius:50%;
      background:rgba(255,255,255,0.5);
      bottom:5px;
      left:${10+Math.random()*30}px;
      pointer-events:none;
      animation:floatMini 1s ease-out forwards;
    `;
    btn.appendChild(b);
    setTimeout(() => b.remove(), 1000);
  }, 600);
});

// ---- GET A QUOTE BUBBLES ----
document.querySelectorAll('.btn-water').forEach(btn => {
  setInterval(() => {
    for (let i = 0; i < 2; i++) {
      const b = document.createElement('div');
      b.style.cssText = `
        position:fixed;
        width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;
        border-radius:50%;
        background:rgba(0,229,201,0.4);
        pointer-events:none;
        z-index:9999;
        animation:floatMini 1.2s ease-out forwards;
      `;
      const rect = btn.getBoundingClientRect();
      b.style.left = (rect.left + Math.random() * rect.width) + 'px';
      b.style.top = (rect.top + Math.random() * rect.height) + 'px';
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 1200);
    }
  }, 500);
});

// ---- CSS FOR FLOAT MINI ANIM ----
const style = document.createElement('style');
style.textContent = `
  @keyframes floatMini {
    0% { transform: translateY(0) scale(0); opacity: 0.8; }
    100% { transform: translateY(-40px) scale(1); opacity: 0; }
  }
`;
document.head.appendChild(style);
