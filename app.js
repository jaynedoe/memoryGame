//GLOBAL VARIABLES
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

function setCards() {
  let newArray = shuffleArray(boardArray);

  for (let i = 0; i < newArray.length; i++) {
    document
      .getElementById("square" + i)
      .addEventListener("click", function () {
        //set sound
        let sound = new Audio("sounds/snare.mp3");
        sound.play();
        //increment no of clicks
        noOfClicks++;
        //if class = not-clicked, change to clicked and vice versa
        console.log(this);

        let clickTest = this.classList[1];

        if (clickTest == "not-clicked") {
          this.classList.remove("not-clicked");
          this.classList.add("clicked");
          document
            .getElementById("square" + i)
            .setAttribute("src", newArray[i]);
        } else if (clickTest == "clicked") {
          this.classList.remove("clicked");
          this.classList.add("not-clicked");
          document
            .getElementById("square" + i)
            .setAttribute("src", "images/blankSquare.png");
        }

        if (noOfClicks == 1) {
          firstCard = this.id;
          console.log(firstCard, noOfClicks);
        } else if (noOfClicks == 2) {
          secondCard = this.id;
          console.log(secondCard, noOfClicks);
        } else {
          noOfClicks = 0;
        }
      });
  }
}

function playGame() {
  
  setCards();

  if (noOfClicks == 2) {
    if (firstCard == secondCard) {
      document.getElementById("match").innerHTML = "match!";
      match = true;
    } else {
      document.getElementById("match").innerHTML = "no match, try again.";
      match = true;
    }
  } else {
    match = true;
  }
}

playGame();
