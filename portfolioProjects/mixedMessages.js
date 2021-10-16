// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-portfolio-project/modules/fscp-mixed-messages/kanban_projects/mixed-messages
// 16.10.2021
// FireInsidE and Rykaqj

// Creates the arrays that will contain the three parts of the return messages.
let nouns = ["Dog", "Cat", "Computer", "Human", "Phone", "insect", "bed", "best friend", "Plushie", "Youtuber"];
let verbs = ["runs", "swims", "eats", "sleeps", "drinks", "dance", "ski", "bowl", "drive"];
let adjectives = ["adorable", "evil", "deadly", "charming", "average", "salty", "brave", "foolish", "fancy", "macho", "tasty", "tricky", "slimy" ];

// Function that will generate a random index of a given array.
const getRandomIndexOfArray = array => { return Math.round(Math.random() * array.length); }

console.log(`As I was walking with my ${nouns[getRandomIndexOfArray(nouns)]}, I encountered a ${adjectives[getRandomIndexOfArray(adjectives)]} ${nouns[getRandomIndexOfArray(nouns)]}.`)
