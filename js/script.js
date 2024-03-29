
/**
 * Buttons
 */

//define button variables

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
// assign the element to the appropriate button variable

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  // draw a number, recalculate it and display it

  const playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  // get the player's move and display it

  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  // get the computer's move and display it

  displayResult(playerMove, computerMove);
  //recalculate and display the result

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
    
}

buttonRock.addEventListener('click', function(){ 
  buttonClicked('kamień'); 
});
buttonPaper.addEventListener('click', function(){ 
  buttonClicked('papier'); 
});
buttonScissors.addEventListener('click', function(){ 
  buttonClicked('nożyce'); 
});
