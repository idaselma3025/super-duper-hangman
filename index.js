//should be game controller
//interaction with user

var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordList = ["zebra","panther","lion","giraffe"];
var newbie;
var count;

var startGame = function(){
  var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

  newbie = new Word(chosenWord);
  newbie.conString();
  count = 10;

}

var guesser = function(){
  // console.log("gL this.letters.length : "+ newbie.letters.length);
  if(newbie.completed===true){
    console.log("Congratulations!");
    startGame();
    guesser();
  }
  else if(newbie.completed===false && count>0){
    inquirer.prompt({
      name: "attempt",
      type:"input",
      message: "Guess a letter!"
    }).then(function(answers) {

      var guess = answers.attempt.toString();

      newbie.guessLetter(guess);
      newbie.conString();
      guesser();
      count--;
      console.log("Only "+count+" guesses left!");

    })
  }
  else if(count===0){
    console.log("You Lost!");
    startGame();
    guesser();
  }
else{
    // console.log("Congratulations");
    startGame();
    guesser();

  }
};
startGame();
guesser();
