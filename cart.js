//function for adding product to shopping cart when clicking on add to cart
let carts = document.querySelectorAll('.index-btn-flex');

//variabel products //denna array kommer att lägga till de produkterna som användare väljer
let addedProductCards = []

for (let i = 0; i < carts.length; i++) {
  //denna ska läsa data från local storage som sparat cartItems 
  console.log("cartItems")
  const productList = localStorage.getItem("productList") //läser data direkt från localstorage 
  const products = JSON.parse(productList)
  carts[i].addEventListener('click', () => {
    //läsa specifikt valda produkter 
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

//function for saving cart when updating page //med cartNumber man ska via längden av returnerad localstorage array 
function cartNumbers(product) {
  setItems(product);
}


//function to see which item is being clicked to cart
function setItems(products) {

  let cartItems = localStorage.getItem('productsInCart');
  const existingData = JSON.parse(cartItems);

  addedProductCards.push(products)

  var cleanedData
  if (existingData) {

    cleanedData = existingData.concat(addedProductCards)

  } else {
    cleanedData = addedProductCards

  }

  localStorage.setItem("productsInCart", JSON.stringify(cleanedData));
  location.reload()

}


//function for loading the page and cart is still there (+ SHOWING NUMBER OF PRODUCTS IN CART??)
function LoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('#cart-wrapper span').textContent = productNumbers;

  }
}


// function for adding the price and see the total 
function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  console.log(cartCost)
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", Number(cartCost) + Number(product.price));
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

// // Quantity buttons
function increase_by_one(increase_by_one) {
  nr = parseInt(document.getElementById(increase_by_one).increase_by_one);
  document.getElementById(increase_by_one).value = nr + 1;
 }
  
 function decrease_by_one(decrease_by_one) {
  nr = parseInt(document.getElementById(decrease_by_one).decrease_by_one);
  if (nr > 0) {
    if( (nr - 1) > 0) {
      document.getElementById(decrease_by_one).value = nr - 1;
    }
  }
 } 



//function for seeing product card in shoppingcart

//vi ska läsa dessa från productsInCart 
//function for seeing product card in shoppingcart // FIXA SÅ VI  SER BILD OCH ALL KORREKT INFO
//this function should run as soon as we reload the page
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    cartItems.map(mappedItems => {
      productContainer.innerHTML += `
      <div class="products">
        
            <img src="${item.url}"/>
            <span>${item.name}</span>
      </div>
            <div class="price">${item.price} SEK</div>    
            <div class="quantity">
              <input id="qty1" type="text" value="1" name="qty" />
              <button id="increase" onclick="increase_by_one('qty1');">+</button>
              <span>${item.inCart}</span>
              <button id="decrease" onclick="decrease_by_one('qty1');" />-</button>
       <i class="far fa-trash-alt"></i>
                <img src="${mappedItems.url}"/> 
                <span>${mappedItems.name}</span>
            </div>
            <div class="price">${mappedItems.price} SEK</div>    
            <div class="quantity">
            <i class="fas fa-arrow-circle-left"></i>
            <span>${mappedItems.inCart}</span> 
            <i class="fas fa-arrow-alt-circle-right"></i>
            </div>
            <div class="total">
            ${mappedItems.inCart * mappedItems.price},00 
            </div>
            `;
    });

    //creates the total price in cart
    productContainer.innerHTML += `
    <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
            Basket Total
        </h4>
        <h4 class="basketTotal">
        ${cartCost} SEK
        </h4>
        `;

  }
}
//make an alert on checkoutbutton 
function clickAlert() {
  alert("CONGRATULATIONS, YOU SUCCESSFULLY MADE A PURCHASE!");
}

//calling functions 
LoadCartNumbers();
displayCart();
