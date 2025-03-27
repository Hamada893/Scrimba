# War Card Game ♣️

This is a simple implementation of the classic card game **War**, built using JavaScript. The project focuses on learning key JavaScript concepts such as callbacks, promises, and async/await while utilizing the "Deck of Cards" API.

## Features
- Draw two cards from a shuffled deck.
- Compare the values to determine the winner.
- Keep track of scores for both the player and the computer.
- Disable drawing when no cards are left in the deck.

## What I Learned
This project helped reinforce several JavaScript concepts, including:

### 🛠 JavaScript Fundamentals
- **Callbacks** – Used in event listeners and asynchronous operations.
- **First-class functions** – Functions are treated as objects and can be assigned to variables, passed as arguments, or returned from other functions.
- **Custom `.filter` method** – Implemented my own version of the array `.filter()` method to understand its mechanics.

### 🔄 Asynchronous JavaScript
- **Promises and Their States** – Explored how promises move between `pending`, `fulfilled`, and `rejected` states.
- **`.then()` and Chaining** – Practiced chaining `.then()` for handling multiple asynchronous operations.
- **Async/Await** – Converted `.then()` chains into `async/await` for better readability and maintainability (though I didn't dive too deep into this yet).

### 🃏 API Integration
- Used the **Deck of Cards API** to fetch and manipulate card data dynamically.
- Styled the fetched data dynamically & conditionally

### 🤖 Algorithmic Practice
- Wrote logic to compare card values and determine the winner of each round.
- Implemented a scoring system and game-ending conditions.

## Technologies Used
- **HTML** – Basic structure for displaying cards and scores.
- **CSS** – Simple styling to organize elements.
- **JavaScript** – Core logic for game mechanics and API integration.
- **Deck of Cards API** – Fetches randomized card data for gameplay.

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/war-card-game.git
   ```
2. Open `index.html` in a browser.
3. Click "New Deck" to start the game and "Draw Cards" to play.


---
Feel free to fork and improve upon this project! 🚀

