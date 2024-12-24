document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    const toggleMenu = () => {
        document.querySelector('.nav').classList.toggle('active');
    };

    const showSuggestions = () => {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const suggestions = ['Home', 'About Us', 'News', 'Events', 'Resources', 'Contact'];
        const filtered = suggestions.filter(item => item.toLowerCase().includes(input));
        const suggestionBox = document.getElementById('suggestions');
        suggestionBox.innerHTML = filtered.map(item => `<li>${item}</li>`).join('');
    };

    const showSlide = (index) => {
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    };

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    // Initialize
    showSlide(currentSlide);
});