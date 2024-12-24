// Load JSON data and render news content
fetch('news.json')
    .then(response => response.json())
    .then(data => renderNews(data))
    .catch(error => console.error('Error loading news data:', error));

// Render news content
function renderNews(data) {
    const container = document.getElementById('news-content');

    // Newsletters Section
    if (data.newsletters && data.newsletters.length > 0) {
        const newslettersSection = document.createElement('section');
        newslettersSection.classList.add('newsletters');
        newslettersSection.innerHTML = `<h2>Newsletters</h2>`;
        data.newsletters.forEach(news => {
            newslettersSection.innerHTML += `
                <article class="news-item">
                    <h3><a href="${news.link}" target="_blank">${news.title}</a></h3>
                    <p>${news.description}</p>
                    <p><small>Published on ${news.date}</small></p>
                </article>
            `;
        });
        container.appendChild(newslettersSection);
    }

    // Community Updates Section
    if (data.communityUpdates && data.communityUpdates.length > 0) {
        const updatesSection = document.createElement('section');
        updatesSection.classList.add('community-updates');
        updatesSection.innerHTML = `<h2>Community Updates</h2>`;
        data.communityUpdates.forEach(update => {
            updatesSection.innerHTML += `
                <article class="news-item">
                    <h3><a href="${update.link}" target="_blank">${update.title}</a></h3>
                    <p>${update.description}</p>
                    <p><small>Published on ${update.date}</small></p>
                </article>
            `;
        });
        container.appendChild(updatesSection);
    }
}