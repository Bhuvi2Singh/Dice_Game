var randomNumber1 =Math.floor(1+(Math.random()*6));
console.log(randomNumber1);
var t="./images/dice"+randomNumber1+".png";
document.querySelector(".img1").getAttribute("src");
document.querySelector(".img1").setAttribute("src",t);

var randomNumber2 =Math.floor(1+(Math.random()*6));
var x="./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",x);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="player1 is winner";
} 
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="player2 is winner";
}
else{
    document.querySelector("h1").textContent="its a tie!!"
}