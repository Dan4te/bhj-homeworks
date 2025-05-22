// Находим все чекбоксы с классом interest__check
const allCheckboxes = document.querySelectorAll('.interest__check');

allCheckboxes.forEach(parentCheckbox => {
  // Для каждого чекбокса добавляем обработчик события изменения состояния
  parentCheckbox.addEventListener('change', function() {
    // Шаг 1: Сохраняем текущий чекбокс в переменную
    const currentCheckbox = this;

    // Шаг 2: Находим ближайший родительский элемент <li> с классом interest
    const parentLi = currentCheckbox.closest('li.interest');
    if (!parentLi) return; // Если не нашли, выходим

    // Шаг 3: Внутри этого <li> ищем вложенный список <ul> с классом interests_active
    const nestedList = parentLi.querySelector('ul.interests_active');
    if (!nestedList) return; // Если вложенного списка нет — выходим

    // Шаг 4: Находим все чекбоксы внутри вложенного списка
    const childCheckboxes = nestedList.querySelectorAll('.interest__check');

    // Шаг 5: Для каждого вложенного чекбокса устанавливаем checked равным состоянию родительского
    childCheckboxes.forEach(childCheckbox => {
      childCheckbox.checked = currentCheckbox.checked;
    });
  });
});
