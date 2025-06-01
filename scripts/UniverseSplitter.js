// UNIVERSE SPLITTER

// Import prompt-sync for capturing user input
const prompt = require("prompt-sync")();

let inOne = prompt("IN ONE UNIVERSE, I WILL NOW: ");
let inTwo = prompt("IN OTHER ONE, I WILL NOW: ");
console.log("\n");

// let actOne = 'Take a chance';
// let actTwo = 'Play it safe';

const messageOne = `YOU ARE IN THE UNIVERSE🌌  IN WHICH YOU SHOULD ${inOne}`;
const messageTwo = `(AND RIGHT NOW, IN THE OTHER UNIVERSE🌌 , THE OTHER YOU IS BEING TOLD TO ${inTwo})`;

const randomChoice = Math.floor(Math.random() * 2);

function displayOutput() {
  console.log("YOUR UNIVERSE HAS JUST SPLIT🌌  \n ");

  // // Output the first choice
  // console.log(`${messageOne}\n`);

  // console.log(`${messageTwo}\n`);

  if (randomChoice === 0) {
    // Show messageOne first, then messageTwo
    console.log(`${messageOne}`);
  } else {
    // Show messageTwo first, then messageOne
    console.log(`${messageTwo}\n`);
  }

  // Display which universe the user is currently in based on randomChoice
}

console.log(
  "\n...Finalizing your universe split, please wait for 2 seconds...\n"
);
setTimeout(displayOutput, 2000);
