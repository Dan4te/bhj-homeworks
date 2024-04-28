let clicker = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");
image.onclick = clickerCounter;

let compress = function() {
    image.width = 200;
}

function clickerCounter() {
    clicker.textContent++;
    image.width = 400;
    setTimeout(compress, 100);
}


