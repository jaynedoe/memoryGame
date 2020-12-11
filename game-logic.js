//shuffle the cards, return random array
let firstCardIdChosen;
let secondCardIdChosen;

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

function processFirstCard(imageElement) {
  firstCardIdChosen = imageElement.id;
  let firstCard = findCard(firstCardIdChosen);
  userGuesses.push(firstCard);
}

function processSecondCard(imageElement) {
  secondCardIdChosen = imageElement.id;
  let secondCard = findCard(secondCardIdChosen);
  userGuesses.push(secondCard);

  let match = checkMatch();
  displayMatchResult(
    match,
    firstCardIdChosen,
    secondCardIdChosen
  );
  userGuesses = [];
}

function findCard(spotNumber) {
  let found = false;
  let card = {};

  newPlayingBoard.forEach(function (value) {
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

let checkMatch = () => {
  if (userGuesses[0].name == userGuesses[1].name) {
    noOfMatches++;
    score++;
    return true;
  } else {
    score--;
    return false;
  }
};

function checkForWin() {
  if (noOfMatches === 6) {
    clearInterval(setTimer);
    let timeToComplete = time;
    $("#result-heading").text(
      `You found all the matches in ${timeToComplete} seconds!  Press spacebar to start again.`
    );
    $('#timer').text('');
    reMatch = true;
    started = false;
  }
}
