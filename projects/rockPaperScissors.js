// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-i/modules/fecp-learn-javascript-syntax-functions/projects/rock-paper-scissors-javascript

// Gets the choice from the user and verifies if it's valid.
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();  // Puts choice in lowercase.

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;

    } else {  // In case of unvalid user choice.
        return 'Invalid user choice.';
    }
};

// Gets a randomly generated choice from the CPU, allowing to play against it.
const getComputerChoice = () => {
    let choiceNumber = Math.floor(Math.random() * 3);  // Creates a number randomly.
    
    // Generates the CPU's choice based on the randomly generated number from above.
    switch (choiceNumber) {
        case 0:
            return 'rock';

        case 1:
            return 'paper';

        case 2:
            return 'scissors';

        default:  // Just in case it somehow bugged out.
            return 'Error while determing CPU\'s answer.';
    }

};

// This function will be determining who's the winner.
function determineWinner(userChoice, computerChoice) {    
    switch (userChoice) {
        case computerChoice:
            return 'This game was a tie!'
    
        case 'rock':
            if (computerChoice === 'paper') {
                return 'The CPU wins!';
    
            } else {
                return 'The player wins!';
            }
        case 'paper':
            if (computerChoice === 'scissors') {
                return 'The CPU wins!';
    
            } else {
                return 'The player wins!';
            }
    
        case 'scissors':
            if (computerChoice === 'rock') {
                return 'The CPU wins!';
    
            } else {
                return 'The player wins!';
            }
        
        case 'bomb':
            return 'The player wins! BOOOOOOOOM!';
    
        default:
            return 'There was an error while determining who won.';
    }
}

// This function will actully play the game and log everything to the console.
function playGame() {
    let userChoice = getUserChoice('rock');  // Creates user's choice.
    let computerChoice = getComputerChoice();  // Creates CPU's choice.

    console.log(`User : ${userChoice} --- CPU : ${computerChoice}`);  // Logs both choices to the console to improve readability.

    console.log(determineWinner(userChoice, computerChoice));  // Determines who won.
}

// Finally playing this dumb game lol
playGame();
