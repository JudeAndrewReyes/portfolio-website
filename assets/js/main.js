/**
 * main.js
 * Handles responsive header layout and smooth scrolling
 * Author: Jude Andrew Reyes
 */

// Cache DOM elements
const body = document.body;

// ---------------------------
// 1. Header Layout Adjustment
// ---------------------------
function adjustHeaderLayout() {
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
        body.classList.add('mobile');
    } else {
        body.classList.remove('mobile');
    }

    console.log(`Layout set to: ${isMobile ? 'MOBILE' : 'DESKTOP'}`);
}

// Initial check
adjustHeaderLayout();

// Listen for screen resize
window.addEventListener('resize', adjustHeaderLayout);

// ---------------------------
// 2. Smooth Scroll
// ---------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
