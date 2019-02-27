//Require for my word.js file and inquirer NPM
var Word = require("./word.js")
var inquirer = require('inquirer');

//Variable for guessing words
var randomWords = [
    "fencing",
    "wrestling",
    "golf",
    "ultimate",
    "pool",
    "basektball",
    "football",
    "baseball",
    "hockey"
]

//Variable for the starting word and total guesses remaining
var startingIndex = 0;
var startingWord;
var guessRemaining = 10;

//Funciton to call on to pick the starting word
function pickWord() {
    startingWord = new Word(randomWords[startingIndex]);
    startingWord.displayLetter();
}

//Function to loop through the arrayOfLetters and flag the outcome compared to user guess
function startGame() {
    var win;

    for (var i = 0; i < startingWord.arrayOfLetters.length; i++) {
        if (startingWord.arrayOfLetters[i].guess === false) {
            win = false;
            break
        } else {
            win = true;
        }
    }

    //Logic for if the user hasn't won
    if (!win) {


        inquirer
            .prompt([
                {
                    /* Pass your questions in here */
                    type: "input",
                    message: "Pick a letter",
                    name: "playerGuess"
                }
            ])
            .then(function (answers) {

                // Use user feedback for... whatever!!
                // console.log(startingWord)
                startingWord.checkGuess(answers.playerGuess);

                if (startingWord.arrayOfLetters[i].guess === true) {
                    guessRemaining = guessRemaining;
                    console.log("You have " + guessRemaining + " guesses remaining!")
                } else if (startingWord.arrayOfLetters[i].guess === false) {
                    guessRemaining--
                    console.log("You have " + guessRemaining + " guesses remaining!")
                }

                if (guessRemaining === 0) {
                    console.log("You have run out of guesses! You lose! \n\nTry this next word." )
                    guessRemaining = 11;
                    startingIndex++;
                    pickWord();
                }
                startGame();
            })
    }

    if (win) {
        inquirer
            .prompt([
                {
                    /* Pass your questions in here */
                    type: "rawlist",
                    message: "Would you like to try another word",
                    choices: ["YES", "NO"],
                    name: "playAgain"
                }
            ])
            .then(function (answers) {

                if (answers.playAgain === "YES") {
                    startingIndex++;
                    pickWord();
                    guessRemaining = 11;

                    startingWord.checkGuess(answers.playerGuess);

                    if (startingWord.arrayOfLetters[i].guess === true) {
                        guessRemaining = guessRemaining;
                        console.log("You have " + guessRemaining + " guesses remaining!")
                    } else if (startingWord.arrayOfLetters[i].guess === false) {
                        guessRemaining--
                        console.log("You have " + guessRemaining + " guesses remaining!")
                    }
                    startGame();

                } else if (answers.playAgain === "NO") {
                    console.log("\nThanks for playing! Have a great day!")
                }


            })
    }
}

pickWord();
startGame();