const progress = document.getElementById("progress");
const button = document.querySelector('#send');

function upload(file) {

    function onClick() {
        let xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function (event) {
            progress.value = event.loaded / event.total;
            console.log(event.loaded);
        };
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
        xhr.send(file);
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();
        onClick()
    })
}
