//function for adding product to shopping cart when clicking on add to cart
let carts = document.querySelectorAll('.index-btn-flex');
//variabel products
//denna array kommer att läga till de produkterna som användare väljer
let addedProductCards = []
//byt ut denna arrayen mot den övre
//let products = []

for (let i=0; i < carts.length; i++) {
  //denna ska läsa data från localstorgge som sparat cartItems 
  console.log("cartItems")
  const productList = localStorage.getItem("productList")//läser data direkt från localstorage 
  const products = JSON.parse(productList)
  carts[i].addEventListener('click', ()=> {
    //läsa specifikt valda produkter 
    cartNumbers(products[i]);
    console.log("cartItems, lop")
    totalCost(products[i]);
    
    })
}
//function for saving cart when updating page
//med cartNumber man ska via längden av retunerad localstorage array 
function cartNumbers(product){

 setItems(product);
}

//function to see which item is being clicked to cart
function setItems(products) {
  let cartItems = localStorage.getItem('productsInCart');
  //cartItems = JSON.parse(cartItems);
  const existingData = JSON.parse(cartItems);
  //här ska vi göra existing data/rensa datan om det finns ska vi göra concat 
  //LÄGG DET UNDER HÄR, KÖR SAMMA CONCAT SOM VI HAR UNDER ADMIN 
  addedProductCards.push(products)
   

  var cleanedData 
  if (existingData) {
     cleanedData = existingData.concat(addedProductCards)
    
  
  }else {
    cleanedData = addedProductCards
  
  }
 
      
      console.log(cleanedData)
  
      localStorage.setItem("productsInCart", JSON.stringify(cleanedData));
   location.reload()
  }
  
  

  // if (cartItems != null) {

  //   if (cartItems[product.tag] == undefined) {
  //     cartItems = {
  //       ...cartItems,
  //       [product.tag]: product

  //     }
  //   }

  //   cartItems[product.tag].inCart += 1;

  // } else {
  //   product.inCart = 1;
  //   cartItems = {
  //     [product.tag]: product

  //   }
  // }
  //products.push(cartItems)
 // localStorage.setItem("productsInCart", JSON.stringify(product));
//}

//function for loading the page and cart is still there
function LoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('#cart-wrapper span').textContent = productNumbers;

  }
}

//FIXA DENNA MED 
// function for adding the price and see the total 
function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  console.log(cartCost)
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost",  Number(cartCost) + Number(product.price));
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
//vi ska läsa dessa från productsInCart FIXA DET
//function for seeing product card in shoppingcart
//this function should run as soon as we reload the page
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost');
  //console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
   cartItems.map(item => {
      productContainer.innerHTML += `
      <div class="products">
       <i class="far fa-trash-alt"></i>
                <img src="${item.url}"/> 
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price} SEK</div>    
            <div class="quantity">
            <i class="fas fa-arrow-circle-left"></i>
            <span>${item.inCart}</span> 
            <i class="fas fa-arrow-alt-circle-right"></i>
            </div>
            <div class="total">
            ${item.inCart * item.price},00 
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
  alert("CONGRATULATIONS, YOU SUCCESSED THE PURCHASE!");
}

//calling functions 
LoadCartNumbers();
displayCart();
