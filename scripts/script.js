// Register Service Worker
navigator.serviceWorker
  .register("./service-worker.js")
  .then(() => console.log("Service Worker Registered"))
  .catch((error) => console.log("Service Worker Registration Failed:", error));

// Typewriter Effect Function
function typeWriterEffect(element, text, delay = 100) {
  element.innerHTML = "";
  let i = 0;

  function typeNextChar() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeNextChar, delay);
    }
  }
  typeNextChar();
}

// Starship Creation Function
function createStarships(numStarships) {
  const starfield = document.querySelector("body");

  for (let i = 0; i < numStarships; i++) {
    const starship = document.createElement("div");
    starship.classList.add("starship");

    starship.style.animationDelay = `${Math.random() * 8}s`;
    starship.style.left = `${Math.random() * 100}vw`;
    starship.style.bottom = `${Math.random() * 100}vh`;

    starfield.appendChild(starship);
  }
}

createStarships(0);

// Universe Splitting Function
function splitUniverse() {
  // Retrieve user input from HTML input fields
  const inOne = document.getElementById("inOne")?.value || "Take a chance";
  const inTwo = document.getElementById("inTwo")?.value || "Play it safe";

  // Generate a truly random choice between 0 and 1
  const randomChoice = Math.floor(Math.random() * 2);

  // Wrap inputs in a span with a specific class for styling
  const coloredInOne = `<span class="colored-text">${inOne}</span>`;
  const coloredInTwo = `<span class="colored-text">${inTwo}</span>`;

  const messageOne =
    randomChoice === 0
      ? `THIS UNIVERSE: ${coloredInOne}`
      : `THIS UNIVERSE: ${coloredInTwo}`;
  const messageTwo =
    randomChoice === 0
      ? `OTHER YOU: ${coloredInTwo}`
      : `OTHER YOU: ${coloredInOne}`;

  // Display the loader
  const outputContainer = document.getElementById("output-container");
  const outputElement = document.getElementById("output");

  if (!outputContainer || !outputElement) {
    console.error("Output container not found.");
    return;
  }

  outputContainer.classList.remove("hidden");
  outputElement.innerHTML = '<div class="loader"></div>';

  setTimeout(() => {
    outputElement.innerHTML = ""; // Clear loader

    const messageOneElement = document.createElement("p");
    const messageTwoElement = document.createElement("p");

    outputElement.appendChild(messageOneElement);
    outputElement.appendChild(messageTwoElement);

    // Apply typewriter effect to each message
    typeWriterEffect(messageOneElement, messageOne, 100);
    setTimeout(() => {
      typeWriterEffect(messageTwoElement, messageTwo, 100);
    }, messageOne.length * 60); // Delay second message after the first finishes
  }, 3000); // 2-second delay for loader

  function typeWriterEffect(element, html, delay = 100) {
    element.innerHTML = ""; // Clear the content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html; // Parse the HTML string into a temporary container
    const contentNodes = Array.from(tempDiv.childNodes); // Extract the nodes
    let i = 0;

    function typeNextNode() {
      if (i < contentNodes.length) {
        const node = contentNodes[i];

        if (node.nodeType === Node.TEXT_NODE) {
          // Handle plain text nodes
          const text = node.textContent;
          let charIndex = 0;

          function typeNextChar() {
            if (charIndex < text.length) {
              element.innerHTML += text.charAt(charIndex);
              charIndex++;
              setTimeout(typeNextChar, delay);
            } else {
              i++;
              typeNextNode(); // Move to the next node
            }
          }

          typeNextChar();
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          // Handle HTML elements
          const wrapper = document.createElement(node.tagName);
          wrapper.className = node.className; // Copy the class names
          wrapper.style.cssText = node.style.cssText; // Copy the styles
          element.appendChild(wrapper);

          const subEffect = () => {
            typeWriterEffect(wrapper, node.innerHTML, delay); // Recursive typewriter for child elements
            i++;
            typeNextNode();
          };

          setTimeout(subEffect, delay);
        }
      }
    }

    typeNextNode();
  }
}
// Clear input fields on page reload
window.onload = function () {
  document.getElementById("inOne").value = "";
  document.getElementById("inTwo").value = "";
};

// Add Event Listener for Enter Key
document.addEventListener("keydown", (event) => {
  // Check if Enter key is pressed
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default behavior (e.g., form submission)
    splitUniverse(); // Trigger the splitUniverse function
  }
});
