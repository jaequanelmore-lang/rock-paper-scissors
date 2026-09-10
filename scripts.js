let form = document.getElementById("gameForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let playerChoice = document
        .getElementById("playersChoice")
        .value
        .toLowerCase();

    let computerChoice = getComputerChoice();

    let result = determineWinner(
        playerChoice,
        computerChoice
    );

    document.getElementById("result").textContent =
        "Computer chose " + computerChoice + ". " + result;
});


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
        return "You win!";
    }

    return "Computer wins!";
}
