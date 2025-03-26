
// Functionality for header currency dropdown menu
const btn = document.getElementById('currency-btn');
const dropdown = document.getElementById('currency-dropdown');

btn.addEventListener('click', (event) => {
  // Toggle the dropdown visibility
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  event.stopPropagation(); // Prevent the click from propagating to the document
});

// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  }
});

// Handle dropdown item selection
document.querySelectorAll('.dropdown div').forEach(item => {
  item.addEventListener('click', (event) => {
    const flag = item.querySelector('img').outerHTML;
    const currency = item.textContent.trim();
    btn.innerHTML = `${flag} ${currency} <span>▼</span>`;
    dropdown.style.display = 'none';
    event.stopPropagation(); // Prevent the click from propagating to the document
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


// ----------------------------------------------------------------------------------------

// Functionality For Filter Sort Dropdown
document.querySelectorAll('.filter-sort-head h1').forEach((head, index) => {
  head.addEventListener('click', (event) => {
      // Prevent the click from propagating to the document
      event.stopPropagation();

      // Get the respective content box and icon
      const contentBoxes = document.querySelectorAll('.filter-sort-content .content-box');
      const icon = head.querySelector('i');

      // Check if the clicked dropdown is already open
      if (contentBoxes[index].classList.contains('show')) {
          // Close the dropdown and reset the icon
          contentBoxes[index].classList.remove('show');
          icon.classList.remove('fa-angle-up');
          icon.classList.add('fa-angle-down');
      } else {
          // Hide all content boxes and reset all icons
          document.querySelectorAll('.filter-sort-content .content-box').forEach(box => {
              box.classList.remove('show');
          });
          document.querySelectorAll('.filter-sort-head h1 i').forEach(icon => {
              icon.classList.remove('fa-angle-up');
              icon.classList.add('fa-angle-down');
          });

          // Show the respective content box and toggle the icon
          contentBoxes[index].classList.add('show');
          icon.classList.remove('fa-angle-down');
          icon.classList.add('fa-angle-up');
      }
  });
});

// Close the content box and reset icons when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.filter-sort-content .content-box').forEach(box => {
      box.classList.remove('show');
  });
  document.querySelectorAll('.filter-sort-head h1 i').forEach(icon => {
      icon.classList.remove('fa-angle-up');
      icon.classList.add('fa-angle-down');
  });
});

// ----------------------------------------------------------------------------------------