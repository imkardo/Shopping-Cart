let productsContainer = document.querySelector("#products");
let cartHeader = document.querySelector(".cart-header");
let cartContainer = document.querySelector(".cart");
let cartItems = document.querySelector(".cart-items");
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
  console.log(item);
  item.numberOfUnits = 1;
  cart.push(item);
  renderCartItems();
}

// Render Cart Items
function renderCartItems() {
  cartItems.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartItems.innerHTML +=
      `  <li class="cart-item">
    <div class="p-name">` +
      cart[i].name +
      `</div>
    <div class="p-price">` +
      cart[i].price +
      `</div>
      <div class="p-unit">
        <span class="plus" onclick="changeNumberOfUnits('plus' , ` +
      cart[i].id +
      `)"><i class="fa-solid fa-plus"></i></span>
        <span class="unit">`+ cart[i].numberOfUnits +`</span>
        <span class="minus" onclick="changeNumberOfUnits('minus' , ` +
      cart[i].id +
      `)"><i class="fa-solid fa-minus"></i></span>

      </div>
   
    </li>`;
  }
}

// change number of units
function changeNumberOfUnits(action, id) {
  // console.log(action + " - " + id);
  cart = cart.map(function (item) {
    let oldNumberOfUnits = item.numberOfUnits;
    if (item.id == id) {
      if (action == "plus" && oldNumberOfUnits < item.instock) {
        oldNumberOfUnits++;
      } else if (action == "minus" && oldNumberOfUnits > 1) {
        oldNumberOfUnits--;
      }
    }

    item.numberOfUnits = oldNumberOfUnits;
    return item;
  });
  renderCartItems();
}
