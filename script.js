// get user's input
function getHumanChoice(){
    const humanChoice = prompt("Rock, Paper or Scissors? :");
    return humanChoice.toLowerCase();
}

// the computer will make a choice
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) +1;
    const computerChoice = randomNumber == 1? "rock" : randomNumber == 2? "paper" : "scissors";
    return computerChoice;
}



function playGame(){
    // the scores will be 0 at the begin
    let humanScore = 0;
    let computerScore = 0;

    // now we will start playing the round
    function playRound(humanChoice, computerChoice) {
        let result;
        // if the user input is rock and the computer is paper so computer win...
        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            result = "You lose! Paper beats Rock";
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            result = "You lose! Scissors beats Paper";
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            result = "You lose! Rock beats Scissors";
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            result = "You won! Paper beats Rock";
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            result =  "You won! Scissors beats Rock";
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            result =  "You won! Rock beats Scissors";
        } else if (humanChoice == computerChoice) {
            result =  "draw";
        } else {
            result =  "Error, try again";
        }

        return result;
    }


    for (i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        alert(playRound(humanSelection, computerSelection));
    }

    console.log(`humanScore: ${humanScore} -- computerScore: ${computerScore}`);

    if (humanScore > computerScore) {
        return "You won the game";
    } else if (humanScore == computerScore) {
        return "draw";
    } else {
        return "You lose the game";
    }

    
}

console.log(playGame());
