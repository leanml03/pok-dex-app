// Variables de configuración
const limit = 20; // Número de elementos a cargar en cada llamada
let offset = 0; // Desplazamiento inicial

// Función para cargar más elementos al hacer scroll
function loadMorePokemons() {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    // Desactivar el event listener para evitar llamadas múltiples mientras se carga
    window.removeEventListener('scroll', loadMorePokemons);

    // Realizar la llamada a la API y cargar más elementos
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .then(data => {
        const pokemonListElement = document.getElementById('pokemon-list');

        // Iterar sobre los resultados y crear los elementos
        data.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemonData => {
              const pokemonElement = createPokemonElement(pokemonData);
              pokemonListElement.appendChild(pokemonElement);
            })
            .catch(error => {
              console.log('Error:', error);
            });
        });

        // Actualizar el valor de offset para la próxima carga
        offset += limit;

        // Volver a activar el event listener después de una pequeña pausa para evitar llamadas excesivas
        setTimeout(() => {
          window.addEventListener('scroll', loadMorePokemons);
        }, 500);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
}

// Event listener para el evento scroll
window.addEventListener('scroll', loadMorePokemons);