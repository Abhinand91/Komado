// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    });
});

// Animation on scroll
const revealElements = document.querySelectorAll('.container, .product-card, .feedback-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('reveal');
        } else {
            el.classList.remove('reveal');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Trigger animation for elements already in view on page load
document.addEventListener('DOMContentLoaded', revealOnScroll);
