/**
 * main.js
 * Handles responsive header layout, smooth scrolling, and modal logic
 * Author: Jude Andrew Reyes
 */

const body = document.body;
const connectBtn = document.getElementById('connectBtn');
const connectModal = document.getElementById('connectModal');
const closeModal = document.getElementById('closeModal');

// ---------------------------
// 1. Header Layout Adjustment
// ---------------------------
function adjustHeaderLayout() {
    const isMobile = window.innerWidth <= 600;

    body.classList.toggle('mobile', isMobile);
    console.log(`Layout set to: ${isMobile ? 'MOBILE' : 'DESKTOP'}`);
}

adjustHeaderLayout();
window.addEventListener('resize', adjustHeaderLayout);

// ---------------------------
// 2. Smooth Scroll
// ---------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ---------------------------
// 3. Modal Functionality
// ---------------------------
connectBtn.addEventListener('click', () => {
    connectModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
});

closeModal.addEventListener('click', () => {
    connectModal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scroll
});

window.addEventListener('click', e => {
    if (e.target === connectModal) {
        connectModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});
