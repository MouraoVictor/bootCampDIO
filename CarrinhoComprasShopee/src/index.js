import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("\nWelcome to your Shopee Cart!");

// create the items
const item1 = await createItem("HotWheels Ferrari F40", 59.90, 7)
const item2 = await createItem("HotWheels Lamborghini Aventador", 29.95, 1)
const item3 = await createItem("HotWheels Toyota Supra", 25.50, 3)
const item4 = await createItem("HotWheels Nissan GT-R", 29.99, 1)

// add items to cart
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

// add item to WishList
await cartService.addItem(myWishList, item4);

await cartService.displayCart(myCart);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);

console.log("\nCart updated after removing:");
await cartService.displayCart(myCart);

await cartService.deleteItem(myCart, item1.name)
await cartService.deleteItem(myCart, item2.name)

console.log("\nCart Updated after deleting:");
await cartService.displayCart(myCart);

console.log("\n☁️  Wishlist:");
await cartService.displayCart(myWishList);

await cartService.calculateTotalCart(myCart)