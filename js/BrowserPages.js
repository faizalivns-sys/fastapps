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

// Improved 3D Carousel Script
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('carousel3d');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const navContainer = document.getElementById('carouselNav');
  let currentIndex = 0;
  const totalItems = items.length;
  let autoSlide;
  
  // Create navigation dots
  for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('div');
    dot.classList.add('nav-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    navContainer.appendChild(dot);
  }
  
  const dots = document.querySelectorAll('.nav-dot');
  
  function updateCarousel() {
    // Reset all items
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Activate current item
    items[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
    
    // Position items in 3D space using proper rotation and translation
    const angleIncrement = 360 / totalItems;
    const radius = 300;
    
    items.forEach((item, index) => {
      const angle = (index - currentIndex) * angleIncrement;
      const radian = angle * Math.PI / 180;
      
      // Calculate position in 3D space
      const x = Math.sin(radian) * radius;
      const z = Math.cos(radian) * radius;
      
      // Apply 3D transformation
      item.style.transform = `translate3d(${x}px, 0px, ${z}px) rotateY(${angle}deg)`;
      
      // Adjust opacity based on position for better depth perception
      const absAngle = Math.abs(angle);
      const opacity = absAngle < 90 ? 1 : (absAngle < 180 ? 0.7 : 0.4);
      item.style.opacity = opacity;
      
      // Adjust z-index for proper layering
      const zIndex = absAngle < 90 ? 10 : (absAngle < 180 ? 5 : 1);
      item.style.zIndex = zIndex;
    });
  }
  
  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }
  
  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  // Auto slide
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
  }
  
  // Pause on hover
  const carouselContainer = document.querySelector('.carousel-3d-container');
  carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
  carouselContainer.addEventListener('mouseleave', startAutoSlide);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
  
  // Initialize
  updateCarousel();
  startAutoSlide();
  
  // Also observe elements with animate-on-scroll class
  const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
  animateOnScrollElements.forEach((el) => observer.observe(el));
});