// script.js

// Function to create an interactive button handler
function addButtonHandler() {
    const buttons = document.querySelectorAll('.interactive-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    });
}

// Function to smooth scroll to a section
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Attach event listeners for buttons
window.onload = () => {
    addButtonHandler();
    const scrollButtons = document.querySelectorAll('.scroll-button');
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            smoothScroll(target);
        });
    });
};