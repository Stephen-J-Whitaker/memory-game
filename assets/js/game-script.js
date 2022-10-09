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

function checkScore() {

}