document.addEventListener('DOMContentLoaded', () => {
  fetchData('resources')
    .then(data => {
      const resourcesList = document.getElementById('resources-list');
      data.resources.forEach(resource => {
        const resourceItem = document.createElement('li');
        resourceItem.innerHTML = `
          <a href="${resource.link}" target="_blank">${resource.title}</a>
        `;
        resourcesList.appendChild(resourceItem);
      });
    })
    .catch(error => console.error('Error loading data:', error));
});

// Reuse the fetchData function from index.js
