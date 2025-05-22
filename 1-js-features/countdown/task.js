let time = 59;
let timer = document.getElementById("timer");

function formatTime(t) {
    let hours = Math.floor(t / 3600);
    let minutes = Math.floor((t % 3600) / 60);
    let seconds = t % 60;

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return hours + ':' + minutes + ':' + seconds;
}

let counter = setInterval(() => {
    time--;
    timer.textContent = formatTime(time);

    if (time === 0) {
        clearInterval(counter);
        alert("Вы победили в конкурсе!");
    }
}, 1000);