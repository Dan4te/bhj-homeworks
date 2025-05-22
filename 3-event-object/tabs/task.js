const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

tab.forEach((element, index) => {
    element.addEventListener('click', () => {
        deleteActive();
        tab[index].classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');
    })
});

function deleteActive() {
    tab.forEach(element => {
        element.classList.remove('tab_active');
    });

    tabContent.forEach(element => {
        element.classList.remove('tab__content_active');
    })
}