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
  for (var i = 0; i < cart.length; i++) {
    key = Object.keys(cart[i])
    if (cart.length === 1) {
      console.log(string = string + `${key} at ${cart[i][key]}`)
    }
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
