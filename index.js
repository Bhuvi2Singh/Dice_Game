var randomNumber1 = Math.floor(1 + (Math.random() * 6));
var t = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", t);

var randomNumber2 = Math.floor(1 + (Math.random() * 6));
var x = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", x);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 is the winner!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 is the winner!";
} else {
    document.querySelector("h1").textContent = "It's a tie!";
}

document.querySelector(".refresh-button").addEventListener("click", function() {
    location.reload();
});
