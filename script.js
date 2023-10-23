const items = document.querySelector('.items');

let isDragging = false;
let startPosition = 0;
let scrollLeft = 0;

items.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
  items.classList.add('active');
});

items.addEventListener('mouseleave', () => {
  isDragging = false;
  items.classList.remove('active');
});

items.addEventListener('mouseup', () => {
  isDragging = false;
  items.classList.remove('active');
});

items.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const x = e.pageX - items.offsetLeft;
  const walk = (x - startPosition) * 3; // Adjust the sensitivity
  items.scrollLeft = scrollLeft - walk;
});

items.addEventListener('click', (e) => {
  if (isDragging) {
    e.preventDefault();
  }
});
