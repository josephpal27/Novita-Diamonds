
// Functionality for Header Swiper Initialization in all pages
const swiper = new Swiper(".header-slider .swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "slide",
  speed: 1000,
});

// ----------------------------------------------------------------------------------------

// Functionality for Home Page Banner Swiper Initialization
const bannerSwiper = new Swiper(".banner-slider .swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "slide",
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ----------------------------------------------------------------------------------------

// Functionality for Home Page Products Swiper Initialization
const productSwiper = new Swiper(".product-slider .swiper-container", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 25,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
});

// ----------------------------------------------------------------------------------------

// Functionality For Home Page Filter Sort Dropdown
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

// Functionality for Home Page Collection Tabbing System
let contentTabs = document.querySelectorAll('.tab-content');
let tabButtons = document.querySelectorAll('.tab-btn-row button');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
      // Hide all content boxes
      contentTabs.forEach(tab => {
          tab.classList.add('hide');
      });

      // Remove active class from all buttons
      tabButtons.forEach(btn => {
          btn.classList.remove('active');
      });

      // Show the respective content box and add active class to the button
      contentTabs[index].classList.remove('hide');
      button.classList.add('active');

      // Scroll to #collection after a 0.5-second delay
      setTimeout(() => {
        const target = document.querySelector('#collection');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to the target
        }
      }, 500); // 0.5-second delay
  });
});

// ----------------------------------------------------------------------------------------

// Functionality for Wishlist Modal Popup
let wishlistBtn = document.querySelector('nav .right-aligned-menu #wishlist-btn');
let wishlistCloseBtn = document.querySelector('#close-wishlist-modal');
let wishlistModal = document.querySelector('#wishlist-modal');

wishlistBtn.addEventListener('click', () => {
  wishlistModal.classList.add('active');                             
})
wishlistCloseBtn.addEventListener('click', () => {
  wishlistModal.classList.remove('active');
})

// Close the modal when clicking outside of it
document.addEventListener('click', (event) => {
    if (!wishlistModal.contains(event.target) && !wishlistBtn.contains(event.target)) {
      wishlistModal.classList.remove('active');
    }
});
// ----------------------------------------------------------------------------------------


// Prevent closing the modal when clicking on the remove button and update in database table
document.querySelectorAll('.wishlist-product-remove-btn i').forEach((removeBtn) => {
    removeBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the document

        // Get the parent wishlist product element
        const wishlistProduct = event.target.closest('.wishlist-product');

        // Get the product ID (assume it's stored in a data attribute for backend use)
        const productId = wishlistProduct.dataset.id;

        // Remove the product from the frontend
        wishlistProduct.remove();

        // Send a request to the backend to delete the product from the database
        fetch('delete_wishlist_product.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId: productId }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                console.log(`Product with ID ${productId} removed successfully.`);
            } else {
                console.error(`Failed to remove product with ID ${productId}.`);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

// ----------------------------------------------------------------------------------------