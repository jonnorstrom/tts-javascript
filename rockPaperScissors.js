// 1. Use the power of JavaScript and the DOM API to build a clickable rock, paper, scissors game.
document.addEventListener('DOMContentLoaded', function() {
  var turn = [];

  var possibilities = [
    'rock',
    'paper',
    'scissors'
  ];

  var randomPossibility = possibilities[Math.floor(Math.random() * possibilities.length)];

  var readComputer = function(possibilities) {
    document.getElementById('read-computer').innerHTML = 'Computer played ' + randomPossibility;
    turn = []
    result = randomPossibility;
    turn.push({computer: result});
    console.log(turn);

  };

  var readPlayer = function() {
    var playerSelection = document.getElementById('player-choice');
    var selectedValue = playerSelection.options[playerSelection.selectedIndex].value;
    document.getElementById('read-player').innerHTML = 'You played ' + selectedValue;
    turn.push({player: selectedValue});
  }

  var evalChoices = function() {
    readComputer();
    readPlayer();
  }

  var challengeComputer = document.getElementById("challenge-computer")
  challengeComputer.addEventListener("click", evalChoices);
});
