//for player1.
// getting number from 1-6.
var randomNumber1 = Math.floor(Math.random()*6) +1;

// dice1 - dice6.
var ranadomDiceImage = "dice" + randomNumber1 + ".png";

//images/dice1.png  =images/dice6,png.
var randomImageSource1 = "images/" + ranadomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);


//for player2.
// getting number from 1-6.
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


//changing the heading text.
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " Player2 Wins! 🚩"
}
else{
    document.querySelector("h1").innerHTML = " Draw!";
}