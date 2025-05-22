const cartProducts = document.querySelector('.cart__products');
const productControls = document.querySelectorAll('.product__quantity-control');
const productAddButtons = document.querySelectorAll('.product__add');

productControls.forEach(control => {
    control.addEventListener('click', (event) => {
        const quantityValue = event.target.parentNode.querySelector('.product__quantity-value');
        let count = +quantityValue.innerText;

        if (event.target.classList.contains('product__quantity-control_inc')) {
            quantityValue.innerText = count + 1;
        } else if (count > 0) {
            quantityValue.innerText = count - 1;
        }
    });
});

productAddButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const procuct = event.target.closest('.product');
    })
})