//global variables
var minValue = 1;
var max = 10;
var level = 1;
var randomNumber;

function gameStart() {
/*Muhammet Çelikçi
1-) Bu fonksiyon çalıştıgı zaman başlat panelindeki kısımlar gizlenecektir.
2-) Kullanıcının sayı girmesi için önceden hazırlanmış input ekrana gelicektir
3-) Onayla diye bir buton olucaktır
4-) Üst kısımda bilgiler olucaktır
*/
}
function getRandomNumber() {
    /*Umut Tosun*/
    minValue *= 10;
    level++;
    max = 1;
    document.getElementById('text').innerText=Math.floor(Math.random() * ((max - 1) - minValue)) + minValue;
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
function restartGame(){
    /*Can Tarakçı*/
}
function nextLevel(){
    /*Umut Tosun*/
}
