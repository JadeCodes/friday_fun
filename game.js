/*Rock, paper, scissors game from Codecademy*/

var chooseMovie = function(){

var userChoice = $('#js-choice').val();

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
alert("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie! Try again."; 
    }
    else if(choice1 === "rock") {
        
    if(choice2 === "scissors") {
        return "You're watching Star Trek tonight...";
    }
    else {
        return "It's Glee time!";
    }
    }
    else if(choice1 === "paper") {
        
    if(choice2 === "rock") {
        return "It's Glee time!";
    }
    else {
        return "Time to choose something else to watch.";
    }
    }
      else if(choice1 === "scissors") {
        
    if(choice2 === "rock") {
        return "You're watching Star Trek tonight...";
    }
    else {
        return "Time to choose something else to watch.";
    }
    }
    };

compare(userChoice, computerChoice);

alert(compare(userChoice, computerChoice));

};
