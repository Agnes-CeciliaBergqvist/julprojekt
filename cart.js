
// Function for adding product to shopping cart when clicking on "add to cart"
let carts = document.querySelectorAll('.index-btn-flex');

// Variabel products
// This array will add the products that the user chose 
let addedProductCards = []

// Loop for evevry click to add the products to cart 
for (let i = 0; i < carts.length; i++) {
  console.log("cartItems")
  const productList = localStorage.getItem("productList") // Reads data directly fråm LocalStoragel
  const products = JSON.parse(productList)
  carts[i].addEventListener('click', () => {
    // Reads specific choosen products
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

// Function for adding product to cart so you can see numbers and adding the products to cart page
function cartNumbers(products) {
  setItems(products);
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('#cart-wrapper span').textContent = productNumbers + 1;

  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('#cart-wrapper span').textContent = 1;
  }
}


// Function to see which item is being clicked to cart
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


// Function for loading the page and cart is still there 
function LoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('#cart-wrapper span').textContent = productNumbers;

  }
}


// Function for adding the price and see the total 
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


// Function for seeing product card in shoppingcart read from LocalStorage 
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
            <img class="cart-card-img" src="images/essie01.webp" alt="essie nail polish">
      </div>
            <span>${mappedItems.name}</span>
            <div class="price">${mappedItems.price} SEK</div>
            <span>${mappedItems.inCart}</span>
           </div>
            `;
    });

    // Creates the total price in cart
    productContainer.innerHTML += `
    <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
            Basket Total
        </h4>
        <h4 class="basketTotal">
        ${cartCost} SEK
        </h4>
        `;
  }}


// Variabels for popup modal on "checkout button"
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// AddEventListener for open modal
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

// AddEventListener for close modal
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal') // Removes the closest child to modal  
    closeModal(modal)
  })
})

// Function for opening the modal when clicking on button
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

// Function for closing the modual on the "X"
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// Calling function LoadCartNumbers and displayCart or they wont run 
LoadCartNumbers();
displayCart();