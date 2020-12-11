

//shuffle the cards, return random array

function shuffleArray(array) {
  let id = array.length;

  while (0 !== id) {
    let random = Math.floor(Math.random() * id);
    id -= 1;

    let temp = array[id];
    array[id] = array[random];
    array[random] = temp;
  }

  return array;
}

function findCard(spotNumber) {
  let found = false;
  let card = {};

  newArray.forEach(function (value) {
    if (spotNumber == value.boardSpot) {
      card = value;
      found = true;
    }
  });

  if (found) {
    return card;
  } else {
    return false;
  }
}

function checkMatch() {
  if (userGuesses[0].name == userGuesses[1].name) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  if (score == 6) {
    $("#result-heading").text(
      "You found all the matches!  Press spacebar to start again."
    );

    started = false;
    score = 0;
  }
}


