const slides = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');

// Переменная для хранения индекса текущего активного слайда
let currentIndex = 0;

// Ищем слайд, у которого есть класс 'slider__item_active'
for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('slider__item_active')) {
        currentIndex = i; // Запоминаем индекс активного слайда
        // break; // Прекращаем поиск, так как нашли активный слайд
    }
}

// Функция для показа слайда по заданному индексу
function showSlide(index) {
// Убираем класс активности у текущего слайда
slides[currentIndex].classList.remove('slider__item_active');

// Проверяем, не вышли ли за границы массива слайдов
if (index < 0) {
    // Если индекс меньше 0, переключаемся на последний слайд (бесконечная навигация)
    currentIndex = slides.length - 1;
} else if (index >= slides.length) {
    // Если индекс больше или равен количеству слайдов, переключаемся на первый слайд
    currentIndex = 0;
} else {
    // Если индекс в пределах, просто обновляем currentIndex
    currentIndex = index;
}

// Добавляем класс активности новому слайду
slides[currentIndex].classList.add('slider__item_active');
}

// Обработчик клика по кнопке "влево"
prevBtn.addEventListener('click', function() {
    // Показываем предыдущий слайд (индекс уменьшается на 1)
    showSlide(currentIndex - 1);
});

// Обработчик клика по кнопке "вправо"
nextBtn.addEventListener('click', function() {
    // Показываем следующий слайд (индекс увеличивается на 1)
    showSlide(currentIndex + 1);
});