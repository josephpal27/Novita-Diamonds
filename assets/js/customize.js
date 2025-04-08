// Functionality for Filter Rows Toggle
let filterRow = document.querySelectorAll('.filter-body .filter-row');
let bottomRow = document.querySelectorAll('.filter-body .filter-row .row-center .row-bottom');
let rowCaret = document.querySelectorAll('.filter-body .filter-row .row-right i');

rowCaret.forEach((caret, index) => {
    caret.addEventListener('click', () => {
        bottomRow[index].classList.toggle('show');
        caret.classList.toggle('fa-caret-down');
        caret.classList.toggle('fa-caret-up');
        filterRow.forEach((row, i) => {
            row.classList.remove('active');
            filterRow[i].classList.toggle('active');
        })
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
    const numInputs = document.querySelectorAll('#filter-row-2 input[type="number"]');
    numInputs.forEach(numInp => {
        numInp.value = '';
    });
});

// ----------------------------------------------------------------------------------------

// Functionality for Filter Row 4 and 5 Checkboxes Deselection Toggle
let filterRow4 = document.querySelector('.filter-body #filter-row-4');
let filterRow5 = document.querySelector('.filter-body #filter-row-5');
let filterRow4CheckBoxes = document.querySelectorAll('.filter-body #filter-row-4 input[type="checkbox"]');
let filterRow5CheckBoxes = document.querySelectorAll('.filter-body #filter-row-5 input[type="checkbox"]');

filterRow4.addEventListener('click', () => {
    filterRow5CheckBoxes.forEach(checkbox => {
        checkbox.checked = false;
    });
});

filterRow5.addEventListener('click', () => {
    filterRow4CheckBoxes.forEach(checkbox => {
        checkbox.checked = false;
    });
});

// ----------------------------------------------------------------------------------------