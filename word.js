var Letter = require("./letter.js")

function Word(word) {
    this.word = word;

    var newLetter = [];

    this.strRtrn = function () {
        Letter.displayChar();
    }

    this.myFunction = function(char) {
        Letter.compareChar(char);
    }

};

var test = new Word("cat")

test.compareChar();