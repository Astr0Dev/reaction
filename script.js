//selectors
const startButton = document.getElementById("startButton");
const timeDisplay = document.getElementById("timeDisplay");

//variables
let startTime;
let endTime;
let totalTime = 0;
let numTries = 0;
let gameStarted = false;
let tries = 5;

//event listener
startButton.addEventListener("click", () => {
  if (gameStarted) {
    // Record end time and update time display
    if (startButton.innerHTML === "Click now") {
      endTime = Date.now();
      const elapsedTime = endTime - startTime;
      timeDisplay.innerHTML = numTries + 1 + ": " + elapsedTime + "ms";
      totalTime += elapsedTime;
      numTries++;

      if (numTries === tries) {
        const averageTime = totalTime / numTries;
        timeDisplay.innerHTML = `Average time: ${averageTime.toFixed(2)}ms`;
        numTries = 0;
      }
    } else {
      // Show "too early" message
      timeDisplay.innerHTML = "Clicked too early! Starting over...";
      numTries = 0;
    }

    // Reset game
    if (startButton.innerHTML === "Click now") {
      gameStarted = false;
      startButton.innerHTML = "START";
      if (numTries !== 0) {
        startButton.innerHTML = "Try " + numTries;
      } else {
        startButton.innerHTML = "START";
      }
      startButton.style.backgroundColor = "white";
    }
  } else {
    // Set timeout and update button text and background color
    gameStarted = true;
    startButton.innerHTML = "In progress...";
    startButton.style.backgroundColor = "#F0706A";

    setTimeout(() => {
      startButton.innerHTML = "Click now";
      startButton.style.backgroundColor = "#ACD1AF";
      startTime = Date.now();
    }, 1000 + Math.random() * 1000);
  }
});
