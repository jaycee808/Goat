/* Event Listener to toggle navigation menu */ 
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');
    const menuCloseBtn = document.querySelector('.menu-close-btn');
    const cartToggle = document.querySelector('.toggle-cart');
    const cartOverlay = document.querySelector('.cart-overlay');

    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
        menuLinks.classList.toggle('grid');
        menuCloseBtn.style.display = 'block'; // Display the close button when menu links are shown
    });

    menuCloseBtn.addEventListener('click', () => {
        menuLinks.classList.remove('show');
        menuCloseBtn.style.display = 'none'; // Hide the close button when menu links are hidden
    });

    cartToggle.addEventListener('click', () => {
        cartOverlay.classList.toggle('show');
    });

    const cartCloseBtn = document.querySelector('.cart-close-btn');
    cartCloseBtn.addEventListener('click', () => {
        cartOverlay.classList.remove('show');
    });
});
