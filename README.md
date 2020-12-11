# iTunes API Call for SlashMobility

This application was created with React and Styled with Bootstrap. 

It fetches from the iTunes API and returns 30 songs of the searched artist.
Each song Card shows the name of the song, name of the record the song is included at and a small image of the cover record.
There is also the possibility to add your favourite songs to the a Favourite List, and check which songs you have at your list.

## Requirements for this Technical test:

1. Mandatory Libraries: Redux, Redux Saga, Axios
2. API fetching from the iTunes API.
3. Navbar with a search feature for artist search
4. Each item can be marked as favourite and added to the Favourite List.
5. The Favourites List should have the number of faved songs.
6. The App should be fully responsive

## Goals not met and points to be improved:

1. The favourites list is not stored in the Redux Store. It is stored in the component and local storage, and fetched by the list from the local storage.
2. When submiting the search, preventDefault is not working and the Enter Key refreshes the web page. The user must submit the search by clicking on the API Call button.
3. The Styling of the webpage is very basic. I would like to improve the styling of the App but I decided to priorize the JavaScript functions.


## Instructions for Installing the Application

1. Clone this repository (Master branch)
2. Install npm and node (if not yet installed)
3. Open a Terminal in the project root and execute `npm install`
4. Execute `npm start` to start the application 

## Main Screen

The main screen is very simple, you just have to search for an artist. Autocomplete is not implemented in this App. The fetching will be sent to the API endpoint via Redux and Saga, and the result will be returned asynchronically. 

![Main Screen](/src/assets/img/1.jpg)

## Search Result

![Search Result](/src/assets/img/2.jpg)

If fetching from the API endpoints is successful, 30 songs will be shown on the main screen.
Each song shows the artwork of the record, name of the song, record name and the possibility to add the songs to the favourites list. 

## Favourites List

![Fav list](/src/assets/img/3.jpg)

The list of favourite tracks can be checked each time by clicking on the heart icon at the top right of the screen.
