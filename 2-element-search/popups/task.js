let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');

function closeActiveModal() {
    const activeModal = document.querySelector('.modal.modal_active');
    if (activeModal) {
        activeModal.classList.remove('modal_active');
    }
}

function showModal(modal) {
    closeActiveModal();
    modal.classList.add('modal_active');
}

showModal(modalMain);

document.body.addEventListener('click', (event) => {
    //event.target — это элемент, на который фактически кликнули.
    //classList.contains('classname') — проверяет, есть ли у элемента указанный класс.
    if (event.target.classList.contains('modal__close')) {
        closeActiveModal();
    }
});

document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('show-success')) {
        event.preventDefault();
        showModal(modalSuccess)
    }
});