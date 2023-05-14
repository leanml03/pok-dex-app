# Pokedex App
![Screenshot 2023-05-13 232948](https://github.com/leanml03/pok-dex-app.github.io/assets/39351969/1b4b62bf-8523-4d6e-b892-09165895268e)

## Introduction
Ever since I was a kid I have always been drawn to the many different spices that Pokémon possesses, creating an interactive encyclopedia becomes an exciting challenge for fans and lovers of these creatures. Using JavaScript, CSS and HTML, along with the PokeAPI as a source of information, i can embark on a journey to develop a digital encyclopedia that captures the essence of this great universe.

The goal of this interactive Pokémon encyclopedia is to provide users with a comprehensive platform full of information that allows them to explore the wide variety of Pokémon out there. Leveraging JavaScript capabilities, it will provide an interactive experience that allows users to search, filter and explore information about their favorite Pokémon, as well as discover new Pokémon and learn about their abilities, evolutions and more.

To structure and attractively present the information, i will use HTML and CSS. With HTML, i will define the structure of the encyclopedia, creating intuitive and easy-to-navigate sections. CSS will allow us to apply visual styles that reflect the Pokémon theme, with colorful designs, eye-catching graphics and an attractive interface that immerses users in the Pokémon world as they explore the encyclopedia.

The real challenge of our encyclopedia is the integration of the PokeAPI. This API will provide us with a constant stream of up-to-date information about Pokémon, including data such as their name, type, abilities, description, evolutions and more. By connecting to the PokeAPI, i ensure that our encyclopedia is always up-to-date and that users have access to the most accurate and complete information about Pokémon.

By combining JavaScript, CSS, HTML and the PokeAPI, I will create an interactive Pokémon encyclopedia that will become a valuable tool for Pokémon players, collectors and enthusiasts. 

## Prerequisites
* Basic knowledge of Pokemon or interest in learning.

* Have an updated web browser, as well as an internet connection at all times.

Before you begin, make sure you have the following installed:
**Visual Studio Code:** A popular and free integrated development environment (IDE). You can download it from the official website: [Visual Studio Code](https://code.visualstudio.com/)

## Installation and Config
The application has been created in **Visual Studio Code**, it is recommended to use this tool for the execution of the application together with the Live Server extension which gives us the possibility of hosting the application to a local server of the machine, this is necessary to be able to run the application properly.
In terms of installing a specific programming language, it is not necessary, the tools used are already included in Visual Studio Code.
You can run the application in other ways, obviously, but since it was made and tested on said platform, it is recommended to use it.

![Untitled video - Made with Clipchamp (2)](https://github.com/leanml03/pok-dex-app.github.io/assets/39351969/bfba525c-7923-46c1-9787-2108c262d9ad)

## Configuration steps

* Download and install Visual Studio Code by following the instructions provided on the official website.

* Open Visual Studio Code on your computer.

* Installs the "Live Server" extension for Visual Studio Code. You can do it by following these steps:

* Click the extensions icon in the left sidebar or press Ctrl+Shift+X (Windows/Linux) or Cmd+Shift+X (Mac) to open the Extensions Manager.

* Search for "Live Server" in the search box.

* Click "Install" to install the extension.

* Open the APP project folder in Visual Studio Code. You can do this by selecting "File" in the menu bar and then "Open Folder", then select the project folder.

* Once you've opened the project folder, find your encyclopedia's main HTML file and open it in Visual Studio Code.

* Right-click inside the HTML file and select the "Open with Live Server" option from the context menu. This will open the app on a local server and run it in your default web browser.

You should now be able to view and explore your Interactive Pokémon Encyclopedia in your local web browser! Make sure to keep Visual Studio Code open while you use the app so that the local server stays running.


## Basic use
### Home
At the beginning you have access to the basic interface in which you can see a list of Pokemon on the left side of the page, as well as a scroll where you can go down, as you go down you will be able to see more and more species of Pokemon, the order is this list is numerical according to position in the original Pokedex. 
You can also see a text entry next to a magnifying glass, this is used to search for a particular species. 

### Navigation
In the browser you will be able to scroll down until you find the species of interest. As you scroll down you will find more species. When you click on a species you will see the Pokemon's information displayed in the information section.

![Untitled video - Made with Clipchamp (1)](https://github.com/leanml03/pok-dex-app.github.io/assets/39351969/e98190c2-d8e1-4f3c-b474-f18e634f8b9e)

### Search

In the search section you can enter the name of the Pokemon you want to obtain the information, by inserting each letter the data will be updated in the nav bar where you will see as a result the Pokemon that have in their name the series of letters entered. To display the information just click on the corresponding button in the nav.

![Untitled video - Made with Clipchamp](https://github.com/leanml03/pok-dex-app.github.io/assets/39351969/d160675b-5387-420a-818e-2ac6ff5e094a)

### Information
In this section you can see the information of the selected Pokemon, this information is divided into three parts:

**Data**: In this section you can observe vital data such as name and types.

**Details:** Here you can see the detailed information of the Pokemon, such as weight, height, egg type and ability.

**Evolutionary Line:** Here you can see the evolutionary line of the Pokemon, each one has between 0 and 2 evolutions, although there may also be variants or different evolutions, all these aspects are taken into account when displaying the information.

![Screenshot 2023-05-13 235001](https://github.com/leanml03/pok-dex-app.github.io/assets/39351969/58e8e456-2b7b-4ac3-a70f-e49fb3bc0488)

### Navigation

As for the navigation is simple, the only thing you can do is scroll between the buttons that are generated in the nav in which the Pokemon available for data sampling are displayed.


## Technical Reference:

Technologies used: The Pokedex application is developed using HTML, CSS and JavaScript for the frontend. In addition, the PokeAPI is used as a data source to obtain information about Pokémon.

### Project structure: 
The project is organized into the following files and folders:
#### root
* **index.html:** This file contains the HTML structure of the application and defines the main elements and sections.

#### Styles folder

* **main-styles.css:** Here are the CSS styles that are applied to the HTML elements to achieve the visual design of the application.

#### Scripts folder
* **api_connect:** This script has modular functionality and is called from the HTML, its function is to call the required functions.

* **api_getInfo:** This script is the one that contains the connection with the API as well as its data collection to return it to the HTML.

### Integration with the PokeAPI: 
The application connects to the PokeAPI using HTTP calls to obtain data about the Pokémon, such as its name, type, skills and description. URLs provided by the API are used to access information about each individual Pokémon.

### Functions and Algorithms
* loadMorePokemon(): This function is responsible for loading more Pokémon when the scroll limit is reached in the list. It makes a connection to the PokeAPI API to get the Pokémon data and creates the corresponding buttons.

* handleScroll(): Basically dedicated to inspect the scroll, this function is triggered when the scroll event is detected in the pokemon-nav element (the Pokémon list). It checks if the end of the list has been reached and, if so, calls the loadMorePokemon() function to load more Pokémon.

* loadPokemonData(): This function is responsible for loading the initial Pokémon data. It makes a connection to the PokeAPI API to get the first 20 Pokémon and creates the corresponding buttons. It also sets the scroll event in pokemon-nav to load more Pokémon when needed.

* fetchPokemonData(url): This function makes a connection to a Pokémon's specific URL and returns the Pokémon's data in JSON format.

* searchPokemon(): This function allows you to search for specific Pokémon using an input field. It loads all available Pokémon and, as text is entered into the search field, filters the matching Pokémon and displays them in the list.

* **displaySearchResults(pokemons):** This function displays the search results in the Pokémon list. It creates corresponding buttons for the filtered Pokémon and adds them to the list.

* **createPokemonButton(pokemonData):** This function creates a button element for a specific Pokémon. It uses the Pokémon's data to set the Pokémon's icon, name, and number on the button.

* **getPokemonIcon(pokemonData):** This function gets the URL of the Pokémon's icon. It uses the Pokémon's data to determine the Pokémon's generation and get the corresponding icon.

* **capitalizeFirstLetter(string):** This function capitalizes the first letter of a text string.

* **getPokemonNumber(pokemonData):** This function gets the Pokémon's number. It uses the Pokémon's data to get the ID number and formats it to always have 3 digits.

* **showPokemonInfo(pokemonData):** This function displays the detailed information of a selected Pokémon. It uses the Pokémon's data to get information such as name, types, weight, height, etc. It also obtains additional information such as the Pokémon's egg groups and abilities. In addition, it uses the URL of the Pokémon's evolution chain to display the corresponding evolution chain.

* **getEvolutionChain(evolutionChainData):** This function generates the HTML of a Pokémon's evolution chain. It uses the evolution chain data to step through each evolution stage and generate the corresponding HTML.

## Data Update

Regarding the updating of the data, the idea of the encyclopedia is to give users the most up-to-date data, unfortunately this is not 100% possible today, although there is data on the Pokemon up to the ninth generation, no you have all the data necessary for the interface to maintain the level of quality that was proposed from the beginning. While this may be fixed over time, right now the API does not provide the necessary support for 9th generation Pokemon.

## Maintenance and Support

For any technical issues or queries related to the PokeAPI, I recommend contacting the PokeAPI support team directly. They are best equipped to help you with any specific API issues and provide you with the necessary support.

You can find contact information and additional resources on the official PokeAPI website: [PokeAPI](https://pokeapi.co/about)



