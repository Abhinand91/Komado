// Script for interactive functionalities on the KOMADO website

// Mobile navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Modal popup for product promotions
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const modalTrigger = document.querySelectorAll('.promo-btn');

modalTrigger.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
  });
});

modalClose.addEventListener('click',)
