const p = window.portfolio;
const set = (id, value) => (document.getElementById(id).textContent = value);
set('summary', p.summary);
set('hero-name', p.name);
set('about-copy', p.about);
set('education', p.education);
set('school', p.school);
set('location', p.location);
set('year', new Date().getFullYear());
const emailUrl = 'mailto:' + p.email;
const email = document.getElementById('email-link');
email.textContent = p.email;
email.href = emailUrl;
const phone = document.getElementById('phone-link');
phone.textContent = p.phone;
phone.href = 'tel:' + p.phone.replace(/[^+\d]/g, '');
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  n.className = cls;
  n.textContent = text;
  return n;
};
p.services.forEach((s) => {
  const card = el('article', 'service', '');
  card.append(el('span', 'number', s.number));
  const copy = el('div', '', '');
  copy.append(el('h3', '', s.title), el('p', '', s.text));
  card.append(copy);
  document.getElementById('service-grid').append(card);
});
p.skills.forEach((s) => document.getElementById('skills').append(el('span', 'skill', s)));
const dialog = document.getElementById('project-dialog');
p.projects.forEach((project) => {
  const card = el('article', 'project', '');
  card.dataset.title = project.title;
  const visual = el('div', 'project-screenshot', '');
  const screenshot = document.createElement('img');
  screenshot.src = project.image;
  screenshot.alt = project.imageAlt;
  screenshot.loading = 'lazy';
  screenshot.draggable = false;
  visual.append(screenshot);
  const body = el('div', 'project-body', '');
  body.append(
    el('p', 'eyebrow', project.category),
    el('h3', 'project-title', project.title),
    el('p', 'project-description', project.description),
  );
  const tags = el('div', 'project-tags flex flex-wrap gap-2', '');
  project.tags.forEach((t) => tags.append(el('span', 'tag', t)));
  const button = el('button', 'project-button', 'View project details');
  button.addEventListener('click', () => {
    set('dialog-category', project.category);
    set('dialog-title', project.title);
    set('dialog-description', project.details);
    dialog.showModal();
  });
  body.append(tags, button);
  card.append(visual, body);
  document.getElementById('projects').append(card);
});
document.getElementById('close-dialog').onclick = () => dialog.close();
document.getElementById('dialog-contact').onclick = () => dialog.close();
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});
const menu = document.getElementById('menu');
const nav = document.getElementById('navigation');
menu.onclick = () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
};
nav.querySelectorAll('a').forEach(
  (a) =>
    (a.onclick = () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = 'Menu';
    }),
);
p.packages.forEach((pkg) => {
  const card = el('article', 'package-card' + (pkg.featured ? ' featured' : ''), '');
  card.append(
    el('p', 'package-label', pkg.name + (pkg.featured ? ' · Most complete balance' : '')),
    el('h3', '', pkg.price),
    el('span', 'period', 'per month'),
    el('p', 'package-hours', pkg.hours),
    el('p', 'package-intro', pkg.intro),
  );
  const list = el('ul', '', '');
  pkg.features.forEach((f) => list.append(el('li', '', f)));
  const link = el(
    'a',
    'button ' + (pkg.featured ? 'primary' : 'secondary'),
    'Ask about ' + pkg.name,
  );
  link.href =
    emailUrl +
    '?subject=' +
    encodeURIComponent(pkg.name + ' Shopify VA package') +
    '&body=' +
    encodeURIComponent(
      'Hi Emmanuel, I’m interested in the ' +
        pkg.name +
        ' package. Here is what my store needs:\n',
    );
  card.append(list, link);
  document.getElementById('package-grid').append(card);
});
const techTrack = document.getElementById('tech-track');
const toolsViewport = document.getElementById('tech-window');
function makeToolGroup(duplicate = false) {
  const group = el('div', 'tool-group', '');
  if (duplicate) group.setAttribute('aria-hidden', 'true');
  p.technologies.forEach((tool) => {
    const card = el('div', 'tech-card', '');
    const img = document.createElement('img');
    img.src = 'logos/' + tool.icon + '.svg';
    img.alt = '';
    img.draggable = false;
    card.append(img, el('span', '', tool.name));
    group.append(card);
  });
  return group;
}
techTrack.append(makeToolGroup(), makeToolGroup(true), makeToolGroup(true));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionSetting = { checked: reduced.matches };
let motionPaused = reduced.matches;
motionSetting.checked = motionPaused;
let cycleWidth = 0,
  dragging = false,
  hovering = false,
  focused = false,
  resumeAt = 0,
  dragX = 0;
function measureTools() {
  cycleWidth = techTrack.firstElementChild.getBoundingClientRect().width;
  toolsViewport.scrollLeft = cycleWidth;
}
requestAnimationFrame(measureTools);
window.addEventListener('resize', measureTools);
function wrapTools() {
  if (!cycleWidth) return;
  if (toolsViewport.scrollLeft < cycleWidth * 0.5) toolsViewport.scrollLeft += cycleWidth;
  else if (toolsViewport.scrollLeft >= cycleWidth * 1.5)
    toolsViewport.scrollLeft -= cycleWidth;
}
toolsViewport.addEventListener('pointerdown', (event) => {
  if (event.pointerType !== 'mouse' || event.button !== 0) return;
  dragging = true;
  dragX = event.clientX;
  toolsViewport.setPointerCapture(event.pointerId);
  toolsViewport.classList.add('dragging');
});
toolsViewport.addEventListener('pointermove', (event) => {
  if (!dragging) return;
  toolsViewport.scrollLeft += dragX - event.clientX;
  dragX = event.clientX;
  wrapTools();
});
function endDrag() {
  dragging = false;
  toolsViewport.classList.remove('dragging');
  resumeAt = performance.now() + 1200;
}
toolsViewport.addEventListener('pointerup', endDrag);
toolsViewport.addEventListener('pointercancel', endDrag);
toolsViewport.addEventListener('lostpointercapture', endDrag);
toolsViewport.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'mouse') hovering = true;
});
toolsViewport.addEventListener('pointerleave', () => (hovering = false));
toolsViewport.addEventListener('focusin', () => (focused = true));
toolsViewport.addEventListener('focusout', () => (focused = false));
toolsViewport.addEventListener('touchstart', () => (resumeAt = Infinity), {
  passive: true,
});
toolsViewport.addEventListener('touchend', () => (resumeAt = performance.now() + 1800), {
  passive: true,
});
toolsViewport.addEventListener(
  'touchcancel',
  () => (resumeAt = performance.now() + 1800),
  { passive: true },
);
toolsViewport.addEventListener('wheel', () => (resumeAt = performance.now() + 1800), {
  passive: true,
});
toolsViewport.addEventListener('scroll', wrapTools, { passive: true });
toolsViewport.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    toolsViewport.scrollLeft += event.key === 'ArrowRight' ? 210 : -210;
    wrapTools();
  }
});
if ('IntersectionObserver' in window && !reduced.matches) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (motionPaused) {
          entry.target.classList.add('visible');
          return;
        }
        if (entry.isIntersecting) entry.target.classList.add('visible');
        else if (
          entry.boundingClientRect.bottom < 0 ||
          entry.boundingClientRect.top > innerHeight
        )
          entry.target.classList.remove('visible');
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(
      '.section-heading,.service,.project,.package-card,.about-grid>div,.contact-inner>div,.tech-heading,.tech-window',
    )
    .forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', (index % 2) * 80 + 'ms');
      observer.observe(element);
    });
}
const projectRail = document.getElementById('projects');
function moveProjects(direction) {
  const cards = [...projectRail.children];
  if (matchMedia('(min-width: 1024px)').matches) {
    if (direction > 0) projectRail.append(cards[0]);
    else projectRail.prepend(cards.at(-1));
    if (!reduced.matches)
      projectRail.animate(
        [
          { opacity: 0.55, transform: 'translateX(' + direction * 14 + 'px)' },
          { opacity: 1, transform: 'translateX(0)' },
        ],
        { duration: 250, easing: 'ease-out' },
      );
    set(
      'project-count',
      '3 projects · ' + projectRail.firstElementChild.dataset.title + ' first',
    );
  } else {
    const step = cards[0].getBoundingClientRect().width + 20,
      max = projectRail.scrollWidth - projectRail.clientWidth;
    let target = projectRail.scrollLeft + direction * step;
    if (direction > 0 && projectRail.scrollLeft >= max - 3) target = 0;
    if (direction < 0 && projectRail.scrollLeft <= 3) target = max;
    projectRail.scrollTo({
      left: Math.max(0, Math.min(max, target)),
      behavior: reduced.matches ? 'instant' : 'smooth',
    });
  }
}
document.getElementById('projects-prev').onclick = () => moveProjects(-1);
document.getElementById('projects-next').onclick = () => moveProjects(1);
projectRail.addEventListener('keydown', (event) => {
  if (
    event.target === projectRail &&
    (event.key === 'ArrowLeft' || event.key === 'ArrowRight')
  ) {
    event.preventDefault();
    moveProjects(event.key === 'ArrowRight' ? 1 : -1);
  }
});
const canvas = document.getElementById('ambient-background');
const ctx = canvas.getContext('2d');
let w = 0,
  h = 0,
  phase = 0;
function resizeAmbient() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  w = innerWidth;
  h = innerHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  paintAmbient();
}
function commerceGlyph(x, y, type, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 20, size / 20);
  ctx.strokeStyle = 'rgba(37,99,235,' + alpha + ')';
  ctx.lineWidth = 1.25;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  if (type === 0) {
    // Shopping bag.
    ctx.rect(-8, -5, 16, 17);
    ctx.moveTo(-4, -5);
    ctx.lineTo(-4, -8);
    ctx.quadraticCurveTo(0, -15, 4, -8);
    ctx.lineTo(4, -5);
  } else if (type === 1) {
    // Sales growth.
    ctx.moveTo(-10, -10);
    ctx.lineTo(-10, 11);
    ctx.lineTo(11, 11);
    ctx.moveTo(-6, 5);
    ctx.lineTo(-1, 0);
    ctx.lineTo(3, 3);
    ctx.lineTo(11, -7);
    ctx.moveTo(5, -7);
    ctx.lineTo(11, -7);
    ctx.lineTo(11, -1);
  } else if (type === 2) {
    // Processor.
    ctx.rect(-6, -6, 12, 12);
    ctx.rect(-2, -2, 4, 4);
    for (let i = -3; i <= 3; i += 3) {
      ctx.moveTo(i, -10);
      ctx.lineTo(i, -6);
      ctx.moveTo(i, 6);
      ctx.lineTo(i, 10);
      ctx.moveTo(-10, i);
      ctx.lineTo(-6, i);
      ctx.moveTo(6, i);
      ctx.lineTo(10, i);
    }
  } else if (type === 3) {
    // Shopping cart.
    ctx.moveTo(-12, -9);
    ctx.lineTo(-8, -9);
    ctx.lineTo(-5, 5);
    ctx.lineTo(8, 5);
    ctx.lineTo(11, -5);
    ctx.lineTo(-7, -5);
    ctx.moveTo(-3, 10);
    ctx.arc(-4, 10, 1.5, 0, Math.PI * 2);
    ctx.moveTo(9, 10);
    ctx.arc(8, 10, 1.5, 0, Math.PI * 2);
  } else {
    // Browser with code.
    ctx.roundRect(-12, -9, 24, 18, 3);
    ctx.moveTo(-12, -4);
    ctx.lineTo(12, -4);
    ctx.moveTo(-3, 0);
    ctx.lineTo(-6, 3);
    ctx.lineTo(-3, 6);
    ctx.moveTo(3, 0);
    ctx.lineTo(6, 3);
    ctx.lineTo(3, 6);
  }
  ctx.stroke();
  ctx.restore();
}
function paintAmbient() {
  ctx.clearRect(0, 0, w, h);
  const nodes = [],
    count = w < 650 ? 18 : 30;
  for (let i = 0; i < count; i++) {
    const x = (((i * 173.31 + 67) % 997) / 997) * w + Math.sin(phase * 0.55 + i) * 14;
    const y = (((i * 271.73 + 83) % 991) / 991) * h + Math.cos(phase * 0.4 + i) * 12;
    nodes.push({ x, y });
  }
  nodes.forEach((n, i) =>
    nodes.slice(i + 1).forEach((m, j) => {
      const distance = Math.hypot(m.x - n.x, m.y - n.y);
      if (distance > Math.min(260, w * 0.5)) return;
      const t = (phase * 0.22 + i * 0.17 + j * 0.11) % 1,
        u = 1 - t,
        cx = (n.x + m.x) / 2 + 28,
        cy = (n.y + m.y) / 2 - 24;
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'rgba(59,130,246,' + 0.07 * (1 - distance / 300) + ')';
      ctx.beginPath();
      ctx.moveTo(n.x, n.y);
      ctx.quadraticCurveTo(cx, cy, m.x, m.y);
      ctx.stroke();
      const x = u * u * n.x + 2 * u * t * cx + t * t * m.x,
        y = u * u * n.y + 2 * u * t * cy + t * t * m.y;
      ctx.fillStyle = 'rgba(14,165,233,.24)';
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }),
  );
  nodes.forEach((n, i) => {
    const edge = 0.5 + (0.5 * Math.abs(n.x - w / 2)) / (w / 2),
      pulse = (Math.sin(phase * 1.4 + i) + 1) / 2;
    commerceGlyph(n.x, n.y, i % 5, 16 + (i % 3) * 3, (0.12 + pulse * 0.04) * edge);
    if (i % 6 === 0) {
      const radius = 24 + ((phase * 7 + i * 3) % 30),
        fade = 1 - (radius - 24) / 30;
      ctx.strokeStyle = 'rgba(59,130,246,' + 0.09 * fade + ')';
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
  });
}
resizeAmbient();
window.addEventListener('resize', resizeAmbient);
let previous = 0,
  lastPaint = 0;
function animate(now) {
  const delta = Math.min((now - previous) / 1000, 0.05);
  previous = now;
  if (!document.hidden && !motionPaused) {
    phase += delta * 0.55;
    if (now - lastPaint > 33) {
      paintAmbient();
      lastPaint = now;
    }
    if (!dragging && !hovering && !focused && now > resumeAt) {
      toolsViewport.scrollLeft += delta * 35;
      wrapTools();
    }
  }
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
function applyMotion() {
  motionPaused = motionSetting.checked;
  document.body.classList.toggle('motion-paused', motionPaused);
  if (motionPaused)
    document
      .querySelectorAll('.reveal')
      .forEach((section) => section.classList.add('visible'));
}
reduced.addEventListener('change', (event) => {
  motionSetting.checked = event.matches;
  applyMotion();
});
const portraitFrame = document.querySelector('.hero-portrait');
const normalPortrait = portraitFrame.querySelector('.portrait-default');
const hoverPortrait = portraitFrame.querySelector('.portrait-hover');
function sizePortraitStates() {
  if (!normalPortrait.naturalWidth || !portraitFrame.clientWidth) return;
  const width = portraitFrame.clientWidth,
    height = Math.max(0, portraitFrame.clientHeight - 12);
  const scale = Math.min(
    width / normalPortrait.naturalWidth,
    height / normalPortrait.naturalHeight,
  );
  const imageWidth = normalPortrait.naturalWidth * scale,
    imageHeight = normalPortrait.naturalHeight * scale;
  for (const img of [normalPortrait, hoverPortrait]) {
    img.style.width = imageWidth + 'px';
    img.style.height = imageHeight + 'px';
    img.style.left = (width - imageWidth) / 2 + 'px';
    img.style.top = 'auto';
    img.style.bottom = '0';
  }
}
normalPortrait.addEventListener('load', sizePortraitStates);
new ResizeObserver(sizePortraitStates).observe(portraitFrame);
sizePortraitStates();

const confetti = document.querySelector('.hero-confetti');
for (let i = 0; i < 32; i++) {
  const piece = document.createElement('i');
  piece.style.setProperty('--x', ((i * 37) % 100) + '%');
  piece.style.setProperty('--delay', -i * 0.19 + 's');
  piece.style.setProperty('--duration', 3 + (i % 4) * 0.4 + 's');
  piece.style.setProperty('--tilt', i * 47 + 'deg');
  piece.style.background = ['#3b82f6', '#fbbf24', '#a78bfa', '#38bdf8', '#fb7185'][i % 5];
  confetti.append(piece);
}

document.body.classList.toggle('motion-paused', motionPaused);

(p.socials || []).forEach((social) => {
  const valid = /^https:\/\//.test(social.url);
  const link = el(
    valid ? 'a' : 'span',
    'social-link' + (valid ? '' : ' social-pending'),
    social.name,
  );
  if (valid) {
    link.href = social.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const icon = document.createElement('img');
    icon.src = 'logos/' + social.name.toLowerCase() + '.svg';
    icon.alt = '';
    icon.width = 20;
    icon.height = 20;
    icon.setAttribute('aria-hidden', 'true');
    link.prepend(icon);
  } else {
    link.title = 'Profile link coming soon';
    link.append(el('small', '', 'Coming soon'));
  }
  document.getElementById('social-links').append(link);
});
document.getElementById('inquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = form.elements.name.value.trim(),
    email = form.elements.email.value.trim(),
    message = form.elements.message.value.trim();
  if (!name || !message) {
    set('inquiry-status', 'Please enter your name and inquiry.');
    return;
  }
  const body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
  window.location.href =
    emailUrl +
    '?subject=' +
    encodeURIComponent('Website / system inquiry from ' + name) +
    '&body=' +
    encodeURIComponent(body);
  set('inquiry-status', 'Your inquiry is ready in your email app. Please send it there.');
});
[
  ['email-link', 'email'],
  ['phone-link', 'phone'],
  ['location', 'address'],
].forEach(([id, type]) => {
  const row = document.getElementById(id),
    label = el('span', '', row.textContent);
  const icon = document.createElement('img');
  icon.src = 'logos/contact-' + type + '.svg';
  icon.alt = '';
  icon.width = 20;
  icon.height = 20;
  icon.setAttribute('aria-hidden', 'true');
  row.classList.add('footer-contact-row');
  row.replaceChildren(icon, label);
});
