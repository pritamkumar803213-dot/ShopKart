import { db, collection, getDocs } from "./firebase.js";

async function loadProducts(){

const productsContainer =
document.getElementById("products");

const querySnapshot =
await getDocs(collection(db, "products"));

productsContainer.innerHTML = "";

querySnapshot.forEach((doc)=>{

let product = doc.data();

productsContainer.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p class="price">
₹${product.price}
</p>

<button>
Add To Cart
</button>

</div>

`;

});

}

loadProducts();