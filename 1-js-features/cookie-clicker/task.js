let clicker = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");

image.onclick = clickerCounter;

let click = function() {
    image.width = 200;
}

function clickerCounter() {
    clicker.textContent++;
    image.width = 300;
    setTimeout(click, 100);
}

