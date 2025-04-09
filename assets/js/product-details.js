
// Functionality Product Details Page Share Button
document.getElementById('share-btn').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Product Details',
            text: 'Check out this amazing product!',
            url: window.location.href,
        })
        .then(() => console.log('Product Shared Successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        alert('Web Share API is not supported in your browser.');
    }
});

// -----------------------------------------------------------------------------------
