const dList = document.querySelector('.dropdown__list');
const dValue = document.querySelector('.dropdown__value');
const dItem = Array.from(document.querySelectorAll('.dropdown__item'));

dValue.addEventListener('click', () => {
    dList.classList.toggle('dropdown__list_active');
});

dItem.forEach((element) => {
    element.addEventListener('click', function(event) {
        dValue.textContent = element.textContent;
        dList.classList.remove('dropdown__list_active');
        event.preventDefault();
    })
})