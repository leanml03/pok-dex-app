import { loadPokemonData } from './api_getData.js';

function callAPI() {
  loadInitialPokemonData();
  addScrollEventListener();
}

callAPI();

function loadInitialPokemonData() {
  loadPokemonData(20);
}

function addScrollEventListener() {
  window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  const remainingScroll = scrollHeight - (scrollTop + clientHeight);

  if (remainingScroll < 200) { // Adjust this value as needed
    loadMorePokemonData();
  }
}

function loadMorePokemonData() {
  loadPokemonData(20);
}