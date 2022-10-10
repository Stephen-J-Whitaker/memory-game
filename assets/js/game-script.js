// When DOM fully loaded add listeners to handle user interface events

document.addEventListener("DOMContentLoaded", function() {

    // Triggers dropdown of instructions on click
    document.getElementById("instructions-button").addEventListener("click", function() {
        document.getElementById("instructions").classList.toggle("hide-instructions");
    });

    // Start the game on click of start button
    document.getElementById("start").addEventListener("click", startButton);

});

/**
 * Starts game and hides then shows start button 
 */
function startButton() {
    let button = this;

    this.classList.toggle("visibility-hidden");
    // Show the start button after 200ms so looks clicked
    setTimeout(function() {button.classList.toggle("visibility-hidden");}, 200);

    //Timeout set to 950ms as is short enough to ensure IOS web audio remains unlocked after user interaction
    setTimeout(gameStart, 950);
}

/**
 * Checks if muted and creates a different tone depending on the button pressed
 */
function tone(frequency) {

    console.log(frequency);
    //Create audio context and set as interactive for low latency
    let sound = new AudioContext({latencyHint: "interactive"});

    //Create an oscillator to generate the desired sound
    let tone = sound.createOscillator();
    tone.type = "sine";
    //Set the frequency of the sound
    tone.frequency.setValueAtTime(frequency, sound.currentTime);

    //Create gain node for reduced volume and mute functions
    let volume = sound.createGain();
    //Set the gain value
    volume.gain.value = 0.1;

    //Connect sound to the gain node
    tone.connect(volume);
    //Connect the gain node to the output
    volume.connect(sound.destination);

    sound.resume();
    //Start playing the sound
    tone.start();

    //Stop playing the sound after defined time elapsed
    tone.stop(sound.currentTime + 0.2);
}

/**
 * Makes the button look likes its being pressed by hiding it to show a smaller
 * version of the button underneath
 */
function buttonPress(colourButton) {
    document.getElementById(colourButton.name).classList.toggle("visibility-hidden");

    // Show the button button after 200ms so looks clicked
    setTimeout(function() {document.getElementById(colourButton.name).classList.toggle("visibility-hidden");}, 200);

    //Call tone function
    tone(colourButton.frequency);
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
        name : "yellow",
        number : 0,
        frequency : 400
    };

    const greenButton = {
        name : "green",
        number : 2,
        frequency : 600
    };

    const blueButton = {
        name : "blue",
        number : 3,
        frequency : 700
    };

    const redButton = {
        name : "red",
        number : 1,
        frequency : 500
    };
    
    let colourButtonCollection = [yellowButton, greenButton, blueButton, redButton];

    // checkAnswer function declared in gameStart to be able to access and modify gameStart
    // variables gameArray and timeout

    /**
     * Resets the game timeout that waits for a button press, checks if the button pressed was correct
     * and responds appropriately
     */
    function checkAnswer() {
        console.log(this.id);

        let buttonPressed;
        switch (this.id) {
            case "yellow" :
                buttonPressed = yellowButton;
                break;
            case "green" :
                buttonPressed = greenButton;
                break;
            case "blue" :
                buttonPressed = blueButton;
                break;
            case "red" :
                buttonPressed = redButton;
                break;
        }  

        // Hide and show button and play tone
        buttonPress(buttonPressed);
    }

    function gameTimeout() {
        console.log("Timeout called")
        for (let i = 0; i < colourButtonCollection.length; ++i) {
            document.getElementById(colourButtonCollection[i].name).removeEventListener("click", checkAnswer);
        }
    }

    // gameSequence function declared in gameStart to be able to access and modify gameStart 
    // variable gameArray

    /**
     * Populates game array and displays the sequence to the player then add the coloured button 
     * listeners ready for the player to copy the sequence
     */
    function gameSequence() {

        //Variables to create a delay between iterations of the array loop
        let time = new Date();
        let timeNow = time.getTime();

        //Generate random sequence of flashes and place in gameArray
        gameArray.push(colourButtonCollection[Math.floor(Math.random() * 4)]);

        for (let i = 0; i < gameArray.length; ++i) { 
            //While loop to create a delay between array loop iterations
            while (new Date().getTime() < (timeNow + 250)) { }
            
            buttonPress(gameArray[i]);   
        
        }

        for (let i = 0; i < colourButtonCollection.length; ++i) {
            document.getElementById(colourButtonCollection[i].name).addEventListener("click", checkAnswer);
        }


        //Set a timeout to end game if no user input for 10 seconds
        timeout = setTimeout(gameTimeout, 10000);

    }

    // Start the game sequence
    gameSequence();
}