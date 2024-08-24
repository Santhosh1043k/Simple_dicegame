var randomNum = Math.floor(Math.random() * 6) + 1;
var imageSource = "images/dice" + randomNum + ".png";
document.querySelectorAll("img")["0"].setAttribute("src" ,imageSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")["1"].setAttribute("src" ,imageSource2);

if( randomNum > randomNum2){
    document.querySelector("h1").innerHTML = "🏆 Player 1️⃣ Wins 💥"
}
else if( randomNum < randomNum2){
    document.querySelector("h1").innerHTML = "🏆 Player 2️⃣ Wins 💥"
}
else{
    document.querySelector("h1").innerHTML = "🫂 Match Draw 💥"
}