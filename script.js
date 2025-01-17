// Scroll animations: Add 'visible' class when elements are in view
const fadeInElements = document.querySelectorAll('.fade-in');

const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
};

const animateOnScroll = () => {
    fadeInElements.forEach((element) => {
        if (isInView(element)) {
            element.classList.add('visible');
        }
    });
};

// Listen to the scroll event
window.addEventListener('scroll', animateOnScroll);

// Trigger the animation on page load
document.addEventListener('DOMContentLoaded', animateOnScroll);
