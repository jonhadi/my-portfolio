const projects = [
    {
        id: "project1",
        name: "PoppingPortland",
        url: "https://duneoz.github.io/Project1/",
        image: "/images/gmapsjpg.jpg",
        transform: "-20%",
        technologies: "FireBase, Materialize, Javascript, HTML5, CSS3, Express",
        description: "Poppin’ Portland is created to help visitors and even Portlanders know what is happening around Portland. We have toggleable icons that show where wineries and breweries are located on a Google Maps API. When clicking on an icon the company’s twitter feed is sent to the side of the map. Originally, we wanted to pull the information from Yelp/Instagram/Twitter to see companies mention and what is really popping in Portland, but API Keys from bigger companies are harder to come by or behind a paywall. So instead, they were added in manually.",
        responsibilities: "I created the front end from a draw up we have uploaded to the repository. I also worked on the website’s ability to upload new spots onto Google’s FireBase, and the pin drop to the google maps API once uploaded."
    },
    {
        id: "project2",
        name: "Plan-It",
        url: "https://project-2-group.herokuapp.com/",
        image: "/images/Plan-It.png",
        transform: "-120%",
        technologies: "MySQL, HandleBars, Javascript, HTML5, CSS3, jQuery, Bootstrap",
        description: "Plan-It is a calendar website that has a to-do list and general important event reminders. For users that need a very detailed plan of their day. Each day would have a to-do list that can be striked through once it is complete. Furthermore entries can be marked “important”, this allows us to have the next 20 “important” events coming in the future to be displayed beneath. The constant view of upcoming important events would help the user not forget. This project was created before learning about React. I would like to remake it in React.",
        responsibilities: "I created the mySQL database and schema, created the express routes to talk between front end and back end, made the on-click events, and directed the front end development."
    },
    {
        id: "project3",
        name: "Project 910",
        url: "https://github.com/CharisHadi/project910",
        image: "/images/Trash.jpg",
        transform: "-220%",
        technologies: "Bootstrap, CSS3, HTML5, Javascript, React, GoogleMaps, MySQL, Sequelize, Moment, Express, Node.js",
        description: "Project 910 came about because I wanted to make something that can be useful to communities and bring people together to do good. On the website you can see events people create utilizing a google maps API. Originally it was events to clean up trash/ do community service. The front end consisted of React and Bootstrap. I used facebook as a login because I wanted to make a facebook event once you make an event on the website. You can also see a list of upcoming events. A database is used to track your attendance/ creator status for the event. The deployment was not successful, but I could run the site on my local machine. I am planning on utilizing redux to help with state management.",
        responsibilities: "I deployed the used the facebook secure login API, created the relational database, used express for back and front end communication, directed front end development,  created reusable react components"
    },
    {
        id: "project4",
        name: "The Last Memory Game",
        url: "https://memory-game-flamo.herokuapp.com/",
        image: "/images/avatarState.jpg",
        transform: "-320%",
        description: "The Last Memory Game tests your memory skills in a game where you can only click on one image during a game. It utilizes React to only change the gameboard and randomize the board after clicking. The game also tracks the overall high score of the play session"
    },
    {
        id: "project5",
        name: "Gamer Finder",
        url: "https://gamer-finder-flamo.herokuapp.com/",
        image: "/images/pirate.webp",
        transform: "-420%",
        description: "Everyone is lonely these days especially gamers. This website has a survey you fill out and it will upload and store your survey profile in a SQL database. Then will compare your profile to previous users and pair you up with a gamer that is similar to you so you can find a likeminded to play with."
    },
    {
        id: "project6",
        name: "Bamazon",
        url: "https://github.com/jonhadi/bamazon",
        image: "/images/Bamazon.png",
        transform: "-520%",
        description: "Is a node based application that allows the general use of amazon. It is pretty bare bones in terms of UI and was used to learn and node.js and SQL. Users are able to create accounts. Those users can post items to sell or browse the shop. The amount or shopping cart is totaled up. Once a users buys a posted item, the amount of stock is tracked and updated. Once fully gone the post is removed. This is all stored in an SQL database."
    },
    {
        id: "project7",
        name: "Giftastic",
        url: "https://jonhadi.github.io/giftastic/",
        image: "/images/supahlogo.webp",
        transform: "-620%",
        description: "Is a website that has premade buttons to will spawn the top 10 GIFs. The GIF is paused until you click on it to play. You are also able to create new buttons with the search bar. The Surrounding border of the gif is to show it’s title and rating and have clarity from one GIF to another. This was project is primarily used to learn API uses and calls."
    },
    {
        id: "project8",
        name: "Liri App",
        url: "https://github.com/jonhadi/LIRI-node-app",
        image: "/images/console.png",
        transform: "-720%",
        description: "LIRI is an app that uses API calls and taught us to parse through the data and present it in a comprehendible  format. It was also required of us to make a github read me page."
    },
    {
        id: "project9",
        name: "Trivia",
        url: "https://jonhadi.github.io/TriviaGame/",
        image: "/images/quesiontmarkzzz.png",
        transform: "-820%",
        description: "The trivia game was used to teach data management. I set up a choice to start the game with different countdown timers. The questions would be given out at a random order. Each question would have a different answer depending if you were correct or incorrect. Then at the end a final tally."
    },
    {
        id: "project10",
        name: "Card RPG",
        url: "https://jonhadi.github.io/unit-4-game/",
        image: "/images/knight.jpg",
        transform: "-920%",
        description: "The Card game taught how to move and change UI based on user input. The user would choose a character and that card would move to the player side. Then the player would choose an enemy to face off. The point is to defeat the rest of the board but you must choose your enemy wisely because you character has a growing (damage) and decreasing (health) stat which involves logic for when the game ends and resets."
    },
    {
        id: "project11",
        name: "GuessWordGame",
        url: "https://jonhadi.github.io/GuessWordGame/",
        image: "/images/hauntedhouse.jpg",
        transform: "-1020%",
        description: "Just a take on hangman. Hangman takes a random word from an array and you must guest that word. It checks for already used/ correct characters so you cannot mess up a guess. I also played with the UI for the beginning screen and theme for fun."
    },
]

export default projects;