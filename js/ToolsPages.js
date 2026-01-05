// Enhanced scroll animation observer with infinite replay
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add visible class when element enters viewport
      entry.target.classList.add('is-visible');
    } else {
      // Remove visible class when element exits viewport
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe all elements with scroll-animation class
const elementsToAnimate = document.querySelectorAll('.scroll-animation');
elementsToAnimate.forEach((el) => observer.observe(el));

// Also observe elements with animate-on-scroll class
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
animateOnScrollElements.forEach((el) => observer.observe(el));

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function updateSlidePositions() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'prev', 'next');
    
    if (index === currentSlide) {
      slide.classList.add('active');
    } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    } else if (index === (currentSlide + 1) % slides.length) {
      slide.classList.add('next');
    }
  });
}

function showSlide(n) {
  // Update dots
  dots.forEach(dot => dot.classList.remove('active'));
  dots[n].classList.add('active');
  
  currentSlide = n;
  updateSlidePositions();
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

// Auto-rotate carousel every 5 seconds
setInterval(nextSlide, 5000);

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Initialize slide positions
updateSlidePositions();