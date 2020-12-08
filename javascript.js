//Read more button - product card
/*function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }*/

  //Load more products button

  /*function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }*/







// var newProductList = []; // Global array for new products   

// A function to add new products in admin.html
function addPrd() {

  var headline = document.querySelector("#headline").value; // Headline
  var prdName = document.querySelector("#prd-desp").value; // Product Description
  var prdPrice = document.querySelector("#price").value*1; // Product Price
  
  // declares and appends set image to news products list on admin.html
  var prdImage = document.createElement("img"); // declares and creates img element


  // VILL UPPDATERA IMG SRC NEDAN TILL SRC FRÅN UPPLADDAT FORMULÄR, MEN HUR?
  prdImage.src = "images/opi04.webp"; // sets image source


  document.querySelector(".admin-prd-list").appendChild(prdImage);
  console.log(prdImage)



  // appends data list (new products) on admin.html 
  var li = document.createElement("li"); // declares and creates li element
  li.innerText = headline + " " + prdName + " " + prdPrice; // chooses what data to put into li element 
  console.log(li)
  
  var ul = document.querySelector(".admin-prd-list"); // declares and choose pre-existing element from html  
  ul.appendChild(li); // appends JS-created li element to ul element in html

 

}






/*
// local storage js, loopa igenom - Rakib kommer gå igenom 

// Publish new products onto webshop/index.html 
function publishPrd() {

  // var prdImage
  var headline = document.querySelector("#headline").value; // Headline
  var prdName = document.querySelector("#prd-desp").value; // Product Description
  var prdPrice = document.querySelector("#price").value * 1; // Product Price

  // appends data list (new products) on index.html 
  var li = document.createElement("li");
  li.innerText = headline + " " + prdName + " " + prdPrice;
  var ul = document.querySelector(".index-prd-list");
  ul.appendChild(li); 

}
*/

//function for adding product to shopping cart 
var addToCartButtons = document.getElementsByClassName('index-btn-flex')
for (var i = 0; i < addToCartButtons.length; i++){
  var button = addToCartButtons[i]
  button.addEventListener('click', addToCartClicked)

}
//function for clicking on the button 
function addToCartClicked(event) {
  var button = event.target
  var card = button.parentElement.parentElement //id name and parent to product card
  var h3 = card.getElementByIdName('index-h3')[0].innerText //Title and the first product
  console.log(h3)
  
}
