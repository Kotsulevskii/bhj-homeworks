let dec = [...document.querySelectorAll('div.product__quantity-control_dec')];
let inc = [...document.querySelectorAll('div.product__quantity-control_inc')];
let value = [...document.querySelectorAll('div.product__quantity-value')];
let productAdd = [...document.querySelectorAll('div.product__add')];
let cartProducts = document.querySelector('div.cart__products');
let product = [...document.querySelectorAll('div.product')];
let productImage = [...document.querySelectorAll('img.product__image')];

for (let i = 0; i < dec.length; i++) {

//кнопки уменьшения и увеличения количества товаров
  dec[i].addEventListener('click', () => {
    if (Number(value[i].textContent) > 1) {
      value[i].textContent = Number(value[i].textContent) - 1;
    }
  });
  inc[i].addEventListener('click', () => {
    value[i].textContent = Number(value[i].textContent) + 1;
  });
  productAdd[i].addEventListener('click', () => {
      let productCard = [...document.querySelectorAll('div.cart__product')];
    //проверка наличия товара в корзине и перезапись количества
    if (productCard.find((x) => x.dataset.id === product[i].dataset.id)) {
      for (let j = 0; j < productCard.length; j++) {
        if (productCard[j].dataset.id === product[i].dataset.id) {
          let productCount = productCard[j].querySelector('div.cart__product-count');
          let newProductCount = productCount;
          newProductCount.textContent = Number(productCount.textContent) + Number(value[i].textContent);
          productCard[j].replaceChild(newProductCount, productCount);
        }
      }
    } else {
    //добавление товара в корзину
      cartProducts.innerHTML += `<div class="cart__product" data-id='${product[i].dataset.id}'>
        <img class="cart__product-image" src=${productImage[i].src} />
        <div class="cart__product-count">${value[i].textContent}</div>
      </div>`;
    }
  });
}