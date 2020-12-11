// this is where your jquery javascript goes that controls how the viewer interacts with the screen - event listeners and handlers

//GLOBAL VARIABLES
const BOARDARRAY = [
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

let started = false;

let newPlayingBoard = [];
let userGuesses = [];
let clickCount = -1;

let noOfMatches = 0;
let score = 0;
let reMatch = false;
let time = 0;
let timeStop = false;

//when spacebar is pressed, start first game or reset values then start new game

$(document).on("keydown", function (e) {
  if (!started && e.keyCode == 32) {
    if (reMatch) {
      resetBoard();
    }
    setCards();
    started = true;
   
  }
});

function setTimer(){
  setInterval(function(){
    $('#timer').text(time);
    time++;
  }, 1000) 
}

//remove results text from previous game, reset image squares back to blank, remove prior card array
//reset overall score and ongoing correct matches

function resetBoard() {
  $("#results").text("");
  $("#score").text("");
  $("#result-heading").text("");
  $("img").attr("src", "images/blankSquare.png");
  noOfMatches = 0;
  score = 0;
  newPlayingBoard = [];
  time = 0;
}

//when a user clicks on a square, check conditions and run game logic from game-logic.js to determine outcome

$(".picture").on("click", function () {
  if (started == true) {
    if(clickCount == -1){
      setTimer();
      clickCount = 0;
    }
    
    if (clickCount == 0) {
      processFirstCard(this);
    }

    if (clickCount == 1) {
      processSecondCard(this);
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
  newPlayingBoard = shuffleArray(BOARDARRAY);

  for (let j = 0; j < newPlayingBoard.length; j++) {
    newPlayingBoard[j].boardSpot = j;
  }

  for (let i = 0; i < newPlayingBoard.length; i++) {
    $("#" + i).on("click", function () {
      $("#" + i).attr("src", newPlayingBoard[i].src);
    });
  }
}
