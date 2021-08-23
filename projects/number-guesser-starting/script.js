let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function generates the number both the user and the CPU will need to guess.
const generateTarget = () => {
    return Math.floor(Math.random() * 9);  // Returns a random integer between 0 and 9 (non inclusive).
}

// Determines what distance both numbers stand from each other.
const getAbsoluteDistance = (number1, number2) => {
    return Math.abs(number1 - number2);
}

// This function compares both answers and determines who won based on who is the closest to the targetNumber.
const compareGuesses = (humanGuess, cpuGuess, targetNumber) => {
    // First, verifies if the human's guess is within the allowed scope.
    if (humanGuess > 9 || humanGuess < 0) {
        alert("Your number is not valid.");
        return false;
    }
    
    // Calculates the distance both players have from the targetNumber.
    humanDistance = getAbsoluteDistance(humanGuess, targetNumber);
    cpuDistance = getAbsoluteDistance(cpuGuess, targetNumber);

    // Determines who won.
    if (humanDistance < cpuDistance || humanGuess === cpuGuess) {  // If human won.
        return true;
    } else {  // If CPU won.
        return false;
    }
}

// Updates the score accordingly to who won the current round.
const updateScore = winner => {
    if (winner === 'human') {  // If human won.
        humanScore += 1;  // Adds 1 to the score.
    } else if (winner === 'computer') {  // If CPU won.
        computerScore += 1;  // Adds 1 to the score.
    }
}

const advanceRound = () => {
    currentRoundNumber =+ 1;
}
