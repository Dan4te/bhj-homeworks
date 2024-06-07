const progress = document.getElementById("progress");
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    sendForm(formData);
});

function sendForm(formData) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);

    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
        alert( 'Загружено на сервер');
        console.log(e);
    })

}  