// Get the HTML elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu-list');
const navLinks = document.querySelectorAll('.nav-link');

// 1. Show/Hide menu when hamburger is clicked
mobileMenu.addEventListener('click', () => {
    // This adds/removes the "is-active" class on the menu
    navMenu.classList.toggle('is-active');
});

// 2. Close the menu when a link is clicked
// This is important for a single-page app
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // If the menu is open, close it
        if (navMenu.classList.contains('is-active')) {
            navMenu.classList.remove('is-active');
        }
    });
});