var Letter = require("./letter.js")

// var userGuess = process.argv[2]

function Word(word) {
    this.word = word.split("");
    this.arrayOfLetters = this.word.map(function (str) {
        return newLetter = new Letter(str);
    })

    this.displayLetter = function () {
        this.wordArr = this.arrayOfLetters.map(function (letter) {
            return letter.displayChar();
        })
        console.log(this.wordArr.join(" "));
    }

    this.checkGuess = function (char) {
        for (var i = 0; i < this.arrayOfLetters.length; i++){
            this.arrayOfLetters[i].compareChar(char);
        }
        this.displayLetter();
    }

};

module.exports = Word;

// var testWord = new Word("DOG")
// testWord.checkGuess(userGuess)

