# Color Guessing Game

This project is a Color Guessing Game! This interactive web application challenges you to guess the correct color among a set of options. Test your RGB perception and have fun while playing!

## How to Play

- The game presents you with a group of colored squares (3 or 6 according to the difficulty selected).
- Among these squares, one of them represents the correct color.
- Click on the square that you think matches the RGB shown in the header.
- If your guess is correct, you win the round!
- If your guess is incorrect, try again until you find the correct color.

# Demo
https://github.com/joaquim25/Color-Guessing-Game-React/assets/115705731/bedfd69d-dbd8-44a6-ba5b-44eb4abf4270

## Features

- Adjustable Difficulty: Choose between easy mode (3 squares) or hard mode (6 squares).
- New Colors: Reset the game with a fresh set of colors.
- Feedback: Receive feedback on your guesses and whether you've won the round.
- Vibrant Header: The header dynamically changes color to match the correct answer when you win.

## Components

- `App.jsx`: The main component that manages the game's logic and state.
- `Header.jsx`: Displays the game title and changes color upon winning.
- `GameControl.jsx`: Provides options for starting a new game and selecting the difficulty level.
- `GameBoard.jsx`: Displays the color squares for guessing.
- `ColorSquare.jsx`: Represents an individual color square to click on during the game.

## Getting Started

To run the Color Guessing Game locally:

1. Clone the repository to your local machine:

   ```
   https://github.com/joaquim25/Color-Guessing-Game-React.git
   ```

2. Navigate to the project directory:

   ```
   cd color-game
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

The game should now be accessible in your web browser.

## Game Rules

- In each round, click on the square that you believe matches RGB description shown on the Header.
- You win the round when you click on the correct square.
- The header changes to the correct color when you win.
- Choose the difficulty level (easy or hard) to determine the number of squares.
- Start a new game to refresh the colors and start over.

## Author

Joaquim Luzia



