document.addEventListener('DOMContentLoaded', () => {
  fetch('home.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok'); 
      }
      return response.json(); 
    })
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
    .catch(error => {
      console.error('Error loading data:', error);
      // Handle errors gracefully (e.g., display an error message to the user)
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Error loading data. Please try again later.';
      document.querySelector('main').appendChild(errorMessage); 
    });
});
