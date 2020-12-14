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


// SHOPPING CART

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
