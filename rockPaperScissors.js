// Computer chooses at random
function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
} 

// Determines the winner of each round
function gameRound(playerSelection, computerSelection) {

    // Visualize user input vs computer choice
    console.log(`[U] ${playerSelection} vs ${computerSelection} [C]`);

    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "Computer wins";
        } else if (computerSelection == "scissors") {
            return "You win!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win!";
        } else if (computerSelection == "scissors") {
            return "Computer wins";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "Computer wins";
        } else if (computerSelection == "paper") {
            return "You win!";
        }
    }
}

// Runs a single game round
function game(e) {

    // User & comp choices
    let computerChoice = getComputerChoice();
    // playerChoice stores textContent of button clicked
    let playerChoice = e.target.id; 

    // Convert choices to lower case
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    let result = gameRound(playerChoice, computerChoice);

    if(userScore < 5 && compScore < 5) {
        if (result == "You win!") {
            userScore++;
            scoreText.textContent = `${result}\r\nYour score: ${userScore}\r\nComputer score: ${compScore}`;
        } else if (result == "Computer wins") {
            compScore++;
            scoreText.textContent = `${result}\r\nYour score: ${userScore}\r\nComputer score: ${compScore}`;
        } else {
            scoreText.textContent = `${result}\r\nYour score: ${userScore}\r\nComputer score: ${compScore}`;
        }
    } else {
        if(userScore > compScore) {
            alert("You won!")
            scoreText.textContent = `Game over!\r\nFinal Score\r\n[U]: ${userScore}  [C]: ${compScore}\r\nYou beat the machine!`;
        } else {
            alert("Machine won :/")
            scoreText.textContent = `Game over!\r\nFinal Score\r\n[U]: ${userScore}  [C]: ${compScore}\r\nMachine beats you!`;
        }
        userScore = 0;
        compScore = 0;
        return;
    }
}

// Player and computer score initialization
let userScore = 0;
let compScore = 0;

// Choices
const choices = ["Rock", "Paper", "Scissors"];

// DOM Manipulation below

// Target button element
const buttons = document.querySelectorAll(".items");

// Embeds image to buttons
document.getElementById("Rock").innerHTML = "<img id='rock' src=rocks.png>";
document.getElementById("Paper").innerHTML = "<img id='paper' src=contract.png>";
document.getElementById("Scissors").innerHTML = "<img id='scissors' src=scissor.png>";

// Runs game function for whatever button that was clicked
buttons.forEach(function(button) {
    button.addEventListener("click", game);
});

// Target scoreboard div
let scores = document.getElementById("scoreboard");

// Create new h2 element to display running score
let scoreText = document.createElement("h2");
scoreText.id = "running-score";
scoreText.setAttribute("style", "white-space: pre;");
scores.appendChild(scoreText);

