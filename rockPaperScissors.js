function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

console.log(getComputerChoice());