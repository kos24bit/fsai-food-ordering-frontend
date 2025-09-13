// script.js

const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');



let cart = [];
let totalPrice = 0;

const menuItems = [
    { name: 'mousaka',         price: 10.00 },
    { name: 'salad',           price: 5.00 },
    { name: 'souvlaki',        price: 5.00 },
    { name: 'Spinach',         price: 5.00 },
    { name: 'Kalamari',        price: 20.00 },
    { name: 'Saganaki-cheese', price: 5.00 },
    { name: 'Potatoes-chips',  price: 5.00 }
 
];

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-order').forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(menuItems[index]);
    }); 
});

function addToCart(item) {
    cart.push(item);
    totalPrice += item.price;
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = ''; // Clear previous items
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - €${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(cartItem);
    });
    totalPriceElement.textContent = `Total Price: € ${totalPrice.toFixed(2)}`;
}

// Clear the cart when the "Checkout" button is clicked
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert(`The bill is €${totalPrice.toFixed(2)}. Thanks. Please visit us   again!`);
    cart = [];    totalPrice = 0;
    updateCart();
});
