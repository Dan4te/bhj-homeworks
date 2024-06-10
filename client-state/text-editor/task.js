const editor = document.getElementById('editor');
const but = document.querySelector('.but')

document.addEventListener('keyup', () => {
  localStorage.setItem('text', editor.value);
})

window.addEventListener('load', () => {
  editor.value = localStorage.getItem('text');
})

but.addEventListener('click', () => {
  editor.value = '';
  localStorage.setItem('text', editor.value);
})