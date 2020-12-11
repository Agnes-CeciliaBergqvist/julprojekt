let carts = document.querySelectorAll('.index-btn-flex');

let products = [
  {
    name: "essie nail polish",
    tag: "nailpolish",
    price: 129,

  }
]

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', ()=> {
    cartNumbers();
    })
}
function onLoadCartNumbers (){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers){
        document.querySelector('#cart-wrapper span').textContent = productNumbers + 1;
    }
}
function cartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);
  
 if(productNumbers){
  localStorage.setItem('cartNumbers', productNumbers + 1);
  document.querySelector('#cart-wrapper span').textContent = productNumbers + 1;
 } else {
  localStorage.setItem('cartNumbers', 1);
  document.querySelector('#cart-wrapper span').textContent = 1;
 }
}

onLoadCartNumbers();