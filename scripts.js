document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    const toggleMenu = () => {
        document.querySelector('.nav').classList.toggle('active');
    };

    const showSlide = (index) => {
        slides.forEach((slide) => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    // Optional: Autoplay
    // setInterval(nextSlide, 5000); // Change interval as needed

    // Initialize
    showSlide(currentSlide);

    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);
});
