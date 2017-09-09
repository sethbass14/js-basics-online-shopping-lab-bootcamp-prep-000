var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push({[itemName] : (Math.floor(Math.random() * 100) + 1)})
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  string = "In your cart, you have "
  for (var i = 1; i < cart.length, i++) {
    if (i === cart.length - 1) {
      string = string + ` and `
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
