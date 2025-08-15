/**
 * main.js
 * Handles responsive header layout switching
 * Author: Jude Andrew Reyes
 */

// Cache DOM elements for efficiency
const body = document.body;
const nav = document.querySelector('nav');

// Function to adjust layout based on screen width
function adjustHeaderLayout() {
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
        // Add a mobile-specific class
        body.classList.add('mobile');
    } else {
        // Remove mobile-specific class
        body.classList.remove('mobile');
    }

    // Debug log to verify state
    console.log(`Layout set to: ${isMobile ? 'MOBILE' : 'DESKTOP'}`);
}

// Initial check on page load
adjustHeaderLayout();

// Listen for screen resize
window.addEventListener('resize', adjustHeaderLayout);
