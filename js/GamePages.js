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

// 2D Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('carousel2d');
  const carouselNav = document.getElementById('carouselNav');
  const prevBtn2d = document.getElementById('prev2d');
  const nextBtn2d = document.getElementById('next2d');
  
  // Sample game data for 2D carousel
  const games2d = [
    {
      title: "Minecraft",
      image: "../assets/images/Minecraft.jpg",
      description: "Build, explore, and survive in infinite block-based worlds with creative and survival modes."
    },
    {
      title: "Fortnite",
      image: "../assets/images/Fortnite.webp",
      description: "Fast-paced battle royale with building mechanics and constantly evolving gameplay."
    },
    {
      title: "GTA V",
      image: "../assets/images/Grand Theft Auto V.jpg",
      description: "Open-world action-adventure with multiple protagonists and extensive online mode."
    },
    {
      title: "The Witcher 3",
      image: "../assets/images/The Witcher 3.jpg",
      description: "Epic open-world RPG with monster hunting, choices that matter, and rich storytelling."
    },
    {
      title: "Cyberpunk 2077",
      image: "../assets/images/Cyberpunk 2077.jpg",
      description: "Futuristic open-world RPG set in Night City with cybernetic enhancements and choices."
    },
    {
      title: "Red Dead Redemption 2",
      image: "../assets/images/red dead redemption 2.jpg",
      description: "Epic western adventure in the dying days of the American frontier with immersive storytelling."
    }
  ];
  
  let currentIndex = 0;
  const totalItems = games2d.length;
  
  // Create carousel items
  function createCarouselItems() {
    games2d.forEach((game, index) => {
      const item = document.createElement('div');
      item.className = 'carousel-2d-item';
      
      item.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="carousel-2d-item-content">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
          <button class="animated-download-btn"><span>Download</span></button>
        </div>
      `;
      
      carousel.appendChild(item);
      
      // Create navigation dot
      const dot = document.createElement('div');
      dot.className = 'carousel-2d-dot';
      dot.dataset.index = index;
      dot.addEventListener('click', () => goToSlide(index));
      carouselNav.appendChild(dot);
    });
    
    updateCarousel2d();
  }
  
  // Update carousel position
  function updateCarousel2d() {
    const offset = currentIndex * -100;
    carousel.style.transform = `translateX(${offset}%)`;
    
    // Update active dot
    const dots = document.querySelectorAll('.carousel-2d-dot');
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // Navigate to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateCarousel2d();
  }
  
  // Next slide
  function nextSlide2d() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel2d();
  }
  
  // Previous slide
  function prevSlide2d() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel2d();
  }
  
  // Event listeners
  prevBtn2d.addEventListener('click', prevSlide2d);
  nextBtn2d.addEventListener('click', nextSlide2d);
  
  // Auto-rotate every 4 seconds
  setInterval(nextSlide2d, 4000);
  
  // Initialize carousel
  createCarouselItems();
});