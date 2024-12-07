document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './images/mountain view and persona area/one.jpg',
        './images/mountain view and persona area/twojpg',
        './images/mountain view and persona area/three.JPG',
        './images/mountain view and persona area/four.JPG',
        './images/mountain view and persona area/five.JPG',
        './images/mountain view and persona area/six.JPG'
    ];
    let currentImageIndex = 0;

    const modalImage = document.getElementById('modalImage');
    const prevButton = document.getElementById('prevImage');
    const nextButton = document.getElementById('nextImage');

    function updateModalImage() {
        modalImage.src = images[currentImageIndex];
    }

    document.querySelectorAll('.luxury-image').forEach(img => {
        img.addEventListener('click', function() {
            currentImageIndex = parseInt(this.getAttribute('data-bs-image-id'));
            updateModalImage();
        });
    });

    prevButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateModalImage();
    });

    nextButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateModalImage();
    });

    // Enable keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (document.querySelector('#imageModal.show')) {
            if (e.key === 'ArrowLeft') {
                prevButton.click();
            } else if (e.key === 'ArrowRight') {
                nextButton.click();
            }
        }
    });

    // Initialize AOS
    AOS.init({
        duration: 2000,
        once: true,
        offset: 100
    });

    // Set current year
    document.getElementById('year').innerText = new Date().getFullYear();
});