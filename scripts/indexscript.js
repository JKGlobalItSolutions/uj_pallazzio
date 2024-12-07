document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './images/mountain view and persona area/one.jpg',
        './images/mountain view and persona area/two.JPG',
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

    // Carousel autoplay
    const carousel = document.querySelector('#carouselId');
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                lazyLoadObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => lazyLoadObserver.observe(img));

    // Toggle mobile menu
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
    }
});

