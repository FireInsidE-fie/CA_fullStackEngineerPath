// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-ii/modules/fecp-learn-javascript-syntax-arrays/projects/secret-message
// Date : 24.08.2021

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();  // Deletes last element of array.

console.log(secretMessage.length);  // Prints the length of the array.

secretMessage.push('to', 'Program');  // Adds two new elements to the message.

secretMessage[secretMessage.indexOf('easily')] = 'right';  // Replaces 'easily' with 'right'.
console.log(secretMessage);  // Verifies changes.

secretMessage.shift();  // Removes first element of the array.

secretMessage.unshift('Programming');  // Replaces the old 'Learning' with 'Programming'.

secretMessage.splice(6, 5, 'know,');  // Replaces 'get right the first time' with 'know,'.

console.log(secretMessage.join(' '));  // Finally, prints the message to the console.
