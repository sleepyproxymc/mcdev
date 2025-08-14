// Smooth scroll for header links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    if(link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
