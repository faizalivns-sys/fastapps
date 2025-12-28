// Add animation classes on scroll with infinite replay
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
});

const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
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

// Keep existing animation script for slide-up elements
document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in animation to elements when they come into view
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe all elements with animate-slide-up class
  document.querySelectorAll('.animate-slide-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
    observer2.observe(el);
  });
});

// VIP Carousel Functionality
let currentSlide = 0;
const images = [
  document.getElementById('carousel-img-1'),
  document.getElementById('carousel-img-2'),
  document.getElementById('carousel-img-3')
];
const indicators = document.querySelectorAll('[onclick^="changeSlide"]');

// Initialize first image
if (images[0]) images[0].classList.add('opacity-100');

function changeSlide(n) {
  // Hide all images
  images.forEach(img => img.classList.remove('opacity-100'));
  
  // Show selected image
  if (images[n]) images[n].classList.add('opacity-100');
  
  // Update indicators
  indicators.forEach((indicator, index) => {
    if (index === n) {
      indicator.classList.remove('bg-gray-300');
      indicator.classList.add('bg-purple-600');
    } else {
      indicator.classList.remove('bg-purple-600');
      indicator.classList.add('bg-gray-300');
    }
  });
  
  currentSlide = n;
}

// Video Carousel Functionality
let currentVideoSlide = 0;
const videoSlides = [
  document.getElementById('video-slide-1'),
  document.getElementById('video-slide-2'),
  document.getElementById('video-slide-3')
];
const videoIndicators = document.querySelectorAll('[onclick^="changeVideoSlide"]');

// Initialize first video slide
if (videoSlides[0]) videoSlides[0].classList.add('opacity-100');

function changeVideoSlide(n) {
  // Hide all video slides
  videoSlides.forEach(slide => slide.classList.remove('opacity-100'));
  
  // Show selected video slide
  if (videoSlides[n]) videoSlides[n].classList.add('opacity-100');
  
  // Update video indicators
  videoIndicators.forEach((indicator, index) => {
    if (index === n) {
      indicator.classList.remove('bg-gray-300');
      indicator.classList.add('bg-blue-600');
    } else {
      indicator.classList.remove('bg-blue-600');
      indicator.classList.add('bg-gray-300');
    }
  });
  
  currentVideoSlide = n;
}

// Auto-rotate carousels
setInterval(() => {
  currentSlide = (currentSlide + 1) % images.length;
  changeSlide(currentSlide);
}, 3000);

setInterval(() => {
  currentVideoSlide = (currentVideoSlide + 1) % videoSlides.length;
  changeVideoSlide(currentVideoSlide);
}, 4000);

// Rotating Features Carousel Functionality
let currentFeature = 0;
const totalFeatures = 3;
const featureSlides = document.querySelectorAll('.feature-slide');
const featureIndicators = document.querySelectorAll('.feature-indicator');

// Initialize first feature
if (featureSlides[0]) {
  featureSlides[0].classList.remove('opacity-0');
  featureSlides[0].classList.add('opacity-100');
}

function showFeature(n) {
  // Hide all features
  featureSlides.forEach(slide => {
    slide.classList.remove('opacity-100');
    slide.classList.add('opacity-0');
  });
  
  // Show selected feature
  if (featureSlides[n]) {
    featureSlides[n].classList.remove('opacity-0');
    featureSlides[n].classList.add('opacity-100');
  }
  
  // Update indicators
  featureIndicators.forEach((indicator, index) => {
    if (index === n) {
      indicator.classList.remove('bg-gray-300');
      indicator.classList.add('bg-purple-600');
    } else {
      indicator.classList.remove('bg-purple-600');
      indicator.classList.add('bg-gray-300');
    }
  });
  
  currentFeature = n;
}

function nextFeature() {
  currentFeature = (currentFeature + 1) % totalFeatures;
  showFeature(currentFeature);
}

// Auto-rotate features
setInterval(() => {
  nextFeature();
}, 3000);