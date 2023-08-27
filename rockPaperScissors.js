// Computer chooses at random
function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
} 

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

function game() {

    let userScore = 0;
    let compScore = 0;
    let computerChoice;


    // Validates user input at the start
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {

        // Keeps track of each round
        for(round = 1; round < 6; round++) {
            computerChoice = getComputerChoice();

            playerChoice = playerChoice.toLowerCase();
            computerChoice = computerChoice.toLowerCase();
            
            let result = gameRound(playerChoice, computerChoice);

            if (result == "You win!") {
                userScore++;
                console.log(`\n\n${result}\n\n\nRound:${round}\n\nYour score: ${userScore}\nComputer score: ${compScore}`);
            } else if (result == "Computer wins") {
                compScore++;
                console.log(`\n\n${result}\n\n\nRound:${round}\n\nYour score: ${userScore}\nComputer score: ${compScore}`);
            } else if (result == "It's a Tie!") {
                console.log(`\n\n${result}\n\n\nRound:${round}\n\nYour score: ${userScore}\nComputer score: ${compScore}`);
            }
        }

        // Announces the winner after game ends
        if(userScore > compScore) {
            return "Game over: You beat the computer!";
        } else if(compScore > userScore) {
            return "Game over: Computer beats you!";
        } else {
            return "Game over: It's a tie! No one wins!";
        }
    }

}

// New code below using DOM manipulation

const choices = ["Rock", "Paper", "Scissors"];

// Loops through each choice in choices and creates a button. Alternatively, a for loop can be used.
choices.forEach(function(choice) {
    let button = document.createElement("BUTTON");
    let buttonText = document.createTextNode(choice);
    button.setAttribute("class", "playerChoice");
    button.setAttribute("id", choice);
    button.appendChild(buttonText);
    document.body.appendChild(button);
})

document.getElementById("Rock").addEventListener("click", () => {
    console.log("Rock");
});

document.getElementById("Paper").addEventListener("click", () => {
    console.log("Paper");
});

document.getElementById("Scissors").addEventListener("click", () => {
    console.log("Scissors");
});




