// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const jokeSpace = document.querySelector('#jokeContainer');

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((data) => jokeSpace.innerText = `Enjoy this joke: ${data.joke}`)
};

window.onload = () => fetchJoke();