// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-i/modules/fecp-learn-javascript-syntax-introduction/projects/kelvin-weather-javascript

// Defines today's forecast, that is 293 degrees kelvin.
const kelvin = 0;

// Converts the temperature in kelvins to celcius (kelvin - 273 = celsius).
const celsius = kelvin - 273;

// Converts the celsius temparature to fahrenheit degrees (Fahrenheit = Celsius * (9/5) + 32).
let fahrenheit = celsius * (9/5) + 32

// Rounds down the temperature in fahrenheit degrees.
fahrenheit = Math.floor(fahrenheit)

// Logs result to the console.
console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`)

// Converts to newton degrees and rounds it down.
let newton = celsius * (33/100)
newton = Math.floor(newton)

// Logs the newton degrees to the console.
console.log(`The temperature is ${newton} degrees Newton.`)
