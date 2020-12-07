//set up the board
let noOfClicks = 0;
let match = false;
let firstCard;
let secondCard;

let boardArray = [
  "images/owl.png",
  "images/whale.png",
  "images/bird.png",
  "images/earth.png",
  "images/frog.png",
  "images/koala.png",
  "images/owl.png",
  "images/whale.png",
  "images/bird.png",
  "images/earth.png",
  "images/frog.png",
  "images/koala.png",
];

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

let newArray = shuffleArray(boardArray);

console.log(newArray);

function setCards(newArray) {
  for (let i = 0; i < newArray.length; i++) {
    document
      .getElementById("square" + i)
      .addEventListener("click", function () {

        //if already 'clicked', toggle to blank, if not 'clicked', toggle to picture

        document.getElementById("square" + i).setAttribute("src", newArray[i]);
        if(document.getElementById()){

            //if the element has a class tag of 'not-clicked', toggle to 'clicked', and if clicked, 

        }
      });
  }
}

function playGame() {
  if (noOfClicks == 2) {
    // noOfClicks = 0;
    if (firstCard == secondCard) {
      document.getElementById("match").innerHTML = "match!";
    } else {
      document.getElementById("match").innerHTML = "no match, try again.";
    }
  }
}

setCards(newArray);

playGame();

//game logic
