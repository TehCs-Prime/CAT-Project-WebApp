const cartItems = [
  {
    name: "Little Cupid Long Dress",
    size: "Free Size",
    image: "./Sources/Product%20thumnail%20pic.png",
    price: 79.00,
    quantity: 1
  },
  {
    name: "[X'mas Gift Set 2] T-shirt + Cap + Socks",
    size: "Creamy Red (XL), Black, Red Stripe",
    image: "./Sources/Profile-thumbnail%20pic2.png",
    price: 85.00,
    quantity: 1
  }
];

// Function to populate cart items dynamically
function populateCart() {
  const cartTableBody = document.getElementById('cart-items');
  cartTableBody.innerHTML = ''; // Clear existing content

  cartItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td class="product">
                <div>
                    <h3>${item.name}</h3>
                </div>
            </td>
            <td class="quantity">
                <button class="decrement">-</button>
                <input type="number" value="${item.quantity}" min="1">
                <button class="increment">+</button>
            </td>
            <td class="price">RM ${item.price.toFixed(2)}</td>
        `;
    cartTableBody.appendChild(row);
  });

  // Add event listeners after the elements are created
  attachQuantityControls();
}

// Separate function to attach event listeners
function attachQuantityControls() {
  // Decrement button listeners
  document.querySelectorAll('.decrement').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const input = e.target.nextElementSibling;
      const currentValue = parseInt(input.value);

      if (currentValue > 1) {
        input.value = currentValue - 1;
        updateTotals();
      } else if (currentValue === 1) {
        const row = e.target.closest('tr');

        if (confirm('Are you sure you want to remove this item from your cart?')) {
          row.style.transition = 'opacity 0.3s';
          row.style.opacity = '0';

          setTimeout(() => {
            row.remove();
            updateTotals();

            // Check if cart is empty
            const remainingItems = document.querySelectorAll('tbody tr');
            if (remainingItems.length === 0) {
              const cartTable = document.querySelector('.cart-table');
              cartTable.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 20px;">Your cart is empty</td></tr>';
            }
          }, 300);
        }
      }
    });
  });

  // Increment button listeners
  document.querySelectorAll('.increment').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const input = e.target.previousElementSibling;
      input.value = parseInt(input.value) + 1;
      updateTotals();
    });
  });

  // Input field listeners
  document.querySelectorAll('.quantity input').forEach((input) => {
    input.addEventListener('input', (e) => {
      let value = parseInt(e.target.value) || 1;
      if (value < 1) value = 1;
      e.target.value = value;
      updateTotals();
    });

    input.addEventListener('keypress', (e) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    });
  });
}

// Call function to populate cart when the page loads
window.onload = populateCart;

// Function to update order totals
function updateTotals() {
  const rows = document.querySelectorAll('tbody tr');
  let orderValue = 0;

  rows.forEach((row) => {
    const price = parseFloat(row.querySelector('.price').textContent.replace('RM', '').trim());
    const quantity = parseInt(row.querySelector('input').value);
    orderValue += price * quantity;
  });

  document.querySelector('.order-summary-value span').textContent = `RM ${orderValue.toFixed(2)}`;
  const discount = 4; // You can adjust this if you have a dynamic discount calculation
  document.querySelector('.discount').textContent = `- RM ${discount.toFixed(2)}`;
  document.querySelector('.subtotal').textContent = `RM ${(orderValue - discount).toFixed(2)}`;
}
