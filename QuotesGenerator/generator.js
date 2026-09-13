const button = document.getElementById('btn');
const quotes = document.querySelector('h1');

button.addEventListener('click', () => {
  fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
      quotes.textContent = `"${data.quote}" - ${data.author}`;
    })
    .catch(error => console.error('Error fetching quote:', error));
})





