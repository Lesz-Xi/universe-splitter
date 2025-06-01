// UNIVERSE SPLITTER

// Import prompt-sync for capturing user input
const prompt = require("prompt-sync")();

// Prompt the user for their actions in each universe
let inOne = prompt("IN ONE UNIVERSE, I WILL NOW: ");
let inTwo = prompt("IN OTHER ONE, I WILL NOW: ");
console.log("\n");

// Generate a truly random choice between 0 and 1
const randomChoice = Math.floor(Math.random() * 2);

// Define messageOne and messageTwo based on the random choice
let messageOne, messageTwo;

if (randomChoice === 0) {
  // Assign "inOne" to messageOne and "inTwo" to messageTwo
  messageOne = `YOU ARE IN THE UNIVERSE🌌 IN WHICH YOU SHOULD ${inOne}`;
  messageTwo = `(AND RIGHT NOW, IN THE OTHER UNIVERSE🌌 , THE OTHER YOU IS BEING TOLD TO ${inTwo})`;
} else {
  // Assign "inTwo" to messageOne and "inOne" to messageTwo
  messageOne = `YOU ARE IN THE UNIVERSE🌌 IN WHICH YOU SHOULD ${inTwo}`;
  messageTwo = `(AND RIGHT NOW, IN THE OTHER UNIVERSE🌌 , THE OTHER YOU IS BEING TOLD TO ${inOne})`;
}

// Function to display the output after a 2-second delay
function displayOutput() {
  console.log("YOUR UNIVERSE HAS JUST SPLIT🌌\n");

  // Display the first message followed by the second message
  console.log(`${messageOne}\n`);
  console.log(`${messageTwo}\n`);
}

// Delay the output by 2 seconds and then display the result
console.log(
  "\n...Finalizing your universe split, please wait for 2 seconds...\n"
);
setTimeout(displayOutput, 2000); // Waits 2000 ms (2 seconds) before running displayOutput
