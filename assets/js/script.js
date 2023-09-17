// Wait for the DOM to finish loading befire running the game
// Get the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    /*for(let i = 0; i < buttons.length; I++) {

    }*/

    //use more modern syntax to iterate through the buttons array
    for (let button of buttons) {
        //console.log("button clicked " + button);
        //when the button is clicked, funtion will run
        button.addEventListener("click", function () {
            //check what value of data type is
            //if click is submit tell the user they clicked submit
            //THIS refers to the button that was just clicked
            if (this.getAttribute("data-type") === "submit") {
                //alert("You clicked Submit!");
                checkAnswer();
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
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        // throw an error and stop the game
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAsnwer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    //this will return an array
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    //if isCorrect is the short way of saying "if iscorrect = true"
    if (isCorrect) {
        alert("Hey! You got it right :)");
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

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
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by one
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by one
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;


}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";

}

function displayDivisionQuestion() {

}