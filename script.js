// Intersection Observer for Fade-In Animation
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } 
    });
}, {
    threshold: 0.2
});

// Select all elements with the fade-in class
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(el => observer.observe(el));
// Accordion Toggle
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');
    
    button.addEventListener('click', () => {
        accordionItems.forEach(innerItem => {
            if (innerItem !== item) {
                innerItem.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
});
const chapterHeaders = document.querySelectorAll('.chapter-header');

chapterHeaders.forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    const body = header.nextElementSibling;
    body.style.display = body.style.display === 'block' ? 'none' : 'block';
  });
});
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Smooth scroll and transition
document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault();
  
    const contactSection = document.querySelector('#contact');
    
    // Smooth Scroll
    contactSection.scrollIntoView({
      behavior: 'smooth'
    });
  
    // Check if transition already happened
    if (!contactSection.classList.contains('active')) {
      setTimeout(() => {
        contactSection.classList.add('active');
      }, 300); // Slight delay for effect
    }
  });
  

// Select all dropdown arrows
const dropdowns = document.querySelectorAll(".dropdown .arrow");

// Add click event to toggle submenu visibility
dropdowns.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    // Prevent the link from being clicked
    e.preventDefault();

    // Find the parent <li> and toggle the 'open' class
    const dropdown = arrow.closest(".dropdown");
    dropdown.classList.toggle("open");
  });
});

  