
//data from local storage in admin.js is read below 
const localData = localStorage.getItem("productList")

const convertedData = JSON.parse(localData);

convertedData.map(e => {

  const div = document.querySelector(".test");

  //creates a new productcard for each item in array 
  const newProductCardS = document.createElement("div");
  newProductCardS.innerText = e.name;
  newProductCardS.innerHTML =`
  <article class="index-article-card">
    <img class="index-card-img" src="images/essie01.webp" alt="essie nail polish">
    <h3 class="index-h3">${e.name}</h3>
    <p>${e.tag}</p>
    <p>${e.price}</p>
    <button class="index-btn-flex">Add To Cart</button>
  </article>
`;

  div.appendChild(newProductCardS);

})



