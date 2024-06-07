const buttons = document.getElementsByClassName("poll__answer");
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let answer = JSON.parse(xhr.responseText);
        pollTitle.textContent = answer.data.title;
        Array.from(answer.data.answers).forEach(element => {
            pollAnswers.insertAdjacentHTML("afterBegin", `<button class="poll__answer">${element}</button>`)
        })

        for (let btn of buttons) {
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
            })
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
