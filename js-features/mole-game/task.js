
let getHole = index => document.getElementById(`hole${index}`);
const deadMoles = document.getElementById("dead");
const lostMoles = document.getElementById("lost");
let win = deadMoles.textContent;
let lost = lostMoles.textContent;


function checkGame(deadMoles, lostMoles) {
    console.log(deadMoles, lostMoles);
    if(deadMoles === 10) {
        alert("Вы победили!");
        win = 0;
        lost = 0;

    } else if (lostMoles === 5) {
        alert("Вы проиграли!");
        lost = 0;
        win = 0;
    }
}

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = function() {
        if(this.classList.contains('hole_has-mole')) {
            win++;
            deadMoles.textContent = win;
        } else {
            lost++;
            lostMoles.textContent = lost;
        }
     checkGame(win, lost); 
    }
}
