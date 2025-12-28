function startDownload() {
  alert("Start Downloading Music Player X...");
  window.location.href = "assets/musicplayerx.exe";
}

// Add animation classes on scroll with infinite replay
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add visible class when element enters viewport
        entry.target.classList.add('is-visible');
      } else {
        // Remove visible class when element exits viewport for infinite animation
        entry.target.classList.remove('is-visible');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach((el) => observer.observe(el));
  
  // Add staggered delay to elements for a cascading effect (faster animation)
  elementsToAnimate.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.05}s`;
  });
});