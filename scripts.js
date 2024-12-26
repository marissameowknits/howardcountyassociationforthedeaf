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

    // Function to fetch and render data
function fetchData(pageName) {
  fetch(`${pageName}.json`)
    .then(response => response.json())
    .then(data => {
      // Update HTML elements based on the fetched data
      if (pageName === 'index') {
        document.getElementById('hero-heading').textContent = data.hero.heading;
        document.getElementById('hero-text').textContent = data.hero.text;
        document.getElementById('hero-button').href = data.hero.buttonLink; 

        document.getElementById('about-us-text').textContent = data.aboutUs.text;

        const servicesGrid = document.getElementById('services-grid');
        data.services.forEach(service => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
            <i class="${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          `;
          servicesGrid.appendChild(card);
        });
      } else if (pageName === 'news') {
        // ... (similar logic for rendering news content)
      } 
      // ... (add logic for other pages)
    })
    .catch(error => console.error('Error loading data:', error));
}

// Call the fetchData function on page load
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.substring(1); // Get current page name
  fetchData(currentPage); 
});
    // setInterval(nextSlide, 5000); // Change interval as needed

    // Initialize
    showSlide(currentSlide);

    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);
});
