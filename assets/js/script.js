/* Event Listener to toggle navigation menu */ 
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');
    
    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
    });
});