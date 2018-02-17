var Letter = require("./Letter.js");
var inquirer = require("inquirer");

var Word = function(word){
  this.lettersInChosen = [];
  this.letters = [];
  this.completed = false;
  this.addLetter = function(){
    this.lettersInChosen = word.split("");
    for(i=0; i<this.lettersInChosen.length; i++){
      this.letters.push(new Letter(this.lettersInChosen[i],false));
    }
  };

  this.addLetter();

  this.conString =function(){
    var newString = [];
    for(i=0; i<this.letters.length; i++){
      newString.push(this.letters[i].toString());
    };
    if(newString.length === this.letters.length){
      console.log(newString.join(" "));
    };
  };

  this.guessLetter = function(guess){
    var newArray=[];
    for (i=0; i<this.letters.length; i++){
      this.letters[i].charCheck(guess);
      if(this.letters[i].guessed===true){
        newArray.push(this.letters[i].guessed);
      }
    };
    if(newArray.length === this.letters.length){
      this.completed=true;
    }
  };
};


module.exports = Word;
