const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

window.addEventListener('load', () => {
  if (getCookie('modal') === 'close') {
    modal.classList.remove('modal_active');
  } else {
    modal.classList.add('modal_active');
  }
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  setCookie('modal', 'close');
})

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
  let pairs = document.cookie.split('; ');
  const cookie = pairs.find(p => p.startsWith(name + '='))
  return cookie.substr(name.length + 1)
}