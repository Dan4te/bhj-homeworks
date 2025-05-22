let deadMoles = document.getElementById("dead");
let lostMoles = document.getElementById("lost");

let getHole = index => document.getElementById(`hole${index}`);

let win = 0;
let lost = 0;

function checkGame() {
    if (dead >= 10) {
        alert("Вы прбедили!");
        resetStats();
    } else if (lost >= 5) {
        alert("Вы проиграли!");
        resetStats();
    }
}

function resetStats() {
    win = 0;
    lost = 0; 
    deadMoles.textContent = win;
    lostMoles.textContent = lost;
}

for (let i = 1; i <= 9 ; i++) {
    getHole(i).onclick = function() {
        if (this.classList.contains('hole_has-mole')) {
            win++
            deadMoles.textContent = win;
        } else {
            lost++;
            lostMoles.textContent = lost;
        }
        checkGame();
    };
}
