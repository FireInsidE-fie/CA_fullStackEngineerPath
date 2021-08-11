// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-i/modules/fecp-learn-javascript-syntax-introduction/projects/dog-years-javascript

// Creates a variable containing my age.
const myAge = 16;

// Creates a variable with the number '2' attached to it. (Why did I need to comment this in the first place...)
let earlyYears = 2;

earlyYears *= 10.5;

// Subtracts 2 years since there was already 2 years used in earlyYears.
let laterYears = myAge - 2;

// Converts human years to dog years.
laterYears *= 4;

console.log(earlyYears, laterYears)

// Compiles variables to create a variable containing my actual age in dog years.
let myAgeInDogYears = earlyYears + laterYears;

// Creates a constant containing my name in lower case.
const myName = "Etan".toLowerCase();

// Displays my age in human and dog years in the console.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which
is ${myAgeInDogYears} years old in dog years.`)
