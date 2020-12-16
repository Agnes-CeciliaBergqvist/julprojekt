// ADMIN PAGE - CREATE, EDIT AND DELETE PRODUCTS 

// global variable storing the list of names
// this can be used for local storage and to be used for published new prds
// var adminNewPrdsList = [];
let products = [
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '61 Russian Roulette',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/essie01.webp"
  
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '61 Russian Roulette',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/essie02.webp"
  
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '017 Black Is Back',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/essie03.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '42 Lady Like',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/essie04.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '43 Angora Cardi',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/essie05.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '02 Green Shadow',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/essie06.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: 'In The Time Zone',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/express01.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: 'Binge-Worthy',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/express02.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: 'Scoot Scoot',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/express03.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: 'Get A Mauve On',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/express04.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: 'Now Or Never',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/express05.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: 'Dont Hate, Curate',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/express06.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '06 Seen In Aber',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi01.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '013 Loch-smith',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi02.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '05 Gone Plaid',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi03.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '03 Edinburgh-er',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi04.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '019 That Glas-glow',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi05.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '09 Nice set of Pipes',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi06.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '015 Im a Natural',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi07.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '017 Love or Lust-er?',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi08.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '04 Glisten Carefully!',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi09.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '08 Baroque Pearls',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi10.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '013 Olive for Pearls',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi11.webp"
    // },
    // {
    //   name: 'Essie Nail Lacquer',
    //   tag: '01 Full of Abalone',
    //   price: 149,
    //   inCart: 0,
    //   url: "images/opi12.webp"
    // },
  ]

// keep track of which item is selected
var selected_name_wrapper = null;
var selected_name_index = null;

function addProduct() {
console.log("hej");
    
    // values from input fields 
    var adminHeadline = document.querySelector("#admin-headline-input").value;
    var adminDescription = document.querySelector("#admin-decsrip-input").value;
    var adminPrice = document.querySelector("#admin-price-input").value;

    var adminPrdImage = document.createElement("img"); // declares and creates img element
    adminPrdImage.src = "images/opi04.webp"; // sets image source

    // values pushed into list var adminNewPrdsList (mutable)
    // if (adminHeadline + adminDescription + adminPrice) {
    //     adminNewPrdsList.push(adminHeadline + " " + adminDescription + " " + adminPrice);
    //     updateHTML();
    // }

    // fixa till objekt istället likt i local storage här enligt R? 
    let product = {}

    const divData = document.querySelector(".test").innerText;

    localStorage.setItem("DivData" , divData)

    product.name = adminHeadline; 
    product.tag = adminDescription; 
    product.price = adminPrice; 
 // product.inCart: // behövs på adminsidan?
    product.url = adminPrdImage; 

    // lagra i local storage 
   products.push(product)

    const localData = localStorage.getItem("productList"); 

    const existingData = JSON.parse(localData);
    console.log(existingData)


  var cleanedData 
if (existingData) {
   cleanedData = existingData.concat(products)
  

}else {
  cleanedData = products

}

    //const cleanedData = existingData ?  existingData.concat(products) : products;
    console.log(cleanedData)

    localStorage.setItem("productList", JSON.stringify(cleanedData));
    

    
}
console.log(products)






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

}


//document.getElementById("admin-delete-btn").addEventListener("click", deleteItems)
document.getElementById("admin-add-name").addEventListener("click", addProduct)
//document.getElementById("admin-edit").addEventListener("click", editName)
// document.getElementById("admin-update").addEventListener("click", updateName)











