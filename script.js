function humanchoice() {
    const humanchoice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();
    if (humanchoice === "rock" || humanchoice === "paper" || humanchoice === "scissors") {
        return humanchoice;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return humanchoice();
    }
}
function computerchoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function determineWinner(human, computer) {
    if (human === computer) {
        return "It's a tie!";
    } else if ((human === "rock" && computer === "scissors") ||
               (human === "paper" && computer === "rock") ||
               (human === "scissors" && computer === "paper")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
function playGame() {
    const human = humanchoice();
    const computer = computerchoice();
    const result = determineWinner(human, computer);
    alert(`You chose: ${human}\nComputer chose: ${computer}\n${result}`);
} 