function computerPlay() {
    // randomly create 3 random numbers (0,1,2).
    const randNumber = Math.floor(Math.random() * 3);
    console.log(randNumber);
    // random number represent random outcomes (rock,paper,scissor)
    if (randNumber === 0) {
        console.log("Rock")
        return 0 
    }else if (randNumber === 1) {
        console.log("Paper")
        return 1
    }else {
        console.log("Scissor")
        return 2
    }

}

computerSelection = computerPlay();
// console.log(computerSelection);
let playerNumber = 0;

function playRound(playerSelection,computerSelection) {
    
    if (playerSelection === "rock") {
        console.log("rock")
        playerNumber = 0;
        console.log(playerNumber)
    } else if (playerSelection === "paper") {
        console.log("paper")
        playerNumber = 1;
        console.log(playerNumber)
    } else {
        console.log('scissor')
        playerNumber = 2;
        console.log(playerNumber)
    }
    
}

playRound("paper",computerSelection);