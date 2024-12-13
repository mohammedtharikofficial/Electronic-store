const products = [
    {
        id: 1,
        name: "HP Victus Gaming Laptop",
        price: 49999,
        image: "./images/HP VICTUS.jpg", // Use relative path
        description: "A high-performance gaming laptop with the latest graphics."
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        price: 105000,
        image: "./images/Samsung-Galaxy-S24-Ultra.jpg", // Use relative path
        description: "The ultimate smartphone experience."
    },
    {
        id: 3,
        name: "Samsung Galaxy Fold6",
        price: 150000,
        image: "./images/samsung fold6.jpeg", // Use relative path
        description: "A foldable phone for futuristic experiences."
    },
    {
        id: 4,
        name: "Boult audio z40 pro",
        price: 1000,
        image: "./images/OIP.jpeg", // Use relative path
        description: "A foldable phone for futuristic experiences."
    },
    {
        id: 5,
        name: "Boat neckband 235",
        price: 1000,
        image: "./images/Boat.jpeg", // Use relative path
        description: "Stylish and comfortable wireless headphones."
    },
    {
        id: 6,
        name: "Printer",
        price: 7999,
        image: "./images/printer.jpeg", // Use relative path
        description: "High-quality inkjet printer for home and office use."
    }
];

    // Add more products as needed

// Load Products into the Home Page
window.onload = function () {
    displayProducts();
};

function displayProducts() {
    const productContainer = document.querySelector(".product-container");
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>₹${product.price}</p>
            <a href="#">Add to Cart</a>
        `;
        productContainer.appendChild(productElement);
    });
}