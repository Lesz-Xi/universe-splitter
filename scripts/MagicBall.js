// Inititializing variable
let userName = "Rhine";

// Ternary expression tha let the users enter a name or not
userName === "Rhine"
  ? console.log(`Hello, ${userName}!`)
  : console.log("Hello!");

// userQuestion that store a variable of string that the user wants to ask
let userQuestion = "I am not enough";
console.log(`${userName} thoughts: ${userQuestion} `);

//Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "God is with you!!";
    break;
  case 1:
    eightBall = "You are unique!";
    break;
  case 2:
    eightBall = "Focus on yourself!";
    break;
  case 3:
    eightBall = "Loneliness is not weakness!";
    break;
  case 4:
    eightBall = "Live your dream!";
    break;
  case 5:
    eightBall = "Have hope, you are loved!";
    break;
  case 6:
    eightBall = "You are worthy!";
    break;
  case 7:
    eightBall = "Have faith!";
    break;
}
console.log(eightBall);
