console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  let winsMedia = [
    [0, 1, 2, 5, 10, 0],
    [3, 4, 5, 5, 30, 0],
    [6, 7, 8, 5, 50, 0],
    [0, 3, 6, -16, 30, 90],
    [1, 4, 7, 4, 30, 90],
    [2, 5, 8, 24, 30, 90],
    [0, 4, 8, -2, 29, 45],
    [2, 4, 6, -2, 29, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameover = true;
      gameover.play();
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "52vw";
      console.log(e[3], e[4]);
    }
  });

  var x = window.matchMedia("(max-width: 950px)");
  const media = (x) => {
    if (x.matches) {
      winsMedia.forEach((e) => {
        if (
          boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
          boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
          boxtext[e[0]].innerText !== ""
        ) {
          document.querySelector(".info").innerText =
            boxtext[e[0]].innerText + " Won";
          isgameover = true;
          gameover.play();
          document
            .querySelector(".imgbox")
            .getElementsByTagName("img")[0].style.width = "200px";
          document.querySelector(
            ".line"
          ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
          console.log(e[3], e[4]);
          if (e[3] === -2) {
            document.querySelector(".line").style.width = "65vw";
          } else {
            document.querySelector(".line").style.width = "52vw";
          }
        }
      });
    }
  };
  media(x);
};

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;

  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
