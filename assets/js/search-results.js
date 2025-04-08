// Functionality For Sort Menu Toggle

let sortBtn = document.querySelector('#sort-btn');
let sortMenu = document.querySelector('.sort-menu');
let closeBtn = document.querySelector('.sort-menu .sort-menu-head .fa-xmark');

sortBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from propagating to the document
    sortMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    sortMenu.classList.remove('active');
});

// Close the sort menu when clicking outside
document.addEventListener('click', (event) => {
    if (sortMenu.classList.contains('active') && !sortMenu.contains(event.target)) {
        sortMenu.classList.remove('active');
    }
});