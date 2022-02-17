// global varibale for counting win, lose and draw
let win = 0;
let lose = 0;
let draw = 0;

// function for computer's selection calculation

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

// function for player's selection and game logic calculation 

function playRound(playerSelection,computerSelection) {
    
    if (playerSelection === "rock") {

        playerNumber = 0;

    } else if (playerSelection === "paper") {

        playerNumber = 1;

    } else {
        
        playerNumber = 2;
        
    }

    // The variations if the player choose "Rock(0)"
    if (playerNumber === 0 && computerSelection === 0) {
        alert("It's a draw, rocks and roll")
        draw++ // draw count incremental
    }else if (playerNumber === 0 && computerSelection === 1) {
        alert("You lose, Paper beats Rock :( ")
        lose++ // lose count incremental
    } else if (playerNumber === 0 && computerSelection === 2) {
        alert("You win my friend, Rock beats Scissor !!")
        win++ // win count incremental
    }

    // The variations if the player choose "Paper(1)" 
    else if (playerNumber === 1 && computerSelection === 0) {
        alert("You win my friend, Paper beats Rock!!  ")
        win++
    }else if (playerNumber === 1 && computerSelection === 1) {
        alert("It's a draw, Dunder Mufflin Papers Gang")  
        draw++ 
    } else if (playerNumber === 1 && computerSelection === 2) {
        alert("You lose, Scissor beats Paper :(")
        lose++
    }

    // The variations if the player choose "Scissor(2)" 
    else if (playerNumber === 2 && computerSelection === 0) {
        alert("You lose, Rock beats Scissor :(")
        lose++
    } else if (playerNumber === 2 && computerSelection === 1){
        alert("You win my friend, Scissor beat Paper!!")
        win++
    } else if (playerNumber === 2 && computerSelection === 2) {
        alert("It's a draw, scissorhands")
        draw++
    }   
    
}

// a funtion that play 5 games, display each game result and display score board

function game(){                                                
    for (let i = 0; i < 5; i++){
        computerSelection = computerPlay()
        playerSelection = prompt("Rock, Paper or Scissor?") // User choice
        playRound(playerSelection, computerSelection)
    }
    // Scoreboard format
    alert(`In 5 games of Rock, Paper and Scissor
    you win ${win} games, 
    lose ${lose} games and 
    draw ${draw} games`)
}

// trigger the game 
game();