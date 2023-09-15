// Wait for the DOM to finish loading befire running the game
// Get the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    /*for(let i = 0; i < buttons.length; I++) {

    }*/

    //use more modern syntax to iterate through the buttons array
    for (let button of buttons) {
        console.log("button clicked " + button);
        //when the button is clicked, funtion will run
        button.addEventListener("click", function () {
            //check what value of data type is
            //if click is submit tell the user they clicked submit
            //THIS refers to the button that was just clicked
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                //set the gameType to the value of that attribute
                //this will tell us which gameType to run
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

//Math.random() * 25; random number between 1 & 25
//Math.floor(Math.random() * 25) rounds any floating point number down to a whole number
//Math.floor(Math.random() * 25) +1 so that we don't get 0. 0 wouldn't work for division

// below: This is a docstring used to desribe functions

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processes
 */
function runGame() {
    //creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {
    

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}