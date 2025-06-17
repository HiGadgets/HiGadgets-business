// Sample product data
const products = [
    { id: 1, name: "Smartphone X Pro", price: 499.99 }
];

// Display products
if (window.location.pathname.includes("products.html")) {
    document.getElementById("products").innerHTML = `
        <div class="product">
            <h3>${products[0].name}</h3>
            <p>$${products[0].price}</p>
        </div>
    `;
}
