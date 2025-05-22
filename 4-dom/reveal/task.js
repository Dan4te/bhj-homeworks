let reveal = document.querySelectorAll('.reveal');

function revalSroll() {
    reveal.forEach(element => {
        let revealTop = element.getBoundingClientRect().top;
        let revealBottom = element.getBoundingClientRect().bottom;

        if (revealTop > 0 && revealBottom < window.innerHeight) {
            // Свойство возвращает высоту области содержимого окна браузера
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}
window.addEventListener('scroll', revalSroll);