$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
    addNumbers();
}

function addNumbers() {
  let newNumbers = {
    playerOne: $('#player-one').val(),
    playerTwo: $('#player-two').val()
  }
  console.log('testing numbers', newNumbers);
  
}

function render(numbersArray) {
    $('#numberGuesser').empty();
    for (let item of numbersArray) {
      console.log(`${item.playerOne}, ${item.playerTwo}`);
      $('#numberGuesser').append(`
          <div class="displayedGuess">
              <p>${item.playerOne}</p>
              <p>${item.playerTwo}</p>
          </div>
      `)
    }
}