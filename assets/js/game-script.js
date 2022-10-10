// When DOM fully loaded add listeners to handle user interface events

document.addEventListener("DOMContentLoaded", function() {

    // Triggers dropdown of instructions on click
    document.getElementById("instructions-button").addEventListener("click", function() {
        document.getElementById("instructions").classList.toggle("hide-instructions");
    })

    // Start the game on click of start button
    document.getElementById("start").addEventListener("click", startButton);

})

/**
 * Starts game and hides then shows start button 
 */
function startButton() {
    let startButton = this;
        this.classList.toggle("visibility-hidden");
        gameStart()

        /**
        * Function to toggle button visibility
        */
        function buttonVisibility() {
            startButton.classList.toggle("visibility-hidden");
        }

        // Show the start button after 200ms so looks clicked
        setTimeout(buttonVisibility, 200);
}

/**
 * Checks if muted and creates a different tone depending on the button pressed
 */
function tone(colourButton) {

}

/**
 * Makes the button look likes its being pressed by hiding it to show a smaller
 * version of the button underneath
 */
function buttonPress(colourButton) {

}

/**
 * Checks the finished game score against the leaderboard and call name entry modal if necessary
 */
function checkScore() {
    
}

/**
 * Updates the leaderboard with a the added name when name entered and done pressed
 */
function nameEntered() {

}

/**
 * Initialises and initiate a run of the game
 */
function gameStart() {
    let gameArray = [];
    let currentScore;
    let timeout;
    let counter = 0;
        
    const yellowButton = {
        number : 0,
        frequency : 400
    };

    const greenButton = {
        number : 2,
        frequency : 600
    };

    const blueButton = {
        number : 3,
        frequency : 700
    };

    const redButton = {
        number : 1,
        frequency : 500
    };
    
    //Generate random sequence of flashes and place in gameArray
    let colourButtonCollection = [yellowButton, greenButton, blueButton, redButton];
    gameArray.push(colourButtonCollection[Math.floor(Math.random() * 4)]);

    for (i = 0; i < gameArray.length; ++i) {
        buttonPress(gameArray[i]);
        console.log(i);
    }
    // checkAnswer function declared in gameStart to be able to access and modify gameStart
    // variables gameArray and timeout

    /**
     * Resets the game timeout that waits for a button press, checks if the button pressed was correct
     * and responds appropriately
     */
    function checkAnswer() {

    }

    // gameSequence function declared in gameStart to be able to access and modify gameStart 
    // variable gameArray

    /**
     * Populates game array and displays the sequence to the player then add the coloured button 
     * listeners ready for the player to copy the sequence
     */
    function gameSequence() {
        gameArray.push()
    }

    // Start the game sequence
    gameSequence();
}