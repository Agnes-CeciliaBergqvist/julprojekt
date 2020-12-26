// ADMIN PAGE - CREATE, EDIT AND DELETE PRODUCTS 

//const { event } = require("jquery");

// global variable storing the list of names
// this can be used for local storage and to be used for published new prds
let products = []
document.getElementById("admin-add-name").addEventListener("click", addProduct)


// Function to add products to product page (index.html)
function addProduct() {

    // values from input fields 
    var id = 0;
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

    const localData = localStorage.getItem("productList");
    const existingData = JSON.parse(localData);

    var cleanedData
    if (existingData) {
        // store new products added by admin in local storage
        id = parseInt(localStorage.getItem("id"))
        product.id = id + 1
        products.push(product)
        cleanedData = existingData.concat(products)
        localStorage.removeItem("id")
        localStorage.setItem("id", JSON.stringify(product.id));

    } else {
        product.id = id
        products.push(product)
        localStorage.setItem("id", JSON.stringify(product.id));
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
          <article class="index-article-card" id=${mappedAdmin.id}>
          <img class="index-card-img" src="images/essie01.webp" alt="essie nail polish">
          <h3 class="index-h3">${mappedAdmin.name}</h3>
          <p>${mappedAdmin.tag}</p>
          <p>${mappedAdmin.price}</p>
          <button class="index-btn-flex" id=${index} onclick="" type="button">Delete</button>
        </article>
        `; // Button for edit <button class="index-btn-flex" onclick="editElement(${mappedAdmin.id}) type="button">Edit</button>

    })
}
// Delete button - does not delete in array

const removeBtn = document.querySelectorAll(".index-btn-flex");
removeBtn.textContent = 'Delete';

const div = document.querySelectorAll(".admin-new-product");
const article = document.querySelectorAll(".index-article-card");

article.forEach(el => el.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON') {
        let button = event.target;
        let rtcl = button.parentNode;
        let div = rtcl.parentNode;
        let rtclId = rtcl.id;

        if(button.textContent === 'Delete') {
            div.removeChild(rtcl);
            let prdList = JSON.parse(localStorage.getItem('productList'));
            

            var index;
            for (var i = 0; i < prdList.length; i++) {
                if (parseInt(prdList[i].id) === parseInt(rtclId)) {
                    index = i;
                    break;
                }
            }
            console.log(index)
            if(index === undefined) return 

            prdList.splice(index,1); // delete item at index
            localStorage.setItem("productList", JSON.stringify(prdList));
        }

    }

}));











