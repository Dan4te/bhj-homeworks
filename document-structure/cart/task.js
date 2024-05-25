const cartProduct = document.querySelector('.cart__products');
const productControl = document.querySelectorAll('.product__quantity-control');
const productAdd = document.querySelectorAll('.product__add');

for (let item of productControl) {
    item.addEventListener('click', changeValue);
}

for (let item of productAdd) {
    item.addEventListener('click', addToCard);
}

function changeValue(event) {
    let value = event.target.parentNode.querySelector('.product__quantity-value') 
    let count = +value.innerText;

    if (event.target.classList.contains('product__quantity-control_inc')) {
        value.innerText = Number(value.innerText) + 1;
    } else {
        if (count > 1) {
            value.innerText = Number(value.innerText) - 1;
        }
    }
}

function  addToCard(event) {
    const product = event.target.closest('.product');
    const id = product.dataset.id;
    const countFromProduct = +event.target.parentNode.querySelector('.product__quantity-value').innerText;

    for (let item of cartProduct.children) {
        if (item.dataset.id === id) {
            let productCount = item.querySelector('.cart__product-count');
            let total = +productCount.innerText;
            productCount.innerText = total + countFromProduct;
            return false;
        }
    }

    const productImg = product.querySelector('.product__image').src;
    const count = product.querySelector('.product__quantity-value').innerText;

    const productToCart = `<div class="cart__product" data-id="${id}">
    <img class="cart__product-image" src="${productImg}">
    <div class="cart__product-count">${count}</div>
    </div>`;

    cartProduct.insertAdjacentHTML('beforeend', productToCart);
}
