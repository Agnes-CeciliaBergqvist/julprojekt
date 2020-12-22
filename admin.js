// ADMIN PAGE - CREATE, EDIT AND DELETE PRODUCTS 

//const { event } = require("jquery");

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

    //reload the page so the array doesn't multiply 
    location.reload()




}

// declares where to put product card on admin.hmtl
const adminHTML = document.querySelector(".admin-new-product")

//calling the function below that creates product cards on admin.html 
view()


//function that creates the card on admin page 
function view() {

    const adminLocalData = localStorage.getItem("productList");
    const adminConvertedData = JSON.parse(adminLocalData);

    adminConvertedData.map(mappedAdmin => {
        //creates a new productcard for each item in array 

        adminHTML.innerHTML += `   
          <article class="index-article-card" id=${mappedAdmin.id}>
          <img class="index-card-img" src="images/essie01.webp" alt="essie nail polish">
          <h3 class="index-h3">${mappedAdmin.name}</h3>
          <p>${mappedAdmin.tag}</p>
          <p>${mappedAdmin.price}</p>
          <button class="index-btn-flex" id=${mappedAdmin.id} onclick="removeElement(this)" type="button">Delete</button>
        </article>
        `; // Button for edit <button class="index-btn-flex" onclick="editElement(${mappedAdmin.id}) type="button">Edit</button>

    })
}
//AGNES KOD BÖRJAR HÄR FÖR ATT TA BORT KORT PÅ ADMIN. Denna kod som finns nu tar bort alla article card med rad 95 'remove'
//rad 96 med 'removeChild' tar den bort första kortet i listan 

// const removeBtn = document.querySelector(".index-btn-flex");
//   removeBtn.textContent = 'Delete';

// const div = document.querySelector(".admin-new-product");
// const article = document.querySelector(".index-article-card");


// div.addEventListener('click', (event) => {
//     if(event.target.tagName === 'BUTTON') {
//         const button = event.target;
//         //const div = div.parentNode;
//         if(button.textContent === 'Delete') {
//             div.remove(article);
//         }

//     }
// });
//AGNES KOD SLUTAR HÄR 

//RAKIBS KOD

function removeElement(mappedAdmin) {  // döpa om element till något tydligare
    const newItems = JSON.parse(localStorage.getItem("productList"))
    console.log(newItems)
    console.log(mappedAdmin.id)
    // for (let i = 0; i < newItems.length; i++) {
    //     if (mappedAdmin.id == newItems[i].id) {
    //         newItems.splice(i, 1);
    //         console.log(newItems)

    //         localStorage.setItem("productList", JSON.stringify(newItems));
    //         console.log(newItems)
    //     }
    //    // location.reload();

    // }
    
}









// const newItems = itemFromLocalStorage.filter ( mappedAdmin => mappedAdmin.id != element.id ); 
// localStorage.setItem("productList", JSON.parse(newItems));

// //RAKIBS KOD
// itemFromLocalStorage.filter ( item => item.id != element.id )






//VÅR KOD
// const itemFromLocalStorage = products.filter( item =>  {
//     if(item.id !== element.id ) {
//         return item.id;
//     }

// });










//GAMMAL KOD BÖRJAR NEDAN 


// keep track of which item is selected
// var selected_name_wrapper = null;
// var selected_name_index = null;

// updates the html-file
// function updateHTML() {
//     var list = document.getElementById("admin-list");
//     list.innerHTML = "";

//     for (let i = 0; i < products.length; i++) {
//         var wrapper = document.createElement("div")
//         wrapper.setAttribute("id", products[i]) // id + dynamic prd array
//         wrapper.addEventListener("click", updateSelectedName)
//         console.log(wrapper)

//         var div_name = document.createElement("div");
//         div_name.appendChild(document.createTextNode(products[i]))

//         wrapper.appendChild(div_name)
//         list.appendChild(wrapper)
//     }

// }

// When clicking on desired product in list
// function updateSelectedName() {
//     selected_name_wrapper = this; // global var
//     var selected_name = this.getAttribute("id") // fetches id + dynamic prd array
//     selected_name_index = products.indexOf(selected_name) // global var


//     var p = document.createElement("p")
//     p.innerText = selected_name;
//     var chosenName = document.querySelector("#admin-chosen-name");
//     chosenName.appendChild(p);

//     console.log("selecting: " + selected_name)
// }


// When clicking on edit after above step,
// fills the input box with the name that you want to edit
// function editName() {
//     if (selected_name_wrapper) {
//         var name = selected_name_wrapper.getAttribute("id")
//         document.getElementById("admin-prd-to-edit").value = name;
//         console.log("start editing name")
//     }
// }

// function updateName() {
//     var new_name = document.getElementById("admin-prd-to-edit").value
//     if (selected_name_wrapper) {
//         products[selected_name_index] = new_name;

//         selected_name_wrapper = null;
//         selected_name_index = null;

//         updateHTML();

//         console.log("Ready to publish " + new_name)
//         var pUpdateText = document.createElement("p")
//         pUpdateText.innerText = "Ready to publish " + new_name;
//         var pUpdateTextDiv = document.querySelector("#admin-update-text");
//         pUpdateTextDiv.appendChild(pUpdateText)

//     }
// }


// function to remove items from var products.push()
// function deleteItems() {

//     var removeList = document.querySelector(".test");   // chooses element to delete
//     removeList.removeChild(removeList.lastChild);     //removes last item in array 

// }


// document.getElementById("admin-delete-btn").addEventListener("click", deleteItems)
// document.getElementById("admin-edit").addEventListener("click", editName)
// document.getElementById("admin-update").addEventListener("click", updateName)











