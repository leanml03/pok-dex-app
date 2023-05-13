export function loadPokemonData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(response => response.json())
      .then(data => {
        const pokemonListElement = document.getElementById('pokemon-list');
        const infoBoxElement = document.querySelector('.info-box');
        const pokemonDataElement=document.querySelector('.pokemon-data');
        const pokemonDetailsElement=document.querySelector('.pokemon-details');
        const pokemonEvolutionElement=document.querySelector('.pokemon-evolution');
        const evolutionTitleElement=document.querySelector('.evolution-title');



            // Obtén la referencia al elemento de entrada de búsqueda y al botón de búsqueda
        const searchInput = document.querySelector('.search_input');
        const searchButton = document.getElementById('btn-search');

        // Agrega un evento de clic al botón de búsqueda
        searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase(); // Obtiene el término de búsqueda ingresado
        
        // Busca el término en los datos de los Pokémon
        const matchedPokemon = data.results.find(pokemon => pokemon.name.toLowerCase() === searchTerm);
        
        if (matchedPokemon) {
            // Si se encuentra un Pokémon coincidente, muestra su información
            fetch(matchedPokemon.url)
            .then(response => response.json())
            .then(pokemonData => {
                showPokemonInfo(pokemonData);
            })
            .catch(error => {
                console.log('Error:', error);
            });
        } else {
            // Si no se encuentra un Pokémon coincidente, muestra un mensaje de error
            alert("No pokemon has been registered with this name.")

        }
        });

        searchInput.addEventListener('input', () => {
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
            const capitalizeFirstLetter = (string) => {
              return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            };
          
            const types = pokemonData.types.map(type => capitalizeFirstLetter(type.type.name)).join(' ');
            const weight = pokemonData.weight;
            const height = pokemonData.height;
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
                      <p><strong>Weight:</strong> ${weight}</p>
                      <p><strong>Height:</strong> ${height}</p>
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

          
function displaySearchResults(pokemons) {
        pokemonListElement.innerHTML = ''; // Limpiamos la lista de Pokémon existente
        pokemons.forEach(pokemon => {
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
    })
    .catch(error => {
      console.log('Error:', error);
    });

      




      
  }
  