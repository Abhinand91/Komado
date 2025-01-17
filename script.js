// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Mobile Navigation Toggle (for a more responsive menu)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 3. Contact Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    // Simple validation checks
    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields.");
    } else {
        // You can add further validation for email format here
        if (!validateEmail(email)) {
            e.preventDefault();
            alert("Please enter a valid email address.");
        }
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
