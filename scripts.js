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
