const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle the menu on hamburger click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
