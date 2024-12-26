document.addEventListener('DOMContentLoaded', () => {
  fetchData('about')
    .then(data => {
      document.getElementById('mission-text').textContent = data.mission;
      document.getElementById('vision-text').textContent = data.vision;
      document.getElementById('history-text').textContent = data.history;
    })
    .catch(error => console.error('Error loading data:', error));
});

// Reuse the fetchData function from index.js
