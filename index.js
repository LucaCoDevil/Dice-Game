//DECLARE

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

checkWinner(randomNumber1, randomNumber2);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

function checkWinner(player1, player2) {
    if (player1 > player2) {
        document.querySelector("h1").textContent = "PLAYER 1 WINS!!!";
    } else if (player1 < player2) {
        document.querySelector("h1").textContent = "PLAYER 2 WINS!!!";
    } else if (player1 === player2) {
        document.querySelector("h1").textContent = "DRAW!!!";
    }
}