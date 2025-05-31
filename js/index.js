// Mencegah scroll dengan mouse wheel
window.addEventListener('wheel', function(e) {
  e.preventDefault();
}, { passive: false });

// Mencegah scroll dengan keyboard
window.addEventListener('keydown', function(e) {
  // Mencegah arrow keys, page up/down, home, end, spacebar
  if([32, 33, 34, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

// Mencegah scroll dengan touch pada mobile
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
  touchStartY = e.touches[0].clientY;
}, { passive: false });

document.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, { passive: false });

// Mencegah pinch to zoom
document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});

document.addEventListener('gesturechange', function(e) {
  e.preventDefault();
});

document.addEventListener('gestureend', function(e) {
  e.preventDefault();
});

// Mencegah double tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

// ANIMASI TITLE DENGAN TYPING EFFECT
window.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.title');
  const text = `Something For Jihan`.split('');

  // Create container for better responsive layout
  title.style.display = 'flex';
  title.style.flexWrap = 'wrap';
  title.style.justifyContent = 'center';
  title.style.gap = '0.5rem';

  // Clear existing content
  title.innerHTML = '';

  for (let index = 0; index < text.length; index++) {
    if (text[index] !== ' ') {
      title.innerHTML += `<span>${text[index]}</span>`;
    } else {
      title.innerHTML += `<span style='width: 1rem'></span>`;
    }
  }

  const textElements = document.querySelectorAll('.title span');
  textElements.forEach((element) => {
    const randomDelay = Math.random() * 3;
    element.style.animationDelay = `${randomDelay}s`;
  });
});
