let form = document.getElementById("gameForm"

form.addEventListener("submit, function(event) {
     event.preventDefault() ;
     let choice = 
         document.getElementById("playerChoice").value;

      console.log(choice);
});



function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]

    let randomIndex =
        Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


funtion determineWinner(player, computer) {
    if (player === computer) {
            return "it's a tie!";
        }
if (
     (player === "rock && computer === "scissors")  | |
     (player === "paper && computer === "rock") | |
     (player === "scissors && computer === "paper") | |
) {
     return "You win!";
}
 return "computer wins!";
}



let form = document.getElementById("gameForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let playerChoice = document
        .getElementById("playerChoice")
        .value
        .toLowerCase();
   let computerChoice = getComputerChoice();

   let result = determineWinner(
       playerChoice,
       computerChoice
);

document.getElementById("result").textContent =
        " Computer chose " + computerChoice + "." + result;
});
