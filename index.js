document.addEventListener('DOMContentLoaded', () => {
  fetchData('home')
    .then(data => {
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
    })
    .catch(error => console.error('Error loading data:', error));
});

function fetchData(pageName) {
  return fetch(`${pageName}.json`)
    .then(response => response.json());
}
