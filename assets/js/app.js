//global variables
var minValue = 1;
var max = 10;
var level = 1;
var randomNumber;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}


function gameStart() {
    document.getElementById('gameStart-items').style.display = "none";
    document.getElementById('btn_gameStart').style.display = "none";
    document.getElementById('text').style.display = "block";
    delay(1000).then(() => 
     { 
     document.getElementById('inputBox').style.display = "block";
     document.getElementById('btn_gameStart').style.display = "block"
     document.getElementById('text').style.display = "none";
     });

}
function getRandomNumber() {
    /*Umut Tosun*/
    minValue *= 10;
    level++;
    max = 1;
    document.getElementById('text').innerText = Math.floor(Math.random() * ((max - 1) - minValue)) + minValue;
    for (var i = 1; i <= level; i++)  max = max * 10;
    return Math.floor(Math.random() * ((max - 2) - minValue)) + minValue;
}
function gameOver() {
    /*Adem Eraslan
    https://humanbenchmark.com/tests/number-memory burdaki mantıgın aynısı yapılıcak
    */
}
function getResult(input) {
    /*Onur Işık*/
}
function restartGame() {
    /*Can Tarakçı*/
}
function nextLevel() {
    /*Umut Tosun*/
}
