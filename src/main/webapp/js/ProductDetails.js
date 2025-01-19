// Fetch product data from JSON
    fetch('/CAT-Project-WebApp/products')
    .then(response => response.json())
    .then(products => {
    // Get the product ID from URL (e.g., ?id=P001)
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id') || 'P001'; // Default to 'P008' if no id is provided
    const product = products.find(item => item.id === productId);

    if (!product) {
    document.querySelector('.Product-container').innerHTML = '<p>Product not found.</p>';
    return;
}

    // Populate product details
    document.getElementById('product-image').innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}">
        `;
    document.getElementById('thumbnail-images').innerHTML = product.images
    .slice(1)
    .map(image => `<img src="${image}" alt="Thumbnail for ${product.name}">`)
    .join('');

    document.getElementById('product-details').innerHTML = `
            <h1 class="product-title">${product.name}</h1>
            <h2 class="product-subtitle">${product.category}</h2>
            <div class="product-price">RM ${parseFloat(product.price.replace('RM', '').trim()).toFixed(2)}</div>

            <div class="quantity-selector">
                <label class="size-label">Quantity</label>
                <div class="quantity-control">
                    <button class="quantity-btn">-</button>
                    <input type="text" class="quantity-input" value="1" readonly>
                    <button class="quantity-btn">+</button>
                </div>
            </div>

            <button class="add-to-cart">Add to Cart</button>
        `;

    document.getElementById('product-description').innerHTML = `
            <h1 class="description-title">Product Description</h1>
            <h2 class="description-textbox" style="white-space: pre-wrap; word-wrap: break-word; max-width: 100%; box-sizing: border-box;">
                ${product.description || 'No description available.'}
            </h2>
        `;
})
    .catch(error => {
    console.error('Error fetching product data:', error);
    document.querySelector('.Product-container').innerHTML = '<p>Failed to load product details.</p>';
});


    // Handle quantity buttons
    document.addEventListener('click', event => {
    if (event.target.classList.contains('quantity-btn')) {
    const input = event.target.parentElement.querySelector('.quantity-input');
    let value = parseInt(input.value);
    if (event.target.textContent === '+') {
    input.value = value + 1;
} else if (value > 1) {
    input.value = value - 1;
}
}
});