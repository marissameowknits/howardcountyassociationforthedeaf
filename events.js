document.addEventListener('DOMContentLoaded', () => {
  fetchData('events')
    .then(data => {
      const eventsList = document.getElementById('events-list');
      data.upcomingEvents.forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.innerHTML = `
          <h3>${event.title}</h3>
          <p>${event.date} | ${event.time}</p>
          <p>${event.location}</p>
          <p>${event.description}</p>
        `;
        eventsList.appendChild(eventItem);
      });
    })
    .catch(error => console.error('Error loading data:', error));
});

// Reuse the fetchData function from index.js
