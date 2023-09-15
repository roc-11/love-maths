// Wait for the DOM to finish loading befire running the game
// Get the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    /*for(let i = 0; i < buttons.length; I++) {

    }*/

    //use more modern syntax to iterate through the buttons array
    for(let button of buttons) {
        //when the button is clicked, funtion will run
        button.addEventListener("click", function() {
            //check what value of data type is
            //if click is submit tell the user they clicked submit
            //THIS refers to the button that was just clicked
            if(this.getAttribute("data-type") === "submit") {
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

function runGame() {

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