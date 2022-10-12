// When DOM fully loaded add listeners to handle user interface events
document.addEventListener("DOMContentLoaded", function() {

    // Triggers dropdown of instructions on click
    document.getElementById("instructions-button").addEventListener("click", function() {
        document.getElementById("instructions").classList.toggle("hide-instructions");
    })

    //Show top ten modal when top ten button pressed
    document.getElementById("top-ten-button").addEventListener("click", function() {
        document.getElementById("top-ten-modal").classList.toggle("display-none");
    })

    //Close top ten modal on press of "DONE" on the modal
    document.getElementById("close-top-ten").addEventListener("click", function() {
        document.getElementById("top-ten-modal").classList.toggle("display-none");
    })

    // Start the game on click of start button
    document.getElementById("start").addEventListener("click", startButton);

    // Self invoking function to retrieve local store once and build top 10 table on page load
    /**
     * Function to get scores from local store if any exist and build top ten table with data present 
     */
     (function collectFromLocalStore() {
        let topTen = [];
    
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; ++i) {
                topTen.push([localStorage.key(i), localStorage.getItem(localStorage.key(i))]);
            }
        } else {
            let table = document.getElementsByTagName("table");
            console.log(table[0]);
            for (let i = 0; i < 10; ++i) {
 
                console.log(table[0]);
            }
        }
    }) ()
})

/**
 * Starts game and hides then shows start button 
 */
function startButton() {
    let button = this;

    this.classList.toggle("visibility-hidden");
    // Show the start button after 200ms so looks clicked
    setTimeout(function() {button.classList.toggle("visibility-hidden");}, 200);

    //Timeout set short to ensure IOS web audio remains unlocked after user interaction
    setTimeout(gameStart, 100);
}

/**
 * Start the game by creating its audio context and creating a tone in response to a button 
 * press to unlock web audio on IOS. Pass the audio context as a parameter through the
 * functions to where it's needed
 */
function startGame() {  
    //Create audio context and set as interactive for low latency
    let sound = new AudioContext({latencyHint: "interactive"});

    tone(300, sound);
    gameStart(sound);
}

/**
 * Checks if muted and creates a different tone depending on the button pressed
 */
function tone(frequency, sound) {
    console.log(frequency);
    console.log(sound);  

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

    //Start playing the sound
    tone.start();

    //Stop playing the sound after defined time elapsed
    tone.stop(sound.currentTime + 0.2);
}

/**
 * Makes the button look likes its being pressed by hiding it to show a smaller
 * version of the button underneath
 */
function buttonPress(colourButton, sound) {
    document.getElementById(colourButton.name).classList.toggle("visibility-hidden");

    // Show the button button after 200ms so looks clicked
    setTimeout(function() {document.getElementById(colourButton.name).classList.toggle("visibility-hidden");}, 200);

    //Call tone function
    tone(colourButton.frequency, sound);
}

/**
 * Checks the finished game score against the leaderboard and call name entry modal if necessary
 */
function checkScore(finalScore) {
    let topTen = [];

    console.log("top ten " + topTen);
    console.log("Hello from in checkscore");
    console.log(finalScore);

    topTen.push(["Test", finalScore]);
    console.log("top ten " + topTen);
    console.log("final score " + finalScore);
}

/**
 * Update the score on the user interface 
 */
function setScore(score) {
    document.getElementById("current-score").innerText = score;
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
    //Create audio context and set as interactive for low latency
    const sound = new AudioContext({latencyHint: "interactive"});

    tone(300, sound);

    const gameArray = [];
    let currentScore;
    let timeout;
    let counter = 0;
    let score = 0;

    //Coloured button objects with associated properties
    const yellowButton = {
        name : "yellow",
        number : 0,
        frequency : 400
    };

    const greenButton = {
        name : "green",
        number : 1,
        frequency : 500
    };

    const blueButton = {
        name : "blue",
        number : 2,
        frequency : 600
    };

    const redButton = {
        name : "red",
        number : 3,
        frequency : 700
    };
    
    //Array of coloured buttons to select a random button from
    let colourButtonCollection = [yellowButton, greenButton, blueButton, redButton];

    // checkAnswer function declared in gameStart to be able to access and modify gameStart
    // variables gameArray and timeout

    /**
     * Resets the game timeout that waits for a button press, checks if the button pressed was correct
     * and responds appropriately
     */
    function checkAnswer() {
        console.log(gameArray);

        //Clear the timout because a button was pressed
        clearTimeout(timeout);

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

        console.log("game array" + gameArray[counter].number);
        console.log(counter + "counter");
        console.log(gameArray.length + "game array length");

        // Hide and show button and play tone
        buttonPress(buttonPressed, sound);

        if ((parseInt(gameArray[counter].number) === buttonPressed.number) && (counter < (gameArray.length - 1))) {
            console.log(counter + "counter");
            ++counter;

            console.log(gameArray.length + "gamearray length");

            console.log("correct button pressed and but not at end of array");

            //Set a timeout to end game if no user input for 10 seconds
            timeout = setTimeout(gameTimeout, 10000);

        } else if ((parseInt(gameArray[counter].number) === buttonPressed.number) && (counter === (gameArray.length - 1))) {
            counter = 0;

            //Update the score
            setScore(++score);

            console.log("correct button pressed and at end of array");
            //remove coloured button listeners as about to run a game sequence and no buttons are to be pressed
            removeListeners();
            
            //Call game sequence to add another element to the array
            setTimeout(gameSequence(), 200);
        } else {
            
            console.log("user input" + buttonPressed.number);
            //Remove listeners
            removeListeners();

            console.log("game end due to wrong answer " + score);

            //Check the final score against score board
            setTimeout(checkScore(score), 300);
        }
    }

    /**
     * Call remove listener functional and call checkScore when the game times out
     */
    function gameTimeout() {

        console.log("Timeout called : counter " + counter);
        //Remove the listeners for the coloured buttons
        removeListeners();
        
        //Game over, check the score
        checkScore(score);
    }

    /**
     * Remove the listeners when no button presses wanted
     */
    function removeListeners() {
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
        //Delay loop variable
        let i = 0;
        //Generate random sequence of flashes and place in gameArray
        gameArray.push(colourButtonCollection[Math.floor(Math.random() * 4)]);

        /**
         * Call the buttonPress function once for each array element present
         * and have an interval of 1 second between iterations. If at end of the array then clear
         * setInterval 
         */
        function arrayLoop() {
            buttonPress(gameArray[i], sound);
            i++;
            if (i === gameArray.length) {
                clearInterval(interval); // If end of array reached then no more buttonPress calls required
                // Create listeners at the end of the array loop so no presses possible during loop
                for (let i = 0; i < colourButtonCollection.length; ++i) {
                    document.getElementById(colourButtonCollection[i].name).addEventListener("click", checkAnswer);
                }
            } 
        }

        let interval = setInterval(arrayLoop, 750); // Every 1 second, call arrayLoop to read the next element of the array and call button press
      


        //Set a timeout to end game if no user input for 10 seconds
        timeout = setTimeout(gameTimeout, 10000);
    }

    // Start the game sequence
    gameSequence();
}