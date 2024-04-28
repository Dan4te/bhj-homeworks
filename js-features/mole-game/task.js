
let getHole = index => document.getElementById(`hole${index}`);
let deadMoles = document.getElementById("dead");
let lostMoles = document.getElementById("lost");
let win = deadMoles.textContent;
let lost = lostMoles.textContent;

function checkGame(deadMoles, lostMoles) {
    console.log(deadMoles, lostMoles);
    if(deadMoles === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lostMoles === 5) {
        alert("Вы проиграли!");
        location.reload();
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
