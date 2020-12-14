// ADMIN PAGE - CREATE, EDIT AND DELETE PRODUCTS 

// global variable storing the list of names
// this can be used for local storage and to be used for published new prds
var adminNewPrdsList = [];

// keep track of which item is selected
var selected_name_wrapper = null;
var selected_name_index = null;

function addProduct() {
    // values from input fields 


    var adminHeadline = document.querySelector("#admin-headline-input").value;
    var adminDescription = document.querySelector("#admin-decsrip-input").value;
    var adminPrice = document.querySelector("#admin-price-input").value;

    // values pushed into list var adminNewPrdsList (mutable)
    if (adminHeadline + adminDescription + adminPrice) {
        adminNewPrdsList.push(adminHeadline + " " + adminDescription + " " + adminPrice);
        updateHTML();
    }
    // fixa till objekt istället likt i local storage
    // lagra i local storage 

    console.log(adminNewPrdsList)
}



// updates the html-file
function updateHTML() {
    var list = document.getElementById("admin-list");
    list.innerHTML = "";

    for (let i = 0; i < adminNewPrdsList.length; i++) {
        var wrapper = document.createElement("div")
        wrapper.setAttribute("id", adminNewPrdsList[i]) // id + dynamic prd array
        wrapper.addEventListener("click", updateSelectedName)
        console.log(wrapper)

        var div_name = document.createElement("div");
        div_name.appendChild(document.createTextNode(adminNewPrdsList[i]))

        wrapper.appendChild(div_name)
        list.appendChild(wrapper)
    }

}

// When clicking on desired product in list
function updateSelectedName() {
    selected_name_wrapper = this; // global var
    var selected_name = this.getAttribute("id") // fetches id + dynamic prd array
    selected_name_index = adminNewPrdsList.indexOf(selected_name) // global var


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
        adminNewPrdsList[selected_name_index] = new_name;

        selected_name_wrapper = null;
        selected_name_index = null;

        updateHTML();

        // appends list _if_ it's updated, otherwise it's only below "List of adminNewPrdsList" 
        // var p = document.createElement("p")
        // p.innerText = new_name;
        // var updatedName = document.querySelector("#admin-updated-list");
        // updatedName.appendChild(p);


        // console log updated list above publish btn
        console.log("Ready to publish " + new_name)
        var pUpdateText = document.createElement("p")
        pUpdateText.innerText = "Ready to publish " + new_name;
        var pUpdateTextDiv = document.querySelector("#admin-update-text");
        pUpdateTextDiv.appendChild(pUpdateText)

    }
}


// function to remove items from var adminNewPrdsList.push()
function deleteItems() {

    var removeList = document.querySelector("#admin-list");   // chooses element to delete
    removeList.removeChild(removeList.lastChild);     //removes last item in array 

    // remove selected item in list; not functioning
    //adminNewPrdsList.removeChild(selected_name_wrapper);

}


document.getElementById("admin-delete-btn").addEventListener("click", deleteItems)
document.getElementById("admin-add-name").addEventListener("click", addProduct)
document.getElementById("admin-edit").addEventListener("click", editName)
document.getElementById("admin-update").addEventListener("click", updateName)






function addToLocalStorage() {
    let product = {}
    const name = document.querySelector("#input1").value;
    const price = document.querySelector("#input2").value;

    // const divData = document.querySelector(".test").innerText;

    // localStorage.setItem("DivData" , divData)

    // input1 och input2 ska lagras i ett objekt
    //Validera om användare har matat in empty value
    product.name = name;
    product.price = price;
    //console.log(product) // {name :" ", price:" "}
    //objektet ska pushas i item array 

    item.push(product);
    // console.log("item array ", item)
    //item array ska lagras i localstorage 

    // vi behöver skriva lite logik som gör att setItem kan också
    //lagra nya value /append nya value
    //när det finns data in i localstorage ska vi lägga till data  


    // vi skulle spara data i localStorage 



    // om det redan finns produkter i localstorage skulle vi lägga till item 
    // i localstorage.


    //localstorage har befietligt value
    const localData = localStorage.getItem("productList");
    //konverterade vi till js objekt 
    const existingData = JSON.parse(localData);

    // hur vi kan adda två array 
    // const cleanedData = existingData +item   eller   item

    const cleanedData = existingData ? existingData.concat(item) : item;

    //cleanedData ska sparas i localstorage
    localStorage.setItem("productList", JSON.stringify(cleanedData));

    console.log(localData)
    console.log(addToLocalStorage)
}



