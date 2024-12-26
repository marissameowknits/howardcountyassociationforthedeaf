document.addEventListener('DOMContentLoaded', () => {
  fetchData('home.json') 
    .then(response => { 
      // ... (rest of your code)
    })
    .catch(error => { 
      // ... (error handling)
    });
});

function fetchData(pageName) {
  return fetch(pageName + '.json') 
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok for ${pageName}.json`);
      }
      return response.json();
    });
}
