let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cartList');
    const totalPriceElement = document.getElementById('totalPrice');
    
    // Clear the current cart
    cartList.innerHTML = '';
    
    // Add each item in the cart to the list
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
