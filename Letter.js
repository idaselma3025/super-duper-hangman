
var inquirer = require("inquirer");

var Letter = function(letter,guessed) {
  this.letter= letter;
  this.guessed = guessed;
};

Letter.prototype.toString = function() {
  var self = this;
  var newLetter;
  if(self.guessed===true){
    newLetter = self.letter;
    return newLetter;
  }
  else{
    newLetter = "_";
    return newLetter;
  }
};

Letter.prototype.charCheck = function(guess){
  var self = this;

  if(self.letter === guess){
    self.guessed=true;
  }
  else{
  };
};



module.exports = Letter;
