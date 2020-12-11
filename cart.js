//function for adding product to shopping cart when clicking on add to cart
let carts = document.querySelectorAll('.index-btn-flex');
//variabel products
let products = [
  {
    name: 'Essie Nail Lacquer',
    tag: '61 Russian Roulette',
    price: 149,
    inCart: 0,
    //url: 0, add img??

  },
  {
    name: 'Essie Nail Lacquer',
    tag: '61 Russian Roulette',
    price: 149,
    inCart: 0,

  },
  {
    name: 'Essie Nail Lacquer',
    tag: '017 Black Is Back',
    price: 149,
    inCart: 0,
  },
  {
    name: 'Essie Nail Lacquer',
    tag: '42 Lady Like',
    price: 149,
    inCart: 0,
  },
  {
    name: 'Essie Nail Lacquer',
    tag: '43 Angora Cardi',
    price: 149,
    inCart: 0,
  },
  {
    name: 'Essie Nail Lacquer',
    tag: '02 Green Shadow',
    price: 149,
    inCart: 0,
  }
]

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', ()=> {
    cartNumbers(products[i]);
    totalCost(products[i]);
    })
}
//function for saving cart when updating page
function cartNumbers(product){
  let productNumbers = localStorage.getItem('cartNumbers');
   //converting a string into a number 
  productNumbers = parseInt(productNumbers);
  
 if(productNumbers){
  localStorage.setItem('cartNumbers', productNumbers + 1);
  document.querySelector('#cart-wrapper span').textContent = productNumbers + 1;
 } else {
  localStorage.setItem('cartNumbers', 1);
  document.querySelector('#cart-wrapper span').textContent = 1;
 }
 setItems(product);
}

//function to see wich item is being clicked to cart
function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);


  if (cartItems != null) {

    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product

      }
    }

    cartItems[product.tag].inCart += 1;

  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product

    }
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
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
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
//function for seeing product card in shoppingcart
//this function should run as soon as we reload the page
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost');
  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="products">
       <i class="far fa-trash-alt"></i>
                <img src="images/${item.tag}.jpg"/>
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
