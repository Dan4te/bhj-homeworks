const dValue = document.querySelector('.dropdown__value');
const dList = document.querySelector('.dropdown__list');
const dItem = document.querySelectorAll('.dropdown__item');

dValue.addEventListener('click', () => {
    dList.classList.toggle(('dropdown__list_active'))
});

dItem.forEach((item) => {
item.addEventListener('click', function(event) {
    dValue.textContent = item.textContent;
    dList.classList.remove('dropdown__list_active');
    event.preventDefault();
})
})