document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').innerText = new Date().getFullYear();

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});