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
                //alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        });
    }
    //default is for addition game to load
    runGame("addition");
});

//Math.random() * 25; random number between 1 & 25
//Math.floor(Math.random() * 25) rounds any floating point number down to a whole number
//Math.floor(Math.random() * 25) +1 so that we don't get 0. 0 wouldn't work for division

// below: This is a docstring used to desribe functions

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processes
 */
function runGame(gameType) {

    //creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        // throw an error and stop the game
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {

}

/**
 * Gets the operands (the numbers) and the operator(plus, minus, etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    // getting the values from the DOM. PasrseInt to make it a number, not a string
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        //calculate correct answer. And return an array
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}