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
    // The variations if the player choose "Rock(0)"
    if (playerNumber === 0 && computerSelection === 0) {
        console.log("It's a draw, rocks and roll")
    }else if (playerNumber === 0 && computerSelection === 1) {
        console.log("You lose, Paper beats Rock :( ")
    } else if (playerNumber === 0 && computerSelection === 2) {
        console.log("You win my friend, Rock beats Scissor !!")
    }
    // The variations if the player choose "Paper(1)" 
    else if (playerNumber === 1 && computerSelection === 0) {
        console.log("You win my friend, Paper beats Rock!!  ")
    }else if (playerNumber === 1 && computerSelection === 1) {
        console.log("It's a draw, Dunder Mufflin Papers Gang")   
    } else if (playerNumber === 1 && computerSelection === 2) {
        console.log("You lose, Scissor beats Paper :(")
    }
    // The variations if the player choose "Scissor(2)" 
    else if (playerNumber === 2 && computerSelection === 0) {
        console.log("You lose, Rock beats Scissor :(")
    } else if (playerNumber === 2 && computerSelection === 1){
        console.log("You win my friend, Scissor beat Paper!!")
    } else if (playerNumber === 2 && computerSelection === 2) {
        console.log("It's a draw, scissorhands")
    }   
    
}

playRound("paper",computerSelection);