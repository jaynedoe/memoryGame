// this is where your jquery javascript goes that controls how the viewer interacts with the screen - event listeners and handlers

//GLOBAL VARIABLES
let match = false;
let firstCard = 0;
let secondCard = 0;
let firstPictureNumberChosen;
let secondPictureNumberChosen;
let started = false;
let userGuesses = [];
let newArray = [];
let clickCount = 0;
let score = 0;

let boardArray = [
  {
    name: "owl",
    boardSpot: -1,
    src: "images/owl.png",    
  },
  {
    name: "owl",
    boardSpot: -1,
    src: "images/owl.png",    
  },
  {
    name: "whale",
    boardSpot: -1,
    src: "images/whale.png",    
  },
  {
    name: "whale",
    boardSpot: -1,
    src: "images/whale.png",
  },
  {
    name: "bird",
    boardSpot: -1,
    src: "images/bird.png",    
  },
  {
    name: "bird",
    boardSpot: -1,
    src: "images/bird.png",
  },
  {
    name: "earth",
    boardSpot: -1,
    src: "images/earth.png",    
  },
  {
    name: "earth",
    boardSpot: -1,
    src: "images/earth.png",
  },
  {
    name: "frog",
    boardSpot: -1,
    src: "images/frog.png",
  },
  {
    name: "frog",
    boardSpot: -1,
    src: "images/frog.png",
  },
  {
    name: "koala",
    boardSpot: -1,
    src: "images/koala.png",
  },
  {
    name: "koala",
    boardSpot: -1,
    src: "images/koala.png",
  },
];

//when spacebar is pressed, start game

$(document).on("keydown", function (e) {
  if (!started && e.keyCode == 32) {
    if (match == true) {
      $("#results").text("");
      $("#score").text("");
      $("#result-heading").text("");
    }

    setCards();
    started = true;
  }
});

//when a user clicks on a square, run game logic to determine outcome

$(".picture").on("click", function () {
  if (started == true) {
    //if click count is 0, add card to first choice
    if (clickCount == 0) {
      firstPictureNumberChosen = this.id;

      firstCard = findCard(firstPictureNumberChosen);

      $("#first-card").text(`First card found: ${firstCard.name}`);
      userGuesses.push(firstCard);
    }

    //if click count is 1 and game has started, add second card to user guess array

    if (clickCount == 1) {
      secondPictureNumberChosen = this.id;

      secondCard = findCard(secondPictureNumberChosen);
      $("#second-card").text(`Second card found: ${secondCard.name}`);
      userGuesses.push(secondCard);
      match = checkMatch();
      displayMatchResult(
        match,
        firstPictureNumberChosen,
        secondPictureNumberChosen
      );
      userGuesses = [];
    }

    checkForWin();

    if (clickCount == 0) {
      clickCount = 1;
    } else if (clickCount == 1) {
      clickCount = 0;
    }
  }
});

function displayMatchResult(match, first, second) {
  if (match) {
    score++;
    $("#results").text("Match!");
    $("#score").text(`Your current score is: ${score}`);
  } else if (!match) {
    $("#results").text("No Match:(");
    $("#score").text(`Your current score is: ${score}`);
    setTimeout(() => {
      flipCardsBack(first, second);
    }, 500);
  }

}

function flipCardsBack(first, second) {
  let id1 = "#" + first;
  let id2 = "#" + second;

  $(id1).attr("src", "images/blankSquare.png");
  $(id2).attr("src", "images/blankSquare.png");
}

function setCards() {
  $("img").attr("src", "images/blankSquare.png");

  newArray = [];
  newArray = shuffleArray(boardArray);

  //assign each picture a static, particular spot on the board, save as an object property

  for (let j = 0; j < newArray.length; j++) {
    newArray[j].boardSpot = j;
  }

  //assign an event handler to each square on the board - what to dynamically change when a square is clicked

  for (let i = 0; i < newArray.length; i++) {
    $("#" + i).on("click", function () {
      $("#" + i).attr("src", newArray[i].src);
    });
  }
}
