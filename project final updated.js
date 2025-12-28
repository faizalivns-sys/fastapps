// Search functionality
function onSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const appSections = document.getElementById('apps').children;
  let found = false;

  for (let section of appSections) {
    const appCards = section.querySelectorAll('div.bg-white');
    appCards.forEach(card => {
      const appName = card.querySelector('h2').innerText.toLowerCase();
      if (appName.includes(query)) {
        card.style.display = 'block';
        found = true;
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (!found) {
    alert('No apps found matching your search.');
  }
}

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  // Simple JS for carousel
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  let current = 0;

  function showImage(idx) {
    const offset = -idx * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  if (document.querySelector('.carousel-btn.prev')) {
    document.querySelector('.carousel-btn.prev').onclick = () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    };
  }

  if (document.querySelector('.carousel-btn.next')) {
    document.querySelector('.carousel-btn.next').onclick = () => {
      nextImage();
    };
  }

  // Auto-change image every 3 seconds
  let autoSlide = setInterval(nextImage, 3000);

  // Optional: Pause on hover
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carousel.addEventListener('mouseleave', () => autoSlide = setInterval(nextImage, 3000));
    showImage(current);
  }

  // Add event listeners for search input and button
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.querySelector('button[onclick="onSearch()"]');

  if (searchInput) {
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        onSearch();
      }
    });
  }

  if (searchButton) {
    searchButton.addEventListener('click', onSearch);
  }
});


document.getElementById('searchInput').addEventListener('input', function() {
  let input = this.value.toLowerCase();
  let appCards = document.querySelectorAll('.app-card');

  appCards.forEach(card => {
    let appName = card.textContent.toLowerCase();
    if (appName.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

