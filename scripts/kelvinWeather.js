// Initializing constant variable kelvin and set to 293
const kelvin = 293;
// Subtracting 273 from Kelvin variable
const celsius = kelvin - 273;
// Equation that Calculate Fahrenheit and round the value of Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
// Extra practice: Convert Celsius to the Newton scale.
// Newton is approximately Celsius * (33/100), so we multiply accordingly.
console.log(`The temperature is  ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
