// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-i/modules/fecp-learn-javascript-syntax-conditionals/projects/magic-eight-ball-1

// The user's username.
let userName = "FireInsidE";

// Greets the user.
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Initializes user's question.
let userQuestion = "Will I ever be famous?";

// Logs the question to the console.
console.log(`Here is the question from ${userName}: ${userQuestion}`);

// Generates a random number between 0 and 8.
let randomNumber = Math.floor(Math.random() * 8);

// Prepares Eight Ball's answer.
let eightBall = "";

// Determines answer randomly.
switch (randomNumber){
    case 0:
        eightBall = "It is certain";

    case 1:
        eightBall = "It is decidedly so";

    case 2:
        eightBall = "Replay hazy try again";
    
    case 3:
        eightBall = "Cannot predict now";

    case 4:
        eightBall = "Do not count on it";

    case 5:
        eightBall = "My sources say no";

    case 6:
        eightBall = "Outlook not so good";
    
    case 7:
        eightBall = "Signs point to yes";

    default:
        console.log("There was an error in the vision.");
}

// Prints the ball's answer to the console.
console.log(`The Eight Ball's answer is : ${eightBall}`);