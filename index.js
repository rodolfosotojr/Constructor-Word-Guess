var Word = require("./word.js")
var inquirer = require('inquirer');

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

var startingIndex = 0;
var startingWord;

function pickWord() {
    startingWord = new Word(randomWords[startingIndex]);
    startingWord.displayLetter();
}


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
                startGame();
            })
    }
}

pickWord();
startGame();