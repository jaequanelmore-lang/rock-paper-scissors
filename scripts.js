let result = document.getElementById("result");

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

    result.textContent =
        "You chose " + playerChoice +
        ". Computer chose " + computerChoice +
        ". " + winner;
}


function getComputerChoice() {

    let choices = ["three", "midrange", "layup"];

    let randomIndex =
        Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function determineWinner(player, computer) {

    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === "three" && computer === "layup") ||
        (player === "layup" && computer === "three") ||
        (player === "midrange" && computer === "three")
    ) {
        return "You scored! 🎉";
    }

    return "you got blocked! 💻";
}


