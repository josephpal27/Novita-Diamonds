// Functionality for Filter Rows Toggle
let bottomRow = document.querySelectorAll('.filter-body .filter-row .row-center .row-bottom');
let rowCaret = document.querySelectorAll('.filter-body .filter-row .row-right i');

rowCaret.forEach((caret, index) => {
    caret.addEventListener('click', () => {
        bottomRow[index].classList.toggle('show');
        caret.classList.toggle('fa-caret-down');
        caret.classList.toggle('fa-caret-up');
    }
    );
});


// ----------------------------------------------------------------------------------------
// Functionality for Clear Search Button
document.querySelector('.filter-head-right button[type="button"]').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.filter-body .hidden-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
});

// ----------------------------------------------------------------------------------------