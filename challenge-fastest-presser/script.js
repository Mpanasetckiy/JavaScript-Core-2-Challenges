// Here are all of the elements we need for the game
const input = document.querySelector('#timerInput');
const startBtn = document.querySelector("#startButton")
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const winnerText = document.querySelector("#wonText");
const incorrectInputText = document.querySelector("#incorrectInput");
const countDownText = document.querySelector("#countDown");

let gameIsOver = true; // Show that game is not running by default
let sCounter = 0;
let lCounter = 0;

function startGame() {
const inputValue = parseInt(input.value, 10);
gameIsOver = false; // Set game running
// This part sets score to zero every time start btn is pressed
sCounter = 0;
lCounter = 0;
playerOneScore.textContent = `Score: ${sCounter}`;
playerTwoScore.textContent = `Score: ${lCounter}`;
//
if (!isNaN(inputValue) && inputValue > 0) {
  incorrectInputText.textContent = ""; // Set incorrect input field empty
 
  let countdown = inputValue;
  const countdownInterval = setInterval(() => {
    countdown--;
    countDownText.textContent = `Time left ${countdown}`;
    if (countdown === 0) {
      clearInterval(countdownInterval);
      endGame();
    }
  }, 1000);
} else {
  incorrectInputText.textContent = "Type number greater than 0" // Shows extra field that input incorrect
}
}

function endGame() {
  if (sCounter > lCounter) {
    winnerText.textContent = "Player one won!";
  } else if (lCounter > sCounter) {
    winnerText.textContent = "Player two won!";
  } else if (lCounter === sCounter) {
    winnerText.textContent = "Players tied!";
  }
  countDownText.textContent = `Time's Up`;
  gameIsOver = true;
  console.log('Game over!');
}
function keyBoardEvents(e) {
  if (e.key === 's' && !gameIsOver) {
    // On 'S' Pressed
    sCounter++;
    playerOneScore.textContent = `Score: ${sCounter}`;
  } else if (e.key === "l" && !gameIsOver) {
    // On 'L' Pressed
    lCounter++;
    playerTwoScore.textContent = `Score: ${lCounter}`;
  }
}

document.addEventListener("keypress", keyBoardEvents);
startBtn.addEventListener("click", startGame);