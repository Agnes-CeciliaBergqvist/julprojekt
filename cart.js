//function for adding product to shopping cart when clicking on add to cart
let carts = document.querySelectorAll('.index-btn-flex');
//variabel products
let products = [
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '61 Russian Roulette',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/essie01.webp"

  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '61 Russian Roulette',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/essie02.webp"

  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '017 Black Is Back',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/essie03.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '42 Lady Like',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/essie04.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '43 Angora Cardi',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/essie05.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '02 Green Shadow',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/essie06.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: 'In The Time Zone',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/express01.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: 'Binge-Worthy',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/express02.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: 'Scoot Scoot',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/express03.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: 'Get A Mauve On',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/express04.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: 'Now Or Never',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/express05.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: 'Dont Hate, Curate',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/express06.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '06 Seen In Aber',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi01.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '013 Loch-smith',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi02.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '05 Gone Plaid',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi03.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '03 Edinburgh-er',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi04.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '019 That Glas-glow',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi05.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '09 Nice set of Pipes',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi06.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '015 Im a Natural',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi07.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '017 Love or Lust-er?',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi08.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '04 Glisten Carefully!',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi09.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '08 Baroque Pearls',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi10.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '013 Olive for Pearls',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi11.webp"
  // },
  // {
  //   name: 'Essie Nail Lacquer',
  //   tag: '01 Full of Abalone',
  //   price: 149,
  //   inCart: 0,
  //   url: "images/opi12.webp"
  // },
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

//function to see which item is being clicked to cart
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
  //console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
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
