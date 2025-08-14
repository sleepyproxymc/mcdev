const searchInput = document.getElementById('search');
const fixItems = document.querySelectorAll('.fix-item');
const categoryButtons = document.querySelectorAll('.category-btn');

// Search functionality
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  fixItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? 'block' : 'none';
  });
});

// Category filter
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    fixItems.forEach(item => {
      item.style.display = category === 'all' || item.getAttribute('data-category') === category
        ? 'block' : 'none';
    });
  });
});
