let result = document.getElementById("result");

document.getElementById("rock").addEventListener("click", function() {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("scissors");
});


function playGame(playerChoice) {

    let computerChoice = getComputerChoice();

    let winner = determineWinner(playerChoice, computerChoice);

    result.textContent =
        "You chose " + playerChoice +
        ". Computer chose " + computerChoice +
        ". " + winner;
}


function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];

    let randomIndex =
        Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function determineWinner(player, computer) {

    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win! 🎉";
    }

    return "Computer wins! 💻";
}


