// use cases:
// -> add item to cart
async function addItem(userCart, item) {
    userCart.push(item)
}

// -> calculate total
async function calculateTotalCart(userCart) {
    console.log("\nShopee cart total:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁 Total R$${result.toFixed(2)}`);
}

// -> delete item from cart
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((i) => i.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> remove one item - only one item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if (indexFound == -1) {
        console.log("Item not found.");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    } else if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
        return;
    }
}

async function displayCart(userCart) {
    console.log("\nShopee Cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price.toFixed(2)} | ${item.quantity}x | Subtotal = R$${item.subtotal().toFixed(2)}`);
    });
}

export {
    addItem,
    calculateTotalCart,
    deleteItem,
    removeItem,
    displayCart,
}