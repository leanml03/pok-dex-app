let offset = 0;
const limit = 20;
let isLoading = false;

// Función para cargar más datos de Pokémon
async function loadMorePokemon() {
  // Evitar cargar si ya se está realizando una carga
  if (isLoading) {
    return;
  }


  isLoading = true;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    const pokemonList = document.getElementById('pokemon-list');

    data.results.forEach(async (pokemon) => {
      const pokemonData = await fetchPokemonData(pokemon.url);
      const pokemonButton = createPokemonButton(pokemonData);
      pokemonList.appendChild(pokemonButton);
    });

    offset += limit;
  } catch (error) {
    console.log('Error:', error);
  } finally {
    isLoading = false;
  }
}

// Función para detectar el evento de scroll y cargar más datos si es necesario
function handleScroll() {
  const pokemonNav = document.getElementById('pokemon-nav');
  const scrollTop = pokemonNav.scrollTop;
  const scrollHeight = pokemonNav.scrollHeight;
  const clientHeight = pokemonNav.clientHeight;
  

  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadMorePokemon();
  }
}

// Función para cargar los datos iniciales de los primeros Pokémon
export async function loadPokemonData() {

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await response.json();
    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.innerHTML = ''; // Limpiar la lista antes de cargar nuevos datos
    data.results.forEach(async (pokemon) => {
      const pokemonData = await fetchPokemonData(pokemon.url);
      const pokemonButton = createPokemonButton(pokemonData);
      pokemonList.appendChild(pokemonButton);
    });

    offset = limit; // Establecer el offset inicial

    // Agregar el evento de scroll al contenedor pokemon-nav
    const pokemonNav = document.getElementById('pokemon-nav');
    pokemonNav.addEventListener('scroll', handleScroll);
  } catch (error) {
    console.log('Error:', error);
  }
  
}

// Función para obtener los datos de un Pokémon específico
async function fetchPokemonData(url) {
  const response = await fetch(url);
  return response.json();
}
searchPokemon();
async function searchPokemon(){
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=898`);
    const data = await response.json();
    const searchInput = document.querySelector('.search_input'); // Search Input and button elements
    const searchButton = document.getElementById('btn-search');
    const pokemonListElement = document.getElementById('pokemon-list');
    searchInput.addEventListener('input', () => { // Event to get the current string in the input
      const searchTerm = searchInput.value.toLowerCase();
      if(searchTerm===''){
        pokemonListElement.innerHTML = ''; 
        loadPokemonData();
      }
      else{
        const matchedPokemons = data.results.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchTerm));
        displaySearchResults(matchedPokemons);
      }

    });
  } catch{
    console.log("ERROR All Pokemon API Fetch");
  }
  //Get all the pokemons in the API to search specific specie
  
  
}

          // Search functionality  
async function searchPokemox(data) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
    const datax = await response.json();

  
    
    console.log(data);



  const searchInput = document.querySelector('.search_input'); // Search Input and button elements
  const searchButton = document.getElementById('btn-search');
  const pokemonListElement = document.getElementById('pokemon-list');
  const pokemonCache = new Map(); // Create a cache to store recently accessed pokemon

  searchButton.addEventListener('click', () => { // Search button event
    const searchTerm = searchInput.value.toLowerCase(); // Get the name of input
    const matchedPokemons = []; // Create an array to store the matched pokemon

    // Use a tokenizer to break the search term into tokens
    const tokens = searchTerm.split(' ');

    // Iterate over the tokens
    for (const token of tokens) {
      
      // Check if the token is in the cache
      if (pokemonCache.has(token)) {
        // If the token is in the cache, get the corresponding pokemon from the cache
        matchedPokemons.push(pokemonCache.get(token));
      } else {
        // If the token is not in the cache, fetch the pokemon from the database
        const pokemon = data.results.find(pokemon => pokemon.name.toLowerCase().startsWith(token));
        
        if (pokemon) {
          // If the pokemon is found, add it to the cache and the array of matched pokemon
          pokemonCache.set(token, pokemon);
          matchedPokemons.push(pokemon);
        }
      }
    }

    // Display the matched pokemon
    displaySearchResults(matchedPokemons);
  });

  searchInput.addEventListener('input', () => { // Event to get the current string in the input
    const searchTerm = searchInput.value.toLowerCase();
    const matchedPokemons = data.results.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchTerm));
    displaySearchResults(matchedPokemons);
  });


  data.results.forEach(pokemon => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(pokemonData => {
        const pokemonButton = createPokemonButton(pokemonData);
        pokemonListElement.appendChild(pokemonButton);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });
}

function displaySearchResults(pokemons) {
  const pokemonListElement = document.getElementById('pokemon-list');
  
  pokemonListElement.innerHTML = ''; // Clear the existing Pokémon list
  
  
    const pokemonPromises = pokemons.map(pokemon => {
      console.log(pokemon.url); 
      return fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => createPokemonButton(pokemonData));
    });

  
    

  

  Promise.all(pokemonPromises)
    .then(pokemonButtons => {
      pokemonButtons.forEach(pokemonButton => {
        pokemonListElement.appendChild(pokemonButton);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
    
}


          let selectedButton = null;
          function createPokemonButton(pokemonData) {
            
            const pokemonButton = document.createElement('button');
            const pokemonIcon = getPokemonIcon(pokemonData);
            const pokemonName = capitalizeFirstLetter(pokemonData.name);
            const pokemonNumber = getPokemonNumber(pokemonData);
    
            pokemonButton.classList.add('button-style');
            pokemonButton.addEventListener('click', () => {
              if (selectedButton) {
                selectedButton.classList.remove('clicked'); // Restablece el color del botón anterior
              }
              showPokemonInfo(pokemonData);
              pokemonButton.classList.add('clicked'); // Agrega el color al botón actual
              selectedButton = pokemonButton; // Actualiza el botón seleccionado
            });
    
            pokemonButton.insertAdjacentHTML('beforeend', `<img src="${pokemonIcon}" class="pokemon-icon" alt="${pokemonName}">`);
            pokemonButton.insertAdjacentHTML('beforeend', `<span>${pokemonName}</span>`);
            pokemonButton.insertAdjacentHTML('beforeend', `<span class="pokemon-number">#${pokemonNumber}</span>`);
    
            return pokemonButton;
          }
    
          function getPokemonIcon(pokemonData) {
            const generation = 'viii'; // Generación VIII
            const iconKey = `generation-${generation}`;
            if (pokemonData.sprites.versions.hasOwnProperty(iconKey)) {
              return pokemonData.sprites.versions[iconKey].icons.front_default;
            } else {
              return '';
            }
          }
          function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
          function getPokemonNumber(pokemonData) {
            return pokemonData.id.toString().padStart(3, '0');
          }

          function showPokemonInfo(pokemonData) {
            const pokemonEvolutionElement=document.querySelector('.pokemon-evolution');
            const evolutionTitleElement=document.querySelector('.evolution-title');
            const pokemonDataElement=document.querySelector('.pokemon-data');
            const pokemonDetailsElement=document.querySelector('.pokemon-details');
          
            const types = pokemonData.types.map(type => capitalizeFirstLetter(type.type.name)).join(' ');
            const weight = (pokemonData.weight/10).toLocaleString();;
            const height = (pokemonData.height/10).toLocaleString();;
            const species = capitalizeFirstLetter(pokemonData.species.name);
          
            fetch(pokemonData.species.url)
              .then(response => response.json())
              .then(speciesData => {
                const eggGroups = speciesData.egg_groups.map(group => capitalizeFirstLetter(group.name)).join(', ');
          
                // Obtener las habilidades
                const abilitiesPromises = pokemonData.abilities.map(ability => fetch(ability.ability.url).then(response => response.json()));
                Promise.all(abilitiesPromises)
                  .then(abilitiesData => {
                    const abilities = abilitiesData.map(data => capitalizeFirstLetter(data.name)).join(', ');
          
                    pokemonDataElement.innerHTML = `
                      <img src="${pokemonData.sprites.other['official-artwork'].front_default}" alt="${pokemonData.name}" class="pokemon-image">
                      <h1>${capitalizeFirstLetter(pokemonData.name)}</h1>
                      <p>${types}</p>
                    `;
                    pokemonDetailsElement.innerHTML = `
                      <h2 style="font-weight: bold;">Information</h2>
                      <p><strong>Weight:</strong> ${weight} kg</p>
                      <p><strong>Height:</strong> ${height} cm's</p>
                      <p><strong>Species:</strong> ${species}</p>
                      <p><strong>Egg Groups:</strong> ${eggGroups}</p>
                      <p><strong>Abilities:</strong> ${abilities}</p>
                    `;
          
                    fetch(speciesData.evolution_chain.url)
                      .then(response => response.json())
                      .then(evolutionChainData => {
                        const evolutionChain = getEvolutionChain(evolutionChainData);
                        evolutionTitleElement.innerHTML = `Evolution Chart`;
                        pokemonEvolutionElement.innerHTML = `
                          ${evolutionChain}
                        `;
                      })
                      .catch(error => {
                        console.log('Error:', error);
                      });
                  })
                  .catch(error => {
                    console.log('Error:', error);
                  });
              })
              .catch(error => {
                console.log('Error:', error);
              });
          }
          function getEvolutionChain(evolutionChainData) {
            const pokemonListElement = document.getElementById('pokemon-list');
            let evolutionChain = '';
          
            const processEvolution = (evolutionData) => {
              const pokemonName = capitalizeFirstLetter(evolutionData.species.name);
              const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolutionData.species.url.split('/').slice(-2, -1)}.png`;
          
              evolutionChain += `
                <div class="evolution-stage">
                  <img src="${pokemonImageUrl}" alt="${pokemonName}" class="evolution-image">
                  <p>${pokemonName}</p>
                </div>
              `;
          
              if (evolutionData.evolves_to.length > 0) {
                evolutionChain += '<div class="evolution-arrow"></div>';
          
                evolutionData.evolves_to.forEach(evolution => {
                  processEvolution(evolution);
                });
              }
            };
          
            processEvolution(evolutionChainData.chain);
          
            return evolutionChain;
          }
          
          const pokemonCache = new Map();

function getPokemonData(url) {
  if (pokemonCache.has(url)) {
    return Promise.resolve(pokemonCache.get(url));
  } else {
    return fetch(url)
      .then(response => response.json())
      .then(pokemonData => {
        pokemonCache.set(url, pokemonData);
        return pokemonData;
      });
  }
}