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

    adminConvertedData.map((mappedAdmin, index) => {
        
        //creates a new productcard for each item in array 
        adminHTML.innerHTML += `   
          <article class="index-article-card" id=${index}>
          <img class="index-card-img" src="images/essie01.webp" alt="essie nail polish">
          <h3 class="index-h3">${mappedAdmin.name}</h3>
          <p>${mappedAdmin.tag}</p>
          <p>${mappedAdmin.price}</p>
          <button class="index-btn-flex" id=${index} onclick="" type="button">Delete</button>
        </article>
        `; // Button for edit <button class="index-btn-flex" onclick="editElement(${mappedAdmin.id}) type="button">Edit</button>

    })
}

// Delete function for product cards on admin.html (only deletes i DOM)

const removeBtn = document.querySelectorAll(".index-btn-flex");
removeBtn.textContent = 'Delete';

const div = document.querySelectorAll(".admin-new-product");
const article = document.querySelectorAll(".index-article-card");

article.forEach(el => el.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON') {
        let button = event.target;
        let rtcl = button.parentNode;
        let div = rtcl.parentNode;

        if(button.textContent === 'Delete') {
            div.removeChild(rtcl);
        }

    }
}));