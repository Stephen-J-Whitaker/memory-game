// When DOM fully loaded add listeners to handle user interface events

document.addEventListener("DOMContentLoaded", function() {

    // Triggers dropdown of instructions on click
    document.getElementById("instructions-button").addEventListener("click", function() {
        document.getElementById("instructions").classList.toggle("hide-instructions");
    })

    // Start the game on click of start button
    document.getElementById("start").addEventListener("click", gameStart());
})

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
    
    
}