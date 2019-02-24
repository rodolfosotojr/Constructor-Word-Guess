module.exports = Letter;
var userGuess = process.argv[2]

function Letter(char) {
    this.char = char;
    this.guess = false;

    this.displayChar = function () {
        if (this.guess === true) {
            console.log(this.char);
        } else {
            console.log("_");
        }
    }


    this.compareChar = function (character) {
        if (this.char === character) {
            this.guess = true;
            this.displayChar();
        } else {
            this.guess = false;
            this.displayChar();
        }
    }

};

var test = new Letter("");

test.compareChar(userGuess);

