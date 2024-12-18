document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in'); // Select all elements with fade-in class

    const options = {
      threshold: 0.3, // Trigger when 30% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is in view, add the 'show' class for fade-in effect
          entry.target.classList.add('show');
          entry.target.classList.remove('hide'); // Optional, in case you use a 'hide' class
        } else {
          // Element is out of view, remove the 'show' class to reset the state
          entry.target.classList.remove('show');
          entry.target.classList.add('hide'); // Optional, to trigger a fade-out effect
        }
      });
    }, options);

    fadeElements.forEach(element => {
      observer.observe(element); // Keep observing the elements
    });
  });

  let slideIndex = 0;
  showSlide(slideIndex);
  
  function showSlide(n) {
    let slides = document.querySelectorAll('.slide-card');
    let dots = document.querySelectorAll('.dot');
  
    slides.forEach(slide => (slide.style.display = 'none'));
    dots.forEach(dot => dot.classList.remove('active'));
  
    slides[n].style.display = 'block';
    dots[n].classList.add('active');
  }
  
  // Auto-slide every 5 seconds
  setInterval(() => {
    slideIndex = (slideIndex + 1) % document.querySelectorAll('.slide-card').length;
    showSlide(slideIndex);
  }, 5000);

  

// Open modal with content
function openModal(quoteId) {
  const modal = document.getElementById('quoteModal');
  const modalImage = document.getElementById('modalImage');
  const modalAuthor = document.getElementById('modalAuthor');
  const modalQuote = document.getElementById('modalQuote');
  const modalDescription = document.getElementById('modalDescription');

  // Content for quotes
  const quotes = {
      1: {
          image: 'images/profile1.jpg',
          author: 'Bolaji Adeyanju',
          quote: 'The strength of a community lies in its unity, diversity, and shared purpose. Together, we foster inclusion, celebrate cultural richness, and build bridges of understanding. Through collaboration, events, and initiatives, we strive to create a supportive environment where every voice is heard, every tradition is valued, and every individual feels a sense of belonging.',
          description: 'Bolaji Adeyanju, administrator of the Offaly Africa Support Community.'
      },
      2: {
          image: 'images/profile2.jpg',
          author: 'Anna Heagney',
          quote: 'Our vision is to create a vibrant, inclusive community where everyone is treated with fairness and respect. Through initiatives like intercultural events, collaborative projects, and support programs, we aim to bridge gaps, celebrate diversity, and ensure that every individual feels welcomed and valued.',
          description: 'Anna Heagney, administrator of the Offaly Africa Support Community.'
      }
  };

  // Set content dynamically
  modalImage.src = quotes[quoteId].image;
  modalAuthor.textContent = quotes[quoteId].author;
  modalQuote.textContent = quotes[quoteId].quote;
  modalDescription.textContent = quotes[quoteId].description;

  // Show the modal with fade-in effect
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10); // Allow time for display before adding class
}

// Close modal with fade-out effect
function closeModal() {
  const modal = document.getElementById('quoteModal');
  modal.classList.remove('show'); // Start fade-out effect
  setTimeout(() => (modal.style.display = 'none'), 500); // Delay hiding until transition ends
}

