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




 // ADMIN PAGE - CREATE, EDIT AND SOON DELETE PRODUCTS 

// global variable storing the list of names
// this can be used for local storage and to be used for published new prds
var names = [];

// keep track of which item is selected
var selected_name_wrapper = null;
var selected_name_index = null;

function addName() {
    // values from input fields 
    var name = document.getElementById("name-input").value;
    var name2 = document.getElementById("decsrip-input").value;
    var price = document.getElementById("price-input").value;

    // values pushed into list var names (mutable)
    if(name + name2 + price) {
        names.push(name + " " + name2 + " " + price);
        updateHTML();
    }

    console.log(names)
}

// updates the html-file
function updateHTML() {
    var list = document.getElementById("list");
    list.innerHTML = "";
  
    for(let i=0; i<names.length; i++) {
        var wrapper = document.createElement("div")
        wrapper.setAttribute("id", names[i]) // id + dynamic prd array
        wrapper.addEventListener("click", updateSelectedName)
        console.log(wrapper)

        var div_name = document.createElement("div");
        div_name.appendChild(document.createTextNode(names[i]))

        wrapper.appendChild(div_name)
        list.appendChild(wrapper)
    }

}

// When clicking on desired product in list
function updateSelectedName() {
    selected_name_wrapper = this; // global var
    var selected_name = this.getAttribute("id") // fetches id + dynamic prd array
    selected_name_index = names.indexOf(selected_name) // global var


    var p = document.createElement("p")
    p.innerText = selected_name;
    var chosenName = document.querySelector("#admin-chosen-name");
    chosenName.appendChild(p);

    console.log("selecting: " + selected_name)
} 


// When clicking on edit after above step,
// fills the input box with the name that you want to edit
function editName() {
    if(selected_name_wrapper) {
        var name = selected_name_wrapper.getAttribute("id")
        document.getElementById("prd-to-edit").value = name;
        console.log("start editing name")
    }
}

function updateName() {
    var new_name = document.getElementById("prd-to-edit").value
    if(selected_name_wrapper){
        names[selected_name_index] = new_name;
      
        selected_name_wrapper = null;
        selected_name_index = null;
      
        updateHTML();

        // appends list _if_ it's updated, otherwise it's only below "List of Names" 
        var p = document.createElement("p")
        p.innerText = new_name;
        var updatedName = document.querySelector("#admin-updated-list");
        updatedName.appendChild(p);

        
        // console log updated list above publish btn
        console.log("Ready to publish " + new_name)
    }
}


// AP : function to remove certain items from var names.push()
function deleteItems() {

    names.removeChild(selected_name_wrapper);

}


document.getElementById("admin-delete-btn").addEventListener("click", deleteItems)
document.getElementById("add-name").addEventListener("click", addName)
document.getElementById("edit").addEventListener("click", editName)
document.getElementById("update").addEventListener("click", updateName)





// use local storage and global array var names to push to index.html
// function with local storage?

// call function with publish button in html
//document.getElementById("admin-publish").addEventListener("click", xxx)



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
