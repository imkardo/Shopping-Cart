let productsContainer = document.querySelector("#products");

function showAllProducts() {
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML += ` <div class="product-item">
  <div class="product-image"><img src="` + products[i].imgSrc + `" alt="shoes"></div>
  <div class="product-title">`+ products[i].name +`</div>
  <div class="product-instock">تعداد موجود : `+ products[i].instock +`</div>
  <div class="product-data">
      <div class="product-price">`+ products[i].price +`</div>
      <div class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i></div>
  </div>
</div>`;
  }
}

showAllProducts();
