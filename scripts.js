let result = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

let scoreDisplay = document.getElementById("score");

document.getElementById("rock").addEventListener("click", function() {
playGame("three");
});

document.getElementById("paper").addEventListener("click", function() {
playGame("midrange");
});

document.getElementById("scissors").addEventListener("click", function() {
playGame("layup");
});

function playGame(playerChoice) {

let computerChoice = getComputerChoice();

let winner = determineWinner(playerChoice, computerChoice);

if (winner === "You scored! 🎉") {
    playerScore++;
}
else if (winner === "You missed! 😭") {
    computerScore++;
}

result.textContent =
    "You chose " + playerChoice +
    ". Computer chose " + computerChoice +
    ". " + winner;

scoreDisplay.textContent =
    "You: " + playerScore +
    " | Computer: " + computerScore;

}

function getComputerChoice() {

let choices = ["three", "midrange", "layup"];

let randomIndex =
    Math.floor(Math.random() * choices.length);

return choices[randomIndex];

}

function determineWinner(player, computer) {

if (player === computer) {
    return "You got blocked! 🏀";
}

if (
    (player === "three" && computer === "layup") ||
    (player === "layup" && computer === "midrange") ||
    (player === "midrange" && computer === "three")
) {
    return "You scored! 🎉";
}

return "You missed! 😭";

}
