//Read more button - product card
function myFunction() {
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
  }


var newProductList = []; // Global array for new products   


// Creating a function to add new products in admin.html

function addPrd() {

  // var prdImage
  var headline = document.querySelector("#headline").value; // Headline
  var prdName = document.querySelector("#prd-desp").value; // Product Description
  var prdPrice = document.querySelector("#price").value*1; // Product Price

  // appends data list (new products) on admin.html 
  var li = document.createElement("li"); // declares and creates li element
  li.innerText = headline + " " + prdName + " " + prdPrice; // chooses what data to put into li element 
  var ul = document.querySelector(".admin-prd-list"); // declares and choose pre-existing element from html  
  ul.appendChild(li); // appends JS-created li element to ul element in html

}

// locally storage js, loopa igenom 


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
