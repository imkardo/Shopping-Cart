let productsContainer = document.querySelector("#products");
let cartHeader = document.querySelector(".cart-header");
let cartContainer = document.querySelector(".cart");

function showAllProducts() {
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML +=
      ` <div class="product-item">
  <div class="product-image"><img src="` +
      products[i].imgSrc +
      `" alt="shoes"></div>
  <div class="product-title">` +
      products[i].name +
      `</div>
  <div class="product-instock">تعداد موجود : ` +
      products[i].instock +
      `</div>
  <div class="product-data">
      <div class="product-price">` +
      products[i].price +
      `</div>
      <div class="add-to-cart" onclick="addToCart( ` +
      products[i].id +
      ` )"><i class="fa-solid fa-cart-shopping"></i></div>
  </div>
</div>`;
  }
}
showAllProducts();

let n = 0;
cartHeader.addEventListener("click", function () {
  if (n == 0) {
    cartContainer.style.bottom = "0px"; // Show Cart
    n++;
  } else {
    cartContainer.style.bottom = "-330px"; // Hide Cart
    n = 0;
  }
});

// Cart Array
let cart = [];

// add to cart function

function addToCart(id) {
  let item = products.find(function (p) {
    return p.id == id;
  });

  cart.push(item);
  console.log(cart);
}
