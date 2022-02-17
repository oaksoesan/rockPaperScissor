function computerPlay() {
    const randNumber = Math.floor(Math.random() * 3);
    console.log(randNumber);
    if (randNumber === 0) {
        console.log("Rock") 
    }else if (randNumber === 1) {
        console.log("Paper")
    }else {
        console.log("Scissor")
    }
}

computerPlay();