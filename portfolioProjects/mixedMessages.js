// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-portfolio-project/modules/fscp-mixed-messages/kanban_projects/mixed-messages
// 16.10.2021
// FireInsidE and Rykaqj

// Creates the arrays that will contain the three parts of the return messages.
const nouns = ["Dog", "Cat", "Computer", "Human", "Phone", "insect", "bed", "best friend", "Plushie", "Youtuber"];
const verbs = ["runs", "swims", "eats", "sleeps", "drinks", "dance", "ski", "bowl", "drive"];
const adjectives = ["adorable", "evil", "deadly", "charming", "average", "salty", "brave", "foolish", "fancy", "macho", "tasty", "tricky", "slimy" ];

// Function that will generate a random index of a given array.
let getRandomIndexOfArray = array => { return Math.round(Math.random() * array.length); }

// Creates randomly generated words to complete the end message.
const randomNouns = nouns[getRandomIndexOfArray(nouns)];
const randomVerbs = verbs[getRandomIndexOfArray(verbs)];
const randomAdjective = adjectives[getRandomIndexOfArray(adjectives)];

console.log(`I'm walking with my ${randomNoun}, and I encounter a(n) ${randomAdj} ${randomNoun}. I ${randomVerb} with them, but my ${randomNoun} is becoming ${randomAdj}, so I ${randomVerb} again.`);
