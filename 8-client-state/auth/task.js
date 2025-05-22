const signin = document.querySelector('.signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const user = welcome.querySelector('span');

form.addEventListener('submit', (event) => {
 event.preventDefault();
 const formData = new FormData(form);
 const xhr = new XMLHttpRequest();
 xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
 xhr.responseType = 'json';
 xhr.send(formData);
 xhr.onload = () => {
    if (xhr.response.success) {
        localStorage.setItem('userId', xhr.response.user_id);
        userWelcome();
        form.reset();
    } else {
        alert('Неверный логин/пароль');
    }
 }
})

window.addEventListener('load', () => {
    localStorage.getItem('userId') ? userWelcome() : false;
})

function userWelcome() {
    signin.classList.remove('signin_active');
    user.textContent = localStorage.getItem('userId');
    welcome.classList.add('welcome_active');
}
