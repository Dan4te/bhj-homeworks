const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // nextElementSibling — следующий соседний элемент (игнорирует текстовые пробелы)
    const subMenu = this.nextElementSibling;

    if (subMenu && subMenu.classList.contains('menu_sub')) {
      event.preventDefault();
      subMenu.classList.toggle('menu_active');
    }
  });
});
