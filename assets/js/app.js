//global variables
var minValue = 1;
var max=10;
var level = 1;
var randomNumber;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function gameStart() {
    document.getElementById('gameStart-items').style.display = "none";
    document.getElementById('btn_gameStart').style.display = "none";
    document.getElementById('text').style.display = "block";

    getRandomNumber();

    delay(1000).then(() => 
     { 
     document.getElementById('inputBox').style.display = "block";
     document.getElementById('nextLevel').style.display = "block"
     document.getElementById('text').style.display = "none";
   
     });

}
function getRandomNumber() {
    /*Umut Tosun*/ 
    max=1; 
    for (var i = 1; i <= level; i++)  max = max * 10;
    randomNumber=Math.floor(Math.random() * ((max - 1) - minValue)) + minValue;
    document.getElementById('text').innerText = randomNumber; 
    level++;
    minValue *= 10;
    
}
  
function gameOver() {
document.getElementById('inputBox').style.display = "none";
document.getElementById('nextLevel').style.display = "none";
document.getElementById('gameover').style.display = "block";
document.getElementById('kaydet').style.display = "inline";
document.getElementById('GameOver--P').style.display = "block";
document.getElementById('tekrar').style.display = "inline";
console.log(test);
  
  }

function getResult(input) {
    console.log(input);
    console.log(randomNumber);
   if(input==randomNumber) return true;
   else return false;
}
function restartGame() {
    /*Onur Işık*/
    /* ilk sahne tekrardan gelicek
    oyunu başlat butonu aktif olucak 
    oyun üzerindeki yazılar aktif olucak
    diğer herşey pasif olucak [ input next level vs vs]*/
    document.getElementById('gameStart-items').style.display = "block";
    document.getElementById('btn_gameStart').style.display = "block";
    document.getElementById('kaydet').style.display = "none";
    document.getElementById('GameOver--P').style.display = "none";
    document.getElementById('tekrar').style.display = "none";
    minValue = 1;
    max=10;
    level = 1;


}
function nextLevel() {
    /*Umut Tosun*/
    
    var input=document.getElementById('input').value;
    document.getElementById('input').value="";
    var bool=getResult(input);  
    console.log(bool);
    if(bool==true)
    {
    document.getElementById('gameStart-items').style.display = "none";
    document.getElementById('btn_gameStart').style.display = "none";
    document.getElementById('text').style.display = "block";
    document.getElementById('inputBox').style.display = "none";
    document.getElementById('nextLevel').style.display = "none"
    getRandomNumber();

    delay(1000).then(() => 
     { 
     
     document.getElementById('inputBox').style.display = "block";
     document.getElementById('nextLevel').style.display = "block"
     document.getElementById('text').style.display = "none";
   
     });
    }
    else gameOver();
    

}
