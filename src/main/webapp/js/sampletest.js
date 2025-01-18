
let currentIndex = 0;

document.querySelector('.left-btn').addEventListener('click', () => moveSlide(-1));
document.querySelector('.right-btn').addEventListener('click', () => moveSlide(1));

function moveSlide(direction) {
    const images = document.querySelector('.carousel-images');
    const totalImages = images.children.length;

    // Calculate new index
    currentIndex += direction;

    // Wrap around if out of bounds
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Update transform to show the new image
    const offset = -currentIndex * 100; // 100% width per image
    images.style.transform = `translateX(${offset}%)`;
}

//update active menu choices
// Select all menu links
const menuLinks = document.querySelectorAll('.menu a');

// Add a click event listener to each link
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove the 'active' class from all links
        menuLinks.forEach(link => link.classList.remove('active-menu'));

        // Add the 'active' class to the clicked link
        this.classList.add('active-menu');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const itemContainer = document.querySelector('.item-container');
    const menuLinks = document.querySelectorAll('.menu a');

    // Fetch products data from the server
    async function fetchProducts() {
        try {
            const response = await fetch('/CAT-Project-WebApp/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products data');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    }

    // Render items based on the selected category
    function renderItems(category, products) {
        itemContainer.innerHTML = ''; // Clear previous items
        const filteredItems = products.filter(product => product.category.toLowerCase() === category.toLowerCase());

        if (filteredItems.length === 0) {
            itemContainer.innerHTML = `<p>No items found for this category.</p>`;
            return;
        }

        filteredItems.forEach(product => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="name-container">
                    <a href="Page-ProductDetails.html?id=${product.id}" class="details-button"><h4>${product.name}</h4></a>
                </div>
                <div class="price-container">
                    <h4>${product.price}</h4>
                </div>
            `;
            itemContainer.appendChild(itemElement);
        });
    }

    // Add event listeners to menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', async function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'active-menu' class from all links
            menuLinks.forEach(link => link.classList.remove('active-menu'));

            // Add 'active-menu' class to the clicked link
            this.classList.add('active-menu');

            // Fetch and render items for the selected category
            const category = this.dataset.category;
            const products = await fetchProducts();
            renderItems(category, products);
        });
    });

    // Initialize with the default category (e.g., T-shirt)
    (async () => {
        const products = await fetchProducts();
        renderItems('T-shirt', products);
    })();
});


// Fetch header
fetch("Header-HomeBar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));

// Fetch footer
fetch("Footer-BottomBar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));


//Promotion Item Fetch
const items = [
    {img: "./Sources/na men 1.jpeg", name: "Jia Chen Tee (Red)", price: "RM 49.00"},
    {img: "./Sources/na men 2.jpeg", name: "Sphere Logo Tee", price: "RM 69.00"},
    {img: "./Sources/na men 3.jpeg", name: "NHR Quote Tee", price: "RM 69.00"},
    {img: "./Sources/na men 4.jpeg", name: "GLLS Tee (Black)", price: "RM 79.00"}
];

// Select the container element
const container = document.getElementById("itemContainer");

// Generate HTML using a loop
items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
			<img src="${item.img}" alt="${item.name}">
			<div class="name-container">
					<h4>${item.name}</h4>
			</div>
			<div class="price-container">
					<h4>${item.price}</h4>
			</div>
	`;
    itemContainer.appendChild(itemElement);
});