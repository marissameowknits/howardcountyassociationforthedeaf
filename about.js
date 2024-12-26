fetch('about.json')
  .then(response => response.json())
  .then(data => {
    console.log('Data loaded:', data);  // Check if data is loading correctly

    // Page Header
    document.getElementById('page-title').textContent = data.page_header.title;
    document.getElementById('page-description').textContent = data.page_header.description;

    // Mission
    document.getElementById('mission-title').textContent = data.mission.title;
    const missionList = document.getElementById('mission-list');
    data.mission.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      missionList.appendChild(li);
    });

    // Team
    document.getElementById('team-title').textContent = data.team.title;
    const teamList = document.getElementById('team-list');
    data.team.members.forEach(member => {
      const li = document.createElement('li');
      if (member.names) {
        li.innerHTML = `<strong>${member.role}:</strong> ${member.names.join(', ')}`;
      } else {
        li.innerHTML = `<strong>${member.role}:</strong> ${member.name}`;
      }
      teamList.appendChild(li);
    });

    // Resources
    document.getElementById('resources-title').textContent = data.resources.title;
    document.getElementById('resources-description').textContent = data.resources.description;
    const resourcesList = document.getElementById('resources-list');
    data.resources.items.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}">${item.name}</a> - ${item.description}`;
      resourcesList.appendChild(li);
    });
    document.getElementById('resources-page-link').innerHTML = `For a full list of resources, visit our <a href="${data.resources.resources_page_link}">Resources Page</a>.`;

    // Legal
    document.getElementById('legal-description').textContent = data.legal.description;

    // Footer
    document.getElementById('footer-copyright').textContent = data.footer.copyright;
  })
  .catch(error => {
    console.error('Error fetching the JSON data:', error);
  });
