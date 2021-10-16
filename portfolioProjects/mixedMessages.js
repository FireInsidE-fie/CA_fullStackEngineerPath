// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-portfolio-project/modules/fscp-mixed-messages/kanban_projects/mixed-messages
// 16.10.2021
// FireInsidE and Rykaqj

// Creates the arrays that will contain all the parts of the return messages.
const nouns = ["Dog", "Cat", "Computer", "Human", "Phone", "insect", "bed", "best friend", "Plushie", "Youtuber"];
const verbs = ["run", "swim", "eat", "sleep", "drink", "dance", "ski", "bowl", "drive"];
const adjectives = ["adorable", "evil", "deadly", "charming", "average", "salty", "brave", "foolish", "fancy", "macho", "tasty", "tricky", "slimy" ];

// Function that will generate a random index of a given array.
let getRandomIndexOfArray = array => { return Math.floor(Math.random() * array.length); }

// Logs the end message to the console.
console.log(`I'm walking with my ${nouns[getRandomIndexOfArray(nouns)]}, and I encounter a(n) ${adjectives[getRandomIndexOfArray(adjectives)]} ${nouns[getRandomIndexOfArray(nouns)]}. I ${verbs[getRandomIndexOfArray(verbs)]} with them, but my ${nouns[getRandomIndexOfArray(nouns)]} is becoming ${adjectives[getRandomIndexOfArray(adjectives)]}, so I ${verbs[getRandomIndexOfArray(verbs)]} to the ${nouns[getRandomIndexOfArray(nouns)]}.  We ${verbs[getRandomIndexOfArray(verbs)]} into the ${adjectives[getRandomIndexOfArray(adjectives)]} ${nouns[getRandomIndexOfArray(nouns)]} and the ${nouns[getRandomIndexOfArray(nouns)]} ${verbs[getRandomIndexOfArray(verbs)]} us all the way home.`);
