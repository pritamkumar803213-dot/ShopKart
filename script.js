// =======================
// CART DATA
// =======================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =======================
// CART COUNT
// =======================

let count = document.getElementById("count");

if (count) {
    count.innerText = cart.length;
}

// =======================
// ADD TO CART
// =======================

function addCart(name, price) {

    let product = {
        name: name,
        price: Number(price)
    };

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    if (count) {
        count.innerText = cart.length;
    }

    alert(name + " Added To Cart");
}

// =======================
// USER NAME SHOW
// =======================

let username = localStorage.getItem("username");

if (username) {

    let welcome =
    document.getElementById("welcome");

    if (welcome) {

        welcome.innerHTML =
        "👋 Hello, " + username;

    }

}

// =======================
// LOGOUT
// =======================

function logout() {

    let ok = confirm("Are you sure you want to logout?");

    if (ok) {

        localStorage.removeItem("username");
        localStorage.removeItem("password");

        window.location.href =
        "login.html";

    }

}

// =======================
// SEARCH BAR
// =======================

let search =
document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        let value =
        this.value.toLowerCase();

        let cards =
        document.querySelectorAll(".card");

        cards.forEach(card => {

            let text =
            card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// =======================
// ADMIN PRODUCTS SHOW
// =======================

let productsContainer =
document.getElementById("products");

let adminProducts =
JSON.parse(
localStorage.getItem("products")
) || [];

if (productsContainer) {

    adminProducts.forEach(product => {

        productsContainer.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="price">
            ₹${product.price}
            </p>

            <button onclick="addCart('${product.name}', ${product.price})">
                Add To Cart
            </button>

        </div>

        `;

    });

}