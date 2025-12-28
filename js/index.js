// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

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
});

// Search functionality
function onSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const appSections = document.getElementById('apps').children;
  let found = false;

  // If search query is empty, show all apps
  if (query === '') {
    for (let section of appSections) {
      section.style.display = 'block';
      const appCards = section.querySelectorAll('div.bg-white');
      appCards.forEach(card => {
        card.style.display = 'block';
      });
    }
    return;
  }

  // Search through all sections
  for (let section of appSections) {
    const appCards = section.querySelectorAll('div.bg-white');
    let sectionHasMatches = false;
    
    appCards.forEach(card => {
      const appName = card.querySelector('h2').innerText.toLowerCase();
      const appCategory = card.querySelector('h3').innerText.toLowerCase();
      const appDescription = card.querySelector('p').innerText.toLowerCase();
      
      // Check if any of the app details match the search query
      if (appName.includes(query) || appCategory.includes(query) || appDescription.includes(query)) {
        card.style.display = 'block';
        found = true;
        sectionHasMatches = true;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Show section if it has matching apps
    if (sectionHasMatches) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }

  if (!found) {
    alert('No apps or games found matching your search.');
  }
}

// Real-time search as user types
function liveSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const appSections = document.getElementById('apps').children;
  let found = false;

  // If search query is empty, show all apps
  if (query === '') {
    for (let section of appSections) {
      section.style.display = 'block';
      const appCards = section.querySelectorAll('div.bg-white');
      appCards.forEach(card => {
        card.style.display = 'block';
      });
    }
    return;
  }

  // Search through all sections
  for (let section of appSections) {
    const appCards = section.querySelectorAll('div.bg-white');
    let sectionHasMatches = false;
    
    appCards.forEach(card => {
      const appName = card.querySelector('h2').innerText.toLowerCase();
      const appCategory = card.querySelector('h3').innerText.toLowerCase();
      const appDescription = card.querySelector('p').innerText.toLowerCase();
      
      // Check if any of the app details match the search query
      if (appName.includes(query) || appCategory.includes(query) || appDescription.includes(query)) {
        card.style.display = 'block';
        found = true;
        sectionHasMatches = true;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Show section if it has matching apps
    if (sectionHasMatches) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
}

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  // Simple JS for carousel
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  
  // Check if carousel elements exist
  if (!carouselImages || images.length === 0) {
    return;
  }
  
  let current = 0;

  function showImage(idx) {
    const offset = -idx * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  // Set up button event listeners
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  
  if (prevBtn) {
    prevBtn.onclick = () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      nextImage();
    };
  }

  // Auto-change image every 3 seconds
  let autoSlide = setInterval(nextImage, 3000);

  // Optional: Pause on hover
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carousel.addEventListener('mouseleave', () => {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextImage, 3000);
    });
  }

  // Initialize the carousel
  showImage(current);
  
  // Add event listeners for search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    // Real-time search as user types
    searchInput.addEventListener('input', liveSearch);
    
    // Search on Enter key
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        onSearch();
      }
    });
  }
});