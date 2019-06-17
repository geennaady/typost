var loc1 = 3;
var loc2 = 4;
var loc3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk==false) {
    guess = prompt("Choose a number from 0-6 and ready, aim, fire!");
    if (guess<0 || guess>6) {
        alert("FUCKING RETARD! ENTER A VALID CELL NUMBER, STUPID CUNT!");
    } else {
        guesses++;
    }
    if (guess == loc1 || guess == loc2 || guess == loc3) {
        alert("HIT!");
        hits++;
        if (hits==3) {
            isSunk=true;
            alert("You are cojones with REALLY BIG cojones, amigo!");
        }
    }
        else {
            alert("YOU ARE MISS, PATHETIC CUNT!")
        }
    }

var stats = "You took " +guesses+ " guesses to sink the battleship, " + 
"which means your shooting accuracy was " +(3/guesses)+ "%";
alert(stats);
// Список багов:
// При вводе неверного числа, после сообщения ошибки браузер выдает сообщение о промахе
// При вводе одинакового числа, собирается 3 hits и корабль тонет, хотя это не правильно
// Непонятно каким-то образом при тесте мне выдало что у меня было 697 попыток, хотя их было 5-6
// При нажатии Отмена выдает сообщение об промахе
