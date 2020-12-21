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

//function for adding product to cart so you can see numbers and adding the products to cart page
function cartNumbers(products) { 
  setItems(products);
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if (productNumbers ) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('#cart-wrapper span').textContent = productNumbers +1; 

  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('#cart-wrapper span').textContent = 1;
  }
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


//function for loading the page and cart is still there 
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

// Quantity buttons
function operate(val){
  if(val == "add"){
     var val = document.getElementById('qty1').value;
     val++;
     document.getElementById('qty1').value = val;
  } else{
      var val = document.getElementById('qty1').value;
      val--;
      document.getElementById('qty1').value = val;
  }
 }

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
        
            <img src="${mappedItems.url}"/>
            <span>${mappedItems.name}</span>
      </div>
            <div class="price">${mappedItems.price} SEK</div>

            <div class="quantity">

              <input type="text" name="qty" value="1" id="qty1">
              <input type="button" value="+" onclick="operate('add')">
              <span>${mappedItems.inCart}</span>
              <input type="button" value="-" onclick="operate('dec')">
             
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
