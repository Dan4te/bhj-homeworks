const bookContent = document.querySelector('.book__content');
const fontSizeButtons = document.querySelectorAll('.font-size');

fontSizeButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    // Убираем активный класс у всех кнопок
    fontSizeButtons.forEach(btn => btn.classList.remove('font-size_active'));

    // Добавляем активный класс к текущей кнопке
    button.classList.add('font-size_active');

    // Сбрасываем классы размера шрифта у bookContent
    bookContent.classList.remove('font-size_small', 'font-size_big');

    // Если у кнопки есть класс font-size_small или font-size_big — добавляем его к bookContent
    if (button.classList.contains('font-size_small')) {
      bookContent.classList.add('font-size_small');
    } else if (button.classList.contains('font-size_big')) {
      bookContent.classList.add('font-size_big');
    }
  });
});
