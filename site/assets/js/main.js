// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav && nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Hero background zoom on load
const heroBg = document.querySelector('.hero-bg');
if (heroBg) setTimeout(() => heroBg.classList.add('loaded'), 100);

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Smooth anchor scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
