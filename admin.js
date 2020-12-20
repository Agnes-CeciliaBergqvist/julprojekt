// ADMIN PAGE - CREATE, EDIT AND DELETE PRODUCTS 

// global variable storing the list of names
// this can be used for local storage and to be used for published new prds

let products = []
document.getElementById("admin-add-name").addEventListener("click", addProduct)


// Function to add products to product page (index.html)
function addProduct() {

    // values from input fields 
    var adminHeadline = document.querySelector("#admin-headline-input").value;
    var adminDescription = document.querySelector("#admin-decsrip-input").value;
    var adminPrice = document.querySelector("#admin-price-input").value;
    var adminPrdImage = document.createElement("img"); // declares and creates img element
    adminPrdImage.src = "images/opi04.webp"; // sets image source

    let product = {}

    product.name = adminHeadline;
    product.tag = adminDescription;
    product.price = adminPrice;
    product.inCart = "";
    product.url = adminPrdImage;

    // store new products added by admin in local storage
    products.push(product)

    const localData = localStorage.getItem("productList");
    const existingData = JSON.parse(localData);
   
    var cleanedData
    if (existingData) {
        cleanedData = existingData.concat(products)

    } else {
        cleanedData = products
    }

    localStorage.setItem("productList", JSON.stringify(cleanedData));

    //laddar om sidan så den inte fastnar på samma ställe
    location.reload()

}





// keep track of which item is selected
var selected_name_wrapper = null;
var selected_name_index = null;

// updates the html-file
function updateHTML() {
    var list = document.getElementById("admin-list");
    list.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        var wrapper = document.createElement("div")
        wrapper.setAttribute("id", products[i]) // id + dynamic prd array
        wrapper.addEventListener("click", updateSelectedName)
        console.log(wrapper)

        var div_name = document.createElement("div");
        div_name.appendChild(document.createTextNode(products[i]))

        wrapper.appendChild(div_name)
        list.appendChild(wrapper)
    }

}

// When clicking on desired product in list
function updateSelectedName() {
    selected_name_wrapper = this; // global var
    var selected_name = this.getAttribute("id") // fetches id + dynamic prd array
    selected_name_index = products.indexOf(selected_name) // global var


    var p = document.createElement("p")
    p.innerText = selected_name;
    var chosenName = document.querySelector("#admin-chosen-name");
    chosenName.appendChild(p);

    console.log("selecting: " + selected_name)
}


// When clicking on edit after above step,
// fills the input box with the name that you want to edit
function editName() {
    if (selected_name_wrapper) {
        var name = selected_name_wrapper.getAttribute("id")
        document.getElementById("admin-prd-to-edit").value = name;
        console.log("start editing name")
    }
}

function updateName() {
    var new_name = document.getElementById("admin-prd-to-edit").value
    if (selected_name_wrapper) {
        products[selected_name_index] = new_name;

        selected_name_wrapper = null;
        selected_name_index = null;

        updateHTML();

        console.log("Ready to publish " + new_name)
        var pUpdateText = document.createElement("p")
        pUpdateText.innerText = "Ready to publish " + new_name;
        var pUpdateTextDiv = document.querySelector("#admin-update-text");
        pUpdateTextDiv.appendChild(pUpdateText)

    }
}


// function to remove items from var products.push()
function deleteItems() {

    var removeList = document.querySelector(".test");   // chooses element to delete
    removeList.removeChild(removeList.lastChild);     //removes last item in array 

}


// document.getElementById("admin-delete-btn").addEventListener("click", deleteItems)
//document.getElementById("admin-edit").addEventListener("click", editName)
// document.getElementById("admin-update").addEventListener("click", updateName)











