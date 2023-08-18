// getComputerChoice is working
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
} 

function gameRound(playerSelection, computerSelection) {

    // Convert inputs to lowercase to in order to compare (i.e case-insensitive)
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

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
    } else {
        return "Invalid entry";
    }

}

function game() {

    let userScore = 0;
    let compScore = 0;
    
    // Keeps track of each round
    for(round = 1; round < 6; round++) {
        let playerChoice = prompt("Rock, paper or scissors?");

        let result = gameRound(playerChoice, computerChoice);

        if (result == "You win!") {
            userScore++;
            console.log(`Round:${round}\n\n${result}\n\nYour score: ${userScore}\nComputer score: ${compScore}`);
        } else if (result == "Computer wins") {
            compScore++;
            console.log(`Round:${round}\n\n${result}\n\nYour score: ${userScore}\nComputer score: ${compScore}`);
        } else if (result == "It's a Tie!") {
            console.log(`Round:${round}\n\n${result}\n\nYour score: ${userScore}\nComputer score: ${compScore}`);
        }
    }

    // Announces the winner after game ends
    if(userScore > compScore) {
        return "You beat the computer!";
    } else if(compScore > userScore) {
        return "Computer beats you!";
    } else {
        return "It's a tie! No one wins!";
    }
}


const computerChoice = getComputerChoice();
console.log(game());