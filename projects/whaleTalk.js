// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-ii/modules/fecp-learn-javascript-syntax-loops/projects/whale-talk
// 26.08.2021

// Text that will be translated to whale talk.
let input = 'What\'s the matter? This is what you wanted, remember?~';
// Array that contains every vowel allowed in whale language.
let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];  // Will contain the vowels of the input string.

for (let i = 0 ; i < input.length ; i++) {  // Iterates through the input string.
    console.log('i is ' + i);  // Logs current input index position.

    for (let j = 0 ; j < vowels.length ; j++) {  // Iterates through the vowels.
        console.log('j is ' + j);  // Logs current vowels index position.

        if (input[i] === vowels[j]) {  // If both letter is a vowel, add it to resultArray.
            resultArray.push(input[i]);
        }
    }

    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }
}

console.log(resultArray);

console.log(resultArray.join('').toUpperCase());  // Prints the final whale language sentence.
