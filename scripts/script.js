let productsContainer = document.querySelector("#products");
let cartHeader = document.querySelector(".cart-header");
let cart = document.querySelector(".cart");

function showAllProducts() {
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML += ` <div class="product-item">
  <div class="product-image"><img src="` + products[i].imgSrc + `" alt="shoes"></div>
  <div class="product-title">`+ products[i].name +`</div>
  <div class="product-instock">تعداد موجود : `+ products[i].instock +`</div>
  <div class="product-data">
      <div class="product-price">`+ products[i].price +`</div>
      <div class="add-to-cart" onclick="addToCart( `+ products[i].id +` )"><i class="fa-solid fa-cart-shopping"></i></div>
  </div>
</div>`;
  }
}
showAllProducts();

let n = 0;
cartHeader.addEventListener('click',function(){
  if(n==0){
    cart.style.bottom = '0';
    n++;
  }else{
    cart.style.bottom = '-329px';
    n = 0;
  }

});

// add to cart function

function addToCart(id){
  console.log("product " + id + ' added to cart')
}