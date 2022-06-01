const fetch = require('node-fetch');

const fetchJoke = async () => {
//   const url = 'api.chucknorris.io/jokes/random?category=dev'; // Dá erro
  const url = 'https://api.chucknorris.io/jokes/random?category=dev'; // Não dá erro

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));

    console.log(result);
}

fetchJoke();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported