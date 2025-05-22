let rotatorCase = document.querySelector('.rotator');
let i = 0;

function addText() {
    // Убираем класс у текущего активного элемента
    rotatorCase.children[i].classList.remove('rotator__case_active');
    
    // Увеличиваем индекс, если дошли до конца — возвращаемся в начало
    i = (i + 1) % rotatorCase.children.length;
    
    // Добавляем класс активному элементу по новому индексу
    rotatorCase.children[i].classList.add('rotator__case_active');
}

const intervalID = setInterval(addText, 1000);
