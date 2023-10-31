
  // Function to generate a random number between a given range
function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main game function
  function numberGuessingGame() {
    const minNumber = 1;
    const maxNumber = 100;
    const targetNumber = generateRandomNumber(minNumber, maxNumber);
    let numberOfGuesses = 0;
  
    alert(`Welcome to the Number Guessing Game!`);
    alert(`I'm thinking of a number between ${minNumber} and ${maxNumber}.`);
    
    while (true) {
      const input = prompt(`Enter your guess: `);
  
      if (input === null) {
        // Handle the case where the user cancels or dismisses the prompt
        alert("You canceled the game.");
        break;
      }
  
      const playerGuess = parseInt(input, 10);
  
      if (isNaN(playerGuess)) {
        alert(`Please enter a valid number.`);
        continue;
      }
  
      numberOfGuesses++;
  
      if (playerGuess < targetNumber) {
        alert(`The number is higher. Try again!`);
      } else if (playerGuess > targetNumber) {
        alert(`The number is lower. Try again!`);
      } else {
        alert(`Congratulations! You guessed the number ${targetNumber} in ${numberOfGuesses} tries.`);
        break;
      }
    }
  }
  
  // Start the game
  numberGuessingGame();
  