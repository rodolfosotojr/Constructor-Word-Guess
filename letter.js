// var userGuess = process.argv[2]

//Constructor with char parameter and buleon of guess set to false
function Letter(char) {
    this.char = char;
    this.guess = false;

    this.displayChar = function () {
        if (this.guess === true) {
            return this.char;
        } else {
            return ("_");
        }
    }


    this.compareChar = function (character) {
        if (this.char === character) {
            this.guess = true;
            this.displayChar();
        } else {
            this.displayChar();
        }
    }

};
module.exports = Letter;

// var test = new Letter("k");
// test.compareChar(userGuess);

