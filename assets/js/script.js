
// Functionality for header currency dropdown menu
const btn = document.getElementById('currency-btn');
const dropdown = document.getElementById('currency-dropdown');

btn.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.dropdown div').forEach(item => {
  item.addEventListener('click', () => {
    const flag = item.querySelector('img').outerHTML;
    const currency = item.textContent.trim();
    btn.innerHTML = `${flag} ${currency} <span>▼</span>`;
    dropdown.style.display = 'none';
  });
});

// ----------------------------------------------------------------------------------------

// Functionality for Navbar Content Dropdown
let webNav = document.querySelector('.web-nav');
let navMenu = document.querySelectorAll('.web-nav .nav-left ul li');
let navContent = document.querySelectorAll('.web-nav .nav-content');

navMenu.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        navContent.forEach(content => { content.classList.remove('active') });
        navMenu.forEach(menu => { menu.classList.remove('active') });
        item.classList.add('active');
        navContent[index].classList.add('active');
    });
});

webNav.addEventListener('mouseleave', () => {
    navContent.forEach(content => { content.classList.remove('active') });
    navMenu.forEach(menu => { menu.classList.remove('active') });
});

navContent.forEach(content => {
    content.addEventListener('mouseleave', () => {
        content.classList.remove('active');
        navMenu.forEach(menu => { menu.classList.remove('active') });
    });
});
