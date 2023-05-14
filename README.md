# Pokedex App
![Screenshot 2023-05-13 232948](https://github.com/leanml03/pok-dex-app.github.io/assets/39351969/1b4b62bf-8523-4d6e-b892-09165895268e)

## Introduction
Ever since I was a kid I have always been drawn to the many different spices that Pokémon possesses, creating an interactive encyclopedia becomes an exciting challenge for fans and lovers of these creatures. Using JavaScript, CSS and HTML, along with the PokeAPI as a source of information, we can embark on a journey to develop a digital encyclopedia that captures the essence of this great universe.

The goal of this interactive Pokémon encyclopedia is to provide users with a comprehensive platform full of information that allows them to explore the wide variety of Pokémon out there. Leveraging JavaScript capabilities, it will provide an interactive experience that allows users to search, filter and explore information about their favorite Pokémon, as well as discover new Pokémon and learn about their abilities, evolutions and more.

To structure and attractively present the information, we will use HTML and CSS. With HTML, we will define the structure of the encyclopedia, creating intuitive and easy-to-navigate sections. CSS will allow us to apply visual styles that reflect the Pokémon theme, with colorful designs, eye-catching graphics and an attractive interface that immerses users in the Pokémon world as they explore the encyclopedia.

The real challenge of our encyclopedia is the integration of the PokeAPI. This API will provide us with a constant stream of up-to-date information about Pokémon, including data such as their name, type, abilities, description, evolutions and more. By connecting to the PokeAPI, we ensure that our encyclopedia is always up-to-date and that users have access to the most accurate and complete information about Pokémon.

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

* Open your Interactive Pokémon Encyclopedia project folder in Visual Studio Code. You can do this by selecting "File" in the menu bar and then "Open Folder", then select the project folder.

* Once you've opened the project folder, find your encyclopedia's main HTML file and open it in Visual Studio Code.

* Right-click inside the HTML file and select the "Open with Live Server" option from the context menu. This will open your encyclopedia on a local server and run it in your default web browser.

You should now be able to view and explore your Interactive Pokémon Encyclopedia in your local web browser! Make sure to keep Visual Studio Code open while you use the app so that the local server stays running.


## Basic use
### Home
At the beginning you have access to the basic interface in which you can see a list of Pokemon on the left side of the page, as well as a scroll where you can go down, as you go down you will be able to see more and more species of Pokemon, the order is this list is numerical according to position in the original Pokedex. 
You can also see a text entry next to a magnifying glass, this is used to search for a particular species. 

### Nav
In the browser you will be able to scroll down until you find the species of interest. As you scroll down you will find more species. When you click on a species you will see the Pokemon's information displayed in the information section.

![Untitled video - Made with Clipchamp (1)](https://github.com/leanml03/pok-dex-app.github.io/assets/39351969/e98190c2-d8e1-4f3c-b474-f18e634f8b9e)

### Search!

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

## Maintenance and Support

For any technical issues or queries related to the PokeAPI, I recommend contacting the PokeAPI support team directly. They are best equipped to help you with any specific API issues and provide you with the necessary support.

You can find contact information and additional resources on the official PokeAPI website. [PokeAPI](https://pokeapi.co/about)


## Data Update

Regarding the updating of the data, the idea of the encyclopedia is to give users the most up-to-date data, unfortunately this is not 100% possible today, although there is data on the Pokemon up to the ninth generation, no you have all the data necessary for the interface to maintain the level of quality that was proposed from the beginning. While this may be fixed over time, right now the API does not provide the necessary support for 9th generation Pokemon.
