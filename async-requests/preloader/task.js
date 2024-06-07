const valuteContainer = document.getElementById('items');
const loader = document.getElementById('loader');
let valute;

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.toggle('loader_active');
        valute = JSON.parse(xhr.responseText);
        Object.keys(valute.response.Valute).forEach(element => {
            valuteContainer.insertAdjacentHTML("afterbegin",
            `<div class="item">
            <div class="item__code">${valute.response.Valute[element].CharCode}</div>
            <div class="item__value">${valute.response.Valute[element].Value}</div>
            <div class="item__currency">руб.</div>
            </div>`);
        })
    }

})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
