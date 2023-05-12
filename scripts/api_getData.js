export function loadPokemonData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const pokemonListElement = document.getElementById('pokemon-list');
        const infoBoxElement = document.querySelector('.info-box');
        const pokemonDataElement=document.querySelector('.pokemon-data');
        const pokemonDetailsElement=document.querySelector('.pokemon-details');
        const pokemonEvolutionElement=document.querySelector('.pokemon-evolution');
        let selectedButton = null;
  
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
            const types = pokemonData.types.map(type => type.type.name).join(', ');
            const weight = pokemonData.weight;
            const height = pokemonData.height;
            const species = pokemonData.species.name;
          
            // Obtener los grupos de huevo
            fetch(pokemonData.species.url)
              .then(response => response.json())
              .then(speciesData => {
                const eggGroups = speciesData.egg_groups.map(group => group.name).join(', ');
          
                // Obtener las habilidades
                const abilitiesPromises = pokemonData.abilities.map(ability => fetch(ability.ability.url).then(response => response.json()));
                Promise.all(abilitiesPromises)
                  .then(abilitiesData => {
                    const abilities = abilitiesData.map(data => data.name).join(', ');
          
                    pokemonDataElement.innerHTML = `
                      <span style="font-weight: bold;">Information</span>
                      <p>Name: ${pokemonData.name}</p>
                      <p>Types: ${types}</p>
                      <p>Weight: ${weight}</p>
                      <p>Height: ${height}</p>
                      <p>Species: ${species}</p>
                      <p>Egg Groups: ${eggGroups}</p>
                      <p>Abilities: ${abilities}</p>
                    `;
          
                    const pokemonImage = document.createElement('img');
                    pokemonImage.src = pokemonData.sprites.other['official-artwork'].front_default;
                    pokemonImage.alt = pokemonData.name;
                    pokemonImage.classList.add('pokemon-image'); // Agregar la clase "pokemon-image"
                    pokemonDataElement.appendChild(pokemonImage);
                    
                  })
                  .catch(error => {
                    console.log('Error:', error);
                  });
              })
              .catch(error => {
                console.log('Error:', error);
              });
          }
          
      })
      .catch(error => {
        console.log('Error:', error);
      });





      
  }
  