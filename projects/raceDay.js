// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-i/modules/fecp-learn-javascript-syntax-conditionals/projects/race-day

// Chooses a race number between 0 and 1000.
let raceNumber = Math.floor(Math.random() * 1000);

// Tells if the current runner already registered or not.
const runnerRegisteredEarly = false;

// The runner's age.
const runnerAge = 16;

// Adds 1000 to the runner's race number if they're an adult.
if (runnerAge >= 18 && runnerRegisteredEarly) {
    raceNumber += 1000;
}

// Logs the time of the race and the race number to the console depending if the runner is an adult or not, and if they registered early or not.
if (runnerAge >= 18 && runnerRegisteredEarly) {
    console.log(`Your race will start at 9:30 am. Your race number is ${raceNumber}.`);

} else if (runnerAge >= 18 && !runnerRegisteredEarly) {
    console.log(`Your race will start at 11:00 am. Your race number is ${raceNumber}.`);

} else if (runnerAge < 18) {
    console.log(`Your race will start at 12:30 pm. Your race number is ${raceNumber}.`);

} else {
    console.log("Plaese see the registration desk.")
}
